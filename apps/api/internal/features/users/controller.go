package users

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/auth/claims"
	"gitlab.com/sincap/sincap-common/logging"
	"gitlab.com/sincap/sincap-common/middlewares"
	"gitlab.com/sincap/sincap-common/middlewares/qapi"
	"go.uber.org/zap"
)

type controller struct {
	service Service
}

func UserController(r fiber.Router, s Service) {
	res := controller{s}
	r.Get("/", middlewares.QApi, res.list)
	r.Get("/me", res.me)
	r.Put("/update/:uid", middlewares.BodyParserMap("body", "Password"), middlewares.ValidatorMap("body", User{}), res.update)
}

func UserPublicController(r fiber.Router, s Service) {
	res := controller{s}
	r.Get("/count", res.usersCount)
}

func (res *controller) list(ctx *fiber.Ctx) error {
	qapi := ctx.Locals("qapi").(*qapi.Query)

	users, cnt, err := res.service.List(ctx.UserContext(), qapi)
	if err != nil {
		logging.Logger.Sugar().Info("returning", zap.Error(err))
		return err
	}

	ctx.Set("X-Total-Count", strconv.FormatInt(int64(cnt), 10))
	return ctx.Format(users)
}

// ID        uint `gorm:"primarykey"`
// CreatedAt time.Time
// UpdatedAt time.Time
// DeletedAt DeletedAt `gorm:"index"`

func (res *controller) me(ctx *fiber.Ctx) error {
	claims := ctx.Locals("claims").(*claims.DecryptedClaims)

	userID := claims.UserID

	user, err := res.service.Read(ctx.UserContext(), uint(userID))

	if err != nil {
		return err
	}

	return ctx.Format(user)
}

func (res *controller) update(ctx *fiber.Ctx) error {
	uid, err := ctx.ParamsInt("uid")

	if err != nil {

		return err
	}

	body := ctx.Locals("body").(*map[string]interface{})

	if err := res.service.Update(ctx.UserContext(), "User", uint(uid), *body); err != nil {
		return err
	}

	return ctx.SendStatus(fiber.StatusNoContent)
}

func (res *controller) usersCount(ctx *fiber.Ctx) error {

	count, err := res.service.CountUsers()

	if err != nil {
		return err
	}

	return ctx.Format(&count)
}

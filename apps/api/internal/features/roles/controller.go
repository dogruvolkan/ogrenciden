package roles

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/middlewares"
	"gitlab.com/sincap/sincap-common/middlewares/qapi"
)

type controller struct {
	service Service
}

func RoleController(r fiber.Router, s Service) {
	res := controller{s}
	r.Get("/", middlewares.QApi, res.list)
}

// list godoc
// @Summary List roles
// @Description get roles
// @Tags roles
// @Success 200 {array} Role
// @Router /api/roles [get]
func (res *controller) list(ctx *fiber.Ctx) error {
	q := ctx.Locals("qapi").(*qapi.Query)

	roles, count, err := res.service.List(ctx.UserContext(), q)

	if err != nil {
		return err
	}

	ctx.Set("X-Total-Count", strconv.FormatInt(int64(count), 10))
	return ctx.Format(roles)
}

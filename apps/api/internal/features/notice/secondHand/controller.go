package secondhand

import (
	"net/http"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/auth/claims"
	"gitlab.com/sincap/sincap-common/middlewares"
	"gitlab.com/sincap/sincap-common/middlewares/qapi"
)


type controller struct {
	service Service
}

func SecondHandStudentController(r fiber.Router, s Service) {
	res := controller{s}
	r.Post("/", middlewares.BodyParser[SecondHand]("body"), middlewares.Validator("body"), res.create)
	r.Get("/mine", middlewares.QApi, res.mySecondHandNotices)
}

func SecondHandPublicController(r fiber.Router, s Service) {
	res := controller{s}
	r.Get("/count" , res.secondhandCount)
	r.Get("/", middlewares.QApi, res.list)
	r.Get("/:id", res.read)
}


func (res *controller) read(ctx *fiber.Ctx) error {
	reqId, err := ctx.ParamsInt("id")

	if err != nil {
		return fiber.NewError(http.StatusNotFound, "second hand id not found")
	}

	secondHands, err := res.service.ReadWithPreloads(uint(reqId))

	if err != nil {
		return err
	}

	return ctx.Format(secondHands)
}

func (res *controller) list(ctx *fiber.Ctx) error {
	q := ctx.Locals("qapi").(*qapi.Query)

	secondHands, count, err := res.service.List(ctx.Context(), q,  "Category", "City","University","Student")

	if err != nil {
		return err
	}

	ctx.Set("X-Total-Count", strconv.FormatInt(int64(count), 10))
	return ctx.Format(secondHands)

}

func (res *controller) create(ctx *fiber.Ctx) error {
	body := ctx.Locals("body").(*SecondHand)

	claims := ctx.Locals("claims").(*claims.DecryptedClaims)
	studentID, ok := claims.Extra["StudentID"].(float64)

	if !ok {
		return fiber.NewError(http.StatusNotFound, "Student id not found")
	}

	body.StudentID = uint(studentID)

	if err := res.service.CreateSecondHand(ctx.UserContext(), body); err != nil {
		return err
	}

	return ctx.JSON(fiber.Map{"status": 200, "message": "İstek başarıyla oluşturuldu."})
}

func (res *controller) mySecondHandNotices(ctx *fiber.Ctx) error {
	claims := ctx.Locals("claims").(*claims.DecryptedClaims)
	studentID, ok := claims.Extra["StudentID"].(float64)

	if !ok {
		return fiber.NewError(http.StatusNotFound, "Student id not found")
	}

	secondHands, err := res.service.MySecondHandNotices(uint(studentID))

	if err!=nil{
		return err
	}

	return ctx.Format(secondHands)

}

func (res *controller) secondhandCount(ctx *fiber.Ctx) error {
	
	count, err := res.service.CountSecondHands()

	if err != nil {
		return err
	}

	return ctx.Format(&count)
}
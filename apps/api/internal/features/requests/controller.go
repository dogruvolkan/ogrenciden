package requests

import (
	"net/http"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/middlewares"
	"gitlab.com/sincap/sincap-common/middlewares/qapi"
)

type controller struct {
	service Service
}

func RequestStudentController(r fiber.Router, s Service) {
	res := controller{s}
	r.Get("/", middlewares.QApi, res.list)
	r.Get("/:id", res.read)
}

func (res *controller) read(ctx *fiber.Ctx) error {
	reqId, err := ctx.ParamsInt("id")

	if err != nil {
		return fiber.NewError(http.StatusNotFound, "Request id not found")
	}

	request, err := res.service.Read(ctx.Context(), uint(reqId))

	if err != nil {
		return err
	}

	return ctx.Format(request)
}

func (res *controller) list(ctx *fiber.Ctx) error {
	q := ctx.Locals("qapi").(*qapi.Query)

	requests, count, err := res.service.List(ctx.Context(), q)

	if err != nil {
		return err
	}

	ctx.Set("X-Total-Count", strconv.FormatInt(int64(count), 10))
	return ctx.Format(requests)

}

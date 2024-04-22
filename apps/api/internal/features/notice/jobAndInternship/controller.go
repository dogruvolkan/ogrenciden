package jobAndInternship

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

func JobAndInternshipController(r fiber.Router, s Service) {
	res := controller{s}
	r.Post("/", middlewares.BodyParser[JobAndInternship]("body"), middlewares.Validator("body"), res.create)
}

func JobAndInternshipPublicController(r fiber.Router, s Service) {
	res := controller{s}
	r.Get("/", middlewares.QApi, res.list)
	r.Get("/:id", res.read)
}

func (res *controller) read(ctx *fiber.Ctx) error {
	reqId, err := ctx.ParamsInt("id")

	if err != nil {
		return fiber.NewError(http.StatusNotFound, "jobs and internship id not found")
	}

	jobsAndInternship, err := res.service.ReadWithPreloads(uint(reqId))

	if err != nil {
		return err
	}

	return ctx.Format(jobsAndInternship)
}

func (res *controller) list(ctx *fiber.Ctx) error {
	q := ctx.Locals("qapi").(*qapi.Query)

	jobsAndInternship, count, err := res.service.List(ctx.Context(), q, "Sector", "City", "Company")

	if err != nil {
		return err
	}

	ctx.Set("X-Total-Count", strconv.FormatInt(int64(count), 10))
	return ctx.Format(jobsAndInternship)

}

func (res *controller) create(ctx *fiber.Ctx) error {
	body := ctx.Locals("body").(*JobAndInternship)

	claims := ctx.Locals("claims").(*claims.DecryptedClaims)
	companyID, ok := claims.Extra["CompanyID"].(float64)

	if !ok {
		return fiber.NewError(http.StatusNotFound, "company id not found")
	}

	body.CompanyID = uint(companyID)

	if err := res.service.CreateJobsAndInternship(ctx.UserContext(), body); err != nil {
		return err
	}

	return ctx.JSON(fiber.Map{"status": 200, "message": "İstek başarıyla oluşturuldu."})
}

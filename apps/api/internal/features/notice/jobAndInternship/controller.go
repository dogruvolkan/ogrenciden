package jobAndInternship

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/auth/claims"
	"gitlab.com/sincap/sincap-common/middlewares"
)

type controller struct {
	service Service
}

func JobAndInternshipController(r fiber.Router, s Service) {
	res := controller{s}
	r.Post("/", middlewares.BodyParser[JobAndInternship]("body"), middlewares.Validator("body"), res.create)
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

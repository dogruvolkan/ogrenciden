package secondhand

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/auth/claims"
	"gitlab.com/sincap/sincap-common/middlewares"
)


type controller struct {
	service Service
}

func SecondHandStudentController(r fiber.Router, s Service) {
	res := controller{s}
	r.Post("/", middlewares.BodyParser[SecondHand]("body"), middlewares.Validator("body"), res.create)
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
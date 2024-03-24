package booksandnotes

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

func BooksAndNotesStudentController(r fiber.Router, s Service) {
	res := controller{s}
	r.Post("/", middlewares.BodyParser[BooksAndNotes]("body"), middlewares.Validator("body"), res.create)
	r.Get("/mine", middlewares.QApi, res.myBooksAndNotesNotices)
}

func BooksAndNotesPublicController(r fiber.Router, s Service) {
	res := controller{s}
	r.Get("/", middlewares.QApi, res.list)
	r.Get("/:id", res.read)
}


func (res *controller) read(ctx *fiber.Ctx) error {
	reqId, err := ctx.ParamsInt("id")

	if err != nil {
		return fiber.NewError(http.StatusNotFound, "Request id not found")
	}

	booksAndNotes, err := res.service.ReadWithPreloads(uint(reqId))

	if err != nil {
		return err
	}

	return ctx.Format(booksAndNotes)
}

func (res *controller) list(ctx *fiber.Ctx) error {
	q := ctx.Locals("qapi").(*qapi.Query)

	booksAndNotes, count, err := res.service.List(ctx.Context(), q,  "City","University","Student")

	if err != nil {
		return err
	}

	ctx.Set("X-Total-Count", strconv.FormatInt(int64(count), 10))
	return ctx.Format(booksAndNotes)

}

func (res *controller) create(ctx *fiber.Ctx) error {
	body := ctx.Locals("body").(*BooksAndNotes)

	claims := ctx.Locals("claims").(*claims.DecryptedClaims)
	studentID, ok := claims.Extra["StudentID"].(float64)

	if !ok {
		return fiber.NewError(http.StatusNotFound, "Student id not found")
	}

	body.StudentID = uint(studentID)

	if err := res.service.CreateBooksAndNotes(ctx.UserContext(), body); err != nil {
		return err
	}

	return ctx.JSON(fiber.Map{"status": 200, "message": "İstek başarıyla oluşturuldu."})
}

func (res *controller) myBooksAndNotesNotices(ctx *fiber.Ctx) error {
	claims := ctx.Locals("claims").(*claims.DecryptedClaims)
	studentID, ok := claims.Extra["StudentID"].(float64)

	if !ok {
		return fiber.NewError(http.StatusNotFound, "Student id not found")
	}

	booksAndNotes, err := res.service.MyBooksAndNotesNotices(uint(studentID))

	if err!=nil{
		return err
	}

	return ctx.Format(booksAndNotes)

}
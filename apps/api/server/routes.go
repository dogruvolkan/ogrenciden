package server

import (
	"ogrenciden/apps/api/internal/features/categories"
	"ogrenciden/apps/api/internal/features/requests"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/db"
)

func AddRoutes(app *fiber.App) {
	api := app.Group("/api", DefaultHeaders)

	public := api.Group("")
	//authenticatedRoutes(api)
	publicRoutes(public)

}

func publicRoutes(r fiber.Router) {
	public := r.Group("/public")
	categories.CategoryPublicControler(public.Group("/categories"), categories.CategoryService(categories.CategoryRepository(db.DB())))
	requests.RequestStudentController(public.Group("/requests"), requests.RequestService(requests.RequestRepository(db.DB())))
}

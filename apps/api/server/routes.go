package server

import (
	"ogrenciden/apps/api/internal/features/sectors"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/db"
)

func AddRoutes(app *fiber.App) {
	api := app.Group("/api/v1", DefaultHeaders)

	public := api.Group("")
	//authenticatedRoutes(api)
	publicRoutes(public)

}

func publicRoutes(r fiber.Router) {
	public := r.Group("/public")
	sectors.SectorPublicControler(public.Group("/sectors"), sectors.SectorService(sectors.SectorRepository(db.DB())))
}

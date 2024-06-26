package server

import (
	"ogrenciden/apps/api/configs"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"gitlab.com/sincap/sincap-common/logging"
	"go.uber.org/zap"
)

func Run() {

	serverConfig := configs.Instance.Server
	serverConfig.ErrorHandler = ErrorHandler

	app := fiber.New(serverConfig.Config)
	app.Static("/static", "./static")
	app.Use(logger.New())
	app.Use(etag.New())

	AddDefaultMiddlewares(app, serverConfig)
	AddRoutes(app)

	logging.Logger.Info("Server starting...", zap.String("host", serverConfig.GetHost()))
	app.Listen(serverConfig.GetHost())
}

package server

import (
	"ogrenciden/apps/api/configs"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"gitlab.com/sincap/sincap-common/logging"
	"go.uber.org/zap"
	//"gorm.io/gorm/logger"
)

func Run() {

	serverConfig := configs.Instance.Server
	// serverConfig.ErrorHandler = ErrorHandler

	app := fiber.New(serverConfig.Config)
	// app.Use(logger.New())
	app.Use(etag.New())

	// AddDefaultMiddlewares(app, serverConfig)
	// AddRoutes(app)

	logging.Logger.Info("Server starting...", zap.String("host", serverConfig.GetHost()))
	app.Listen(serverConfig.GetHost())
}

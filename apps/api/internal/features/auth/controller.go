package auth

import (
	"ogrenciden/apps/api/configs"
	"ogrenciden/apps/api/jwt"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/auth"
	"gitlab.com/sincap/sincap-common/middlewares"
	"gitlab.com/sincap/sincap-common/net"
)

// var ticketCtxKey = contexts.NewContextKey()

// Resource is the routing info of the user controller
type controller struct {
	service Service
}

func AuthController(r fiber.Router, s Service) {
	res := controller{s}
	r.Post("/", middlewares.BodyParser[Login]("auth"), res.login)
	r.Get("/logout", res.logout)
	r.Post("/register", middlewares.BodyParser[Register]("auth"), middlewares.Validator("auth"), res.Register)
}

// login godoc
// @Summary Authenticate
// @Param  user body Login true "User info"
// @Success 200 {array}  Login
// @Router /api/v1/public/panel/auth [post]
// @Tags auth
func (rs *controller) login(ctx *fiber.Ctx) error {
	req := ctx.Locals("auth").(*Login)

	userAgent := ctx.Get("User-Agent")
	ip := net.ReadUserIP(ctx)

	u, claims, err := rs.service.Login(ctx.UserContext(), req, userAgent, ip)
	if err != nil {
		return err
	}

	jwtErr := jwt.JwtSetCookie(ctx, claims)
	if jwtErr != nil {
		return ctx.SendStatus(fiber.StatusInternalServerError)
	}
	return ctx.JSON(u)
}

func (rs *controller) Register(ctx *fiber.Ctx) error {
	req := ctx.Locals("auth").(*Register)

	userAgent := ctx.Get("User-Agent")
	ip := net.ReadUserIP(ctx)

	_, err := rs.service.Register(ctx.UserContext(), req, userAgent, ip)
	if err != nil {
		return err
	}

	return ctx.SendStatus(fiber.StatusNoContent)
}

func (rs *controller) logout(ctx *fiber.Ctx) error {
	auth.InvalidateCookies(ctx, configs.Instance.Auth)

	return ctx.SendStatus(fiber.StatusNoContent)
}

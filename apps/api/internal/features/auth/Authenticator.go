package auth

import (
	"net/http"
	"ogrenciden/apps/api/configs"
	"ogrenciden/apps/api/internal/features/roles"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"gitlab.com/sincap/sincap-common/auth"
	"gitlab.com/sincap/sincap-common/auth/claims"
	"gitlab.com/sincap/sincap-common/logging"
	"go.uber.org/zap"
)

func Authenticator(rep Repository, allowedRoles ...uint) func(ctx *fiber.Ctx) error {
	return func(ctx *fiber.Ctx) error {

		// bypass auth for method types HEAD, OPTIONS and TRACE
		if ctx.Method() == "HEAD" || ctx.Method() == "OPTIONS" || ctx.Method() == "TRACE" {
			return ctx.Next()
		}
		dclaims, err := claims.FromToken(ctx.Locals("jwt").(*jwt.Token), configs.Instance.Auth.Secret)
		if err != nil {
			auth.InvalidateCookies(ctx, configs.Instance.Auth)
			return ctx.Status(401).SendString("invalid jwt token")
		}
		allowed := false

		if err := auth.CheckTokenOwnership(ctx, configs.Instance.Auth, dclaims); err != nil {
			logging.Logger.Warn("Token ownership error", zap.String("error", err.Error()), zap.String("headers", ctx.Request().Header.String()))
			auth.InvalidateCookies(ctx, configs.Instance.Auth)
			return ctx.Status(401).SendString("faulty token ownership")
		}
		if dclaims.RoleID != roles.AdminID { //roles.AdminID
			for _, v := range allowedRoles {
				if v == dclaims.RoleID {
					allowed = true
					break
				}
			}
			if !allowed {
				return ctx.Status(http.StatusForbidden).SendString("user is not allowed")
			}
		}
		ctx.Locals("claims", dclaims)

		// if close to expiration give new token
		err = auth.RenewTokenIfNeeded(dclaims, ctx, configs.Instance.Auth)
		if err != nil {
			return err
		}
		return ctx.Next()
	}
}

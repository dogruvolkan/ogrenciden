package auth

import (
	"context"
	"ogrenciden/apps/api/configs"
	"time"

	"ogrenciden/apps/api/internal/features/users"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/auth/claims"
	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	Login(ctx context.Context, req *Login, userAgent, ip string) (*users.User, *claims.EncryptedClaims, error)
}
type service struct {
	repository Repository
	usersRepo  users.Repository
}

func AuthService(r Repository,
	userRepo users.Repository) Service {
	return &service{r, userRepo}
}
func (ser *service) Login(ctx context.Context, req *Login, userAgent, ip string) (*users.User, *claims.EncryptedClaims, error) {
	password := req.Password
	u, err := ser.usersRepo.FindByUsername(req.UserName)
	if err != nil {
		return nil, nil, services.NewError(401, "Yanlış email veya şifre")
	}

	tx, err := ser.usersRepo.BeginTx(ctx)
	if err != nil {
		return nil, nil, fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	if u.Password != password {
		return nil, nil, services.NewError(401, "Yanlış email veya şifre")

	}

	// create claims extras
	// check if user has coach role
	// check if user has sporter role
	claimsExtras, err := fillExtras(u, ser, tx)
	if err != nil {
		return u, nil, err
	}

	dclaims := claims.DecryptedClaims{
		UserID:    u.ID,
		Username:  u.Username,
		RoleID:    uint(u.RoleID),
		ExpiresAt: configs.Instance.Auth.Timeout + time.Now().UTC().Unix(),
		UserAgent: userAgent,
		UserIP:    ip,
		Extra:     claimsExtras,
	}
	eclaims, err := dclaims.Encrypt(configs.Instance.Auth.Secret)
	if err != nil {
		tx.RollbackTx()
		return nil, nil, services.NewError(500, err)
	}
	tx.CommitTx()
	return u, eclaims, nil
}

func fillExtras(u *users.User, ser *service, tx users.Repository) (map[string]interface{}, error) {
	claimsExtras := map[string]interface{}{
		"FullName": u.FirstName + " " + u.LastName,
	}
	//TODO:add necessary extras

	// if u.RoleID == users.Role(roles.STUDENT) {
	// 	student, err := ser.studentRepo.FindByUserID(u.ID)
	// 	if err != nil || student == nil {
	// 		tx.RollbackTx()
	// 		return nil, services.NewError(500, "Student not found")
	// 	}
	// 	claimsExtras["StudentID"] = student.ID

	// } else if u.RoleID == users.Role(roles.COMPANY) {
	// 	company, err := ser.companyRepo.FindByUserID(u.ID)
	// 	if err != nil || company == nil {
	// 		tx.RollbackTx()
	// 		return nil, services.NewError(500, "Company not found")
	// 	}
	// 	claimsExtras["CompanyID"] = company.ID

	// }
	return claimsExtras, nil
}

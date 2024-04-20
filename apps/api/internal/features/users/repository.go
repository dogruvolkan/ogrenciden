package users

import (
	"context"

	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[User]
	FindByUsername(username string) (*User, error)
	FindUserById(id uint) (*User, error)
	BeginTx(ctx context.Context) (Repository, error)
	RollbackTx() error
	CommitTx() error
	CountUsers() (int64, error)
}
type repository struct {
	repositories.GormRepository[User]
}

func UserRepository(db *gorm.DB) Repository {

	return &repository{repositories.NewGormRepository[User](db)}

}

func (rep *repository) FindByUsername(username string) (*User, error) {
	user := User{}
	if res := rep.DB.Model(User{}).Where("LOWER(Username)=?", username).First(&user); res.Error != nil {
		return nil, res.Error
	}
	return &user, nil
}
func (rep *repository) AutoTx(cb func() error) error {
	if err := cb(); err != nil {
		rep.DB.Rollback()
		return err
	}
	return rep.DB.Commit().Error
}

func (rep *repository) BeginTx(ctx context.Context) (Repository, error) {
	var tx = rep.DB.WithContext(ctx).Begin()
	repTx := UserRepository(tx)
	return repTx, tx.Error
}

func (rep *repository) RollbackTx() error {
	return rep.DB.Rollback().Error
}
func (rep *repository) CommitTx() error {
	return rep.DB.Commit().Error
}

func (rep *repository) FindUserById(id uint) (*User, error) {
	user := User{}
	if res := rep.DB.Model(User{}).Where("ID=?", id).First(&user); res.Error != nil {
		return nil, res.Error
	}
	return &user, nil
}

func (rep *repository) CountUsers() (int64, error) {
	var count int64
	if res := rep.DB.Model(User{}).Count(&count); res.Error != nil {
		return 0, res.Error
	}
	return count, nil
}
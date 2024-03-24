package secondhand

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[SecondHand]
}

type repository struct {
	repositories.GormRepository[SecondHand]
}

func SecondHandRepository(db *gorm.DB) Repository {
	return &repository{
		repositories.NewGormRepository[SecondHand](db)}
}
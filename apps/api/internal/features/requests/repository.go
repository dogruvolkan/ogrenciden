package requests

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[Request]
}

type repository struct {
	repositories.GormRepository[Request]
}

func RequestRepository(db *gorm.DB) Repository {
	return &repository{
		repositories.NewGormRepository[Request](db)}
}

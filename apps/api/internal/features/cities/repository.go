package cities

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[City]
}

type repository struct {
	repositories.GormRepository[City]
}

func CityRepository(db *gorm.DB) Repository {
	return &repository{repositories.NewGormRepository[City](db)}
}

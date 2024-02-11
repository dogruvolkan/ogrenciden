package sectors

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[Sector]
}

type repository struct {
	repositories.GormRepository[Sector]
}

func SectorRepository(db *gorm.DB) Repository {
	return &repository{repositories.NewGormRepository[Sector](db)}
}

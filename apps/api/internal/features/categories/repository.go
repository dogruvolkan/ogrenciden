package categories

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[Category]
}

type repository struct {
	repositories.GormRepository[Category]
}

func CategoryRepository(db *gorm.DB) Repository {
	return &repository{repositories.NewGormRepository[Category](db)}
}

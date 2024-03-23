package universities


import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[University]
}

type repository struct {
	repositories.GormRepository[University]
}

func UniversityRepository(db *gorm.DB) Repository {

	return &repository{repositories.NewGormRepository[University](db)}

}
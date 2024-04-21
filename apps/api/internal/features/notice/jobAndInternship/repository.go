package jobAndInternship

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[JobAndInternship]
}

type repository struct {
	repositories.GormRepository[JobAndInternship]
}

func JobAndInternshipRepository(db *gorm.DB) Repository {
	return &repository{
		repositories.NewGormRepository[JobAndInternship](db)}
}

package requests

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[Request]
	MyRequests(studentID uint) ([]Request, error)
}

type repository struct {
	repositories.GormRepository[Request]
}

func RequestRepository(db *gorm.DB) Repository {
	return &repository{
		repositories.NewGormRepository[Request](db)}
}

func (r repository) MyRequests(studentID uint) ([]Request, error) {

	var requests []Request

	if err := r.DB.Model(&Request{}).Where("StudentID = ?", studentID).Preload("Student").Find(&requests).Error; err != nil {
		return nil, err
	}


	return requests, nil
}

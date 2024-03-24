package secondhand

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[SecondHand]
	MySecondHandNotices(studentID uint) ([]SecondHand, error)
}

type repository struct {
	repositories.GormRepository[SecondHand]
	
}

func SecondHandRepository(db *gorm.DB) Repository {
	return &repository{
		repositories.NewGormRepository[SecondHand](db)}
}

func (r repository) MySecondHandNotices(studentID uint) ([]SecondHand, error) {

	var secondHands []SecondHand

	if err := r.DB.Model(&SecondHand{}).Where("StudentID = ?", studentID).Preload("Student").Find(&secondHands).Error; err != nil {
		return nil, err
	}

	return secondHands, nil
}
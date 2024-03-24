package booksandnotes

import (
	"gitlab.com/sincap/sincap-common/repositories"
	"gorm.io/gorm"
)

type Repository interface {
	repositories.Repository[BooksAndNotes]
	MyBooksAndNotesNotices(studentID uint) ([]BooksAndNotes, error)
}

type repository struct {
	repositories.GormRepository[BooksAndNotes]
	
}

func BooksAndNotesRepository(db *gorm.DB) Repository {
	return &repository{
		repositories.NewGormRepository[BooksAndNotes](db)}
}

func (r repository) MyBooksAndNotesNotices(studentID uint) ([]BooksAndNotes, error) {

	var booksAndNotess []BooksAndNotes

	if err := r.DB.Model(&BooksAndNotes{}).Where("StudentID = ?", studentID).Preload("Student").Find(&booksAndNotess).Error; err != nil {
		return nil, err
	}

	return booksAndNotess, nil
}
package booksandnotes

import (
	"context"
	"ogrenciden/apps/api/internal/features/users"
	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	services.Service[BooksAndNotes]
	CreateBooksAndNotes(ctx context.Context, booksAndNotes *BooksAndNotes) error
	MyBooksAndNotesNotices(studentID uint) ([]BooksAndNotes, error)
	ReadWithPreloads(id uint) (*BooksAndNotes, error)
}

type service struct {
	services.CrudService[BooksAndNotes]
	repository Repository
	userRepository users.Repository
}

func BooksAndNotesService(r Repository, usr users.Repository) Service {
	return &service{
		CrudService: services.CrudService[BooksAndNotes]{Repository: r},
		repository:  r,
		userRepository: usr,
	}
}

func (s service) CreateBooksAndNotes(ctx context.Context, booksAndNotes *BooksAndNotes) error {

	if err := s.Create(ctx, booksAndNotes); err != nil {
		return err
	}

	return nil
}

func (s service) MyBooksAndNotesNotices(studentID uint) ([]BooksAndNotes, error) {

	return s.repository.MyBooksAndNotesNotices(studentID)

}

func (s service) ReadWithPreloads(id uint) (*BooksAndNotes, error) {

	var booksAndNotes BooksAndNotes

	if err := s.repository.Read(&booksAndNotes, id,  "City","University","Student","User"); err != nil {
		return nil, err
	}

	user, err := s.userRepository.FindUserById(booksAndNotes.Student.UserID) 
	
	if err != nil {
		 return nil, err
	}

	booksAndNotes.User = user

	return &booksAndNotes, nil

}
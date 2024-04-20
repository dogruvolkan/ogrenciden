package secondhand

import (
	"context"
	"ogrenciden/apps/api/internal/features/users"
	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	services.Service[SecondHand]
	CreateSecondHand(ctx context.Context, secondHand *SecondHand) error
	MySecondHandNotices(studentID uint) ([]SecondHand, error)
	ReadWithPreloads(id uint) (*SecondHand, error)
	CountSecondHands() (int64, error)
}

type service struct {
	services.CrudService[SecondHand]
	repository Repository
	userRepository users.Repository
}

func SecondHandService(r Repository, usr users.Repository) Service {
	return &service{
		CrudService: services.CrudService[SecondHand]{Repository: r},
		repository:  r,
		userRepository: usr,
	}
}

func (s service) CreateSecondHand(ctx context.Context, secondHand *SecondHand) error {

	if err := s.Create(ctx, secondHand); err != nil {
		return err
	}

	return nil
}

func (s service) MySecondHandNotices(studentID uint) ([]SecondHand, error) {

	return s.repository.MySecondHandNotices(studentID)

}

func (s service) ReadWithPreloads(id uint) (*SecondHand, error) {

	var secondHand SecondHand

	if err := s.repository.Read(&secondHand, id, "Category", "City","University","Student","User"); err != nil {
		return nil, err
	}

	user, err := s.userRepository.FindUserById(secondHand.Student.UserID) 
	
	if err != nil {
		 return nil, err
	}

	secondHand.User = user

	return &secondHand, nil
}

func (ser *service) CountSecondHands() (int64, error) {
	return ser.repository.CountSecondHands()
}
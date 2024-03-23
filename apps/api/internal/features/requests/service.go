package requests

import (
	"context"
	"ogrenciden/apps/api/internal/features/users"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	services.Service[Request]
	CreateRequest(ctx context.Context, request *Request) error
	ReadCategoryWithPreloads(id uint) (*Request, error)
	MyRequests(studentID uint) ([]Request, error)
}

type service struct {
	services.CrudService[Request]
	repository Repository
}

func RequestService(r Repository, userRepo users.Repository) Service {
	return &service{
		CrudService: services.CrudService[Request]{Repository: r},
		repository:  r,
	}
}

func (s service) CreateRequest(ctx context.Context, request *Request) error {

	if request.RequestEndDate.Before(*request.RequestStartDate) {
		return services.NewError(fiber.StatusBadRequest, "Başlangıç tarihi bitiş tarihinden büyük olamaz.")
	}

	if err := s.Create(ctx, request); err != nil {
		return err
	}

	return nil
}

func (s service) ReadCategoryWithPreloads(id uint) (*Request, error) {

	var request Request

	if err := s.repository.Read(&request, id, "Category"); err != nil {
		return nil, err
	}

	return &request, nil

}

func (s service) MyRequests(studentID uint) ([]Request, error) {

	return s.repository.MyRequests(studentID)

}

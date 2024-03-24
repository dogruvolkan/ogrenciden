package secondhand

import (
	"context"
	"ogrenciden/apps/api/internal/features/users"
	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	services.Service[SecondHand]
	CreateSecondHand(ctx context.Context, secondHand *SecondHand) error
}

type service struct {
	services.CrudService[SecondHand]
	repository Repository
}

func SecondHandService(r Repository, userRepo users.Repository) Service {
	return &service{
		CrudService: services.CrudService[SecondHand]{Repository: r},
		repository:  r,
	}
}

func (s service) CreateSecondHand(ctx context.Context, secondHand *SecondHand) error {

	if err := s.Create(ctx, secondHand); err != nil {
		return err
	}

	return nil
}
package jobAndInternship

import (
	"context"
	"ogrenciden/apps/api/internal/features/users"

	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	services.Service[JobAndInternship]
	CreateJobsAndInternship(ctx context.Context, jobAndInternship *JobAndInternship) error
}

type service struct {
	services.CrudService[JobAndInternship]
	repository     Repository
	userRepository users.Repository
}

func JobAndInternshipService(r Repository, usr users.Repository) Service {
	return &service{
		CrudService:    services.CrudService[JobAndInternship]{Repository: r},
		repository:     r,
		userRepository: usr,
	}
}

func (s service) CreateJobsAndInternship(ctx context.Context, jobAndInternship *JobAndInternship) error {

	if err := s.Create(ctx, jobAndInternship); err != nil {
		return err
	}

	return nil
}

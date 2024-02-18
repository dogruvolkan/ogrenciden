package requests

import (
	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	services.Service[Request]
}

type service struct {
	services.CrudService[Request]
	repository Repository
}

func RequestService(r Repository) Service {
	return &service{
		CrudService: services.CrudService[Request]{Repository: r},
		repository:  r,
	}

}

package cities

import "gitlab.com/sincap/sincap-common/services"

type Service interface {
	services.Service[City]
}

type service struct {
	services.CrudService[City]
	repository Repository
}

func CityService(r Repository) Service {
	return &service{
		CrudService: services.CrudService[City]{Repository: r},
		repository:  r,
	}

}

package sectors

import "gitlab.com/sincap/sincap-common/services"

type Service interface {
	services.Service[Sector]
}

type service struct {
	services.CrudService[Sector]
	repository Repository
}

func SectorService(r Repository) Service {
	return &service{
		CrudService: services.CrudService[Sector]{Repository: r},
		repository:  r,
	}

}

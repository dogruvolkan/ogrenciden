package categories

import "gitlab.com/sincap/sincap-common/services"

type Service interface {
	services.Service[Category]
}

type service struct {
	services.CrudService[Category]
	repository Repository
}

func CategoryService(r Repository) Service {
	return &service{
		CrudService: services.CrudService[Category]{Repository: r},
		repository:  r,
	}

}

package universities

import "gitlab.com/sincap/sincap-common/services"

type Service interface {
	services.Service[University]
}

type service struct {
	services.CrudService[University]
	repository Repository
}

func UniversityService(r Repository) Service {
	return &service{
		CrudService: services.CrudService[University]{Repository: r},
		repository:  r,
	}

}

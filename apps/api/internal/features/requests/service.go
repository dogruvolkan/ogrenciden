package requests

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/services"
)

type Service interface {
	services.Service[Request]
	CreateRequest(ctx *fiber.Ctx, request *Request) error
	ReadSectorWithPreloads(id uint) (*Request, error)
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

func (s service) CreateRequest(ctx *fiber.Ctx, request *Request) error {
	fmt.Println(ctx.Body())
	// if request.RequestEndDate.Before(*request.RequestStartDate) {
	// 	return services.NewError(fiber.StatusBadRequest, "Başlangıç tarihi bitiş tarihinden büyük olamaz.")
	// }

	// //img upload

	// file, err := ctx.FormFile("image")
	// if err != nil {
	// 	log.Println("Fotoğraf yükleme hatası.")
	// 	return ctx.JSON(fiber.Map{"status": 500, "message": "Fotoğraf yükleme hatası."})
	// }

	// uniqueId := uuid.New()

	// filename := strings.Replace(uniqueId.String(), "-", "", -1)

	// fileExt := strings.Split(file.Filename, ".")[1]

	// image := fmt.Sprintf("%s.%s", filename, fileExt)

	// err = ctx.SaveFile(file, fmt.Sprintf("./images/%s", image))

	// if err != nil {
	// 	log.Println("Fotoğraf yükleme hatası.")
	// 	return ctx.JSON(fiber.Map{"status": 500, "message": "Fotoğraf yükleme hatası."})
	// }

	// imageUrl := fmt.Sprintf("http://localhost:3000/api/public/images/%s", image)

	// data := map[string]interface{}{
	// 	"imageName": image,
	// 	"imageUrl":  imageUrl,
	// 	"header":    file.Header,
	// 	"size":      file.Size,
	// }

	if err := s.Create(ctx.Context(), request); err != nil {
		return err
	}

	// return ctx.JSON(fiber.Map{"status": 201,
	// 	"message": "Fotoğraf yükleme başarılı.", "data": data})

	return nil
}

func (s service) ReadSectorWithPreloads(id uint) (*Request, error) {

	var request Request

	if err := s.repository.Read(&request, id, "Category"); err != nil {
		return nil, err
	}

	return &request, nil

}

package requests

import (
	"ogrenciden/apps/api/internal/features/categories"
	"ogrenciden/apps/api/internal/features/students"
	"time"

	"gorm.io/gorm"
)

type Request struct {
	gorm.Model
	Title       string `gorm:"size:50" validate:"required"`
	Description string `validate:"required"`
	// ImagePath        string     `json:"imagePath" gorm:"not null"`
	CategoryID       uint `validate:"required"`
	StudentID        uint
	Published        bool                 `gorm:"default:false"`
	RequestStartDate *time.Time           `validate:"required"`
	RequestEndDate   *time.Time           `validate:"required"`
	Status           uint                 `gorm:"default:0"`
	Category         *categories.Category `gorm:"foreignKey:CategoryID"`
	Student          *students.Student    `gorm:"foreignKey:StudentID"`
}


const (
	REQUEST_STATUS_PENDING uint = iota    //Talep BEKLENİYOR
	REQUEST_STATUS_APPROVED   			 //ADMİN TARAFINDAN ONAYLANDI
	REQUEST_STATUS_REJECTED    			//ADMİN TARAFINDAN REDDEDİLDİ
	REQUEST_STATUS_COMPLETED  			//Talep karşılandı
)

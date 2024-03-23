package secondhand

import (
	"ogrenciden/apps/api/internal/features/categories"
	"ogrenciden/apps/api/internal/features/cities"
	"ogrenciden/apps/api/internal/features/students"
	"ogrenciden/apps/api/internal/features/universities"

	"gorm.io/gorm"
)

type SecondHand struct {
	gorm.Model
	NoticeType  string  `gorm:"size:50" validate:"required"`
	Title       string  `gorm:"size:50" validate:"required"`
	CategoryID  uint    `validate:"required"`
	Price       float64 `validate:"required"`
	PriceType   string  `validate:"required"`
	CityID      uint    `validate:"required"`
	Description string  `validate:"required"`
	StudentID   uint
	UniversityID uint
	Published        bool                 `gorm:"default:false"`
	Status           uint                 `gorm:"default:0"`
	// ImagePath: string;
	Category *categories.Category `gorm:"foreignKey:CategoryID"`
	Student  *students.Student    `gorm:"foreignKey:StudentID"`
	City     *cities.City         `gorm:"foreignKey:CityID"`
	University *universities.University  `gorm:"foreignKey:UniversityID"`
}


const (
	SECOND_HAND_STATUS_PENDING uint = iota  //İLAN BEKLENİYOR
	SECOND_HAND_STATUS_APPROVED   			 //ADMİN TARAFINDAN ONAYLANDI
	SECOND_HAND_STATUS_REJECTED    			//ADMİN TARAFINDAN REDDEDİLDİ
	SECOND_HAND_STATUS_COMPLETED   			//SATILIDI
)

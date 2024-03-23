package universities

import (
	"ogrenciden/apps/api/internal/features/cities"
	"gorm.io/gorm"
)

type University struct {
	gorm.Model
	Name   string       `validate:"required"`
	CityID uint         `validate:"required"`
	City   *cities.City `gorm:"foreignKey:CityID"`
}

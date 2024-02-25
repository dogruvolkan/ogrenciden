package requests

import (
	"ogrenciden/apps/api/internal/features/categories"
	"time"

	"gorm.io/gorm"
)

type Request struct {
	gorm.Model
	Title       string `gorm:"size:50" validate:"required"`
	Description string `validate:"required"`
	// ImagePath        string     `json:"imagePath" gorm:"not null"`
	CategoryID       uint                 `validate:"required"`
	Published        bool                 `gorm:"default:false"`
	RequestStartDate *time.Time           `validate:"required"`
	RequestEndDate   *time.Time           `validate:"required"`
	Category         *categories.Category `gorm:"foreignKey:CategoryID"`
}

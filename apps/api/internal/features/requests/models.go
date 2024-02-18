package requests

import (
	"time"

	"gorm.io/gorm"
)

type Request struct {
	gorm.Model
	Title            string     `gorm:"size:50" validate:"required"`
	Description      string     `validate:"required"`
	Published        bool       `gorm:"default:false"`
	RequestStartDate *time.Time `validate:"required"`
	RequestEndDate   *time.Time `validate:"required"`
}

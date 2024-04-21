package jobAndInternship

import (
	"ogrenciden/apps/api/internal/features/companies"
	"ogrenciden/apps/api/internal/features/sectors"
	"ogrenciden/apps/api/internal/features/users"

	"gorm.io/gorm"
)

type JobAndInternship struct {
	gorm.Model
	Title            string `gorm:"size:100" validate:"required"`
	Content          string `gorm:"size:1000" validate:"required"`
	StartTime        string `gorm:"size:100" validate:"required"`
	EndTime          string `gorm:"size:100" validate:"required"`
	Published        bool   `gorm:"default:false"`
	Status           uint   `gorm:"default:0"`
	WorkType         string `gorm:"size:100" validate:"required"`
	WorkLocationType string `gorm:"size:100" validate:"required"`
	Location         string `gorm:"size:100" validate:"required"`
	UserID           uint
	CompanyID        uint
	SectorID         string
	User             *users.User        `gorm:"foreignKey:UserID"`
	Sector           *sectors.Sector    `gorm:"foreignKey:SectorID"`
	Company          *companies.Company `gorm:"foreignKey:CompanyID"`
}

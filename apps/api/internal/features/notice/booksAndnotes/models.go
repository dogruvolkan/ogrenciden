package booksandnotes

import (
	"ogrenciden/apps/api/internal/features/cities"
	"ogrenciden/apps/api/internal/features/students"
	"ogrenciden/apps/api/internal/features/universities"
	"ogrenciden/apps/api/internal/features/users"

	"gorm.io/gorm"
)

type BooksAndNotes struct {
	gorm.Model
	NoticeType   string  `gorm:"size:50" validate:"required"`
	Title        string  `gorm:"size:50" validate:"required"`
	Price        float64 `validate:"required"`
	PriceType    string  `validate:"required"`
	CityID       uint    `validate:"required"`
	Description  string  `validate:"required"`
	StudentID    uint
	UserID       uint
	UniversityID uint
	Published    bool `gorm:"default:false"`
	Status       uint `gorm:"default:0"`
	// ImagePath: string;
	Student    *students.Student        `gorm:"foreignKey:StudentID"`
	City       *cities.City             `gorm:"foreignKey:CityID"`
	University *universities.University `gorm:"foreignKey:UniversityID"`
	User       *users.User              `gorm:"foreignKey:UserID"`
}

const (
	BOOKS_AND_NOTES_STATUS_PENDING   uint = iota //İLAN BEKLENİYOR
	BOOKS_AND_NOTES_STATUS_APPROVED              //ADMİN TARAFINDAN ONAYLANDI
	BOOKS_AND_NOTES_STATUS_REJECTED              //ADMİN TARAFINDAN REDDEDİLDİ
	BOOKS_AND_NOTES_STATUS_COMPLETED             //SATILIDI
)


package students

import (
	"ogrenciden/apps/api/internal/features/users"

	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	UserID uint
	Gender string
	BirthDate string
	University string
	Department string
	Location string
	Description string
	Phone string
	User   *users.User `gorm:"foreignKey:UserID"`
}

package students

import (
	"ogrenciden/apps/api/internal/features/users"

	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	UserID uint
	User   *users.User `gorm:"foreignKey:UserID"`
}

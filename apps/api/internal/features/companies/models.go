package companies

import (
	"ogrenciden/apps/api/internal/features/users"

	"gorm.io/gorm"
)

type Company struct {
	gorm.Model
	UserID uint
	User   *users.User `gorm:"foreignKey:UserID"`
}

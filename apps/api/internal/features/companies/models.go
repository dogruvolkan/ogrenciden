package companies

import (
	"ogrenciden/apps/api/internal/features/users"

	"gorm.io/gorm"
)

type Company struct {
	gorm.Model
	UserID uint
	Name  string 
	Description string
	Email string
	Phone string
	Address string
	Website string
	Industry string
	User   *users.User `gorm:"foreignKey:UserID"`
}

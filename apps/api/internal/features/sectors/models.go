package sectors

import "gorm.io/gorm"


type Sector struct {
	gorm.Model
	Name  string `gorm:"size:200" validate:"required"`
}
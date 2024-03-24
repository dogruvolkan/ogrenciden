package cities

import "gorm.io/gorm"

type City struct {
	gorm.Model
	Code string `validate:"required"`
	Name string `validate:"required"`
}

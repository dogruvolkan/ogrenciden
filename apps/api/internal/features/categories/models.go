package categories

import "gorm.io/gorm"

type Category struct {
	gorm.Model
	Name string `validate:"required"`
	Type uint   `default:"0" validate:"required"`
}

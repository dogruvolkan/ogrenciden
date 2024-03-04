package users

import "gorm.io/gorm"

type User struct {
	gorm.Model
	FirstName   string `gorm:"size:50" validate:"required"`
	LastName    string `gorm:"size:50" validate:"required"`
	Username    string `gorm:"index ; size:100; not null ; unique" validate:"required"`
	Password    string `json:"-" validate:"required"`
	Description string `gorm:"size:255"`
	Address     string `gorm:"size:255"`
	RoleID      Role
}

type Role int


const (
	AdminID = iota + 1
	StudentID
	CompanyID
)

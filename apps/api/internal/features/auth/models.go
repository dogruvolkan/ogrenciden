package auth

import "ogrenciden/apps/api/internal/features/users"

type Login struct {
	UserName string `validate:"required,email,min=5,max=100"`
	Password string `validate:"omitempty,min=5,max=100"`
	Token    string
}

type Register struct {
	UserName  string     `validate:"required,email,min=5,max=100"`
	FirstName string     `validate:"required,min=5,max=100"`
	LastName  string     `validate:"required,min=5,max=100"`
	Password  string     `validate:"required,min=5,max=100"`
	Role      users.Role `validate:"required"`
}

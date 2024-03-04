package auth


type Login struct{
	UserName string `validate:"required, email , min=5 , max=100"`
	Password string `validate:"omitempty, min=5 , max=100"`
	Token string 
}
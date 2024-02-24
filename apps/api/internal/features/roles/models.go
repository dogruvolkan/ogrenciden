package roles

type Role struct {
	ID   uint   `gorm:"primary_key"`
	Name string `gorm:"index:,unique;not null;size:50" validate:"required,min=4,max=50"`
}

const (
	AdminID uint = iota + 1
	StudentID
	CompanyID
)

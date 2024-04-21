package migrate

import (
	"ogrenciden/apps/api/configs"
	"ogrenciden/apps/api/internal/features/categories"
	"ogrenciden/apps/api/internal/features/cities"
	"ogrenciden/apps/api/internal/features/companies"
	booksandnotes "ogrenciden/apps/api/internal/features/notice/booksAndnotes"
	"ogrenciden/apps/api/internal/features/notice/jobAndInternship"
	secondhand "ogrenciden/apps/api/internal/features/notice/secondHand"
	"ogrenciden/apps/api/internal/features/requests"
	"ogrenciden/apps/api/internal/features/roles"
	"ogrenciden/apps/api/internal/features/sectors"
	"ogrenciden/apps/api/internal/features/students"
	"ogrenciden/apps/api/internal/features/universities"
	"ogrenciden/apps/api/internal/features/users"

	"gitlab.com/sincap/sincap-common/db"
	"gitlab.com/sincap/sincap-common/db/util"
)

func AutoMigrate(command string) {
	util.AutoMigrate(command, configs.Instance.DB[0], db.DB(), models...)
}

var models = []interface{}{
	&categories.Category{},
	&requests.Request{},
	&roles.Role{},
	&users.User{},
	&students.Student{},
	&companies.Company{},
	&cities.City{},
	&secondhand.SecondHand{},
	&universities.University{},
	&booksandnotes.BooksAndNotes{},
	&jobAndInternship.JobAndInternship{},
	&sectors.Sector{},
}

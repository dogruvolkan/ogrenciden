package server

import (
	"ogrenciden/apps/api/internal/features/auth"
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
	"ogrenciden/apps/api/jwt"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/sincap/sincap-common/db"
)

func AddRoutes(app *fiber.App) {
	api := app.Group("/api", DefaultHeaders)

	public := api.Group("")
	authenticatedRoutes(api)
	publicRoutes(public)
}

func authenticatedRoutes(r fiber.Router) {
	companiesRoutes(r)
	adminRoutes(r)
	studentsRoutes(r)
	usersRoutes(r)
}

func publicRoutes(r fiber.Router) {
	public := r.Group("/public")
	auth.AuthController(public.Group("/auth"), auth.AuthService(auth.AuthRepository(db.DB()), users.UserRepository(db.DB()), students.StudentRepository(db.DB()), companies.CompanyRepository(db.DB())))
	categories.CategoryPublicControler(public.Group("/categories"), categories.CategoryService(categories.CategoryRepository(db.DB())))
	roles.RoleController(public.Group("/roles"), roles.RoleService(roles.RoleRepository(db.DB())))
	requests.RequestsPublicController(public.Group("/requests"), requests.RequestService(requests.RequestRepository(db.DB()),users.UserRepository(db.DB())))
	secondhand.SecondHandPublicController(public.Group("/secondhand"),secondhand.SecondHandService(secondhand.SecondHandRepository(db.DB()),users.UserRepository(db.DB())))
	booksandnotes.BooksAndNotesPublicController(public.Group("/booksandnotes"),booksandnotes.BooksAndNotesService(booksandnotes.BooksAndNotesRepository(db.DB()),users.UserRepository(db.DB())))
	cities.CityPublicControler(public.Group("/cities"), cities.CityService(cities.CityRepository(db.DB())))
	universities.UniversityPublicControler(public.Group("/universities"),universities.UniversityService(universities.UniversityRepository(db.DB())))
	users.UserPublicController(public.Group("/users"), users.UserService(users.UserRepository(db.DB())))
	sectors.SectorPublicControler(public.Group("/sectors"), sectors.SectorService(sectors.SectorRepository(db.DB())))
}

func adminRoutes(r fiber.Router) {
	//admin := r.Group("/admin")
}

func companiesRoutes(r fiber.Router) {
	company := r.Group("/companies").Use(jwt.JWT()...)
	company.Use(auth.Authenticator(auth.AuthRepository(db.DB()), roles.CompanyID))
	jobAndInternship.JobAndInternshipController(company.Group("/jobandinternship"), jobAndInternship.JobAndInternshipService(jobAndInternship.JobAndInternshipRepository(db.DB()),users.UserRepository(db.DB())))
}

func studentsRoutes(r fiber.Router) {
	student := r.Group("/students").Use(jwt.JWT()...)
	student.Use(auth.Authenticator(auth.AuthRepository(db.DB()), roles.StudentID))
	requests.RequestStudentController(student.Group("/requests"), requests.RequestService(requests.RequestRepository(db.DB()),users.UserRepository(db.DB())))
	secondhand.SecondHandStudentController(student.Group("/secondhand"),secondhand.SecondHandService(secondhand.SecondHandRepository(db.DB()),users.UserRepository(db.DB())))
	booksandnotes.BooksAndNotesStudentController(student.Group("/booksandnotes"),booksandnotes.BooksAndNotesService(booksandnotes.BooksAndNotesRepository(db.DB()),users.UserRepository(db.DB())))
}

func usersRoutes(r fiber.Router) {
	user := r.Group("/users").Use(jwt.JWT()...)
	user.Use(auth.Authenticator(auth.AuthRepository(db.DB()), roles.StudentID, roles.CompanyID, roles.AdminID))
}

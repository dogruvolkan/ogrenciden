package migrate

import (
	"ogrenciden/apps/api/configs"
	"ogrenciden/apps/api/internal/features/categories"
	"ogrenciden/apps/api/internal/features/requests"
	"ogrenciden/apps/api/internal/features/roles"

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
}

package migrate

import (
	"ogrenciden/apps/api/configs"

	"gitlab.com/sincap/sincap-common/db"
	"gitlab.com/sincap/sincap-common/db/util"
)

func AutoMigrate(command string) {
	util.AutoMigrate(command, configs.Instance.DB[0], db.DB(), models...)
}

var models = []interface{}{}

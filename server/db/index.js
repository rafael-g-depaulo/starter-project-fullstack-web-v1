import Sequelize from "sequelize"
import dbConfig from "./config"

import EmailModel from "./models/email"

const connection = new Sequelize(dbConfig)

EmailModel(connection)


export default connection
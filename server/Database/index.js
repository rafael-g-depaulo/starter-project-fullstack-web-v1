import Sequelize from "sequelize"
import dbConfig from "./config"

const connection = new Sequelize(dbConfig)

export default connection

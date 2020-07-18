import Sequelize from "sequelize"
import dbConfig from "./config"

// import DragonModel from "Models/dragon"

const connection = new Sequelize(dbConfig)

// DragonModel.init(connection)
// DragonModel.associate(connection.models)

export default connection

import { ConnectionOptions } from "typeorm"

import User from "./Entities/User"

export const getDbConn = () => {

}

export const connConfig: ConnectionOptions = {
  url: "",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "username",
  password: "password",
  database: "database",

  entities: [User],
  synchronize: true,
}

export const entities = [User]

export const typeOrmConfig = {
  synchronize: true,
}

export const config: ConnectionOptions = {
  ...connConfig,
  ...typeOrmConfig,
  entities,
}

export default config
import { ConnectionOptions } from "typeorm"

import User from "./Entities/User"

export const getDbConn = () => {

}

export const connConfig: ConnectionOptions = {
  url:      process.env.DATABASE_URL ?? "",
  type:     "postgres",
  host:     process.env.DB_HOST ?? "localhost",
  port:     Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER ?? "user",
  password: process.env.DB_PASS ?? "password",
  database: process.env.DB_NAME ?? "database_name",
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
import dotenv from "dotenv"
dotenv.config()

export const getConfig = (uri = process.env.DATABASE_URL ?? "") => {
  
  const dbUriRegex = /^(?<client>postgres):\/\/(?<username>\w+):(?<password>\w+)@(?<host>.+):(?<port>\d+)\/(?<database>\w+)$/
  const { groups = {} } = dbUriRegex.exec(uri) ?? {}

  const {
    client   = process.env.DB_CLIENT ?? "postgres",
    host     = process.env.DB_HOST   ?? "localhost",
    username = process.env.DB_USER   ?? "user",
    password = process.env.DB_PASS   ?? "PASSWORD_HERE",
    port     = process.env.DB_PORT   ?? 5432,
    database = process.env.DB_NAME   ?? "test",
  } = groups

  return {
    dialect: client,
    host,
    username,
    password,
    port,
    database,
    
    define: {
      timestamps: true,
      underscored: true,
    },
  }
}

const config = getConfig()

export const development = config
export const local = config
export const test = config
export const production = config

export default config

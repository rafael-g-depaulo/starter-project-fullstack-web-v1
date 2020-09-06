import { ConnectionOptions } from "typeorm"

const dbFoldersRoot = `src/Db`

export const getDbConnConfig = () => {

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

export const typeOrmConfig = {
  synchronize: true,
  logging: false,

  migrations: [
    `${dbFoldersRoot}/Migrations/**/*.ts`,
  ],
  subscribers: [
    `${dbFoldersRoot}/Subscribers/**/*.ts`,
  ],
  cli: {
    entitiesDir: `${dbFoldersRoot}/Entities`,
    migrationsDir: `${dbFoldersRoot}/Migrations`,
    subscribersDir: `${dbFoldersRoot}/Subscribers`,
  },
  
  entities: [
    `${dbFoldersRoot}/Entities/**/*.{ts,js}`,
  ],
  
  entitiesDir: `${dbFoldersRoot}/Entities`,
  migrationsDir: `${dbFoldersRoot}/Migrations`,
  subscribersDir: `${dbFoldersRoot}/Subscribers`,
}

export const config: ConnectionOptions = {
  ...connConfig,
  ...typeOrmConfig,
}

export default config

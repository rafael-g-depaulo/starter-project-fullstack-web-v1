import { ConnectionOptions } from "typeorm"

const getDbFoldersRoot = () => process.env.IS_SERVING_BUNDLE === "true"
  ? `dist/Db`
  : `src/Db`

export const getDbConnConfig: () => ConnectionOptions = () => {
  return {
    url:      process.env.DATABASE_URL ?? "",
    type:     "postgres",
    host:     process.env.DB_HOST,
    port:     Number(process.env.DB_PORT) || undefined,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }
}

export const dbConnConfig = getDbConnConfig()

export const getTypeOrmConfig = () => {
  const dbFoldersRoot = getDbFoldersRoot()

  return {
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

    migrationsTableName: "migrations",
  }
}

export const typeOrmConfig = getTypeOrmConfig()

export const config: ConnectionOptions = {
  ...dbConnConfig,
  ...typeOrmConfig,
}

export default config

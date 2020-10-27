import { ConnectionOptions } from "typeorm"
import { resetTestEnv } from "Utils/resetTestEnv"
import { getDbConnConfig } from "./config"

describe('TypeORM config', () => {

  // reset env between tests
  resetTestEnv()

  test('db connection with DATABASE_URL env var', () => {
    const db_url = "postgres://username:password@host:5432/database"
    process.env.DATABASE_URL = db_url
    const origins = getDbConnConfig()

    expect(origins.url).toEqual(db_url)
    
    expect(getDbConnConfig()).toMatchObject({
      type: "postgres",
      url: "postgres://username:password@host:5432/database",
    })
  })

  test('db connection with DB_* env vars', () => {
    
    process.env.DB_HOST = "localhost"
    process.env.DB_PORT = "5431"
    process.env.DB_USER = "user"
    process.env.DB_PASS = "PASSWORD_HERE"
    process.env.DB_NAME = "test"

    delete process.env.DATABASE_URL

    expect(getDbConnConfig()).toMatchObject({
      type: "postgres",
      host: "localhost",
      port: 5431,
      username: "user",
      password: "PASSWORD_HERE",
      database: "test",
    })
  })

  test('thows if db env vars not available', () => {
    delete process.env.DB_HOST
    delete process.env.DB_PORT
    delete process.env.DB_USER
    delete process.env.DB_PASS
    delete process.env.DB_NAME
    delete process.env.DATABASE_URL
    
    expect(getDbConnConfig).toThrow("Invalid DB config. Check environment variables")
  })

  test('TypeORM specific config', () => {
    // TODO: Test typeORM specific config
  })
})

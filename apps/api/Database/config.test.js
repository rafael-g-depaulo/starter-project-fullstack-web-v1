import config, { getConfig } from "./config"

describe('Test Sequelize Database config', () => {
  
  const configFormat = {
    dialect: expect.stringMatching(/postgres/),
    host: expect.stringMatching(/.+/),
    username: expect.stringMatching(/.+/),
    password: expect.stringMatching(/.+/),
    database: expect.stringMatching(/.+/),
    port: "5432",
  }
  
  // TEST ENV VARS
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules() // most important - it clears the cache
    process.env = { ...OLD_ENV } // make a copy
  })

  afterAll(() => {
    process.env = OLD_ENV // restore old env
  })

  test('getConfig return should be in the correct format', () => {
    expect(getConfig()).toMatchObject(configFormat)
    expect(getConfig("")).toMatchObject(configFormat)
    expect(getConfig("postgres://username:password@host:5432/database")).toMatchObject(configFormat)
  })

  test('getConfig should work with DATABASE_URL env var', () => {
    process.env.DATABASE_URL = `postgres://joao:senha_joao@host_db:5432/db_do_joao`
    
    expect(getConfig()).toMatchObject({
      dialect: 'postgres',
      host: 'host_db',
      username: 'joao',
      password: 'senha_joao',
      database: 'db_do_joao',
      port: '5432',
    })
  })

  test('getConfig should work with other env vars', () => {
    process.env.DB_CLIENT = "postgres"
    process.env.DB_HOST   = "super_mega_host"
    process.env.DB_USER   = "user_aaa"
    process.env.DB_PASS   = "ADD_PASSWORD_HERE"
    process.env.DB_PORT   = "5432"
    process.env.DB_NAME   = "test_db_name"

    process.env.DATABASE_URL = ""
    
    expect(getConfig()).toMatchObject({
      dialect: 'postgres',
      host: 'super_mega_host',
      username: 'user_aaa',
      password: 'ADD_PASSWORD_HERE',
      database: 'test_db_name',
      port: '5432',
    })
  })

  test('config should be valid', () => {
    expect(config).toMatchObject(configFormat)
  })
})
require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.PGUSER,
    "password": process.env.PGPASSWORD,
    "database": process.env.PGDATABASE,
    "host":     process.env.PGHOST,
    "dialect": "postgres",

    "url": process.env.DEV_DATABASE_URL,
  },
  "test": {
    // "username": process.env.PGUSER,
    // "password": process.env.PGPASSWORD,
    // "database": process.env.PGDATABASE,
    // "host":     process.env.PGHOST,
    // "dialect": "postgres",

    "url": process.env.TEST_DATABASE_URL,
  },
  "production": {
    // "username": process.env.PGUSER,
    // "password": process.env.PGPASSWORD,
    // "database": process.env.PGDATABASE,
    // "host":     process.env.PGHOST,
    // "dialect": "postgres",

    "url": process.env.PRODUCTION_DATABASE_URL,
  }
}

module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "username",
   "password": "password",
   "database": "database",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/Entities/**/*.ts"
   ],
   "migrations": [
      "src/Migrations/**/*.ts"
   ],
   "subscribers": [
      "src/Subscribers/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/Entities",
      "migrationsDir": "src/Migrations",
      "subscribersDir": "src/Subscribers"
   }
}

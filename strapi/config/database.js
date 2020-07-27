module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DB_HOST', '127.0.0.1'),
        port: env.int('DB_PORT', 5432),
        database: env('DB_NAME', 'starter-project-strapi'),
        username: env('DB_USER', 'user'),
        password: env('DB_PASS', 'password'),
        ssl: env.bool('DB_SSL', false),
      },
      options: {}
    },
  },
});

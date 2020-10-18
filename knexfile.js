// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host : 'localhost',
      database: 'postgres',
      user: 'postgres',
      password: 'root'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

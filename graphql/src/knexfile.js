// Update with your config settings.
const { password, user } = require("./config/.env");
module.exports = {
  client: "mysql",
  connection: {
    database: "graphql",
    user,
    password,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

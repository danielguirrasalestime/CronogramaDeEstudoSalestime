/**Cria uma table com nome users
 *  @property {string} name
 *  @property {string} email
 *  @property {string} password
 *
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name", 80).notNullable();
    table.string("email", 80).notNullable();
    table.string("password", 80).notNullable();
  });
};
/**Dropa a table users
 *
 *
 * @returns dropTable('users')
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

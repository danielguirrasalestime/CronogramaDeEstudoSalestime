const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);
module.exports = knex;

knex("users")
  .insert({
    name: "Daniel",
    email: "danie@teste.com",
    password: "12345",
  })
  .then((data) => console.log(data));

knex("users")
  .where({ id: 1 })
  .then((data) => console.log(data));

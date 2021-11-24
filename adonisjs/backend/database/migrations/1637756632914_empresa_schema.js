"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EmpresaSchema extends Schema {
  up() {
    this.create("empresas", (table) => {
      table.increments();
      table.string("name", 60).notNullable();
      table.string("email", 60).notNullable();
      table.string("password", 30).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("empresas");
  }
}

module.exports = EmpresaSchema;

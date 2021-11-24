"use strict";

/*
|--------------------------------------------------------------------------
| EmpresaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class EmpresaSeeder {
  async run() {
    await Factory.model("App/Models/Empresa").createMany(5);
  }
}

module.exports = EmpresaSeeder;

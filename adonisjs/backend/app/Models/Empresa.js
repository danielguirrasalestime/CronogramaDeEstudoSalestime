"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Empresa extends Model {
  static get hidden() {
    return ["password"];
  }
}

module.exports = Empresa;

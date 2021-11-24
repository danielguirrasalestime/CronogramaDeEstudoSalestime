"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Empresa = use("App/Models/Empresa");
const User = use("App/Models/User");

/**
 * Resourceful controller for interacting with empresas
 */
class EmpresaController {
  /**
   * Show a list of all empresas.
   * GET empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ auth }) {
    const empresa = await Empresa.all();
    return empresa;
  }
  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    let empresa = await Empresa.findOrFail(params.id);
    const users = await User.all();
    let funcio = [];
    for (const funEmpresa of users["rows"]) {
      let funcionario = funEmpresa;
      if (funcionario.empresa_id === empresa.id) {
        funcio.push(funcionario);
      }
    }
    empresa = {
      empresa: empresa,
      funcionarios: funcio,
    };
    return empresa;
  }
  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   *  name
   */
  async showName({ params }) {
    console.log(params);
    let empresa = await Empresa.findBy("name", params.id);
    const users = await User.all();
    let funcio = [];
    for (const funEmpresa of users["rows"]) {
      let funcionario = funEmpresa;
      if (funcionario.empresa_id === empresa.id) {
        funcio.push(funcionario);
      }
    }
    empresa = {
      empresa: empresa,
      funcionarios: funcio,
    };
    return empresa;
  }

  /**
   * Create/save a new empresa.
   * POST empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const data = request.only(["name", "email", "password"]);
    const empresa = Empresa.create(data);

    return empresa;
  }
  /**
   * Delete a empresa with id.
   * DELETE empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    const empresa = await Empresa.findOrFail(params.id);
    if (auth) {
      empresa.delete();
    } else {
      return response.status(401);
    }
  }
}

module.exports = EmpresaController;

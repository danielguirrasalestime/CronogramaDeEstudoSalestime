"use strict";

const User = use("App/Models/User");
const Empresa = use("App/Models/Empresa");
class UserController {
  async register({ request }) {
    const data = request.only(["username", "empresa_id", "email", "password"]);
    const user = await User.create(data);
    return user;
  }
  async authenticate({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async userList({ request, auth }) {
    const user = await User.all();
    let resul = [];
    for (const User of user["rows"]) {
      let empresaId = await User.empresa_id;
      let empresa = await Empresa.findOrFail(empresaId);
      let result = {
        user: User,
        empresa: empresa,
      };
      resul.push(result);
    }

    return resul;
  }

  async userId(params) {
    const ID = await params.id;
    const user = await User.findBy("id", ID);
    const empresaId = user.empresa_id;
    const empresa = await Empresa.findBy("id", empresaId);
    let resul = {
      user: user,
      empresa: empresa,
    };
    if (user) {
      return resul;
    } else {
      return `ID ${ID} é inválido`;
    }
  }

  async userUsername(params) {
    const username = await params;
    const user = await User.findBy("username", username);
    const empresaId = user.empresa_id;
    const empresa = await Empresa.findBy("id", empresaId);
    let resul = {
      user: user,
      empresa: empresa,
    };
    if (user) {
      return resul;
    } else {
      return `username ${username} é inválido`;
    }
  }

  async userUpdate(params, request) {
    const ID = parseInt(params);
    const user = await User.findBy("id", ID);
    const data = request;
    if (user) {
      await user.merge(data);
      await user.save();
      return user;
    } else {
      return `ID ${ID} é inválido`;
    }
  }

  async userDelete(params) {
    const ID = parseInt(params);
    const user = await User.findBy("id", ID);
    if (user) {
      await user.delete();
      return `${user.username} foi deletado`;
    } else {
      return `ID ${ID} é inválido`;
    }
  }
}

module.exports = UserController;

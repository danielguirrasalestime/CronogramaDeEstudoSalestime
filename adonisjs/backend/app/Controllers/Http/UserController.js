"use strict";

const User = use("App/Models/User");

class UserController {
  async register({ request }) {
    const data = request.only(["username", "email", "password"]);
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

    return user;
  }

  async userId(params) {
    const ID = await params.id;
    const user = await User.findBy("id", ID);
    if (user) {
      return user;
    } else {
      return `ID ${ID} é inválido`;
    }
  }

  async userUsername(params) {
    const username = await params;
    const user = await User.findBy("username", username);
    if (user) {
      return user;
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

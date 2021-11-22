"use strict";

const User = use("App/Models/User");

class AuthController {
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
  async userUpdate(params, request) {
    console.log(params);
    console.log(request);
    const ID = await params.id;
    const user = await User.findBy("id", ID);
    const data = request.only(["username", "email", "password"]);
    if (user) {
      user.merge(data);
      user.save();
    } else {
      return `ID ${ID} é inválido`;
    }
  }
}

module.exports = AuthController;

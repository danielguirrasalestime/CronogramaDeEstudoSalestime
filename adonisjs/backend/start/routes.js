"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

const UserController = require("../app/Controllers/Http/UserController");
const EmpresaController = require("../app/Controllers/Http/EmpresaController");

Route.post("/register", "UserController.register");
Route.post("/authenticate", "UserController.authenticate");
Route.post("/fake", "UserController.faker");

Route.get("/app", "UserController.index").middleware(["auth"]);
Route.get("/users", "UserController.userList").middleware(["auth"]);
Route.get("user/:id", async ({ params }) => {
  return new UserController().userId(params);
});
Route.get("user/username/:id", async ({ params }) => {
  return new UserController().userUsername(params.id);
});

Route.put("user/update/:id", async ({ params, request }) => {
  return new UserController().userUpdate(params.id, request.body);
});

Route.delete("user/:id", async ({ params }) => {
  return new UserController().userDelete(params.id);
});

Route.group(() => {
  Route.resource("tweet", "TweetController").apiOnly().except("update");
}).middleware(["auth"]);

Route.get("empresa/name/:id", async ({ params }) => {
  console.log(params.id);
  return new EmpresaController().showName(params.id);
}).middleware(["auth"]);

Route.group(() => {
  Route.resource("empresa", "EmpresaController").apiOnly().except("update");
}).middleware(["auth"]);

// Route.group(()=>{
//   Route.resource('user','UserController').apiOnly()
// }).middleware()

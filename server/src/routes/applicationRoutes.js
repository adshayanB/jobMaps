import { login, register } from "../controllers/userController.js";

const routes = (app) => {
  //register route
  app.route("/auth/register").post(register);

  //login
  app.route("/auth/login").post(login);
}

export default routes;

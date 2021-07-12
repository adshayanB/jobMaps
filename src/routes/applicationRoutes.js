import { login, register, loginRequired } from "../controllers/userControllers";

const routes = (app) => {
  //register route
  app.route("/auth/register").post(register);

  //login
  app.route("/auth/login").post(login);
};

export default routes;

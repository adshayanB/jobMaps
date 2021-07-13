import {
  login,
  loginRequired,
  register,
  userInfo,
} from "../controllers/userController.js";

const routes = (app) => {
  //register route
  app.route("/auth/register").post(register);

  //login
  app.route("/auth/login").post(login);

  app.route("/userInfo").get(loginRequired, userInfo);
};

export default routes;

import {
  deleteUser,
  login,
  loginRequired,
  register,
  updateUser,
  userInfo,
} from "../controllers/userController.js";

import { createApp, getApp, getAllApps } from "../controllers/appController.js";

const routes = (app) => {
  //register route
  app.route("/auth/register").post(register);

  //login
  app.route("/auth/login").post(login);
  //UserStuff
  app
    .route("/userInfo")
    .get(loginRequired, userInfo)
    .put(loginRequired, updateUser)
    .delete(loginRequired, deleteUser);
  app
    .route("/applications")
    .post(loginRequired, createApp)
    .get(loginRequired, getApp);

  app.route("/applications/getAll").get(loginRequired, getAllApps);
};

export default routes;

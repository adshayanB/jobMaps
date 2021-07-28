import {
  deleteUser,
  login,
  loginRequired,
  register,
  updateUser,
  userInfo,
  recoverPassword,
  resetPassword,
} from "../controllers/userController.js";

import {
  createApp,
  getApp,
  getAllApps,
  updateApp,
  deleteApp,
  filterByStatus,
  filterByJobTitle,
  filterByCompany,
} from "../controllers/appController.js";

const routes = (app) => {
  //register route
  app.route("/auth/register").post(register);

  //login
  app.route("/auth/login").post(login);

  // recover password (get reset password email link)
  app.route("/recover-password").post(recoverPassword);
  // reset password
  app.route("/reset-password/:token").post(resetPassword);

  //UserStuff
  app
    .route("/userInfo")
    .get(loginRequired, userInfo)
    .put(loginRequired, updateUser)
    .delete(loginRequired, deleteUser);
  app
    .route("/applications")
    .post(loginRequired, createApp)
    .get(loginRequired, getApp)
    .put(loginRequired, updateApp)
    .delete(loginRequired, deleteApp);

  app.route("/applications/getAll").get(loginRequired, getAllApps);
  app.route("/filter/status").get(loginRequired, filterByStatus);
  app.route("/filter/jobTitle").get(loginRequired, filterByJobTitle);
  app.route("/filter/company").get(loginRequired, filterByCompany);
};

export default routes;

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
  sort,
  sortByDate,
  countStatus,
  countCompanyStatus,
  countCompanyStatusUser,
  heardBackJobTitle,
  heardBackCompany,
  search,
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
  app.route("/filter/status").post(loginRequired, filterByStatus);
  app.route("/filter/jobTitle").post(loginRequired, filterByJobTitle);
  app.route("/filter/company").get(loginRequired, filterByCompany);

  app.route("/sort/field").get(loginRequired, sort);
  app.route("/sort/date").get(loginRequired, sortByDate);

  app.route("/data/status").get(loginRequired, countStatus);
  app.route("/data/company").get(loginRequired, countCompanyStatus);
  app.route("/data/companyUser").get(loginRequired, countCompanyStatusUser);
  app.route("/data/heardback/jobTitle").get(loginRequired, heardBackJobTitle);
  app.route("/data/heardback/company").get(loginRequired, heardBackCompany);

  app.route("/search").get(loginRequired, search);
};

export default routes;

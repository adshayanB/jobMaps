import {
  deleteUser,
  login,
  loginRequired,
  register,
  updateUser,
  userInfo,
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
} from "../controllers/appController.js";

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
    .get(loginRequired, getApp)
    .put(loginRequired, updateApp)
    .delete(loginRequired, deleteApp);

  app.route("/applications/getAll").get(loginRequired, getAllApps);
  app.route("/filter/status").get(loginRequired, filterByStatus);
  app.route("/filter/jobTitle").get(loginRequired, filterByJobTitle);
  app.route("/filter/company").get(loginRequired, filterByCompany);
  app.route("/sort/field").get(loginRequired, sort);
  app.route("/sort/date").get(loginRequired, sortByDate);

  app.route("/data/status").get(loginRequired, countStatus);
  app.route("/data/company").get(loginRequired, countCompanyStatus);
  app.route("/data/companyUser").get(loginRequired, countCompanyStatusUser);
  app.route("/data/heardback/jobTitle").get(loginRequired, heardBackJobTitle);

};

export default routes;

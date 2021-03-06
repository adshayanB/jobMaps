import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Recoverpassword from "./pages/Recoverpassword";
import Resetpassword from "./pages/ResetPassword";
import Landingpage from "./pages/Landingpage";
import Features from "./components/Features";
import About from "./components/About";
import Applications from "./pages/Applications";
import Resourcepage from "./pages/Resourcepage";
import Dashboardpage from "./pages/Dashboardpage";
import Calendarpage from "./pages/Calendarpage";
import AddApps from "./pages/AddApps";

import aboutimage from "./images/about.gif";

import "./styles/app.scss";
import { Switch, Route, useLocation, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <Landingpage />
          <Features />
          <About image={aboutimage} title="Helping you land your dream job." />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/recover-password" exact>
          <Recoverpassword />
        </Route>
        <Route path="/reset-password/:token" exact>
          <Resetpassword />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboardpage />
        </Route>
        <Route path="/applications" exact>
          <Applications />
        </Route>
        <Route path="/calendar" exact>
          <Calendarpage />
        </Route>
        <Route path="/resources" exact>
          <Resourcepage />
        </Route>
        <Route path="/add-apps" exact>
          <AddApps />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;

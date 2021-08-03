import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Recoverpassword from "./pages/Recoverpassword";
import Resetpassword from "./pages/ResetPassword";
import Landingpage from "./pages/Landingpage";
import Features from "./components/Features";
import About from "./components/About";
import Home from "./pages/Home";
import Resourcepage from "./pages/Resourcepage";

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
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/resources" exact>
          <Resourcepage />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;

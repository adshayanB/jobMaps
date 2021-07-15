import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";

import "./styles/app.scss";
import { Switch, Route, useLocation, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <Landingpage />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;

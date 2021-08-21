import React from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
function Homenav() {
  const location = useLocation();

  function logoutHandler() {
    localStorage.setItem("token", "");
  }
  return (
    <div>
      <div className="homeNav">
        <img src={logo} alt="Logo" />
        <ul>
          <Link to="/dashboard">
            <li
              className={location.pathname === "/dashboard" ? "selected" : ""}
            >
              Dashboard
            </li>
          </Link>
          <Link to="/applications">
            <li
              className={
                location.pathname === "/applications" ? "selected" : ""
              }
            >
              Job Applications
            </li>
          </Link>
          <Link to="/calendar">
            <li className={location.pathname === "/calendar" ? "selected" : ""}>
              Calendar
            </li>
          </Link>
          <Link to="/resources">
            <li
              className={location.pathname === "/resources" ? "selected" : ""}
            >
              Resources
            </li>
          </Link>
          <Link to="/login" className="shorttest">
            <li onClick={logoutHandler}>Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Homenav;

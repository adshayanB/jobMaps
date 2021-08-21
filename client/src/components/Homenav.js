import React from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo.png";
function Homenav() {
  function logoutHandler() {
    localStorage.setItem("token", "");
  }
  return (
    <div>
      <div className="homeNav">
        <img src={logo} alt="Logo" />
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/applications">
            <li className="selected">Job Applications</li>
          </Link>
          <Link to="/calendar">
            <li>Calendar</li>
          </Link>
          <Link to="/resources">
            <li>Resources</li>
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

import React from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo.png";
function Homenav() {
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
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Homenav;

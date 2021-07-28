import React from "react";
import logo from "../images/logo.png";
function Homenav() {
  return (
    <div>
      <div className="homeNav">
        <img src={logo} alt="Logo" />
        <ul>
          <li className="selected">Job Applications</li>
          <li>Dashboard</li>
          <li>Calendar</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Homenav;

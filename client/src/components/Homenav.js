import React from "react";

function Homenav() {
  return (
    <div>
      <div className="homeNav">
        <ul>
          <li>User Name</li>
          <li className="selected">Job Applications</li>
          <li>Dashboard</li>
          <li>Calender</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Homenav;

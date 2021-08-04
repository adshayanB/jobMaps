import React from "react";
import Homenav from "../components/Homenav";
import Dashboard from "../components/Dashboard";

function Dashboardpage() {
  return (
    <>
      <Homenav />
      <div className="homeStyles">
        <Dashboard />
      </div>
    </>
  );
}

export default Dashboardpage;

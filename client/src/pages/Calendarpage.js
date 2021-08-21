import React from "react";
import Homenav from "../components/Homenav";
import Calendar from "../components/Calendar";

function Calendarpage() {
  return (
    <>
      <Homenav />
      <div className="homeStyles">
        <Calendar />
      </div>
    </>
  );
}

export default Calendarpage;
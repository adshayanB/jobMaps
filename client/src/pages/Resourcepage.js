import React from "react";
import Homenav from "../components/Homenav";
import Resources from "../components/Resources";

function Resourcepage() {
  return (
    <>
      <Homenav />
      <div className="homeStyles">
        <Resources />
      </div>
    </>
  );
}

export default Resourcepage;

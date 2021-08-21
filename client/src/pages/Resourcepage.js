import React from "react";
import Homenav from "../components/Homenav";
import Resources from "../components/Resources";

function Resourcepage() {
  return (
    <>
      <Homenav />
      <div className="resources-container">
        <Resources />
      </div>
    </>
  );
}

export default Resourcepage;

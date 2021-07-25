import React from "react";
import Homenav from "../components/Homenav";
import Filters from "../components/Filters";
import Jobapps from "../components/Jobapps";

function Home() {
  return (
    <>
      <div className="homeStyles">
        <Homenav />
        {/* <Filters /> */}
        <Jobapps />
      </div>
    </>
  );
}

export default Home;

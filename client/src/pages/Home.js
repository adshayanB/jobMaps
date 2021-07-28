import React from "react";
import Homenav from "../components/Homenav";
import Filters from "../components/Filters";
import Jobapps from "../components/Jobapps";

function Home() {
  return (
    <>
      <Homenav />
      <div className="homeStyles">
        <Filters />
        <Jobapps />
      </div>
    </>
  );
}

export default Home;

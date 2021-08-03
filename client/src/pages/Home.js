import React, { useEffect, useState } from "react";
import Homenav from "../components/Homenav";
import Filters from "../components/Filters";
import Jobapps from "../components/Jobapps";

function Home() {
  const [jobApps, setJobApps] = useState([]);
  const [query, setQuery] = useState(`/applications/getAll`);

  useEffect(() => {
    loadJobApps();
  }, [query]);

  const loadJobApps = async () => {
    let token = localStorage.getItem("token");
    let auth = "JWT " + token;
    console.log(auth);
    try {
      const response = await fetch(query, {
        method: "GET",
        headers: {
          Authorization: auth,
        },
      });
      const data = await response.json();
      console.log(data);
      setJobApps(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Homenav />
      <div className="homeStyles">
        <Filters
          jobApps={jobApps}
          setJobApps={setJobApps}
          setQuery={setQuery}
          query={query}
        />
        <Jobapps jobApps={jobApps} />
      </div>
    </>
  );
}

export default Home;

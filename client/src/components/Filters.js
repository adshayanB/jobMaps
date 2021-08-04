import React, { useRef, useState } from "react";
import Jobapps from "./Jobapps";

function Filters({ query, jobApps, setJobApps, setQuery }) {
  // Ref declarations
  const statusAccepted = useRef();
  const statusApplied = useRef();
  const statusRejected = useRef();
  const statusDeclined = useRef();
  const statusInterview = useRef();

  // States
  const [filteredData, setFilteredData] = useState(false);
  const filterHandler = async () => {
    let token = localStorage.getItem("token");
    let auth = "JWT " + token;
    let statusFilters = [];
    if (statusApplied.current.checked) statusFilters.push("applied");
    if (statusAccepted.current.checked) statusFilters.push("accepted");
    if (statusRejected.current.checked) statusFilters.push("rejected");
    if (statusDeclined.current.checked) statusFilters.push("declind");
    if (statusInterview.current.checked) statusFilters.push("interview");

    // if len 0 for all filters, call getall again
    if (statusFilters.length) {
      for (const status of statusFilters) {
        try {
          const response = await fetch("/filter/status", {
            method: "POST",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              status: status,
            }),
          });
          const data = await response.json();
          if (data.success) {
            // if (!filteredData) {
            //   setFilteredData(true);
            //   console.log(1);
            //   setJobApps(...jobApps, data.data);
            // } else {
            //   console.log(2);
            //   console.log(...jobApps, data.data[0]);
            //   setJobApps(...jobApps, data.data[0]);
            // }
            setJobApps(data.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }

    // if (statusApplied.current.checked) {
    // }
    // if (query == getall) {
    //   // reset jobapps to empty

    //   for (item in statuschecked) {
    //     //  send req to req.body.status
    //     //  append results to jobapps
    //   }
    // } else {
    //   for (item in statuschecked) {
    //     //  send req to req.body.status
    //     //  append results to jobapps
    //   }
    // }
  };
  return (
    <div className="filters" onclick={filterHandler}>
      <h1>Filters</h1>
      <div className="filter-section">
        <div className="filter-item">
          <div className="filter-title">Status</div>
          <label class="container">
            applied
            <input
              type="checkbox"
              onChange={filterHandler}
              ref={statusApplied}
              value="applied"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            interview
            <input
              type="checkbox"
              onChange={filterHandler}
              ref={statusInterview}
              value="interviewed"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            accepted
            <input
              type="checkbox"
              onChange={filterHandler}
              ref={statusAccepted}
              value="accepted"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            declined
            <input
              type="checkbox"
              onChange={filterHandler}
              ref={statusDeclined}
              value="declined"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            rejected
            <input
              type="checkbox"
              onChange={filterHandler}
              ref={statusRejected}
              value="rejected"
            />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="filter-item">
          <div className="searchInput">
            <input type="text" name="fname" required />
            <label className="label-name">
              <span className="content-name">Company</span>
            </label>
          </div>
        </div>
        <div className="filter-item">
          <div className="searchInput">
            <input type="text" name="fname" required />
            <label className="label-name">
              <span className="content-name">Job Title</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

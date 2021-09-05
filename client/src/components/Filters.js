import React, { useRef, useState } from "react";
import Jobapps from "./Jobapps";

function Filters({ query, jobApps, setJobApps, setQuery }) {
  // Ref declarations
  const statusAccepted = useRef();
  const statusApplied = useRef();
  const statusRejected = useRef();
  const statusDeclined = useRef();
  const statusInterview = useRef();
  const jobTitle = useRef();
  const companyName = useRef();

  const filterHandler = async () => {
    let token = localStorage.getItem("token");
    let auth = "JWT " + token;
    let statusFilters = [];
    if (statusApplied.current.checked) statusFilters.push("applied");
    if (statusAccepted.current.checked) statusFilters.push("accepted");
    if (statusRejected.current.checked) statusFilters.push("rejected");
    if (statusDeclined.current.checked) statusFilters.push("declind");
    if (statusInterview.current.checked) statusFilters.push("interview");

    let results = [];

    // Filter by status
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
            results.push(...data.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }

    // Filter by job title
    if (jobTitle.current.value.length) {
      try {
        const response = await fetch("/filter/jobTitle", {
          method: "POST",
          headers: {
            Authorization: auth,
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            jobTitle: jobTitle.current.value,
          }),
        });
        const data = await response.json();
        if (data.success) {
          results.push(...data.data);
          console.log(results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    // Filter by company
    if (companyName.current.value.length) {
      try {
        const response = await fetch("/filter/company", {
          method: "POST",
          headers: {
            Authorization: auth,
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            company: companyName.current.value,
          }),
        });
        const data = await response.json();
        if (data.success) {
          results.push(...data.data);
          console.log(results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    // if len 0 for all filters, call getall again
    if (results.length == 0) {
      try {
        const response = await fetch("/applications/getAll", {
          method: "GET",
          headers: {
            Authorization: auth,
          },
        });
        const data = await response.json();

        results = data.data;
      } catch (err) {
        console.log(err);
      }
    }
    setJobApps(results);
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
            <input
              type="text"
              ref={companyName}
              onChange={filterHandler}
              required
            />
            <label className="label-name">
              <span className="content-name">Company</span>
            </label>
          </div>
        </div>
        <div className="filter-item">
          <div className="searchInput">
            <input
              type="text"
              ref={jobTitle}
              onChange={filterHandler}
              required
            />
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

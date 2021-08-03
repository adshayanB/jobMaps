import React, { useRef } from "react";

function Filters({ query, setJobApps, setQuery }) {
  // Ref declarations
  const statusAccepted = useRef();
  const statusApplied = useRef();
  const filterHandler = async () => {
    let token = localStorage.getItem("token");
    let auth = "JWT " + token;
    if (statusApplied.current.checked) {
      try {
        const response = await fetch("/filter/status", {
          method: "POST",
          headers: {
            Authorization: auth,
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            status: statusApplied.current.value,
          }),
        });
        const data = await response.json();
        if (data.success) {
          console.log(data);
          setJobApps(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
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
            <input type="checkbox" onChange={filterHandler} />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            declined
            <input type="checkbox" onChange={filterHandler} />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            rejected
            <input type="checkbox" onChange={filterHandler} />
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

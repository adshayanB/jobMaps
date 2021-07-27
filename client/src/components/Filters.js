import React from "react";

function Filters() {
  return (
    <div className="filters">
      <h1>Filters</h1>
      <div className="filter-section">
        <div className="filter-item">
          <div className="filter-title">Status</div>
          <label class="container">
            accepted
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            interview
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            declined
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            rejected
            <input type="checkbox" />
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

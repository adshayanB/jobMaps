import React from "react";
import Homenav from "../components/Homenav";

function AddApps() {
  return (
    <div>
      <Homenav />
      <div className="box-add-apps">
        <div className="add-apps">
          <h1> Add Application</h1>
          <div className="app-container">
            <div className="app-col">
              <div className="searchInput">
                <input type="text" name="company" required />
                <label className="label-name">
                  <span className="content-name">Company</span>
                </label>
              </div>{" "}
              <div className="searchInput">
                <input type="text" name="jobTitle" required />
                <label className="label-name">
                  <span className="content-name">Job Title</span>
                </label>
              </div>{" "}
              <div className="status">
                Status
                <div className="status-menu">
                  <ul>
                    <li>applied</li>
                    <li>interview</li>
                    <li>accepted</li>
                    <li>declined</li>
                    <li>ghosted</li>
                    <li>rejected</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="app-col">
              <div className="searchInput">
                <input type="text" name="date" required />
                <label className="label-name">
                  <span className="content-name">Date Applied</span>
                </label>
              </div>
              <div className="searchInput">
                <input type="text" name="date" required />
                <label className="label-name">
                  <span className="content-name">Date of Interview</span>
                </label>
              </div>
              <div className="searchInput">
                <input type="text" name="date" required />
                <label className="label-name">
                  <span className="content-name">Date of Offer</span>
                </label>
              </div>
              <div className="searchInput">
                <input type="text" name="date" required />
                <label className="label-name">
                  <span className="content-name">Deadline to Accept</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddApps;

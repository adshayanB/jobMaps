import React from "react";
import Homenav from "../components/Homenav";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

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
                <div className="add-apps-title">Status</div>

                <div className="status-value">Applied</div>
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
              <div className="date-section">
                <div className="add-apps-title">Date Applied</div>
                <DatePicker placeholderText={"mm/dd/yyyy"} />
              </div>
              <div className="date-section">
                <div className="add-apps-title">Date of Interview</div>
                <DatePicker placeholderText={"mm/dd/yyyy"} />
              </div>
              <div className="date-section">
                <div className="add-apps-title">Date of Offer</div>
                <DatePicker placeholderText={"mm/dd/yyyy"} />
              </div>
              <div className="date-section">
                <div className="add-apps-title">Deadline to Accept</div>
                <DatePicker placeholderText={"mm/dd/yyyy"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddApps;

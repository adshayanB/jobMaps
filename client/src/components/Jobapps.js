import React, { useEffect, useState } from "react";
import bin from "../images/bin.png";

function Jobapps({
  jobApps,
  isDeleteRequested,
  setIsDeleteRequested,
  appToDelete,
  setAppToDelete,
}) {
  //  States
  function deleteSetting(id) {
    setIsDeleteRequested(!isDeleteRequested);
    if (isDeleteRequested) {
      console.log("delete");
    } else {
      console.log("no delete");
      setAppToDelete(id);
    }
  }
  return (
    <div className="jobApps">
      <div className="header">
        Job Applications
        <div className="row">
          <div className="searchInput">
            <input type="text" name="fname" required />
            <label className="label-name">
              <span className="content-name">Search</span>
            </label>
          </div>
          <div className="green-btn">Add New Application</div>
        </div>
      </div>
      <table>
        <tr>
          <th>company</th>
          <th>job title</th>
          <th>status</th>
          <th>date applied</th>
          <th>date of interview</th>
          <th>date of offer</th>
          <th>deadline to accept</th>
        </tr>
        {jobApps.map((jobApp) => {
          return (
            <tr>
              <td>{jobApp.company}</td>
              <td>{jobApp.jobTitle}</td>
              <td>
                <div className={"status " + jobApp.status}>{jobApp.status}</div>
              </td>
              <td>{jobApp.date_applied.substring(0, 10)}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <img
                  src={bin}
                  alt="Delete"
                  onClick={() => deleteSetting(jobApp._id)}
                  className="deleteJob"
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Jobapps;

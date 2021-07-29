import React, { useEffect, useState } from "react";
import bin from "../images/bin.png";

function Jobapps() {
  const [jobApps, settJobApps] = useState([]);
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
      console.log(data.data);
      settJobApps(data.data);
    } catch (err) {
      console.log(err);
    }
  };
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
                <img src={bin} alt="Delete" className="deleteJob" />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Jobapps;

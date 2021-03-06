import React, { useEffect, useState, useRef } from "react";
import bin from "../images/bin.png";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Jobapps({
  jobApps,
  isDeleteRequested,
  setIsDeleteRequested,
  appToDelete,
  setAppToDelete,
  setRerender,
  rerender,
}) {
  //  States

  // References
  const editCompanyRef = useRef();
  const editJobTitleRef = useRef();

  // login auth
  let token = localStorage.getItem("token");
  let auth = "JWT " + token;

  function deleteSetting(id) {
    setIsDeleteRequested(!isDeleteRequested);
    if (!isDeleteRequested) {
      setAppToDelete(id);
    }
  }
  const appliedDateHandller = async (date, id) => {
    console.log(date);
    let app;
    try {
      const response = await fetch(`/applications/${id}`, {
        method: "GET",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (data.success) {
        app = data.data;
        app.date_applied = date;
        try {
          const response = await fetch(`/applications/${id}`, {
            method: "PUT",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(app),
          });
          const data_update = await response.json();
          if (data_update.success) {
            setRerender(!rerender);
            console.log(data_update.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const interviewDateHandller = async (date, id) => {
    console.log(date);
    let app;
    try {
      const response = await fetch(`/applications/${id}`, {
        method: "GET",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (data.success) {
        app = data.data;
        app.date_interview = date;
        try {
          const response = await fetch(`/applications/${id}`, {
            method: "PUT",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(app),
          });
          const data_update = await response.json();
          if (data_update.success) {
            console.log(data_update.data);
            setRerender(!rerender);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const offerDateHandller = async (date, id) => {
    console.log(date);
    let app;
    try {
      const response = await fetch(`/applications/${id}`, {
        method: "GET",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (data.success) {
        app = data.data;
        app.date_offer = date;

        try {
          const response = await fetch(`/applications/${id}`, {
            method: "PUT",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(app),
          });
          const data_update = await response.json();
          if (data_update.success) {
            setRerender(!rerender);
            console.log(data_update.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const acceptDateHandller = async (date, id) => {
    console.log(date);
    let app;
    try {
      const response = await fetch(`/applications/${id}`, {
        method: "GET",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (data.success) {
        app = data.data;
        app.date_accept = date;
        try {
          const response = await fetch(`/applications/${id}`, {
            method: "PUT",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(app),
          });
          const data_update = await response.json();
          if (data_update.success) {
            setRerender(!rerender);
            console.log(data_update.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editCompany = async (id, company) => {
    let app;
    try {
      const response = await fetch(`/applications/${id}`, {
        method: "GET",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (data.success) {
        app = data.data;
        app.company = company;
        try {
          const response = await fetch(`/applications/${id}`, {
            method: "PUT",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(app),
          });
          const data_update = await response.json();
          if (data_update.success) {
            console.log(data_update.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editJobTitle = async (id, jobTitle) => {
    let app;
    try {
      const response = await fetch(`/applications/${id}`, {
        method: "GET",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (data.success) {
        app = data.data;
        app.jobTitle = jobTitle;
        try {
          const response = await fetch(`/applications/${id}`, {
            method: "PUT",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(app),
          });
          const data_update = await response.json();
          if (data_update.success) {
            console.log(data_update.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editStatus = async (id, status) => {
    console.log(status, id);

    let app;
    try {
      const response = await fetch(`/applications/${id}`, {
        method: "GET",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (data.success) {
        app = data.data;
        app.status = status;
        try {
          const response = await fetch(`/applications/${id}`, {
            method: "PUT",
            headers: {
              Authorization: auth,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(app),
          });
          const data_update = await response.json();
          if (data_update.success) {
            console.log(data_update.data);
            setRerender(!rerender);
          }
        } catch (err) {
          console.log(err);
        }
      }
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
          <Link to="/add-apps">
            <div className="green-btn">Add New Application</div>{" "}
          </Link>
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
              <td>
                <div
                  contentEditable
                  ref={editCompanyRef}
                  onInput={(e) => {
                    editCompany(jobApp._id, e.target.textContent);
                  }}
                >
                  {jobApp.company}
                </div>
              </td>
              <td>
                <div
                  contentEditable
                  ref={editJobTitleRef}
                  onInput={(e) => {
                    editJobTitle(jobApp._id, e.target.textContent);
                  }}
                >
                  {jobApp.jobTitle}
                </div>
              </td>
              <td>
                <div className={"status " + jobApp.status}>
                  {jobApp.status}
                  <div className="status-menu">
                    <ul>
                      <li
                        onClick={() => {
                          editStatus(jobApp._id, "applied");
                        }}
                      >
                        applied
                      </li>
                      <li
                        onClick={() => {
                          editStatus(jobApp._id, "interview");
                        }}
                      >
                        interview
                      </li>
                      <li
                        onClick={() => {
                          editStatus(jobApp._id, "accepted");
                        }}
                      >
                        accepted
                      </li>
                      <li
                        onClick={() => {
                          editStatus(jobApp._id, "declined");
                        }}
                      >
                        declined
                      </li>
                      <li
                        onClick={() => {
                          editStatus(jobApp._id, "ghosted");
                        }}
                      >
                        ghosted
                      </li>
                      <li
                        onClick={() => {
                          editStatus(jobApp._id, "rejected");
                        }}
                      >
                        rejected
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td>
                <DatePicker
                  selected={new Date(jobApp.date_applied)}
                  onChange={(date) => {
                    appliedDateHandller(date, jobApp._id);
                  }}
                  placeholderText={"mm/dd/yyyy"}
                />
              </td>
              <td>
                {jobApp.date_interview ? (
                  <DatePicker
                    selected={
                      jobApp.date_interview
                        ? new Date(jobApp.date_interview)
                        : new Date()
                    }
                    onChange={(date) => {
                      interviewDateHandller(date, jobApp._id);
                    }}
                  />
                ) : (
                  <DatePicker
                    onChange={(date) => {
                      interviewDateHandller(date, jobApp._id);
                    }}
                    placeholderText={"mm/dd/yyyy"}
                  />
                )}
              </td>
              <td>
                {jobApp.date_offer ? (
                  <DatePicker
                    selected={new Date(jobApp.date_offer)}
                    onChange={(date) => {
                      offerDateHandller(date, jobApp._id);
                    }}
                  />
                ) : (
                  <DatePicker
                    onChange={(date) => {
                      offerDateHandller(date, jobApp._id);
                    }}
                    placeholderText={"mm/dd/yyyy"}
                  />
                )}
              </td>
              <td>
                {jobApp.date_accept ? (
                  <DatePicker
                    selected={new Date(jobApp.date_accept)}
                    onChange={(date) => {
                      acceptDateHandller(date, jobApp._id);
                    }}
                  />
                ) : (
                  <DatePicker
                    onChange={(date) => {
                      acceptDateHandller(date, jobApp._id);
                    }}
                    placeholderText={"mm/dd/yyyy"}
                  />
                )}
              </td>
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

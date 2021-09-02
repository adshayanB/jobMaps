import React, { useState, useRef } from "react";
import Homenav from "../components/Homenav";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import isEmpty from "validator/es/lib/isEmpty";
import Error from "../components/Error";

function AddApps() {
  //  States
  const [appliedDate, setAppliedDate] = useState();
  const [interviewDate, setInterviewDate] = useState();
  const [offerDate, setOfferDate] = useState();
  const [acceptDate, setAcceptDate] = useState();
  const [status, setStatus] = useState("applied");
  const [errors, setErrors] = useState("");

  // References
  const editCompanyRef = useRef();
  const editJobTitleRef = useRef();

  const addAppsHandler = async (e) => {
    e.preventDefault();
    try {
      // login auth
      let token = localStorage.getItem("token");
      let auth = "JWT " + token;

      // Validations
      if (
        isEmpty(editCompanyRef.current.value) ||
        isEmpty(editJobTitleRef.current.value)
      ) {
        setErrors("Please Fill Out All Required Fields");
        return;
      } else {
        setErrors("");

        // Send request
        const response = await fetch(`/applications/`, {
          method: "POST",
          body: JSON.stringify({
            company: editCompanyRef.current.value,
            jobTitle: editJobTitleRef.current.value,
            status: status,
            date_offer: offerDate,
            date_interview: interviewDate,
            date_accept: acceptDate,
            date_applied: appliedDate,
          }),
          headers: {
            Authorization: auth,
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await response.json();
        console.log(data);
        if (data.success) {
        } else {
          console.log("job app creation failed");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Homenav />
      <div className="box-add-apps">
        <div className="add-apps">
          <h1> Add Application</h1>
          <Error error={errors} />

          <div className="app-container">
            <div className="app-col">
              <div className="searchInput">
                <input
                  type="text"
                  name="company"
                  ref={editCompanyRef}
                  required
                />
                <label className="label-name">
                  <span className="content-name">Company</span>
                </label>
              </div>{" "}
              <div className="searchInput">
                <input
                  type="text"
                  name="jobTitle"
                  required
                  ref={editJobTitleRef}
                />
                <label className="label-name">
                  <span className="content-name">Job Title</span>
                </label>
              </div>{" "}
              <div className="status">
                <div className="add-apps-title">Status</div>

                <div className="status-value">{status}</div>
                <div className="status-menu">
                  <ul>
                    <li
                      onClick={() => {
                        setStatus("applied");
                      }}
                    >
                      applied
                    </li>
                    <li
                      onClick={() => {
                        setStatus("interview");
                      }}
                    >
                      interview
                    </li>
                    <li
                      onClick={() => {
                        setStatus("accepted");
                      }}
                    >
                      accepted
                    </li>
                    <li
                      onClick={() => {
                        setStatus("declined");
                      }}
                    >
                      declined
                    </li>
                    <li
                      onClick={() => {
                        setStatus("ghosted");
                      }}
                    >
                      ghosted
                    </li>
                    <li
                      onClick={() => {
                        setStatus("rejected");
                      }}
                    >
                      rejected
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="app-col">
              <div className="date-section">
                <div className="add-apps-title">Date Applied</div>
                <DatePicker
                  placeholderText={"mm/dd/yyyy"}
                  selected={appliedDate}
                  onChange={(date) => setAppliedDate(date)}
                />
              </div>
              <div className="date-section">
                <div className="add-apps-title">Date of Interview</div>
                <DatePicker
                  placeholderText={"mm/dd/yyyy"}
                  selected={interviewDate}
                  onChange={(date) => setInterviewDate(date)}
                />
              </div>
              <div className="date-section">
                <div className="add-apps-title">Date of Offer</div>
                <DatePicker
                  placeholderText={"mm/dd/yyyy"}
                  selected={offerDate}
                  onChange={(date) => setOfferDate(date)}
                />
              </div>
              <div className="date-section">
                <div className="add-apps-title">Deadline to Accept</div>
                <DatePicker
                  placeholderText={"mm/dd/yyyy"}
                  selected={acceptDate}
                  onChange={(date) => setAcceptDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="button">
            <button className="button" onClick={addAppsHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddApps;

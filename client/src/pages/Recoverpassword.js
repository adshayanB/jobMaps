import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import bgImg from "../images/employee.gif";
import Error from "../components/Error";

function Recoverpassword() {
  const [errors, setErrors] = useState("");

  const inputEmail = useRef();

  const emailHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("recover-password", {
        method: "POST",
        body: JSON.stringify({
          email: inputEmail.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setErrors("");
      } else {
        setErrors(data.message);
      }
    } catch (err) {
      console.log("Error detected!:" + err);
    }
  };

  return (
    <>
      <div className="register">
        <div className="registerModal">
          <img src={bgImg} alt="Side" />
          <div className="register-area">
            <form className="login-form" method="post" action="">
              <div class="logo-placeholder">Logo</div>
              <h1>Recover Password</h1>
              <div className="searchInput">
                <input type="text" name="email" ref={inputEmail} required />
                <label className="label-name">
                  <span className="content-name">Email</span>
                </label>
              </div>
              <button className="button" onClick={emailHandler}>
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recoverpassword;

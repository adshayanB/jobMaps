import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import bgImg from "../images/employee.gif";
import Error from "../components/Error";

function Resetpassword() {
  const [errors, setErrors] = useState("");

  const inputPassword = useRef();
  const inputPasswordConf = useRef();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("reset-password", {
        method: "POST",
        body: JSON.stringify({
          password: inputPassword.current.value,
          confirmPassword: inputPasswordConf.current.value,
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
              <h1>Reset Password</h1>
              <div className="searchInput">
                <input
                  type="password"
                  name="password"
                  ref={inputPassword}
                  required
                />
                <label className="label-name">
                  <span className="content-name">Password</span>
                </label>
              </div>
              <div className="searchInput">
                <input
                  type="password"
                  name="confirmPassword"
                  ref={inputPasswordConf}
                  required
                />
                <label className="label-name">
                  <span className="content-name">Confirm Password</span>
                </label>
              </div>
              <button className="button" onClick={resetPasswordHandler}>
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resetpassword;

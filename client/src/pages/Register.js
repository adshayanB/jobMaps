import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import bgImg from "../images/employee.gif";

function Register() {
  return (
    <>
      <div className="register">
        <div className="registerModal">
          <img src={bgImg} alt="Side Img" />
          <div className="register-area">
            <form className="login-form">
              <div class="logo-placeholder">Logo</div>
              <h1>Sign Up For An Account</h1>
              <div className="searchInput">
                <input type="text" name="fname" required />
                <label className="label-name">
                  <span className="content-name">First Name</span>
                </label>
              </div>
              <div className="searchInput">
                <input type="text" name="lname" required />
                <label className="label-name">
                  <span className="content-name">Last Name</span>
                </label>
              </div>
              <div className="searchInput">
                <input type="text" name="email" required />
                <label className="label-name">
                  <span className="content-name">Email</span>
                </label>
              </div>
              <div className="searchInput">
                <input type="password" name="password" required />
                <label className="label-name">
                  <span className="content-name">Password</span>
                </label>
              </div>

              <div className="links">
                Already Have An Account?{" "}
                <b>
                  <Link to="/login">Log In</Link>
                </b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

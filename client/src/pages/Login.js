import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import bgImg from "../images/employee.gif";

function Login() {
  return (
    <>
      <div className="register">
        <div className="registerModal">
          <img src={bgImg} alt="Side Img" />
          <div className="register-area">
            <form className="login-form">
              <div class="logo-placeholder">Logo</div>
              <h1>Log In To Your Account</h1>
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
                Don't Have An Account?{" "}
                <b>
                  <Link to="/register">Sign Up</Link>
                </b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

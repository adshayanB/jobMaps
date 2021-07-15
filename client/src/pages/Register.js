import React from "react";
import bgImg from "../images/tempBg.jpg";
function Register() {
  return (
    <>
      <div className="register">
        <div className="registerModal">
          <img src={bgImg} alt="Side Img" />
          <div className="register-area">
            <form className="login-form">
              <div class="logo-placeholder">Logo</div>
              <h1>Sign Up For Your Job Tracker Account</h1>
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
                Already Have An Accout? <b>Log In</b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

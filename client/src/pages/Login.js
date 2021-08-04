import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import bgImg from "../images/employee.gif";
import logo from "../images/logo.png";
import Error from "../components/Error";
import isEmail from "validator/es/lib/isEmail";
import isEmpty from "validator/es/lib/isEmpty";

function Login() {
  // State declarations
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState("");

  // Ref declarations
  const inputEmail = useRef();
  const inputPassword = useRef();

  // Login Handler Function
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      // Validations
      if (
        isEmpty(inputEmail.current.value) ||
        isEmpty(inputPassword.current.value)
      ) {
        setIsLoggedIn(false);
        setErrors("Please Fill Out All Required Fields");
        return;
      } else {
        setErrors("");
      }
      if (!isEmail(inputEmail.current.value)) {
        setIsLoggedIn(false);
        setErrors("Please Enter Valid Email");
        return;
      } else {
        setErrors("");
      }
      // Send request
      const response = await fetch("auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: inputEmail.current.value,
          password: inputPassword.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        localStorage.setItem("token", data.token);
        setErrors("");
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setErrors(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="register">
        {isLoggedIn ? <Redirect to="/dashboard" /> : ""}

        <div className="registerModal">
          <img src={bgImg} alt="Side Image" className="bgImg" />
          <div className="register-area">
            <form className="login-form">
              <div class="logo-placeholder">
                <img src={logo} alt="Logo" />
              </div>
              <h1>Log In To Your Account</h1>
              <Error error={errors} />
              <div className="searchInput">
                <input type="text" name="email" ref={inputEmail} required />
                <label className="label-name">
                  <span className="content-name">Email</span>
                </label>
              </div>
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
              <button onClick={loginHandler} className="button">
                Login
              </button>

              <div className="links">
                Don't Have An Account?{" "}
                <b>
                  <Link to="/register">Sign Up</Link>
                </b>
              </div>
              <div class="recoverPasswordLink">
                <Link to="/recover-password">Forgot Password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

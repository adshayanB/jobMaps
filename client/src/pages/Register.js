import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import bgImg from "../images/employee.gif";
import Error from "../components/Error";
import isEmail from "validator/es/lib/isEmail";
import isEmpty from "validator/es/lib/isEmpty";
import isStrongPassword from "validator/es/lib/isStrongPassword";

function Register() {
  // State declarations
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  // Ref declarations
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputFirstName = useRef();
  const inputLastName = useRef();

  // Login Handler Function
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      // Validations
      if (
        isEmpty(inputEmail.current.value) ||
        isEmpty(inputPassword.current.value) ||
        isEmpty(inputFirstName.current.value) ||
        isEmpty(inputLastName.current.value)
      ) {
        setIsRegistered(false);
        setIsWrongPassword(false);
        setErrors("Please Fill Out All Required Fields");
        return;
      } else {
        setErrors("");
      }
      if (!isEmail(inputEmail.current.value)) {
        setIsRegistered(false);
        setIsWrongPassword(false);
        setErrors("Please Enter Valid Email");
        return;
      } else {
        setErrors("");
      }
      if (!isStrongPassword(inputPassword.current.value)) {
        setIsRegistered(false);
        setIsWrongPassword(true);
        return;
      } else {
        setIsWrongPassword(false);
      }

      // Send request
      const response = await fetch("auth/register", {
        method: "POST",
        body: JSON.stringify({
          firstName: inputFirstName.current.value,
          lastName: inputLastName.current.value,
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
        setErrors("");
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
        setErrors(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="register">
        {isRegistered ? <Redirect to="/login" /> : ""}
        <div className="registerModal">
          <img src={bgImg} alt="Side Image" />
          <div className="register-area">
            <form className="login-form">
              <div class="logo-placeholder">Logo</div>
              <h1>Sign Up For An Account</h1>
              <Error error={errors} />
              <div className={isWrongPassword ? "wrongPassword error" : "hide"}>
                Your password must be have at least: <br />
                <ul>
                  <li>8 characters long</li>
                  <li>1 uppercase character</li>
                  <li>1 lowercase character</li>
                  <li>1 symbol</li>
                  <li>1 digit</li>
                </ul>
              </div>
              <div className="searchInput">
                <input type="text" name="fname" ref={inputFirstName} required />
                <label className="label-name">
                  <span className="content-name">First Name</span>
                </label>
              </div>
              <div className="searchInput">
                <input type="text" name="lname" ref={inputLastName} required />
                <label className="label-name">
                  <span className="content-name">Last Name</span>
                </label>
              </div>
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
              <button className="button" onClick={loginHandler}>
                Register
              </button>
              <div className="links borderTop">
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

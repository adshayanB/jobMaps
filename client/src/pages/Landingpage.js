import { Link, Redirect } from "react-router-dom";

import React, { useState } from "react";
import logo from "../images/logo-white.png";

function Landingpage() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="main" id="main">
      <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a className="active-login" href="/login">
              Log In
            </a>
          </li>
          <li>
            <a className="active" href="/register">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>

      <div className="name">
        <h1>Simplify your job searching process.</h1>
        <br />
        <a href="/register" className="cv-btn">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Landingpage;

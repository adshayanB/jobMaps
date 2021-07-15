import React from "react";
import { Link, Redirect } from "react-router-dom";

function Landingpage() {
  return (
    <div>
      Landing Page!
      <br />
      <Link to="/register">Sign Up</Link>
      <br />
      <Link to="/login">Log In</Link>
    </div>
  );
}

export default Landingpage;

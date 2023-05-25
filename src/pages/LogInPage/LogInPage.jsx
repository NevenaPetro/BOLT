import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../LogInPage/loginpage.scss";

function LogInPage() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-wrapper">
      <form onSubmit={onSubmit}>
        <h2>Log in</h2>
        <p>Welcome back to you Bolt account, it's good to see you again! </p>
        <div className="input-wrapper">
          <input type="text" placeholder="Your name*"></input>
          <input type="password" placeholder="Your password*"></input>
        </div>
        <input type="checkbox"></input>
        <span className="checkbox-label">Remember me</span>
        <button type="submit" className="big-btn">
          Log in
        </button>
        <p className="login-btn">
          <span>
            <Link to="/lostpassword">Sign up</Link>
          </span>
          <span>
            <Link to="/resendactivation">Sign up</Link>
          </span>
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </form>
      <img alt="illustration" />
    </div>
  );
}

export default LogInPage;

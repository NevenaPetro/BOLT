import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../LogInPage/loginpage.scss";
import LogInIllustration from '../../assets/log-in/log-in-illustration.png'

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
        <div className='checkbox-wrapper'>
          <input type="checkbox"></input>
          <span className="checkbox-label">Remember me</span>
        </div>
        <button type="submit" className="big-btn">
          Log in
        </button>
        <p className="links">
          <div className="links-sub-wrapper">
            <Link to="/lostpassword">Lost Password</Link>
            <span> / </span>
            <Link to="/resendactivation">Resend Activation</Link>
          </div>
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </form>
      <img src={LogInIllustration} alt="illustration" />
    </div>
  );
}

export default LogInPage;

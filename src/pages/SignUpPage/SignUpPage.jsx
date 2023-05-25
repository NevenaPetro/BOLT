import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpIllustration from "../../assets/sign-up/sign-up-illustration.png";
import "../SignUpPage/signuppage.scss";

function SignUpPage() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-wrapper">
      <form onSubmit={onSubmit}>
        <h2>Sign up</h2>
        <p>
          Welcome to Bolt account creation. Enjoy all the benefits it offers.
        </p>
        <div className="input-wrapper">
          <input type="text" placeholder="Your name*"></input>
          <input type="email" placeholder="Your email*"></input>
          <input type="password" placeholder="Your password*"></input>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox"></input>
          <span className="checkbox-label">
            Please confirm that you have read and understood the Terms and
            Conditions and Privacy Policy of the site.*
          </span>
        </div>
        <button type="submit" className="big-btn">
          Create account
        </button>
        <p className="links">
          If you all ready have account, please{" "}
          <span>
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </form>
      <img src={SignUpIllustration} alt="illustration" />
    </div>
  );
}

export default SignUpPage;

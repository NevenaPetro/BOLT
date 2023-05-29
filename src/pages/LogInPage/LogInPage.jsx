import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";
import "../LogInPage/loginpage.scss";
import LogInIllustration from "../../assets/log-in/log-in-illustration.png";
import LogInIllustrationDM from "../../assets/log-in/log-in-illustration-darkmode.png";

function LogInPage() {
  const { activDarkMode, dark } = useContext(applicationContext);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  
  return (
    <div className={`login-wrapper ${activDarkMode ? dark : ""}`}>
      <form onSubmit={onSubmit}>
        <h2>Log in</h2>
        <p>Welcome back to you Bolt account, it's good to see you again! </p>
        <div className="input-wrapper">
          <input type="text" placeholder="Your name*"></input>
          <input type="password" placeholder="Your password*"></input>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox"></input>
          <span className="checkbox-label">Remember me</span>
        </div>
        <button type="submit" className="big-btn">
          Log in
        </button>
        <div className="links">
          <div className="links-sub-wrapper">
            <Link to="/lostpassword">Lost Password</Link>
            <span> / </span>
            <Link to="/resendactivation">Resend Activation</Link>
          </div>
          <p>
            Don't have an account? <span> </span>
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </form>
      <img src={LogInIllustration} alt="illustration" className="lightmode"/>
      <img src={LogInIllustrationDM} alt="illustration" className="darkmode"/>
    </div>
  );
}

export default LogInPage;

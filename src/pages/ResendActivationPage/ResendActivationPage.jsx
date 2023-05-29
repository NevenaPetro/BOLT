import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";
import "../ResendActivationPage/resendactivationpage.scss";
import ResendActivationIllustration from "../../assets/log-in/resend-activation-email-illustration.png";
import ResendActivationIllustrationDM from "../../assets/log-in/resend-activation-email-illustration-darkmode.png";

function LostPasswordPage() {
  const { activDarkMode, dark } = useContext(applicationContext);
  const [btnTitle, setBtnTitle] = useState ('Send activation');
  const onSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className={`resendactiv-wrapper ${activDarkMode ? dark : ""}`}>
      <form onSubmit={onSubmit}>
        <h2>Resend activation email</h2>
        <p>
          Mails can get lost, but we can send you another activation email for
          your account.{" "}
        </p>
        <div className="input-wrapper">
          <input type="email" placeholder="Your email*"></input>
        </div>
        <button type="submit" className="big-btn" onClick={() => {setBtnTitle('Done!')}}>
        {btnTitle}
        </button>
        <div className="links">
          <Link to="/login">Return to Login</Link>
        </div>
      </form>
      <img src={ResendActivationIllustration} alt="illustration" className="lightmode"/>
      <img src={ResendActivationIllustrationDM} alt="illustration" className="darkmode"/>
    </div>
  );
}

export default LostPasswordPage;

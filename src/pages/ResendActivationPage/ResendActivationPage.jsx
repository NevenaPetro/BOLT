import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";

import "../ResendActivationPage/resendactivationpage.scss";
import ResendActivationIllustration from "../../assets/log-in/resend-activation-email-illustration.png";

function LostPasswordPage() {
  const { activDarkMode, dark } = useContext(applicationContext);
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
        <button type="submit" className="big-btn">
          Send activation
        </button>
        <div className="links">
          <Link to="/login">Return to Login</Link>
        </div>
      </form>
      <img src={ResendActivationIllustration} alt="illustration" />
    </div>
  );
}

export default LostPasswordPage;

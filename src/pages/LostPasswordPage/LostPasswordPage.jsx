import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";
import "../LostPasswordPage/lostpasswordpage.scss";
import LostPasswordIllustration from "../../assets/log-in/lost-password-illustration.png";

function LostPasswordPage() {
  const { activDarkMode, dark } =
  useContext(applicationContext);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`lostpassw-wrapper ${activDarkMode ? dark : ""}`}>
      <form onSubmit={onSubmit}>
        <h2>Lost password</h2>
        <p>
          We will send you an email with a magic recovery link to reset your
          password.{" "}
        </p>
        <div className="input-wrapper">
          <input type="email" placeholder="Your email*"></input>
        </div>
        <button type="submit" className="big-btn">
          Send me link
        </button>
        <div className="links">
          <Link to="/login">Return to Login</Link>
        </div>
      </form>
      <img src={LostPasswordIllustration} alt="illustration" />
    </div>
  );
}

export default LostPasswordPage;

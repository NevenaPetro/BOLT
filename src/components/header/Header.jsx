import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BoltLogo } from "../../assets/footer/bolt-logo.svg";
import ThemeIcon from "../../assets/home/theme-icon.svg";
import "../header/header.scss";

function Header() {
  return (
    <div className="header-wraper">
      <Link className="logo" to="/">
        <BoltLogo />
      </Link>
      <div className="menu">
        <nav className="navigation">
          <Link to="/generate">Generate QR Codes</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="transp-btn">Sign up</Link>
        </nav>
        <button className="theme-btn">
          <img src={ThemeIcon} alt="theme" />
        </button>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BoltLogo } from "../../assets/footer/bolt-logo.svg";
import ThemeIcon from "../../assets/home/theme-icon.svg";
import "../header/header.scss";

function Header() {
  const [active, setActive] = useState(false);
  const menuIcon = "menuIcon";
  return (
    <div className="header-wrapper">
      <Link className="logo" to="/">
        <BoltLogo />
      </Link>
      <div className="menu">
        <nav className={`navigation ${active ? menuIcon : ""}`}>
          <Link
            to="/generate"
            onClick={() => {
              setActive(!active);
            }}
          >
            Generate QR Codes
          </Link>
          <Link
            to="/pricing"
            onClick={() => {
              setActive(!active);
            }}
          >
            Pricing
          </Link>
          <Link
            to="/login"
            onClick={() => {
              setActive(!active);
            }}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            onClick={() => {
              setActive(!active);
            }}
            className="transp-btn"
          >
            Sign up
          </Link>
        </nav>
        <button className="theme-btn">
          <img src={ThemeIcon} alt="theme" />
        </button>
        <div
          className={`hamburger ${active ? menuIcon : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
}

export default Header;

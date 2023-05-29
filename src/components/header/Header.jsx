import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";
import BoltLogo from "../../assets/footer/bolt-logo.svg";
import BoltLogoDM from "../../assets/footer/bolt-logo-darkmode.svg";
import ThemeIcon from "../../assets/home/theme-icon.svg";
import ThemeIconDM from "../../assets/home/theme-icon-darkmode.svg";
import "../header/_header.scss";

function Header() {
  const [active, setActive] = useState(false);
  const { activDarkMode, setActivDarkMode, handleClick, dark } =
    useContext(applicationContext);
  const menuIcon = "menuIcon";

  return (
    <div className={`header-wrapper ${activDarkMode ? dark : ""}`}>
      <Link to="/" className='logo'>
        <img
          src={BoltLogo}
          alt="logo"
          className={`lightmode ${activDarkMode ? dark : ""}`}
        />
        <img
          src={BoltLogoDM}
          alt="logo"
          className={`darkmode ${activDarkMode ? dark : ""}`}
        />
      </Link>
      <div className="menu">
        <nav
          className={`navigation ${active ? menuIcon : ""} ${
            activDarkMode ? dark : ""
          }`}
        >
          <Link
            to={"/"}
            state={{ section: "generate" }}
            onClick={() => {
              setActive(!active);
            }}
          >
            Generate QR Codes
          </Link>
          <Link
            to={"/"}
            state={{ section: "pricing" }}
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
          <img
            src={ThemeIcon}
            alt="theme"
            className="lightmode"
            onClick={handleClick}
          />
          <img
            src={ThemeIconDM}
            alt="theme"
            className="darkmode"
            onClick={handleClick}
          />
        </button>
        <div
          className={`hamburger ${active ? menuIcon : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <span className={`bar ${activDarkMode ? dark : ""}`}></span>
          <span className={`bar ${activDarkMode ? dark : ""}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Header;

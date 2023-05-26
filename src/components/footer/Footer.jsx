import React from "react";
import { Link } from "react-router-dom";
import "../footer/footer.scss";
import FacebookIcon from "../../assets/footer/facebook-large.svg";
import InstagramIcon from "../../assets/footer/instagram-large.svg";
import LinkedinIcon from "../../assets/footer/linked-in-large.svg";
import OaklyIcon from "../../assets/footer/oakly-logo-full-color 9.svg";
import TarabaLogo from "../../assets/footer/taraba-logo-latin-full-color-white 1.svg";
import PortalLogo from "../../assets/footer/portal-logo-lat-solid-white 1.svg";
import EduLogo from "../../assets/footer/trb-edu-logo-solid-white.svg";
import TechLogo from "../../assets/footer/trb-tech-logo-solid-white (1) 1.svg";
import YouTubeIcon from "../../assets/footer/you-tube-large.svg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-sub-wrapper">
        <div>
          <img src={TarabaLogo} alt="logo" />
          <img src={LinkedinIcon} alt="linkedin" />
          <img src={InstagramIcon} alt="instagram" />
          <img src={YouTubeIcon} alt="youtube" />
          <img src={FacebookIcon} alt="facebook" />
          <p>Copyright © 2021 Taraba. All rights reserved.</p>{" "}
        </div>
        <div>
            <h6>Quick links</h6>
            <Link>Generate QR codes</Link>
            <Link>Pricing</Link>
            <Link>Terms and Conditions</Link>
            <Link>Privacy Policy</Link>
        </div>
      </div>
      <div className="footer-wrapper-grey">
        <p>Our family</p>
        <Link><img src={TechLogo} alt="tech" /></Link>
        <Link><img src={EduLogo} alt="edu" /></Link>
        <Link><img src={PortalLogo} alt="portal" /></Link>
        <Link><img src={OaklyIcon} alt="oakly" /></Link>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import QRCodePurchase from "../../assets/home/qr-code-purchase.png";
import "../HomePage/homepage.scss";

function HomePage() {
  return (
    <div className="homepage-wrapper">
      <div>
        <div className="heading">
          <h2>
            Strikingly fast <span>QR codes.</span>
          </h2>

          <p>You are one Bolt away from never being too slow again.</p>
        </div>
        <div className="big-btns">
          <div className="big-btn">
            <Link to="/generate">Generate QR Codes</Link>
          </div>
          <div className="big-btn">
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
      <img  src={QRCodePurchase} alt="image" />
    </div>
  );
}

export default HomePage;

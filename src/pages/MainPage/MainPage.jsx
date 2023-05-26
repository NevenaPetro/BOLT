import React from "react";
import { Link } from "react-router-dom";
import QRCodePurchase from "../../assets/home/qr-code-purchase.png";
import DynamicIcon from '../../assets/home/static-and-dynamic/dynamic-icon.svg'
import "./mainpage.scss";

function HomePage() {
  return (
    <>
      <div className="mainpage-wrapper">
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
        <img src={QRCodePurchase} alt="image" />
      </div>

      <section className="generate">
        <div className="generate-wrapper">
          <h4>QR code Generator.</h4>
          <p>
            Your not sure whether to use Dynamic or Static QR codes? Get
            familiar with both and choose wisely.
          </p>
          <div className="generate-sub-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VWvkhPFKSxY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <img src={DynamicIcon} alt="dynamic"  fill='$orange-3' />
              <h5>Dynamic QR codes</h5>
              <p>
                Have you ever wanted to change the destination of your QR code?
                <br></br>
                <br></br>
                If your answer is yes, Dynamic QR codes are perfect for you.
                They allow you to change the destination of the QR code
                on-the-fly, whenever you want. It combines multiple technologies
                to make this happen in the background with the help of our Links
                tool.
              </p>
              <ul>
                <li>Advanced scan statistics</li>
                <li>Change URL destination dynamically</li>
                <li>Scheduling, expiration limits, A/B Rotation</li>
                <li>Password protection</li>
                <li>Country, device & language re-targeting</li>
              </ul>
            </div>
          </div>
          <div className="generate-sub-wrapper">
            <div>
              <h5>Static QR codes</h5>
              <p>
                Ful customizable QR codes are something you will definitely need
                for your company. <br></br><br></br>Static QR codes have no scan limit,
                also they are fixed, meaning that all the data is directly
                embedded into the QR code. Once generated and printed for
                real-world usage, it can't be changed.
              </p>
              <ul>
                <li>Fully customizable</li>
                <li>No scan limit</li>
                <li>No data saved on our servers</li>
              </ul>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VWvkhPFKSxY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

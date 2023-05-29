import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { applicationContext } from "../../context";
import QRCodePurchase from "../../assets/home/qr-code-purchase.png";
import QRCodePurchaseDM from "../../assets/home/qr-code-purchase-darkmode.png";
import DynamicIcon from "../../assets/home/static-and-dynamic/dynamic-icon-orange.svg";
import StaticIcon from "../../assets/home/static-and-dynamic/static-icon-orange.svg";
import FeaturesIcon from "../../assets/home/features/features-icon-orange.svg";
import CryptoIcon from "../../assets/home/qr code types icons/crypto-orange.svg";
import EmailIcon from "../../assets/home/qr code types icons/email-orange.svg";
import EventIcon from "../../assets/home/qr code types icons/event-orange.svg";
import FaceTimeIcon from "../../assets/home/qr code types icons/facetime-orange.svg";
import LocationIcon from "../../assets/home/qr code types icons/location-orange.svg";
import PayPalIcon from "../../assets/home/qr code types icons/paypal-orange.svg";
import PhoneIcon from "../../assets/home/qr code types icons/phone-orange.svg";
import SmsIcon from "../../assets/home/qr code types icons/sms-orange.svg";
import TextIcon from "../../assets/home/qr code types icons/text-orange.svg";
import UrlIcon from "../../assets/home/qr code types icons/url-orange.svg";
import VCardIcon from "../../assets/home/qr code types icons/vcard-orange.svg";
import WhatsAppIcon from "../../assets/home/qr code types icons/whatsapp-orange.svg";
import WiFiIcon from "../../assets/home/qr code types icons/wifi-orange.svg";

import "./mainpage.scss";

function HomePage() {
  const {  activDarkMode, dark } =
    useContext(applicationContext);
  let data = useLocation();

  useEffect(() => {
    let section = data.state ? data.state.section : null;
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  });

  return (
    <>
      <div id="mainpage-wrapper" className={`${activDarkMode ? dark : ""}`}>
        <div>
          <div className="heading">
            <h2>
              Strikingly fast <span>QR codes.</span>
            </h2>

            <p>You are one Bolt away from never being too slow again.</p>
          </div>
          <div className="big-btns">
            <div className="big-btn">
            <Link to={'/'} state={{ section: 'generate' }}>
                Generate QR Codes
              </Link>
            </div>
            <div className="big-btn">
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
        <img src={QRCodePurchase} alt="image" className="lightmode"/>
        <img src={QRCodePurchaseDM} alt="image"className="darkmode" />
      </div>

      <section id="generate" className={`${activDarkMode ? dark : ""}`}>
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
              <h5>
                <span>
                  <img src={DynamicIcon} alt="dynamic" />
                </span>
                Dynamic QR codes
              </h5>
              <p>
                Have you ever wanted to change the destination of your QR code?
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
          <div className="generate-sub-wrapper second">
            <div>
              <h5>
                <span>
                  <img src={StaticIcon} alt="static" />
                </span>
                Static QR codes
              </h5>
              <p>
                Ful customizable QR codes are something you will definitely need
                for your company. <br></br>
                <br></br>Static QR codes have no scan limit, also they are
                fixed, meaning that all the data is directly embedded into the
                QR code. Once generated and printed for real-world usage, it
                can't be changed.
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
      <section id="features" className={`${activDarkMode ? dark : ""}`}>
        <h4>With other features.</h4>
        <p>
          From QR code templates to custom domains, Bolt offers you all the
          features that you might need.
        </p>
        <div className="features-wrapper">
          <div className="features-sub-wrapper">
            <img src={FeaturesIcon} alt="features" />
            <div className="features-sub-sub-wrapper">
              <h6>QR templates</h6>
              <p>
                You get 13 built-in QR code templates to get you started right
                away.
              </p>
            </div>
          </div>
          <div className="features-sub-wrapper">
            <img src={FeaturesIcon} alt="features" />
            <div className="features-sub-sub-wrapper">
              <h6>Privacy</h6>
              <p>
                We do not store any data of your created QR codes, except the
                ones that you save in your account willingly.
              </p>
            </div>
          </div>
          <div className="features-sub-wrapper">
            <img src={FeaturesIcon} alt="features" />
            <div className="features-sub-sub-wrapper">
              <h6>Highly customizable</h6>
              <p>
                Create the QR code you need, brand it with your own colors &
                logo.
              </p>
            </div>
          </div>
          <div className="features-sub-wrapper">
            <img src={FeaturesIcon} alt="features" />
            <div className="features-sub-sub-wrapper">
              <h6>Tracking pixels</h6>
              <p>
                Facebook, Google Analytics, Google Tag Manager, LinkedIn,
                Pinterest, Twitter, Quora tracking pixels available.
              </p>
            </div>
          </div>
          <div className="features-sub-wrapper">
            <img src={FeaturesIcon} alt="features" />
            <div className="features-sub-sub-wrapper">
              <h6>Projects </h6>
              <p>Easiest way to categorize your managed resources.</p>
            </div>
          </div>
          <div className="features-sub-wrapper">
            <img src={FeaturesIcon} alt="features" />
            <div className="features-sub-sub-wrapper">
              <h6>Custom domains </h6>
              <p>Connect your own domain or use our predefined ones.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="qr-code-types" className={`${activDarkMode ? dark : ""}`}>
        <h4>QR code types.</h4>
        <p>
          QR codes can be used for multiple purposes! So here you have a large
          array of QR code templates to choose from and get started.
        </p>
        <div className="qr-code-types-wrapper">
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={TextIcon} alt="text" />
              </span>
              Text
            </h6>
            <p>Generate easy & customizable Text QR codes in minutes.</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={UrlIcon} alt="url" />
              </span>
              URL
            </h6>
            <p>Generate easy & customizable Text QR codes in minutes.</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={PhoneIcon} alt="phone" />
              </span>
              Phone
            </h6>
            <p>Get calls from people by scaning the QR code</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={SmsIcon} alt="sms" />
              </span>
              SMS
            </h6>
            <p>Get custom SMS from people by scaning the QR code</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={EmailIcon} alt="email" />
              </span>
              Email
            </h6>
            <p>Get custom email from people by scaning the QR code</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={WhatsAppIcon} alt="whatsapp" />
              </span>
              Whatsapp
            </h6>
            <p>
              Get custom Whatsapp messages from people by scaning the QR code
            </p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={FaceTimeIcon} alt="facetime" />
              </span>
              Facetime
            </h6>
            <p>Get Facetime calls from people by scaning the QR code</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={LocationIcon} alt="location" />
              </span>
              Location
            </h6>
            <p>
              Embed location coordinates for people to get directions more
              easily
            </p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={WiFiIcon} alt="wifi" />
              </span>
              WiFi
            </h6>
            <p>
              Create WiFi QR codes and let people conect to your WiFi more easly
            </p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={EventIcon} alt="event" />
              </span>
              Event
            </h6>
            <p>
              Generate a custom life calendar event and embed it into a QR code{" "}
            </p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={CryptoIcon} alt="crypto" />
              </span>
              Crypto
            </h6>
            <p>Get paid in crypto from people by scaning the QR code</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={VCardIcon} alt="vcard" />
              </span>
              Vcard
            </h6>
            <p>Embed your contact data into a digital bussines card</p>
          </div>
          <div className="qr-code-types-sub-wrapper">
            <h6>
              <span>
                <img src={PayPalIcon} alt="paypal" />
              </span>
              PayPal
            </h6>
            <p>Create PayPal direct payment links</p>
          </div>
        </div>
      </section>
      <section id="pricing" className={`${activDarkMode ? dark : ""}`}>
        <div className="pricing-wrapper-one">
          <div>
            <h4>Simple, transparent pricing.</h4>
            <p>
              Not sure if you need Bolt? You can sign up for your free guest
              account to try Bolt out.
              <br /> <br /> If you decide that Bolt could be useful and that you
              need something more advanced choose the plan that is right for you
              and your budget.
            </p>
          </div>
          <div className="big-btn-period">
            <button>Monthly</button>
            <button>Annual</button>
            <button>Lifetime</button>
          </div>
        </div>

        <div className="pricing-wrapper-two">
          <div className="pricing-orange-gradient">
            <p>GUEST</p>
            <h4>Free</h4>
            <p>4 QR code types </p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <p className="strikethrough">4 QR code types</p>
            <button className="big-btn">Choose plan</button>
          </div>
          <div className="pricing-orange-gradient">
            <p>FREE with registration</p>
            <h4>Free</h4>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <button className="big-btn">Choose plan</button>
          </div>
          <div className="most-popular">
            <div className="most-popular-tab">Most popular plan</div>
            <div className="pricing-orange-gradient mp">
              <p>PERSONAL PRO</p>
              <h4>$5</h4>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <p>4 QR code types </p>
              <button className="big-btn">Choose plan</button>
            </div>
          </div>

          <div className="pricing-orange-gradient">
            <p>BUSINESS</p>
            <h4>$15</h4>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <p>4 QR code types </p>
            <button className="big-btn">Choose plan</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

import Button from "../common/Button";
import "./styles/contactus.css";
import { useState } from "react";

const ContactUs = () => {
  const tgLink = "https://t.me/CMC_COIN_1";
  const fbLink = "https://www.facebook.com/BuyCMCcoin/";
  const twLink = "https://twitter.com/CMCCOIN2000";
  const instaLink = "https://www.instagram.com/cmccoin.io/";

  const emailFormat = {
    fullName: "",
    emailAddress: "",
    message: "",
  };

  const [emailData, setEmailData] = useState(emailFormat);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailData);
  };

  const dataChangeHandler = (event) => {
    setEmailData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="contact-container" id="contact-us">
      <div className="tok-title">Contact Us</div>
      <div className="contact-sections">
        <div className="info-links">
          <h3>QUICK LINKS</h3>
          <div className="divider" />
          <div className="social-conatiner">
            <div
              className="social-item"
              onClick={() => window.open(tgLink, "_blank")}
            >
              <img
                src={require("./../../assets/images/telegram.png")}
                className="social-img"
              />
              <h3 className="img-desc">{tgLink}</h3>
            </div>
            <div
              className="social-item"
              onClick={() => window.open(fbLink, "_blank")}
            >
              <img
                src={require("./../../assets/images/facebook.png")}
                className="social-img"
              />
              <h3 className="img-desc">{fbLink}</h3>
            </div>
            <div
              className="social-item"
              onClick={() => window.open(fbLink, "_blank")}
            >
              <img
                src={require("./../../assets/images/twitter.png")}
                onClick={() => window.open(twLink, "_blank")}
                className="social-img"
              />
              <h3 className="img-desc">{twLink}</h3>
            </div>
            <div
              className="social-item"
              onClick={() => window.open(instaLink, "_blank")}
            >
              <img
                src={require("./../../assets/images/instagram.png")}
                onClick={() =>
                  window.open("https://www.instagram.com/cmccoin.io/", "_blank")
                }
                className="social-img"
              />
              <h3 className="img-desc">{instaLink}</h3>
            </div>
          </div>
        </div>
        <div className="email-sec">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form-style">
              <input
                type="text"
                placeholder="Enter full name"
                className="info-input"
                name="fullName"
                value={emailData.fullName}
                onChange={dataChangeHandler}
                required
              />
              <input
                type="email"
                placeholder="Enter email address"
                className="info-input"
                name="emailAddress"
                value={emailData.emailAddress}
                onChange={dataChangeHandler}
                required
              />
              <textarea
                placeholder="Enter message here"
                type="text"
                className="info-input textarea"
                name="message"
                value={emailData.message}
                onChange={dataChangeHandler}
                required
              />
              <div className="email-action-container">
                <Button>Send Email</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

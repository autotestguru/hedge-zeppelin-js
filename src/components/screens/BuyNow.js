import "./styles/buy-now.css";
import bgVideo from "./../../assets/videos/digital-pattern.mp4";
import Button from "../common/Button";
import { useState } from "react";

const BuyNow = () => {
  let contractAddress = "0x0000000000000000000000000000000000";
  const [copied, setCopied] = useState(false);
  return (
    <div className="buy-now-container">
      <video id="video-container" loop autoPlay muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="overlay" />
      <div className="buy-now-content-container">
        <div className="buy-now-punch-line">
          {/* <h1>
            HZEP TOKEN, A STRONG CONCEPT WITH A REAL USE CASE AND A HUGE MARKET
          </h1> */}
          <h1>The only Sustainably Scalable MEME Token</h1>
          {/* <h3>The most charming meme token is here, and she is cute!</h3> */}
          <Button outlined>BUY HZEP ON PANCAKESWAP NOW</Button>
          <div className="contract-info">
            <span>Contract Address: {contractAddress}</span>
            <br />
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={async () => {
                if ("clipboard" in navigator) {
                  await navigator.clipboard.writeText(contractAddress);
                } else {
                  document.execCommand("copy", true, contractAddress);
                }
                setCopied(true);
              }}
              // onClick={() => {
              //   navigator.clipboard.writeText(contractAddress);
              //   setCopied(true);
              // }}
            >
              {copied ? "Copied to Clipboard" : "Copy Address"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;

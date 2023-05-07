import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="content-container">
      {/* <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video> */}
      <App />
    </div>
  </React.StrictMode>
);

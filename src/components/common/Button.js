import "./components.css";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const Button = ({ children, outlined = false }) => {
  return (
    <div>
      <button className={[outlined ? "outlined" : undefined]}>
        <span></span>
        {children}
        <span></span>
      </button>
    </div>
  );
};

export default Button;

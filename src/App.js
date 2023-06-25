import "./App.css";
import Button from "./components/common/Button";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/screens/ContactUs";
import Next from "./components/screens/Next";
import OurOffering from "./components/screens/OurOffering";
import Team from "./components/screens/Team";
import Tokenomics from "./components/screens/Tokenomics";
import WhatIsThis from "./components/screens/WhatIsThis";
import { useEffect, useState } from "react";
import Roadmap from "./components/screens/Roadmap";
import BuyNow from "./components/screens/BuyNow";
import CurrencyOptions from "./components/common/CurrencyOptions/CurrencyOptions";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showCurOpts, setShowCurOpts] = useState(false);
  useEffect(() => {
    const visibilityOnScrollHandler = () => {
      window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", visibilityOnScrollHandler);
    return () => {
      window.removeEventListener("scroll", visibilityOnScrollHandler);
    };
  }, []);

  return (
    <div className="App">
      {/* <div className="nav-container">
        <Navbar />
      </div> */}
      <Navbar />
      <BuyNow />
      <WhatIsThis />
      <Tokenomics />
      <OurOffering />
      <Roadmap />
      <Team />
      <Next />
      <ContactUs />
      {showButton && (
        <>
          <div className="currency-opt-fixed-right">
            <CurrencyOptions
              showCurOpts={showCurOpts}
              buyToken="0xfa134985a4d9D10DBf2d7dCf811055aA25d0807C"
              alignment="bottomToTop"
            />
          </div>
          <div className="buy-now-fixed-right">
            <Button
              outlined={false}
              onClick={() => setShowCurOpts(!showCurOpts)}
            >
              Buy HZEP
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

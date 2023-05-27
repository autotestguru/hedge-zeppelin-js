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

function App() {
  const [showButton, setShowButton] = useState(false);

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
        <div className="buy-now-fixed-right">
          <Button outlined={false}>Buy HDZ</Button>
        </div>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/screens/ContactUs";
import Next from "./components/screens/Next";
import OurOffering from "./components/screens/OurOffering";
import Team from "./components/screens/Team";
import Tokenomics from "./components/screens/Tokenomics";
import WhatIsThis from "./components/screens/WhatIsThis";

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <Navbar />
        <WhatIsThis />
      </div>
      <Tokenomics />
      <OurOffering />
      <Team />
      <Next />
      <ContactUs />
    </div>
  );
}

export default App;

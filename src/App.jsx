/* eslint-disable no-mixed-spaces-and-tabs */
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import ParticlesBg from "particles-bg";
import Particles from "react-particles";
import Primary from "./Components/Primary";
import Header from "./Components/Header";
import Header2 from "./Components/Header2";
import Footer from "./Components/Footer";
import Data from "./Components/Data";


const App = () => {
  return (
    <div>
      <Primary />
      <div
        style={{
          padding: " 0 40rem",
          // backgroundColor: "wheat"
        }}
      >
        {/* <Hero /> */}
        <Header />

        <Data />

        {/* <Nav /> */}
        <Footer />
      </div>
    
      {/* <ParticlesBg type="" bg={true} /> */}
      {/* <ParticlesBg type="fountain" bg={true} /> */}
    </div>
  );
};

export default App;

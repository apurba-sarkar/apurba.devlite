/* eslint-disable no-mixed-spaces-and-tabs */
// import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
// import ParticlesBg from "particles-bg";
// import Particles from "react-particles";
import Primary from "./Components/Primary";
import Header from "./Components/Header";
// import Header2 from "./Components/Header2";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
import {Routes,Route} from "react-router-dom"
import About from "./pages/About";
import Feed from "./pages/Feed";
import  "./App.css"


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
        <Header />
        {/* <Feed/> */}
        <Data />
        <Nav />
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route exact path="/feed" element={<Feed />} />
          {/* <Route path="/about" Component={<About />} /> */}
        </Routes>
        <Footer />
      </div>

      {/* <ParticlesBg type="" bg={true} /> */}
      {/* <ParticlesBg type="fountain" bg={true} /> */}
    </div>
  );
};

export default App;

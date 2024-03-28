
import Nav from "./Components/Nav";
import Primary from "./Components/Primary";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Feed from "./pages/Feed";
import "./App.css";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Guestbook from "./pages/Guestbook";
import Profile from "./Components/Profile";
import Banner from "./Components/Banner";

const App = () => {
  return (
    <div>
      <Primary />
      <div
       className="wrapper"
      >
        <Banner />
        {/* <Feed/> */}
        <Profile />
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/content" element={<Content />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/guestbook" element={<Guestbook />} />
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

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
import ProgressBar from "react-scroll-progress-bar";
import AnimatedCursor from "react-animated-cursor";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Alert from "./Components/helpers/Alert";
import Home from "./pages/Home";
import Mode from "./Components/helpers/Mode";
import { createContext, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const Modes = createContext();
const App = () => {
  const [isDark, setIsDark] = useState(true);
  // console.log(isDark);

  return (
    <div className="respo" style={{backgroundColor: isDark ?"black" : "initial"}}>
      {/* <AnimatedCursor /> */}
      <div className="mode">
        <Mode setIsDark={setIsDark} isDark={isDark} />
      </div>

      <ProgressBar bgcolor="#cc0088" duration="1" />
      <QueryClientProvider client={queryClient}>
        <Modes.Provider value={isDark}>
          <div className="sticky">
          
            <Primary />    {/* first component logo and viewer*/}
          </div>
          <Alert />
          <Banner /> {/* banner*/}
          <div className="wrapper">
            <Profile />{/* third component with personal info and stats*/}
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
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
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Modes.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
export { Modes };

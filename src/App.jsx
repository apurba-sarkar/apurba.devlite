import React, { Suspense } from "react";
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
import { useEffect } from "react";

import AnimatedCursor from "react-animated-cursor";
//lozyload
const LazyAbout = React.lazy(() => import("./pages/About"));
const LazyFeed = React.lazy(() => import("./pages/Feed"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyGuestbook = React.lazy(() => import("./pages/Guestbook"));
const LazyHome = React.lazy(() => import("./pages/Home"));
// const LazyAbout = React.lazy(() => import("./pages/About"));

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Alert from "./Components/helpers/Alert";
import Mode from "./Components/helpers/Mode";
import { createContext, useState } from "react";
// import { react } from "@vitejs/plugin-react";
import FirstLoader from './Components/helpers/FirstLoader';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLoading);
    }, 5000);
    // return () => clearTimeout(timer);
  }, []);
  // console.log(isDark);

  return (
    <>
      {isLoading ? (
        <FirstLoader/>
      ) : (
        <div
          className="respo"
          style={{ backgroundColor: isDark ? "black" : "initial" }}
        >
          <AnimatedCursor />
          <div className="mode">
            <Mode setIsDark={setIsDark} isDark={isDark} />
          </div>

          <QueryClientProvider client={queryClient}>
            <Modes.Provider value={isDark}>
              <div className="sticky">
                <Primary /> {/* first component logo and viewer*/}
              </div>
              <Alert />
              <Banner /> banner
              <div className="wrapper">
                <Profile />
                {/* third component with personal info and stats*/}
                <Nav />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<div>Loading</div>}>
                        <LazyHome />{" "}
                      </Suspense>
                    }
                  />

                  <Route
                    path="/about"
                    element={
                      <Suspense fallback={<div>Loading</div>}>
                        <LazyAbout />
                      </Suspense>
                    }
                  />
                  <Route
                    exact
                    path="/feed"
                    element={
                      <Suspense fallback={<div>Loading</div>}>
                        <LazyFeed />
                      </Suspense>
                    }
                  />
                  {/* <Route exact path="/content" element={<Content />} /> */}
                  <Route
                    exact
                    path="/contact"
                    element={
                      <Suspense fallback={<div>Loading</div>}>
                        <LazyContact />{" "}
                      </Suspense>
                    }
                  />
                  {/* <Route exact path="/projects" element={<Projects />} /> */}
                  <Route
                    exact
                    path="/guestbook"
                    element={
                      <Suspense fallback={<div>Loading</div>}>
                        <LazyGuestbook />
                      </Suspense>
                    }
                  />
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
      )}
    </>
  );
};

export default App;
export { Modes };

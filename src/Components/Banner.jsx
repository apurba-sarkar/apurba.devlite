// // import main from "main.jpg"
import "./header.css";
import "./style.css";
import { Application } from "@splinetool/runtime";
import { useEffect, useRef, useState } from "react";
// const Banner = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const app = new Application(canvas);

//     app.load("https://prod.spline.design/yStt4MBzAqchxgEu/scene.splinecode");

//     return () => {};
//   }, []);
//   const options = {
//     speed: 1,
//   };
//   return (
//     <div>
//       <div className="banner">
//         <canvas ref={canvasRef} id="canvas3d" />
//       </div>
//     </div>
//   );
// };

// export default Banner;



const Banner = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let app;
    if (isLoaded) {
      const canvas = canvasRef.current;
      app = new Application(canvas);
      app.load("https://prod.spline.design/yStt4MBzAqchxgEu/scene.splinecode");
    }

    return () => {
      if (app) {
        app.dispose();
      }
    };
  }, [isLoaded]);

  const handleScroll = () => {
    const bannerElement = document.querySelector('.banner');
    const rect = bannerElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      setIsLoaded(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="banner">
        {isLoaded && <canvas ref={canvasRef} id="canvas3d" />}
      </div>
    </div>
  );
};

export default Banner;

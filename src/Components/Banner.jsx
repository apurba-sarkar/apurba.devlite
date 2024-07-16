import "./header.css";
import "./style.css";
import { Application } from "@splinetool/runtime";
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line react/display-name
const Banner = React.memo(() => {
  // const loaders = [
  //   "https://prod.spline.design/b11Xog-PChDjiLZT/scene.splinecode",
  //   "https://prod.spline.design/n75tH-JdvygFzO07/scene.splinecode",
  //   "https://prod.spline.design/yStt4MBzAqchxgEu/scene.splinecode",

  // ];
  // const canvasRef = useRef(null);

  //  const random = Math.floor(Math.random() * 2)
  // //  console.log(random)
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const app = new Application(canvas);
  //   app.load(loaders[random]);

  //   const limitFrameRate = () => {
  //     let lastFrameTime = Date.now();
  //     const desiredFPS = 30; // Target 30 FPS
  //     const interval = 1000 / desiredFPS;

  //     const render = () => {
  //       requestAnimationFrame(render);
  //       const now = Date.now();
  //       const delta = now - lastFrameTime;

  //       // if (delta > interval) {
  //       //   app.render(); // Render only if enough time has passed
  //       //   lastFrameTime = now - (delta % interval);
  //       //   // console.log(lastFrameTime)
  //       // }
  //     };
  //     render();
  //   };

  //   limitFrameRate();

  //   return () => {
  //     app.dispose();
  //   };
  // }, []);

  return (
    <div className="banner">
      {/* <canvas ref={canvasRef} id="canvas3d" /> */}
      <div style={{color:"var(--main-color)", textAlign:"center"}}>
        <h3>

       THIS IS A LITE VERSION OF THIS WEBSITE , NO 3D ANIMATIONS AND CUSTOMIZED CURSOR 
       <br/>
       END DEVICE NEEDS MORE RESOURCES 
        </h3>
        <h3>Full version : <a href="https://apurba-dev.vercel.app" >apurba.dev</a> click here </h3>
      </div>
    </div>
  );
});

export default Banner;

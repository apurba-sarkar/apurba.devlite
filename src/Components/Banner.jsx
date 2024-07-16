import "./header.css";
import "./style.css";
import { Application } from "@splinetool/runtime";
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line react/display-name
const Banner = React.memo(() => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/n75tH-JdvygFzO07/scene.splinecode");
  
    const limitFrameRate = () => {
      let lastFrameTime = Date.now();
      const desiredFPS = 30; // Target 30 FPS
      const interval = 1000 / desiredFPS;
  
      const render = () => {
        requestAnimationFrame(render);
        const now = Date.now();
        const delta = now - lastFrameTime;
  
        if (delta > interval) {
          app.render(); // Render only if enough time has passed
          lastFrameTime = now - (delta % interval);
          // console.log(lastFrameTime)
        }
      };
      render();
    };
  
    limitFrameRate();
  
    return () => {
      app.dispose();
    };
  }, []);
  
  return (
    <div className="banner">
      <canvas ref={canvasRef} id="canvas3d" />
    </div>
  );
});

export default Banner;

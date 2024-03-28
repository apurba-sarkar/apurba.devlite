// import main from "main.jpg"
import "./header.css";
import "./style.css"
import { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";
const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    
    // Load Spline scene when component mounts
    app.load('https://prod.spline.design/yStt4MBzAqchxgEu/scene.splinecode');

    // Cleanup function
    return () => {
      // Cleanup code if necessary
    };
  }, []);
  const options={
    speed:1
  }
  return (
    <div>
      <div style={{ height: "13rem"}}>
      <canvas ref={canvasRef} id="canvas3d" />
      </div>
     
    </div>
  );
};

export default Banner;

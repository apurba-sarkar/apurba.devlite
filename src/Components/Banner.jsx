// import main from "main.jpg"
import "./header.css";
import "./style.css";
import { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";
const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);

    app.load("https://prod.spline.design/yStt4MBzAqchxgEu/scene.splinecode");

    return () => {};
  }, []);
  const options = {
    speed: 1,
  };
  return (
    <div>
      <div className="banner">
        <canvas ref={canvasRef} id="canvas3d" />
      </div>
    </div>
  );
};

export default Banner;

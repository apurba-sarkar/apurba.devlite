import { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

const About = () => {
  // const canvas = document.getElementById("canvas3d");
  // const app = new Application(canvas);
  // app.load('https://prod.spline.design/zpWBGTduK7To3adQ/scene.splinecode');
    const canvasRef = useRef(null);

  useEffect(() => {
    // const canvas = canvasRef.current;
    // const app = new Application(canvas);
    
    // Load Spline scene when component mounts
    // app.load("");

    // Cleanup function
    return () => {
      // Cleanup code if necessary
    };
  }, []);
  return (
    <div style={{ fontSize: "1.1rem" }}>
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Kon'nichiwa 👋</div>
      <div>
        I am <span style={{ color: "var(--main-color)" }}> Apurba Sarkar </span>
        . I enjoys bringing ideas to life through code ! I support for creative
        coding, which gives you the courage to construct anything. I like
        talking about this and telling individuals how to improve their talents.
      </div>
      <div style={{ marginTop: ".5rem" }}>
        I've had the honor of working for and with organizations like{" "}
        <span style={{ color: "var(--main-color)" }}>
          Qurinom Solutions, Teacheif Academy, Endosoft, and Wrkmen Tech Serv
          Solutions{" "}
        </span>{" "}
        . I currently work remotely as a developer on the web and mobile
        platforms. I do a lot of demos as well. I'm talking about a lot. When it
        comes to coding, I like playing around with React, creating CSS with or
        without JavaScript, getting geeky with Node, and working with databases.
      </div>
      <div style={{ marginTop: ".5rem" }}>
        I have a history of delivering outstanding results ahead of schedule.
        all the while paying close attention to well-structured code, design,
        accessibility, and performance. In addition to giving demos, I like to
        write articles, play games, and instruct at training facilities.
      </div>
      <div
        style={{ marginTop: ".5rem", fontSize: "1.2rem", fontWeight: "bold" }}
      >
        Reach out and say "Hey!". I look forward to hearing from you!
      </div>
      <div
        style={{ marginTop: ".5rem", fontSize: "1.rem", fontWeight: "bold" }}
      >
        {" "}
        Stay Awesome
      </div>
      {/* <div > <img src="sign.svg" alt="" style={{height:"20rem"}} /></div> */}

     
    </div>
  );
};

export default About;

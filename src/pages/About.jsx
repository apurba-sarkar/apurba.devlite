/* eslint-disable react/no-unescaped-entities */
import "./Pagestyles/About.css";
import { RiDownload2Fill } from "react-icons/ri";
import "../Components/style.css";
import Qc from "../Components/Qc";
import Hero from "../Components/Hero";
import { useContext } from "react";
import { Modes } from "../App";

const About = () => {
  const mode = useContext(Modes);
  return (
    <div style={{ fontSize: "1.1rem", textAlign: "justify" }}>
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: mode ? "white" : "initial",
          
        }}
      >
        Kon'nichiwa 👋
      </div>
      <div style={{ color: mode ? "white" : "initial",textAlign:"justify" }}>
        I am <span style={{ color: "var(--main-color)" }}> Apurba Sarkar </span>
        . I enjoys bringing ideas to life through coding. I support creative
        coding, that gives you the courage to create anything. I like discussing
        about developement and guiding individuals about how to improve their
        skills.
      </div>

      <Hero />
      <div style={{ marginTop: ".5rem", color: mode ? "white" : "initial" }}>
        I've had the honor of working with organizations like{" "}
        <span style={{ color: "var(--main-color)" }}>
          Qurinom Solutions, Teacheif Academy, Endosoft, and Wrkmen Tech Serv
          Solutions.
        </span>{" "}
        I am currently working remotely as a developer on the web and mobile
        platforms. I do a lot of demos as well. I talk alot when it comes to
        coding. I like to explore with React, creating CSS with getting geeky
        with Node, and working with databases and analysis with BI and Excel. I
        also take deep dive as professional trainner.
      </div>

      <div>
        <div
          style={{
            fontSize: "1.4rem",
            color: "var(--main-color)",
            fontWeight: "bold",
            marginTop: "1.2rem",
          }}
        >
          Tech Stack
        </div>
        <div style={{ color: mode ? "white" : "initial" }}>
          <div style={{ fontWeight: "bold" }}>FrontEnd</div>
          <div className="imgStyle">
            <img src="html.png" alt="" />
            <img src="css.png" alt="" />
            <img src="js.png" alt="" />
            <img style={{ marginLeft: ".5rem" }} src="ts.svg" alt="" />
            <img src="tailwind.svg" alt="" />
            <img src="bootstrap.png" alt="" />
            <img src="react.png" alt="" />
            <img src="astudio.svg" alt="" />
            <img src="rq.svg" alt="" />
            <img src="rtk.svg" alt="" />
            <img src="mui.png" alt="" />
          </div>
          <div style={{ fontWeight: "bold" }}>
            BackEnd
            <div className="imgStyle">
              {" "}
              <img src="node-js.png" alt="" />
              <img src="express.png" alt="" />
              <img src="mongodb.png" alt="" />
              <img src="mysql.png" alt="" />
              <img src="plsq.svg" alt="" />
              <img src="supabase.svg" alt="" />
              <img src="firebase.png" alt="" /> <img src="rest.png" alt="" />{" "}
              <img src="vercel.svg" alt="" />{" "}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: "bold" }}>Others</div>
            <div className="imgStyle">
              <img src="git.png" alt="" /> <img src="github.png" alt="" />{" "}
              <img src="lc2.png" alt="" style={{ width: "6rem" }} />
              <img src="io.png" alt="" />{" "}
              <img src="postman.png" alt="" /> <img src="figma.png" alt="" />{" "}
            </div>
          </div>
          <div className="imgStyle">
            <div style={{ fontWeight: "bold" }}>Analysis</div>
            <div>
              {" "}
              <img src="excel.png" alt="" /> <img src="powerbi.svg" alt="" />{" "}
              <img src="python.png" alt="" />{" "}
              <img src="vba.png" style={{ width: "5rem" }} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: ".5rem", color: mode ? "white" : "initial" }}>
        I have a history of delivering outstanding results ahead of schedule.
        all the while paying close attention to well-structured code, design,
        accessibility, and performance. In addition to giving demos, I like to
        write articles, watch animes, play games, and instruct at training
        facilities.
      </div>

      <Qc />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "4rem",
         
        }}
      >
        <div className="buttonStyle custom">
          <a
            href="as.pdf"
            download
            className="download"
            style={{ color: "white", backgroundColor: "transparent" }}
          >
            <span style={{ fontSize: ".9rem" }}>Resume </span>{" "}
            <RiDownload2Fill size={18} className="resume" />
          </a>
        </div>
      </div>

      <div
        style={{ marginTop: ".5rem", fontSize: "1.2rem", fontWeight: "bold", color: mode ? "white" : "initial", }}
      >
        Scan, Reach out and say "Hey!". I look forward to hearing from you!
      </div>
      <div>
        <img src="qr.png" alt="" style={{ height: "8rem" }} />
      </div>
      <div style={{ fontSize: "1.rem", fontWeight: "bold", color: mode ? "white" : "initial", }}>
        {" "}
        Stay Connected !
      </div>

      {/* <div > <img src="sign.svg" alt="" style={{height:"20rem"}} /></div> */}
    </div>
  );
};

export default About;

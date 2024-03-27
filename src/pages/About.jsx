import "./Pagestyles/About.css";

const About = () => {
  return (
    <div style={{ fontSize: "1.1rem", textAlign: "justify" }}>
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
        comes to coding, I like playing around with React, creating CSS with
        getting geeky with Node, and working with databases.
      </div>
      <div>
        <div style={{ fontSize: "1.4rem" ,}}>Tech Stack</div>
        <div>
          <div>FrontEnd</div>
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
          <div>
            BackEnd
            <div className="imgStyle">
              {" "}
              <img src="node-js.png" alt="" />
              <img src="express.png" alt="" />
              <img src="mongodb.png" alt="" />
              <img src="mysql.png" alt="" />
              <img src="PostgreSQL.png" alt="" />
              <img src="supabase.svg" alt="" />
              <img src="firebase.png" alt="" />{" "}
              <img src="rest.png" alt="" />{" "}
              <img src="vercel.svg" alt="" />{" "}
            </div>
          </div>

          <div>
            <div>Others</div>
            <div className="imgStyle">
              <img src="git.png" alt="" /> <img src="github.png" alt="" />{" "}
              <img src="lc2.png" alt="" style={{ width: "6rem" }} />
              <img src="webdriverio.png" alt="" />{" "}
              <img src="postman.png" alt="" />{" "}
              <img src="figma.png" alt="" />{" "}
            </div>
          </div>
          <div className="imgStyle">
            <div>Analysis</div>
            <div>
              {" "}
              <img src="excel.png" alt="" /> <img src="powerbi.svg" alt="" />{" "}
              <img src="python.png" alt="" />{" "}
              <img src="vba.png" style={{ width: "5rem" }} alt="" />{" "}
            </div>
          </div>
        </div>
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
        Stay Connected
      </div>
      {/* <div > <img src="sign.svg" alt="" style={{height:"20rem"}} /></div> */}
    </div>
  );
};

export default About;

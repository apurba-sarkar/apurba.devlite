import { LuBadgeCheck } from "react-icons/lu";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { Modes } from "../App";

const Header2 = () => {
  const mode = useContext(Modes);
  const toster = () => toast("request submitted");

  return (
    <div style={{ marginTop: "-1rem", color: mode ? "white" : "initial" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem ",
            fontWeight: "bolder",
            marginTop: ".5rem",
            color: "var(--main-color)",
          }}
        >
          Apurba Sarkar
        </div>
        <div style={{ color: "var(--main-color)", marginTop: "-.1rem" }}>
          <LuBadgeCheck style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
      <div style={{ fontSize: "1.1rem" }}>
        <div>Innovate with every line of code ! ✨ </div>
        <div style={{ lineHeight: "1.3 rem" }}>
          {" "}
          Web Developer. React Native Developer. Analyst. Content Writer. IT
          Trainer Specialist{" "}
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            paddingTop: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            //  lineHeight :"1rem"
          }}
        >
          <div className="small">
            <RiHomeOfficeFill />
            <div>Remote</div>
          </div>

          <div className="small">
            <AiFillExperiment />
            <div>Links</div>
          </div>
          <div className="small">
            <FaBirthdayCake />
            <div>June 17th</div>
          </div>
          <div className="small">
            <FaCalendarAlt />
            <div>Created on March 25th, 2024</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "1rem", marginBottom: ".3rem" }}>
            Keep up to date with my latest projects and Technologies
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <input
                className="inputtext"
                type="text"
                placeholder="enter your email"
                style={{
                  backgroundColor: mode ? "var(--dark-bg)" : "#f1eeee",
                  color: mode ? "white" : "var(--main-color)",
                }}
              />
            </div>
            <button className="sendbutton" onClick={toster}>
              Send
            </button>
            <ToastContainer />
          </div>
          <div
            style={{
              marginTop: ".5rem",
              fontSize: ".9rem",
              paddingBottom: "1.5rem",
            }}
          >
            No Spam, Unsubscribe me any time
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;

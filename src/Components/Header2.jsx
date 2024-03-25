import { LuBadgeCheck } from "react-icons/lu";
import { RiHomeOfficeFill } from "react-icons/ri";
import { PiLinkSimple } from "react-icons/pi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Header2 = () => {
  const toster = () => toast("request submitted");

  return (
    <div style={{ marginTop: "-1rem" }}>
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
            color: "var(--secondary-color)",
          }}
        >
          <div className="small">
            <RiHomeOfficeFill />
            <div>Available</div>
          </div>

          <div className="small">
            <FaLink />
            <div>Links</div>
          </div>
          <div className="small">
            <FaBirthdayCake />
            <div>June 17th</div>
          </div>
          <div className="small">
            <FaCalendarAlt />
            <div>Created March 25th</div>
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
          <div style={{ marginTop: "2rem" }}>
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
              />
            </div>
            <button className="sendbutton" onClick={toster}>
              Send
            </button>
            <ToastContainer />
          </div>
          <div
            style={{
              marginTop: "1rem",
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

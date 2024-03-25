import { LuBadgeCheck } from "react-icons/lu";
import { RiHomeOfficeFill } from "react-icons/ri";
import { PiLinkSimple } from "react-icons/pi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import "./style.css";
const Header2 = () => {
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
      <div>
        <div>Innovate with every line of code ! ✨ </div>
        <div>
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
            <div>Birthday</div>
          </div>
          <div className="small">
            <FaCalendarAlt />
            <div>Joinned</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" ,justifyContent:"center",alignItems:"center"}}>
          <div style={{marginTop:"2rem"}}>Keep up to date with my latest projects and adventures</div>
          <div>
            <div><input type="text" placeholder="enter your email" /></div>
            <div>button</div>
          </div>
          <div>No Spam, Unscribe me any time</div>
        </div>
      </div>
    </div>
  );
};

export default Header2;

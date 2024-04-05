import { NavLink } from "react-router-dom";
import "./style.css";
import { useContext } from "react";

import { Modes } from "../App";

const Nav = () => {
  const mode = useContext(Modes);

  console.log(mode);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",

        // gap: "1rem",
        // flexDirection: "column",
      }}
    >
      <NavLink
        to="/feed"
        style={{ color: mode ? "var(--main-color)" : "var(--secondary-color)" }}
      >
        Feed
      </NavLink>
      <NavLink
        to="/about"
        style={{ color: mode ? "var(--main-color)" : "var(--secondary-color)" }}
      >
        About{" "}
      </NavLink>
      {/* <NavLink to="/content">Content</NavLink> */}
      <NavLink
        to="/contact"
        style={{ color: mode ? "var(--main-color)" : "var(--secondary-color)" }}
      >
        Contact
      </NavLink>
      <NavLink
        to="/guestbook"
        style={{ color: mode ? "var(--main-color)" : "var(--secondary-color)" }}
      >
        Guestbook
      </NavLink>
    </nav>
  );
};

export default Nav;

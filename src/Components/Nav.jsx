import { NavLink } from "react-router-dom";
import "./style.css"

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap:"wrap",
        // gap: "1rem",
        // flexDirection: "column",
      }}
    >
      <NavLink to="/feed">Feed</NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/content">Content</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/guestbook">Guestbook</NavLink>
    </nav>
  );
};

export default Nav;

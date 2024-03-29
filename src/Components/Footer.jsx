
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaRssSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  // console.log(currentYear);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        marginTop:"3rem",
        // backgroundColor:"red",
        paddingTop:"1rem"
      }}
    >
      <div style={{ display: "flex", gap: ".4rem", padding: "0 2rem" }}>
        <FaRssSquare />
        <FaFacebook />
        <FaLinkedin />
        <FaSquareXTwitter />
        <FaMedium />
        <FaGithub />
        <BsFillThreadsFill />
        <FaSquareInstagram />
      </div>
      <div style={{ margin: "1rem 0 4rem 0", fontSize: "1.2rem" }}>
        Apurba &copy; {currentYear}
      </div>
    </div>
  );
};

export default Footer;

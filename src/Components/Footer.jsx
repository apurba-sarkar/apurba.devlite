import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
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
        marginTop:"2rem"
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

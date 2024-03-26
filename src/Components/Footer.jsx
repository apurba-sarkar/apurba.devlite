import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuRss } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

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
        
      }}
    >
      <div style={{display:"flex",gap:".4rem",padding:"0 2rem"}}>
        <CiLinkedin />
        <FaThreads />
        <CiFacebook />
        <FaXTwitter />
        <FaMedium />
        <FaGithub />
        <LuRss />
        <FaInstagram />
      </div>
      <div>Apurba &copy; {currentYear}</div>
    </div>
  );
};

export default Footer;

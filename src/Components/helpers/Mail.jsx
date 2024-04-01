import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Mail.css";

export const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6ph4o1i", "template_1tb8ale", form.current, {
        publicKey: "7Hokl6n3kFebqvCfG",
      })
      .then(
        () => {
          toast.success("Mail Send Successfully !");
        },
        (error) => {
          toast.error("Please try again after sometime");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="main-form">
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Ping me 🔔 </div>
      <div style={{ textAlign: "justify", marginBottom: "2rem" }}>
        "Are you ready to take your project to new heights? I invite you to
        consider working with me as your project maker. With a deep commitment
        to quality and a penchant for problem-solving, I'm eager to bring your
        vision to life. I'm dedicated to delivering solutions that exceed
        expectations. Let's embark on this journey together, where your ideas
        meet my expertise. Your satisfaction is my priority, and I'm confident
        that together, we can achieve remarkable results. I cordially invite you
        to give me the opportunity to demonstrate what I can do for you. Please
        fill your details below.
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label for="name">Name</label>
        <input type="text" name="user_name" id="name"/>
        <label for="email">Email</label>
        <input type="email" name="user_email" id="email" />
        <label for="msg">Message</label>
        <textarea name="message" className="message" rows="8" id="msg" />
        <button type="submit" onClick={sendEmail} className="sbutton">
          Send
        </button>
        <Toaster />
      </form>
    </div>
  );
};

/* eslint-disable react/no-unknown-property */
import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Mail.css";
import { useForm } from "react-hook-form";
import { Modes } from "../../App";

export const Mail = () => {
  // const [showForm,setShowForm] =useState(false)
  const mode = useContext(Modes);
  const form = useRef();

  const sendEmail = (e) => {
    // if (form.current != "") {
    //   e.preventDefault();
    //
    // }
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm("service_6ph4o1i", "template_1tb8ale", form.current, {
        publicKey: "7Hokl6n3kFebqvCfG",
      })
      .then(
        () => {
          toast.success("Mail Send Successfully !");
          form.current.reset();
        },
        (error) => {
          toast.error("Please try again after sometime");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="main-form" style={{ color: mode ? "white" : "initial" }}>
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Ping me 🔔 </div>
      <div style={{ textAlign: "justify", marginBottom: "2rem" }}>
        "Are you ready to take your project to the new heights? I invite you to
        join the hands with me as your project creator. With a deep commitment
        to the quality and a penchant for problem-solving, I'm eager to bring
        your vision into life. I'm dedicated to delivering solutions that exceed
        the expectations. Let's embark on this journey together, where your
        ideas meet my expertise. Your satisfaction is my priority. I'm confident
        that together, we can achieve remarkable results. I cordially invite you
        to give me the opportunity to demonstrate what I can achieve for you.
        Please fill your details below.
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label for="name">Name</label>
        <input
          type="text"
          name="user_name"
          id="name"
          style={{
            backgroundColor: mode ? "var(--dark-bg)" : "#f1eeee",
            color: mode ? "white" : "var(--main-color)",
          }}
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="user_email"
          id="email"
          style={{
            backgroundColor: mode ? "var(--dark-bg)" : "#f1eeee",
            color: mode ? "white" : "var(--main-color)",
          }}
        />
        <label for="msg">Message</label>
        <textarea
          style={{
            resize: "none",
            backgroundColor: mode ? "var(--dark-bg)" : "#f1eeee",
            color: mode ? "white" : "var(--main-color)",
          }}
          name="message"
          className="message"
          rows="8"
          id="msg"
        />
        <button type="submit" onClick={sendEmail} className="sbutton">
          Send
        </button>
        <Toaster />
      </form>
    </div>
  );
};

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
        // publicKey: "7Hokl6n3kFebqvCfG",
      })
      .then(
        () => {
          toast.success("Mail Send Successfully !");
        },
        (error) => {
          toast.error("Please try again after");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="main-form">
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Ping me 😜 </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="user_name" placeholder="enter your name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="enter your email" />
        <label>Message</label>
        <textarea name="message" placeholder="please say something" />
        <input type="submit" value="Send" className="sbutton" />
        <Toaster />
      </form>
    </div>
  );
};

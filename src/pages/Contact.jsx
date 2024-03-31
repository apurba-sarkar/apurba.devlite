import { Mail } from "../Components/helpers/Mail";
import "./Pagestyles/Contact.css";

const Contact = () => {
  return (
    <div>
      <Mail />
      <div className="contact">
        {/* <div>Location</div> */}
        <img src="kolkata.png" alt="" height="200rem" />
      </div>
      <div className="contact">
        {/* <img src="email.png" alt="" height="150rem" /> */}
      </div>
    </div>
  );
};

export default Contact;

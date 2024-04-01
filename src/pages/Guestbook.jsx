import { useState } from "react";
import "../Components/helpers/Mail.css";
const Guestbook = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Response Time </div>
      <div>
        "Thank you for considering me for your project! I'm thrilled at the
        opportunity to collaborate with you. Please provide some feedback of
        your experience, and it will be added below of this Guestbook page.
      </div>
      <div className="gb">
        <div >
          {isActive ? (
            <Collapsed setIsActive={setIsActive} />
          ) : (
            <button className=".sbutton
             collapsed" onClick={() => setIsActive(!isActive)}> Feedback</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;

const Collapsed = ({ setIsActive }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" , width:"20rem"}}>
      {/* <button>Guestbook</button> */}
      <label for="name">Name</label>
      <input type="text" id="name" className="message" />
      <label for="comment">Comment</label>
      <textarea name="" rows="8"
       className="message"
       id="comment"></textarea>
      <div>
        <button className="cbutton" onClick={() => setIsActive(false)}>
          x
        </button>
        <button className="sbutton" id="cbtn">
          Comment
        </button>
      </div>
    </div>
  );
};

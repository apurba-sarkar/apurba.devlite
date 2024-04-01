import { useState } from "react";
import "../Components/helpers/Mail.css";
import { useForm } from "react-hook-form";
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
        <div>
          {isActive ? (
            <Collapsed setIsActive={setIsActive} />
          ) : (
            <button
              className=".sbutton
             collapsed"
              onClick={() => setIsActive(!isActive)}
            >
              {" "}
              Feedback
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;

const Collapsed = ({ setIsActive }) => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "20rem" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <button>Guestbook</button> */}
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        className="message"
        defaultValue=""
        {...register("name")}
      />
      <label for="comment">Comment</label>
      <textarea
        name=""
        rows="8"
        className="message"
        id="comment"
        {...register("comment")}
        defaultValue=""
      ></textarea>
      <div>
        <button className="cbutton" onClick={() => setIsActive(false)}>
          x
        </button>
        <button className="sbutton" id="cbtn">
          Comment
        </button>
      </div>
    </form>
  );
};

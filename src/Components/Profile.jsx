import { FaLinkedinIn } from "react-icons/fa";

import Header2 from "./Header2";
import "../Components/style.css";



const Profile = () => {
  
  return (
    <div style={{ marginTop: "-5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // gap: "6rem",
        }}
      >
        <div>
          <img src="11.png" alt="" className="image" />
        </div>
        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <button
            className="buttonStyle"
            onClick={() => (
              window.open("https://www.linkedin.com/in/sarkar-apurba"), "_blank"
            )}
          >
            <div className="follow">
              <div style={{ color: "white" }}>Follow</div>

              <FaLinkedinIn />
            </div>
          </button>
        </div>
      </div>
      <Header2 />
     
    </div>
  );
};

export default Profile;

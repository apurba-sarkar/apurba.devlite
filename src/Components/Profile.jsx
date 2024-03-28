import { FaLinkedinIn } from "react-icons/fa";

import Header2 from "./Header2";

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
          <img src="main.jpg" alt="" className="image" />
        </div>
        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <button
            style={{
              //   width: "6rem",
              // padding: ".8rem 1rem",
              // borderRadius: "2rem",
              backgroundColor: "var(--main-color)",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            onClick={() => (
              window.open("https://www.linkedin.com/in/sarkar-apurba"), "_blank"
            )}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <div style={{ marginTop: "2px" }}>Follow</div>

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

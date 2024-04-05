import { useContext } from "react";
import Popups from "./helpers/Popups";
import "./style.css";
import { Modes } from "../App";

const FeedBox = () => {
  const mode = useContext(Modes);
  return (
    <div className="feedbox">
      <div className="feedbox-text">
        <textarea
          placeholder="Start writing..."
          style={{
            backgroundColor: mode ? "var(--dark-bg)" : "#f1eeee",
            color: mode ? "white" : "var(--main-color)",
          }}
        >
          write
        </textarea>
        <div
          style={{
            gap: ".2rem",
            display: "flex",
            alignItems: "center",
          }}
          // className="links"
        >
          <div
            className="text"
            style={{ backgroundColor: mode ? "var(--dark-bg)" : "#f1eeee" }}
          >
            Link
          </div>

          <input
            type="text"
            className="links"
            placeholder="enter suppoted link"
            style={{
              backgroundColor: mode ? "var(--dark-bg)" : "#f1eeee",
              borderColor: "var(--main-color)",
              outline: "none",
              color: mode ? "white" : "var(--main-color)",
            }}
          />
        </div>
      </div>

      <Popups />
    </div>
  );
};

export default FeedBox;

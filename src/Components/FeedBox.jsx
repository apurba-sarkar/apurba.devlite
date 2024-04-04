import Popups from "./helpers/Popups";
import "./style.css";

const FeedBox = () => {
  return (
   
    <div className="feedbox">
      <div className="feedbox-text">
        <textarea placeholder="Start writing...">write</textarea>
        <div
          style={{ gap: ".2rem", display: "flex", alignItems: "center" }}
          className="link"
        >
          <div className="text">Link</div>
          <input
            type="text"
            className="links"
            placeholder="enter suppoted link"
          />
        </div>
      </div>

      <Popups />
    </div>
  );
};

export default FeedBox;

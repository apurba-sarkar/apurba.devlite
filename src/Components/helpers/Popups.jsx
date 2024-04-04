import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsInfoLg } from "react-icons/bs";
import "./Popup.css"
const Popups = () => {
  return (
    <Popup
      trigger={
        <button className="post">
          post
          {/* <BsInfoLg /> */}
        </button>
      }
      position="left top"
    >
      <div>You don't have permission to post</div>
    </Popup>
  );
};

export default Popups;

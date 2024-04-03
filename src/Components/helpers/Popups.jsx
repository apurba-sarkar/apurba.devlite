import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsInfoLg } from "react-icons/bs";
const Popups = () => {
  return (
    <Popup trigger={<button> <BsInfoLg /></button>} position="right center">
      <div>you can play</div>
    </Popup>
  );
};

export default Popups;

/* eslint-disable react/prop-types */
import { MdNightsStay } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import "./Mode.css";
const Mode = ({ setIsDark, isDark }) => {
  // console.log(isDark)
  return (
    <button
      className="modebutton"
      // style={{ backgroundColor: isDark ? "white" : "initial" }}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <MdNightsStay /> : <IoIosSunny color="white"/>}
    </button>
  );
};

export default Mode;

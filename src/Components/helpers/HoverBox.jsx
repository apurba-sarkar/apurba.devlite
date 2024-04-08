import "./HoverBox.css";
import { IoMdInformationCircle } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
const HoverBox = () => {
  return (
    <div
      style={{
        width: "14rem",
        // color:"white"
      }}
    >
      <div
        style={{
          display: "flex",
          //   alignItems: "center",
          gap: ".5rem",
        }}
      >
        <img
          src="main3.jpg"
          style={{ height: "4rem", borderRadius: "50%" }}
          alt=""
        />
        <div>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Apurba Sarkar
          </div>
          <div>
            <div className="datas">
              <IoMdInformationCircle />
              <div>Personal portfolio website</div>
            </div>
            <div className="datas">
              <MdSchool />
              <div> Jaipur National University</div>
            </div>
          </div>
          <div>
            {/* <div>
              <FaRegEye />
            </div>
            <div> </div> */}
          </div>
        </div>
      </div>
      <div className="dlg-btn-wrapper">
        <button className="btn1 style">follow</button>
        <button className="btn2 style">About</button>
      </div>
    </div>
  );
};

export default HoverBox;

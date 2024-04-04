import "./style.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import KeenSlider from "./helpers/KeenSlider";
// import { getGuestData } from "../../services/apidata";

const Feedpost = ({ data }) => {
  // console.log(data);
  return (
    <div className="mainbox">
      <div>
        <div className="h1">{data.heading}</div>
        <div className="desc">{data.desc}</div>

        <KeenSlider
          image1={data.image1}
          image2={data.image2}
          image3={data.image3}
        />

        <div className="lnk">{data.links}</div>
        <div className="tag">{data.tags}</div>
      </div>
      <div className="stats">
        <div className="inct">
          <button className="like-btn">
            {" "}
            <AiFillLike />
            <AiOutlineLike />
          </button>
          <div>{data.likes}</div>
        </div>
        <div>{data.created_at}</div>
      </div>
    </div>
  );
};

export default Feedpost;

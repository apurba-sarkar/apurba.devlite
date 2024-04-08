/* eslint-disable react/prop-types */
import "./style.css";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import KeenSlider from "./helpers/KeenSlider";
import { dateparser } from "./helpers/dateparser";
import { updateLikes } from "../services/apidata";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
// import { useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Modes } from "../App";
const Feedpost = ({ data }) => {
  const mode = useContext(Modes);
  // console.log(data);
  const queryClient = useQueryClient();
  const onLike = () => {};

  const { mutate, isLoading } = useMutation({
    mutationFn: updateLikes,
    onSuccess: () => {
      // console.log("new note added succesfully!");
      toast.success("Like added Successfully!");
      // toast.success("new note added succesfully!");
      queryClient.invalidateQueries({
        queryKey: ["LikeData"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
      // console.log(err);
    },
    // if (isLoading) return <PropagateLoader/>;
  });

  return (
    <div className="mainbox">
      <div>
        <div className="h1">{data.heading}</div>
        <div
          className="subhead"
          style={{ color: mode ? "var(--dark-grey)" : "initial" }}
        >
          {data.subhead}
        </div>
        {data.image1 ? (
          <KeenSlider
            image1={data.image1}
            image2={data.image2}
            image3={data.image3}
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: mode ? "white" : "initial" }}>
              {data.status}
            </div>
          </div>
        )}

        {data.image1 ? (
          <>
            {" "}
            <div
              className="desc"
              style={{ color: mode ? "white" : "initial" }}
              // style={{ color: "white" }}
            >
              {data.desc}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                marginLeft: "-1rem",
              }}
            ></div>{" "}
          </>
        ) : (
          ""
        )}

        {/* <div className="lnk">{data.links}</div> */}
        <div className="tag">{data.tags}</div>
        {data.image1 ? (
          <a className="sourcecode" href={data.link} target="_blank">
            SourceCode
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="stats">
        <div className="inct">
          {/* <button className="like-btn">
            {" "}
            <AiFillLike />
            <AiOutlineLike />
          </button> */}
          {/* <div>{data.likes}</div> */}
        </div>
        <div style={{ color: "var(--main-color)", fontWeight: "bold" }}>
          {" "}
          posted at :<span> {dateparser(data.created_at)}</span>
        </div>
      </div>
    </div>
  );
};

export default Feedpost;

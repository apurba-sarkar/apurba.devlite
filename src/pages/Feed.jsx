import FeedBox from "../Components/FeedBox";
import Feedpost from "../Components/Feedpost";
import "./Pagestyles/Feed.css";
import { useQuery } from "@tanstack/react-query";
import { getFeeds } from "../services/apidata";
import { BarLoader } from "react-spinners";
import { useContext } from "react";
import { Modes } from "../App";

const Feed = () => {
  const mode = useContext(Modes);
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["FeedData"],
    queryFn: getFeeds,
  });

  // console.log(list);
  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        {" "}
        <BarLoader color="#cc0088" />
      </div>
    );

  return (
    <div className="feeds">
      <div style={{ fontSize: "3rem", color: mode ? " white" : "initial" }}>
        Timeline
      </div>
      <div style={{ color: mode ? "white" : "initial" }}>
        Welcome to our Timeline Page, This offers a dynamic platform to monitor
        an array of feeds and timelines. This page is your gateway to staying
        informed about news, and developments across various projects and
        topics.
      </div>
      <FeedBox />

      <div className="resFeed">
        {list &&
          list.map((data) => {
            return <Feedpost key={data.id} data={data} />;
          })}
      </div>
    </div>
  );
};

export default Feed;

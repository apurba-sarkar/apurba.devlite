import FeedBox from "../Components/FeedBox";
import Feedpost from "../Components/Feedpost";
import "./Pagestyles/Feed.css";
import { useQuery } from "@tanstack/react-query";
import { getFeeds } from "../services/apidata";
import { BarLoader } from "react-spinners";

const Feed = () => {
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["FeedData"],
    queryFn: getFeeds,
  });
  console.log(list);
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
    <div>
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

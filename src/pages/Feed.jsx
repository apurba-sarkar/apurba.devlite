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

  function trans(time) {
    const timestamp = new Date(time);
    const year = timestamp.getFullYear();
    const month = ("0" + (timestamp.getMonth() + 1)).slice(-2); // Adding leading zero if needed
    const day = ("0" + timestamp.getDate()).slice(-2); // Adding leading zero if needed

    return `${year}-${month}-${day}`;
  }

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
    <div className="feeds">
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

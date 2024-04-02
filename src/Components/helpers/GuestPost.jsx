/* eslint-disable react/prop-types */
import { TiPin } from "react-icons/ti";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { getGuestData } from "../../services/apidata";
import { useQuery } from "@tanstack/react-query";

function AllPost() {
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["guestData"],
    queryFn: getGuestData,
  });

  console.log(list);
  //  if(list){
  //   const pinnedList= list.filter(comment=>comment.pinned == true)
  //   console.log("---" ,pinnedList)
  //   // setNews(pinnedList)
  //  }

  //
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "var(--main-color)",
        }}
      >
        Feedbacks
      </div>
      <div
        style={{
          marginTop: ".5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {list && list.map((list) => <GuestPost list={list} key={list.id} />)}
        {/* <GuestPost/> */}
      </div>
    </div>
  );
}

function GuestPost({ list }) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div
        style={{
        
          // backgroundColor: "red",
        
        }}
      >
       <img src="anaya.jpg" alt=""  style={{ height: "3.5rem" ,  aspectRatio: "1",
          borderRadius: "50%",border:".15rem solid var(--main-color)"}} />
      </div>
      <div style={{ width: "70vw" }}>
        <div style={{ fontSize: ".8rem",display:"flex", gap:".3rem",alignItems:"center" }}>
          {list.pinned ? (
            <>
              {" "}
              <TiPin color="#495057" size="1rem" />
              <span color="white">Pinned by @Apurba</span>
            </>
          ) : (
            ""
          )}
        </div>

        <div
          style={{
            marginTop: "-.4rem",
          }}
        >
          <div style={{ fontSize: "1.1rem", color:"var(--main-color)" }}>{list.name}</div>
          <div
            style={{
              marginTop: "-.2rem",
              textAlign: "justify",
              lineHeight: "1.2rem",
              fontSize:".9rem"
              // marginTop:"rem"
            }}
          >
            {list.comment}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPost;

/* eslint-disable react/prop-types */
import { TiPin } from "react-icons/ti";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { getGuestData } from "../../services/apidata";
import { useQuery } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import { FaReplyd } from "react-icons/fa";
import { BsReplyAllFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

function AllPost() {
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["guestData"],
    queryFn: getGuestData,
  });

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
  console.log(list);
  //  if(list){
  //   const pinnedList= list.filter(comment=>comment.pinned == true)
  //   console.log("---" ,pinnedList)
  //   // setNews(pinnedList)
  //  }

  //

  return (
    <div style={{ marginTop: "1.5rem", }}>
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
  function trans(time) {
    const timestamp = new Date(time);
    const year = timestamp.getFullYear();
    const month = ("0" + (timestamp.getMonth() + 1)).slice(-2); // Adding leading zero if needed
    const day = ("0" + timestamp.getDate()).slice(-2); // Adding leading zero if needed

    return `${year}-${month}-${day}`;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: ".7rem",
          backgroundColor: "#fbdcff",
          borderRadius: "1.1rem",
          padding: ".6rem .6rem",
          // justifyContent:"center",
          // alignItems:"center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="anaya.jpg"
            alt=""
            style={{
              height: "3.5rem",
              aspectRatio: "1",
              borderRadius: "50%",
              border: ".15rem solid var(--main-color)",
              // backgroundColor:"green"
            }}
          />
        </div>
        <div style={{ width: "70vw" }}>
          <div
            style={{
              fontSize: ".8rem",
              display: "flex",
              gap: ".3rem",
              alignItems: "center",
            }}
          >
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: "1.1rem", color: "var(--main-color)" }}>
                {list.name}
              </div>
              {/* <div>{list.created_at} </div> */}
              <div
                style={{
                  fontSize: ".7rem",
                  // backgroundColor: "grey",
                  borderRadius: "1rem",
                  padding: " 0 .4rem",
                  color: "var(--main-color)",
                }}
              >
                {trans(list.created_at)}
              </div>
            </div>

            <div
              style={{
                marginTop: "-.2rem",
                textAlign: "justify",
                lineHeight: "1rem",
                fontSize: ".9rem",
                // marginTop:"rem"
              }}
            >
              {list.comment}
            </div>
          </div>
        </div>
      </div>
      {/* reply box */}
      {list.reply ? (
        <div style={{ marginLeft: "3.5rem", marginTop: ".5rem" }}>
          <div style={{ display: "flex", gap: ".4rem", fontSize: "1.3rem" }}>
            <BsReplyAllFill color="#cc0088" />
            <div style={{}}>
              <img
                src="main3.jpg"
                alt=""
                style={{
                  height: "2.2rem",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  border: ".15rem solid var(--main-color)",
                  // display:"flex"
                }}
              />
            </div>

            <div
              style={{
                width: "70vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: "-.4rem",
                  display: "flex",
                  flexDirection: "column",
                  // alignItems:"center"
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ fontSize: ".9rem", color: "var(--main-color)" }}
                  >
                    Apurba
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "-.2rem",
                    textAlign: "justify",
                    lineHeight: "1.1rem",
                    fontSize: ".8rem",
                  }}
                >
                  {list.replymessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AllPost;

/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import "../Components/helpers/Mail.css";
import { useForm } from "react-hook-form";
import AllPost from "../Components/helpers/GuestPost";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { postGuestData } from "../services/apidata";
import { ToastContainer, toast } from "react-toastify";
import "./Pagestyles/GuestBook.css";
import { Modes } from "../App";

const Guestbook = () => {
  const [isActive, setIsActive] = useState(false);
  const mode = useContext(Modes);
  return (
    <div>
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: mode ? "white" : "initial",
        }}
      >
        Response Time{" "}
      </div>
      <div style={{ color: mode ? "white" : "initial" }}>
        Thank you for considering me for your project! I'm thrilled at the
        opportunity to collaborate with you. Please provide some feedback of
        your experience and those will be added below of this page.
      </div>
      <div className="gb">
        <div>
          {isActive ? (
            <Collapsed setIsActive={setIsActive} />
          ) : (
            <button
              className=".sbutton
             collapsed border"
              style={{
                boxShadow: mode
                  ? "0 0 0 5px black, 0 0 0 8px var(--main-color)"
                  : "initial",
              }}
              onClick={() => setIsActive(!isActive)}
            >
              {" "}
              Click here for Feedback
            </button>
          )}
        </div>
      </div>
      <AllPost />
    </div>
  );
};

export default Guestbook;

// eslint-disable-next-line react/prop-types
const Collapsed = ({ setIsActive }) => {
  const mode = useContext(Modes);
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  // console.log(errors);

  function onSubmit(data) {
    mutate(data);
    // console.log(data);
    reset();
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: postGuestData,
    onSuccess: () => {
      // console.log("new note added succesfully!");
      toast.success("Comment added Successfully!");
      // toast.success("new note added succesfully!");
      queryClient.invalidateQueries({
        queryKey: ["guestData"],
      });
      setIsActive(false);
    },

    onError: (err) => {
      toast.error(err.message);
      // console.log(err);
    },
    // if (isLoading) return <PropagateLoader/>;
  });

  function onError(error) {
    console.log(error);
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      className="guestb"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {/* <button>Guestbook</button> */}
      <label for="name" style={{ color: mode ? "white" : "initial" }}>
        Name
      </label>
      <input
        type="text"
        id="name"
        className="message"
        style={{ backgroundColor:mode ? "var(--dark-bg)":"#f1eeee"}}
        defaultValue=""
        {...register("name", {
          required: "This field is required",
        })}
      />
      {errors?.name?.message && (
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: ".8rem",
            marginTop: ".3rem",
            color: "red",
           
          }}
        >
          <span> * Can't be empty</span>
        </div>
      )}
      <label
        for="comment"
        style={{ color: mode ? "white" : "initial" }}
      >
        Comment
      </label>
      <textarea
        name=""
        rows="8"
        className="message"
        id="comment"
        {...register("comment", {
          required: "This field is required",
        })}
        defaultValue=""
        style={{ resize: "none", backgroundColor:mode ? "var(--dark-bg)":"#f1eeee" }}
      ></textarea>
      {errors?.name?.message && (
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: ".8rem",
            marginTop: ".3rem",
            color: "red",
          }}
        >
          <span> * Can't be empty</span>
        </div>
      )}
      <div>
        <button className="cbutton" style={{backgroundColor: mode ? "black":"initial"}} onClick={() => setIsActive(false)}>
          x
        </button>
        <button className="sbutton" id="cbtn" style={{color:mode?"black":"initial"}}>
          Comment
        </button>
      </div>
    </form>
  );
};

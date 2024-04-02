/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "../Components/helpers/Mail.css";
import { useForm } from "react-hook-form";
import AllPost from "../Components/helpers/GuestPost";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { postGuestData } from "../services/apidata";
import { ToastContainer, toast } from 'react-toastify';

const Guestbook = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Response Time </div>
      <div>
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
             collapsed"
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
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  function onSubmit(data) {
    mutate(data);
    console.log(data);
    reset();
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: postGuestData,
    onSuccess: () => {
      console.log("new note added succesfully!");
      toast.success("Comment added Successfully!")
      // toast.success("new note added succesfully!");
      queryClient.invalidateQueries({
        queryKey: ["guestData"],
      });
    },

    onError: (err) => {
      // toast.error(err.message);
      // console.log(err);
    },
    // if (isLoading) return <PropagateLoader/>;
  });

  function onError(error) {
    console.log(error);
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "20rem" }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {/* <button>Guestbook</button> */}
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        className="message"
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
            color:"red"
          }}
        >
          <span> * Can't be empty</span>
        </div>
      )}
      <label for="comment">Comment</label>
      <textarea
        name=""
        rows="8"
        className="message"
        id="comment"
        {...register("comment", {
          required: "This field is required",
        })}
        defaultValue=""
      ></textarea>
        {errors?.name?.message && (
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: ".8rem",
            marginTop: ".3rem",
            color:"red"
          }}
        >
          <span> * Can't be empty</span>
        </div>
      )}
      <div>
        <button className="cbutton" onClick={() => setIsActive(false)}>
          x
        </button>
        <button className="sbutton" id="cbtn">
          Comment
        </button>
      </div>
    </form>
  );
};

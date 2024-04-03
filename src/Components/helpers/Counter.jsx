import CountUp from "react-countup";
import Lottie from "lottie-react";
import eye from "./peye.json";
import { useEffect, useState } from "react";
import { getVisiters, postVisiters } from "../../services/apidata";
import { useQuery } from "@tanstack/react-query";

const Counter = () => {
  const {
    isLoading,
    data: visiters,
    error,
  } = useQuery({
    queryKey: ["visiterData"],
    queryFn: getVisiters,
  });

  //   console.log(postVisiters)
  //   console.log(visiters);

  const vNumber = visiters?.[0]?.visit;
  console.log(vNumber);

  useEffect(() => {
    if (vNumber !== undefined) {
      postVisiters(vNumber);
      // console.log("pick")
      console.log(vNumber);
    }
  }, [vNumber]);

  return (
    <div
      style={{
        display: "flex",
        gap: ".4rem",
        alignItems: "center",
        color: "var(--main-color)",
      }}
    >
      <Lottie
        animationData={eye}
        autoplay
        loop
        style={{ height: "2.2rem", aspectRatio: "1" }}
      />
      {vNumber && (
        <CountUp
          end={vNumber}
          style={{ fontSize: "1.3rem", fontWeight: "bold" }}
        />
      )}
    </div>
  );
};

export default Counter;

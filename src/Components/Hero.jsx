import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:" var(--main-color);"
      }}
    >
      <div style={{ fontSize:"4rem",color:" var(--main-color)",fontWeight:"bold"}}>
        <Typewriter
          options={{
            strings: ["DEVELOPER", "UI/UX", "ANALYST", "TECH TRAINER"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

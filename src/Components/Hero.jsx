import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div style={{color:"white"}}>
      <div>APURBA</div>
      <div> I am a</div>

      <div style={{color:"blue"}}>
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

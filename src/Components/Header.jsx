// import main from "main.jpg"
import "./header.css";
import Hero from "./Hero";
import "./style.css"
import ParticlesBg from 'particles-bg'

const Header = () => {
  const options={
    speed:1
  }
  return (
    <div>
      <div style={{ height: "14rem",backgroundColor:"var(--main-color)"}}>
      {/* <ParticlesBg type="polygon"  config={options} /> */}
        {/* <Hero/> */}
      </div>
     
    </div>
  );
};

export default Header;

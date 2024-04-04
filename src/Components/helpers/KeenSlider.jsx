import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./ks.css";
import AutoScrollSlider from "./AutoScrollSlider";

const KeenSlider = ({image1,image2,image3}) => {
  
  return (
    // <div ref={sliderRef} className="keen-slider slicks">
    <AutoScrollSlider>
      <img
        src={image1}
        className="keen-slider__slide"
        style={{ height: "15rem" ,objectFit:"cover"}}
      />
      <img
        src={image2}
        className="keen-slider__slide"
        style={{ height: "15rem" ,objectFit:"cover"}}
      />
      <img
        src={image3}
        className="keen-slider__slide"
        style={{ height: "15rem" ,objectFit:"cover"}}
      />
    </AutoScrollSlider>
    // </div>
  );
};

export default KeenSlider;

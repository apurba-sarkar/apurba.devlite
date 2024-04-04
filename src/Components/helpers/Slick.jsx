import Slider from "react-slick";
const Slick = () => {
  var settings = {
      infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 3000,
        // vertical: true,
        // verticalSwiping: true,
        
        
  }
  return (
    <Slider {...settings}>
      <div style={{backgroundColor:"red",width:"40rem",height:"10rem"}}>
        <img src="anaya.jpg" alt="" width="200rem " style={{width:"100% ",aspectRatio:"1" }}/>
      </div>
      <div style={{backgroundColor:"green"}}>
        {/* <img src="pat.jpg" alt="" width="200rem " style={{width:"100% ",aspectRatio:"1" }}/> */}
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

export default Slick;

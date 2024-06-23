import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 1,
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      />
    );
  };

  // Custom Next Arrow component
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 1,
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>

{/* <div>
         <div className="h-96" style={{ backgroundColor: "#8D9F63" }}>

         </div>
        </div> */}

        <div>
          <div className="grid grid-cols-2">
            <div
              className="flex bg-cover bg-no-repeat items-center justify-center text-white"
              style={{ backgroundColor: "#8D9F63" }}
            >
              <div>
                <h1 className="mb-10"><span className="">Dairy Name:</span> <span className="text-xl font-bold">Raj Dairy</span></h1>
                <h1>Dairy Location: <span className="text-xl font-bold">Bathinda</span></h1>
              </div>
            </div>

            <div>
              <img
                className="w-full object-cover"
                style={{ height: "50vh" }}
                src="https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
        </div>


        <div>
          <div className="grid grid-cols-2">
            <div
              className="flex bg-cover bg-no-repeat items-center justify-center text-white"
              style={{ backgroundColor: "#93581D" }}
            >
              <div>
                <h1 className="mb-10"><span className="">Dairy Name:</span>  <span className="text-xl font-bold">Thind Dairy</span></h1>
                <h1>Dairy Location: <span className="text-xl font-bold">Amritsar</span></h1>
              </div>
            </div>

            <div>
              <img
                className="w-full object-cover"
                style={{ height: "50vh" }}
                src="https://images.pexels.com/photos/3758144/pexels-photo-3758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
        </div>

        
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;

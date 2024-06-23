import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Categories() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
  return (
    <div className="">
         <div className="slider-container bg-blue-300 m-8 hidden sm:block">
      <Slider {...settings} >
        <div className="border">
          <h3>1</h3>
        </div>
        <div className="border">
          <h3>2</h3>
        </div>
        <div className="border">
          <h3>3</h3>
        </div>
        <div className="border">
          <h3>4</h3>
        </div>
        <div className="border">
          <h3>5</h3>
        </div>
        <div>
          <h3 className="border">6</h3>
        </div>
        <div>
          <h3 className="border">7</h3>
        </div>
        <div>
          <h3 className="border">8</h3>
        </div>
        <div>
          <h3 className="border">9</h3>
        </div>
      </Slider>
      
    </div>

   
    </div>
    
  )
}

export default Categories
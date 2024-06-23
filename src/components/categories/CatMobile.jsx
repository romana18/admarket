import React from "react";
import Slider from "react-slick";

function CatMobile() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="sm:hidden">
        <Slider {...settings}>
      <div >
        <div className="flex items-center justify-center">
        dfs;kg'fg
        </div>
       
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}

export default CatMobile
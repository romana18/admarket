import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {

    // Custom Previous Arrow component
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", zIndex: 1, position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", }}
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
                style={{ ...style, display: "block", zIndex: 1, position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}
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
        <>
        
            <Slider {...settings} className='sm:hidden p-2 '>

            <div>
                    <div className='w-full bg-cover bg-center flex justify-center' style={{backgroundImage: `url('https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,height: "50vh"}}>
                        <div className='w-full bg-black bg-opacity-50 flex items-center justify-center'>
                            <h1 className='p-4 text-white'>
                                Dairy Name: <span className="text-xl font-bold">Raj Dairy</span>
                            </h1>
                        </div>
                    </div>
                    </div>
                <div>
                    <h3>
                        <img src="https://images.pexels.com/photos/3758144/pexels-photo-3758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full object-fill' style={{ height: "50vh" }} />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="https://images.pexels.com/photos/6584815/pexels-photo-6584815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full object-cover' style={{ height: "50vh" }} />
                    </h3>
                </div>

            </Slider>

        </>
    );
}

export default Carousel;

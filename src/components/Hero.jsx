import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";

import Nike1 from "../assets/Nike1.jpg";
import Nike2 from "../assets/Nike2.jpg";
import Nike4 from "../assets/Nike4.jpg";
import Nike5 from "../assets/Nike5.jpg";
import Nike6 from "../assets/Nike6.jpg";


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const TextCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Added auto sliding
    autoplaySpeed: 2000, // Adjust the speed (in milliseconds) as desired
    dots: false, // Removed dots
    arrows: false,
  };

  return (
    <div className="py-3 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <Slider {...settings}>
          <div className="flex-row justify-center px-4 text-center">
            {" "}
            {/* Updated */}
            <h3>Free Delivery</h3>
            <p>Applies to orders of Rs 14000.00 or more</p>
          </div>
          <div className="flex-row justify-center px-4 text-center">
            {" "}
            {/* Updated */}
            <h3>New Styles on Sale. Up to 40% Off</h3>
            <p>Shop All Our New Markdowns</p>
          </div>
          <div className="flex-row justify-center px-4 text-center">
            {" "}
            {/* Updated */}
            <h3>Hello Nike App</h3>
            <p>Download the app to access everything Nike.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
const CarouselComponent = () => {
  return (
    <div className="relative">
      <div className="mx-10 my-10 carousel-container">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          <div className="carousel-image">
            <img src={Nike1} alt="Image1" />
          </div>
          <div className="carousel-image">
            <img src={Nike2} alt="Image2" />
          </div>
          <div className="carousel-image">
            <img src={Nike4} alt="Image4" />
          </div>
          <div className="carousel-image">
            <img src={Nike5} alt="Image5" />
          </div>
          <div className="carousel-image">
            <img src={Nike6} alt="Image6" />
          </div>
        </Carousel>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="p-6 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Explore the Collection
          </h1>
          <button className="px-6 py-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <TextCarousel />
      <CarouselComponent />
    </>
  );
};
export default Hero;

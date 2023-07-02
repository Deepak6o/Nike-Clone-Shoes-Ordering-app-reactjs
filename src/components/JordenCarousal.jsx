import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import jorden1 from "../assets/jorden1.png";
import jorden2 from "../assets/jorden2.png";
import jorden4 from "../assets/jorden4.png";
import jorden5 from "../assets/jorden5.png";
import jorden6 from "../assets/jorden6.png";
import jorden7 from "../assets/jorden7.png";
import jorden8 from "../assets/jorden8.png";
import jorden9 from "../assets/jorden9.png";
import jorden10 from "../assets/jorden10.png";
import jorden11 from "../assets/jorden11.png";
import jorden12 from "../assets/jorden12.png";

const JordenCarousel = () => {
  const items = [
    <Link to="/product">
    <img src={jorden1} alt="Product 1" className="w-80" />
  </Link>,
    <Link to="/product"><img src={jorden4} alt="Product 4" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden5} alt="Product 5" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden6} alt="Product 6" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden2} alt="Product 2" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden7} alt="Product 7" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden8} alt="Product 8" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden9} alt="Product 9" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden10} alt="Product 10" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden11} alt="Product 11" className="w-80" /></Link>,
    <Link to="/product"><img src={jorden12} alt="Product 12" className="w-80" /></Link>,
  ];

  const handleSlidePrev = () => {
    carousel.slidePrev();
  };

  const handleSlideNext = () => {
    carousel.slideNext();
  };

  let carousel = null;

  return (
    <>
      <div>
        <h1 className="mx-10 mb-6 text-3xl font-bold">In the Spotlight</h1>
      </div>
      <div className="relative gap-6 p-4 mx-10 bg-gray-100">
        <AliceCarousel
          items={items}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 3 },
          }}
          autoPlay
          autoPlayInterval={3000}
          animationDuration={1000}
          disableButtonsControls
          infinite
          mouseTracking
          ref={(el) => (carousel = el)}
        />
        <button
          className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-white bg-black bg-opacity-50 rounded-full cursor-pointer inset-y-1/2 hover:bg-opacity-70"
          onClick={handleSlidePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transform -rotate-180"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.4 3.6l-1.4 1.4 4 4h-11v2h11l-4 4 1.4 1.4 6-6z"
            />
          </svg>
        </button>
        <button
          className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 text-white bg-black bg-opacity-50 rounded-full cursor-pointer inset-y-1/2 hover:bg-opacity-70"
          onClick={handleSlideNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.4 3.6l-1.4 1.4 4 4h-11v2h11l-4 4 1.4 1.4 6-6z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default JordenCarousel;

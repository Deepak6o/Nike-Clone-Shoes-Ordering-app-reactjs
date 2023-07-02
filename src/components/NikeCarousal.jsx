import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";

const JordenCarousel = () => {
  const items = [
    <img src={product1} alt="Product 1" className="w-80"/>,
    <img src={product3} alt="Product 4" className="w-80"/>,
    <img src={product4} alt="Product 5"  className="w-80"/>,
    <img src={product5} alt="Product 6" className="w-80"/>,
    <img src={product2} alt="Product 2" className="w-80"/>,
    <img src={product6} alt="Product 7" className="w-80"/>,
    <img src={product7} alt="Product 8" className="w-80"/>,
    <img src={product8} alt="Product 9" className="w-80"/>,
    <img src={product9} alt="Product 10" className="w-80"/>,
    <img src={product10} alt="Product 11" className="w-80"/>,
    <img src={product11} alt="Product 12" className="w-80"/>,
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

import React from 'react';
import Product10 from '../assets/jorden10.png';

const JordenCards = () => {
  return (
    <div className="max-w-xs p-4 overflow-hidden transition duration-300 ease-in-out transform rounded shadow-sm cursor-pointer bg-gray-50 hover:scale-105">
      <img className="w-full" alt="product" src={Product10} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">20% off</p>
        </div>
      </div>
    </div>
  );
}

export default JordenCards;

import React from "react";
import Logo2 from "../assets/Logo2.png";
import NikeCards from "./NikeCard";
import NikeCarousal from "./NikeCarousal";

const NikeTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 ">
      <h2 className="font-bold">Mini-Me Looks</h2>
      <img alt="logo1" src={Logo2} className="w-40 mb-4" />

      <p className="w-auto px-40 text-lg font-medium text-center">
        Make a Double play, Twin with your mini in must-have looks in a range of sizes.
      </p>
      <button className="px-6 py-2 my-4 text-white bg-black rounded-3xl bg">
        Shop
      </button>
    </div>
  );
};

const NikeCardSection = () => {
    return (
      <div className="py-10">
        <div className="container mx-auto">
          <h1 className="mx-10 mb-6 text-3xl font-bold">Always iconic</h1>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <NikeCards />
            <NikeCards />
            <NikeCards />
            <NikeCards />
            <NikeCards />
            <NikeCards />
           
          </div>
        </div>
      </div>
    );
  };

const Jordan = () => {
  return (
    <>
      <NikeTitle />
      <NikeCardSection />
      <NikeCarousal/>
      
    </>
  );
};

export default Jordan;

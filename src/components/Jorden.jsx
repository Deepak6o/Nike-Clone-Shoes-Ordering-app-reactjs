import React from "react";
import Logo1 from "../assets/Logo1.png";
import JordenCards from "./JordenCards";
import JordenCarousal from "./JordenCarousal";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="font-bold">Air Jorden 1Elevate High</h2>
      <img alt="logo1" src={Logo1} className="mb-4" />

      <p className="w-auto px-40 text-lg font-medium text-center">
        Elevate your game with Jordan shoes. Combining iconic style,
        cutting-edge technology, and unparalleled performance, these sneakers
        are a symbol of excellence and a testament to your dedication on and off
        the court.
      </p>
      <button className="px-6 py-2 my-4 text-white bg-black rounded-3xl bg">
        Shop
      </button>
    </div>
  );
};

const CardSection = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h1 className="mx-10 mb-6 text-3xl font-bold">Jorden / Shoes</h1>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <Link to="/product">
            <JordenCards />
          </Link>
          <JordenCards />
          <JordenCards />
          <JordenCards />
          <JordenCards />
          <JordenCards />
        </div>
      </div>
    </div>
  );
};

const Jordan = () => {
  return (
    <>
      <Title />
      <CardSection />
      <JordenCarousal />
    </>
  );
};

export default Jordan;

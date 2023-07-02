import React from "react";
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="flex justify-between px-10 py-1 bg-gray-100">
        <img className="w-6" alt="logo" src={Logo1} />
        <ul className="flex text-sm">
          <li className="px-1">Find the store</li>
          <span className="px-1"> | </span>
          <li className="px-1">Help</li>
          <span className="px-1"> | </span>
          <li className="px-1">Join Us</li>
          <span className="px-1"> | </span>
          <li className="px-1">Sign In</li>
        </ul>
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-lg">
        <div className="flex justify-between px-10 py-4">
          <img className="w-16" alt="logo" src={Logo2} />
          <div>
            <ul className="flex">
             <Link to="/"><li className="mx-3">Home</li></Link> 
              <li className="mx-3">Men</li>
              <li className="mx-3">Women</li>
              <li className="mx-3">Kids</li>
              <li className="mx-3">Sale</li>
            </ul>
          </div>
          <div className="flex">
            <div className="relative flex items-center">
              <span className="absolute pl-3">
                <AiOutlineSearch className="text-xl" />
              </span>
              <input
                className="px-4 py-2 pl-10 bg-gray-100 outline-none w-44 rounded-3xl"
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="flex mx-3">
              <AiOutlineHeart className="mx-3 text-3xl" />
              <AiOutlineShoppingCart className="mx-3 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

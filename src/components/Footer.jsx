import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-3 mt-6 text-white bg-black pt-14">
      <div className="container px-10 mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-14">
            <div>
              <ul className="text-sm font-bold leading-none font-oswald">
                <li className="py-2 cursor-pointer">FIND A STORE</li>
                <li className="py-2 cursor-pointer">BECOME A PARTNER</li>
                <li className="py-2 cursor-pointer">SIGN UP FOR EMAIL</li>
                <li className="py-2 cursor-pointer">SEND US FEEDBACK</li>
                <li className="py-2 cursor-pointer">STUDENT DISCOUNT</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm">
                <li className="py-2 text-sm font-bold font-oswald">GET HELP</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Order Status</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Delivery</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Returns</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Payment Options</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm">
                <li className="py-2 text-sm font-bold font-oswald">ABOUT NIKE</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">News</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Careers</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Investors</li>
                <li className="py-1 font-thin text-white/[0.5] hover:text-white cursor-pointer">Sustainability</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaTwitter size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaYoutube size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-sm font-light">
          <div>
            <p>@ 2023 Nike Inc. All Rights Reserved</p>
          </div>
          <div>
            <ul className="flex">
              <li className="px-2 cursor-pointer">Guides</li>
              <li className="px-2 cursor-pointer">Terms of Sale</li>
              <li className="px-2 cursor-pointer">Terms of Use</li>
              <li className="px-2 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

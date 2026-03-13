import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-4 w-32" alt="" />
          <p className="text-gray-600 w-2/3">
            We are a team of designers and developers that create high quality
            fashion and lifestyle content. We are always looking for new and
            innovative ways to bring our content to life and connect with our
            audience.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
              <li>+1-212-466-9850</li>
              <li className="">Contact@ForeverYou.com</li>
          </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className="text-center text-gray-600 py-4">
          &copy; {new Date().getFullYear()} Forever. - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

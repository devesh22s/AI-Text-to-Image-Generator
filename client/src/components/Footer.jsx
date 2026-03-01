
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {


  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 mt-20 border-t border-white/10">
       <img src="./logo1.png" alt="" width={90} />
      <p className="flex-1 sm:border-l border-white/20 sm:pl-6 text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} DevGen.AI | All rights reserved.
      </p>
      <div className="flex gap-4">
        <img
          src={assets.facebook_icon}
          alt="fb"
          className="w-8 cursor-pointer hover:opacity-70 transition-opacity invert"
        />
        <img
          src={assets.twitter_icon}
          alt="tw"
          className="w-8 cursor-pointer hover:opacity-70 transition-opacity invert"
        />
        <img
          src={assets.instagram_icon}
          alt="ig"
          className="w-8 cursor-pointer hover:opacity-70 transition-opacity invert"
        />
      </div>
    </div>
  );
};

export default Footer;

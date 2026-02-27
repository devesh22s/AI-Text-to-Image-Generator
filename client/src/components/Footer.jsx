// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='flex items-center justify-between gap-4 py-3 mt-20 '>
//         <img src={assets.logo} alt=""  width={150}  />
//         <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @dynamicimages.dev | Allright reserved.</p>
//         <div className='flex gap-2.5'>
//             <img src={assets.facebook_icon} alt="" width={35} />
//             <img src={assets.twitter_icon} alt="" width={35} />
//             <img src={assets.instagram_icon} alt="" width={35} />
//             </div>

//     </div>
//   )
// }

// export default Footer

import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  // Reusing Dynamic Logo here
  const DynamicLogo = () => (
    <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">

      {/* Golden Lightning Bolt Icon (SVG) */}
      <div className="relative w-8 sm:w-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-all duration-300">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE08B" />   {/* Light Gold */}
              <stop offset="50%" stopColor="#D4AF37" />  {/* Pure Gold */}
              <stop offset="100%" stopColor="#996515" /> {/* Dark Gold */}
            </linearGradient>
          </defs>
          {/* Dynamic Lightning/Diamond Shape */}
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#goldGradient)" />
        </svg>
      </div>

      {/* Golden Gradient Text */}
      <div className="text-lg sm:text-2xl font-extrabold tracking-wider uppercase flex items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FDE08B] via-[#D4AF37] to-[#996515] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Dynamic
        </span>
        <span className="text-white ml-1.5 sm:ml-2 font-medium tracking-normal drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
          Images
        </span>
      </div>

    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 mt-20 border-t border-white/10">
      <img src="./logo2.png" alt="" />
      {/* <DynamicLogo/> */}
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

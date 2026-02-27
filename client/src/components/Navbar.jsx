import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  // Golden Dynamic Logo
  // const DynamicLogo = () => (
  //   <div className="flex items-center gap-1 sm:gap-2 cursor-pointer group">
  //     <div className="relative w-6 sm:w-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
  //       <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
  //         <defs>
  //           <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //             <stop offset="0%" stopColor="#FDE08B" />
  //             <stop offset="50%" stopColor="#D4AF37" />
  //             <stop offset="100%" stopColor="#996515" />
  //           </linearGradient>
  //         </defs>
  //         <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#goldGradient)" />
  //       </svg>
  //     </div>
  //     <div className="text-sm sm:text-2xl font-extrabold tracking-wider uppercase flex items-center">
  //       <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FDE08B] via-[#D4AF37] to-[#996515]">
  //         Dynamic
  //       </span>
  //       <span className="text-white ml-1 font-medium tracking-normal hidden min-[400px]:block">
  //         Images
  //       </span>
  //     </div>
  //   </div>
  // );

  return (
    <div className="w-full flex items-center justify-between py-4 sm:py-6">
      <Link to="/">
      <img src="./logo1.png" alt="" />
        {/* <DynamicLogo /> */}
      </Link>

      {user ? (
        <div className="flex items-center gap-2 sm:gap-7">
          <button onClick={() => navigate('/buy')} className="flex items-center gap-1 sm:gap-2 bg-white/10 border border-white/20 px-3 sm:px-6 py-1 sm:py-2 rounded-full hover:bg-white/20 transition-all duration-300">
            <img className="w-4 sm:w-5" src={assets.credit_star} alt="credits" />
            <p className="text-[10px] sm:text-sm font-medium text-gray-200">
              <span className="hidden sm:inline">Credits: </span>50
            </p>
          </button>

          <p className="text-gray-300 hidden md:block pl-2 font-medium text-sm">Hi, Devesh</p>

          <div className="relative group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px] cursor-pointer">
               <img className="w-full h-full rounded-full object-cover" src={assets.profile_icon} alt="profile" />
            </div>
            <div className="absolute hidden group-hover:block right-0 top-8 sm:top-10 z-20 pt-4">
              <ul className="list-none m-0 p-2 bg-[#121214] rounded-lg border border-white/10 shadow-xl text-sm w-28 sm:w-32">
                <li className="py-2 px-4 cursor-pointer text-gray-300 hover:text-white hover:bg-white/5 rounded">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 sm:gap-6">
          <p onClick={() => navigate("/buy")} className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors font-medium text-xs sm:text-base">
            Pricing
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-base font-medium">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
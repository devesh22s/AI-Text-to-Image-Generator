import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onclickhandler = ()=>{
    if(user){
      navigate("/result")
    }else{
      setShowLogin(true)
    }

  }
  return (
    <motion.div
      className="flex flex-col justify-center text-center items-center my-18 relative z-10"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0.2, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="inline-flex items-center gap-2 text-center bg-white/5 backdrop-blur-md px-6 py-1.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-purple-500/50 transition-colors duration-300 cursor-pointer"
      >
        <p className="text-gray-300 text-sm font-medium tracking-wide">
          ✨ The Ultimate AI Image Engine
        </p>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 className="text-4xl max-w-[350px] sm:text-7xl sm:max-w-[800px] mx-auto mt-10 text-center font-extrabold tracking-tight leading-tight"
      initial ={{opacity:0}}
      animate= {{opacity:1}}
      transition={{delay:0.4, duration:2}}
      >
        Turn your words into <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          masterpieces
        </span>
        , instantly.
      </motion.h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mt-6 text-lg sm:text-xl leading-relaxed">
        Unleash your creativity with our next-gen AI. Type your imagination, and
        watch the magic unfold in ultra-high definition.
      </p>

      {/* Main CTA Button */}
      <button onClick={onclickhandler} className="sm:text-lg bg-white text-black font-semibold mt-10 px-10 py-3.5 flex items-center gap-3 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
        Start Generating{" "}
        <img
          className="h-5 mix-blend-difference"
          src={assets.star_group}
          alt=""
        />
      </button>

      {/* Sample Images container with Glassmorphism */}
      <div className="flex flex-wrap justify-center gap-4 mt-20 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        {Array(6)
          .fill("")
          .map((items, index) => (
            <img
              key={index}
              className="rounded-xl hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-500 cursor-pointer w-14 sm:w-20 object-cover border border-white/10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt="sample"
            />
          ))}
      </div>
    </motion.div>
  );
};

export default Header;

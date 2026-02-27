import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32 p-6 md:px-28 relative">
      <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-white">
        Create <span className="text-purple-400">AI Magic</span>
      </h1>
      <p className="text-gray-400 mb-16 text-lg">Turn your wildest imagination into stunning visuals</p>
      
      <div className="flex flex-col gap-10 md:gap-20 md:flex-row items-center w-full max-w-6xl">
        {/* Image with neon glow border */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          <img src={assets.sample_img_1} alt="" className="relative w-80 xl:w-[450px] rounded-2xl border border-white/10 shadow-2xl" />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-semibold max-w-lg mb-6 leading-snug">Introducing the Next-Gen Text to Image Synthesizer</h2>
          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            Easily bring your ideas to life with our powerful AI engine. Whether you need cinematic visuals, 3D renders, or unique artistic imagery, our tool transforms your text prompt into eye-catching masterpieces with zero effort.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            Just type a description, and watch the cutting-edge AI generate high-fidelity images in seconds. The creative possibilities are truly limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
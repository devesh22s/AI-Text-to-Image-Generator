import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isimageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
    setInput("")
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col min-h-[85vh] justify-center items-center px-4"
    >
      <div className="flex flex-col items-center">
        {/* Image Container with Glow */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-40 transition duration-1000"></div>
          <img
            src={image}
            alt="generated"
            className="relative max-w-xs sm:max-w-sm rounded-lg border border-white/20 shadow-2xl"
          />

          {/* Animated Gradient Loading Bar */}
          <span
            className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 rounded-b-lg ${loading ? "w-full transition-all duration-[10s] ease-in-out" : "w-0"}`}
          />
        </div>
        <p
          className={`mt-4 text-cyan-400 font-medium tracking-widest animate-pulse ${!loading ? "hidden" : ""}`}
        >
          GENERATING...
        </p>
      </div>

      {!isimageLoaded && (
        <div className="flex w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-md text-white text-sm p-1.5 mt-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] focus-within:border-cyan-500/50 transition-colors">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate..."
            className="flex-1 bg-transparent outline-none ml-6 text-base placeholder:text-gray-500 min-w-0"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 px-6 sm:px-12 py-3 sm:py-3.5 rounded-full font-semibold text-white hover:scale-105 transition-transform"
          >
            Generate
          </button>
        </div>
      )}

      {isimageLoaded && (
        <div className="flex gap-4 flex-wrap justify-center text-white text-sm mt-10">
          <p
            onClick={() => setIsImageLoaded(false)}
            className="bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 text-white px-8 py-3 rounded-full cursor-pointer transition-all font-medium"
          >
            Generate Another
          </p>
          <a
            download
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-3 rounded-full cursor-pointer font-medium hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
            href={image}
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;

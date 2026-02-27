import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-24 text-center relative z-10'>
        <h1 className='text-4xl md:text-5xl mt-4 font-bold text-white py-10 md:py-16'>
          Experience the <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Magic.</span> Try Now
        </h1>
        
        <button className='inline-flex items-center gap-3 px-12 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-500' >
          Generate Images <img src={assets.star_group} alt="" className='h-6 mix-blend-screen'/>
        </button>
    </div>
  )
}

export default GenerateBtn;
import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32 p-6 md:px-28">
      <h1 className="text-4xl sm:text-5xl font-bold mb-3">
        User <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stories</span>
      </h1>
      <p className="text-gray-400 mb-16 text-lg">See what the community is creating</p>
      
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((items, index)=>(
            <div className='bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl w-[340px] cursor-pointer hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all duration-500' key={index}>
                <div className='flex flex-col items-center'>
                    <img src={items.image} alt="" className='rounded-full w-16 h-16 object-cover border-2 border-purple-500 mb-4'/>
                    <h2 className='text-xl font-bold text-gray-100'>{items.name}</h2>
                    <p className='text-cyan-400 text-sm mb-4 font-medium'>{items.role}</p>
                    <div className='flex mb-6 gap-1'>
                        {Array(items.stars).fill().map((item, idx)=>(
                            <img key={idx} src={assets.rating_star} alt="star" className='w-4'/>
                        ))}
                    </div>
                    <p className='text-base text-center text-gray-300 leading-relaxed'>"{items.text}"</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials;
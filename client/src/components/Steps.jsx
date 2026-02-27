import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32 relative z-10'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-3'>How it <span className='text-cyan-400'>Works</span></h1>
        <p className='text-lg text-gray-400 mb-12'>Transform Words into Art in 3 Simple Steps</p>
        
        <div className='space-y-6 w-full max-w-4xl text-sm'>
            {stepsData.map((item, index)=>(
                <div key={index} className='flex items-center gap-6 px-8 py-6 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer hover:border-purple-500/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-lg group'>
                    <div className='bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform'>
                        <img src={item.icon} alt="" className='w-8 h-8 filter invert opacity-80 group-hover:opacity-100'/>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-100 mb-1'>{item.title}</h2>
                        <p className='text-gray-400 text-base'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Steps;
import React, { useContext } from 'react'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'

// Reusable Golden Lightning SVG Icon for Plans
const PlanIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE08B" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#996515" />
      </linearGradient>
    </defs>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#goldGradient)" />
  </svg>
);

const BuyCredit = () => {
  const {user} = useContext(AppContext);
  
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 px-4'>
      <button className='bg-white/5 border border-purple-500/30 text-cyan-400 font-medium px-8 py-2 rounded-full mb-6 backdrop-blur-sm shadow-[0_0_10px_rgba(168,85,247,0.2)]'>
        Pricing Plans
      </button>
      
      <h1 className='text-center text-4xl sm:text-5xl font-bold text-white mb-10 sm:mb-16 tracking-tight'>
        Choose the <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>Right Plan</span>
      </h1>
      
      <div className='flex flex-wrap justify-center gap-8 text-left max-w-6xl mx-auto'>
        {plans.map((item, index)=>(
          <div key={index} className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-gray-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-500 w-full max-w-[300px] flex flex-col'>
            
            <PlanIcon />
            
            <p className='mt-2 text-2xl font-bold text-white'>{item.id}</p>
            <p className='text-sm text-gray-400 mt-2 mb-6 line-clamp-2'>{item.desc}</p>
            
            <div className='mt-auto'>
              <p className='mb-6'>
                <span className='text-4xl font-extrabold text-white'>${item.price}</span>
                <span className='text-gray-500 font-medium'> / {item.credits} credits</span>
              </p>
              
              <button className={`w-full text-white font-semibold mt-2 text-base rounded-xl py-3.5 transition-all ${
                user 
                ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
              }`}>
                {user ? 'Purchased' : 'Get Started'}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit;
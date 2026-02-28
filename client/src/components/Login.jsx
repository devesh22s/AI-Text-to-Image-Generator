import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {
    const [state, setState] = useState('Login')
    const {setShowLogin} = useContext(AppContext)
    
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return()=>{
            document.body.style.overflow = 'unset'
        }
    },[])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md z-50 bg-black/60 flex justify-center items-center px-4'>
        
        {/* Glassmorphism Card */}
        <form className='relative bg-[#121214]/90 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.2)] w-full max-w-md'>
            
            <h1 className='text-center text-3xl text-white font-bold tracking-wide'>{state}</h1>
            <p className='text-sm text-center text-gray-400 mt-2 mb-8'>Welcome back! Please sign in to continue</p>

            <div className='space-y-4'>
                { state !== 'Login' &&
                <div className='px-6 py-3 bg-white/5 border border-white/10 flex items-center gap-3 rounded-full hover:border-purple-500/50 transition-colors'>
                    <img src={assets.users_icon} alt="" className='w-5 opacity-70 invert' />
                    <input type="text" placeholder='Full Name' required className='bg-transparent outline-none text-sm text-white w-full placeholder:text-gray-500'/>
                </div>
                }
                
                <div className='px-6 py-3 bg-white/5 border border-white/10 flex items-center gap-3 rounded-full hover:border-purple-500/50 transition-colors'>
                    <img src={assets.users_icon} alt="" className='w-5 opacity-70 invert' />
                    <input type="email" placeholder='Email id' required className='bg-transparent outline-none text-sm text-white w-full placeholder:text-gray-500'/>
                </div>
                
                <div className='px-6 py-3 bg-white/5 border border-white/10 flex items-center gap-3 rounded-full hover:border-purple-500/50 transition-colors'>
                    <img src={assets.users_icon} alt="" className='w-5 opacity-70 invert' />
                    <input type="password" placeholder='Password' required className='bg-transparent outline-none text-sm text-white w-full placeholder:text-gray-500'/>
                </div>
            </div>

            {state === 'Login' && <p className='text-sm text-cyan-400 my-4 cursor-pointer hover:underline text-right font-medium'>Forgot Password?</p>}
            
            {/* Gradient Button */}
            <button className='bg-gradient-to-r from-purple-600 to-cyan-600 w-full text-white py-3 mt-2 rounded-full font-semibold text-lg hover:scale-[1.02] shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all'>
                {state === 'Login' ? 'Login' : 'Create Account'}
            </button>

            {/* Toggle State */}
            {state === 'Login' ? (
                <p className='mt-6 text-center text-gray-400'>Don't have an Account? <span className='text-cyan-400 cursor-pointer font-medium hover:underline' onClick={()=> setState('Sign up')}>Sign up</span></p>
            ) : (
                <p className='mt-6 text-center text-gray-400'>Already have an Account? <span className='text-cyan-400 cursor-pointer font-medium hover:underline' onClick={()=> setState('Login')}>Login</span></p>
            )}

            {/* Close Button */}
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer w-6 h-6 invert opacity-60 hover:opacity-100 transition-opacity' alt="close" />
        </form>
    </div>
  )
}

export default Login;
import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    // Premium Dark background with slight radial glow effect
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-hidden'>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
   
      
      <div className="relative z-10">
        <Navbar/>

       {showLogin && <Login/> }
        <Routes>
            <Route path= '/' element= {<Home/>}/>
            <Route path= '/buy' element= {<BuyCredit/>}/>
            <Route path= '/result' element= {<Result/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
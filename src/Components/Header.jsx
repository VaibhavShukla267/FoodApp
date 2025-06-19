import React from 'react'
import Navbar from './HeaderComponents/Navbar.jsx'
import { AppLogo } from './utils/FoodImg.js'
import { ShimmerSectionHeader } from 'shimmer-effects-react'

function Header() {
  
  return (
    <div className='header'>
       <img className='img_logo' src={AppLogo}></img>
        <Navbar />
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  const[btnName,setBtnName]=useState("Login");
  console.log("HeaderRendered");
  
  return (
    <div className='nav_bar'>
        <div className='list_items'>
        <Link to="/"><li >Home </li></Link>
        <Link to="/about"><li>About </li></Link>
        <Link to="/contact"><li>ContactUS</li></Link>
        <li><img src='https://cdn-icons-png.flaticon.com/128/1332/1332821.png'></img> </li>
        <li><button onClick={()=>btnName=="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button> </li>
        </div>

    </div>
  )
}

export default Navbar
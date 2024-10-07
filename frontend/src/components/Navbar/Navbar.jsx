import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

function Navbar() {
    const [menu,setMenu] = useState("Home");
    return (
        <>
      <div className='navbar'>
     <img src={assets.logo} alt="" className="logo" />
     <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
     </ul>
     <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search_icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
           
        </div>
        <button>sign in</button>

     </div>

      </div>
        </>
        
    )
}

export default Navbar

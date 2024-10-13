import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../contest/StoreContext';
import './Navbar.css';


function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("Home");
    const{getTotalCartAmount} = useContext(StoreContext)

    return (
        <>
            <div className='navbar'>
               <Link to= '/'><img src={assets.logo} alt="" className="logo" /></Link> 
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
                        Home
                    </Link>
                    <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
                        Menu
                    </a>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
                        Mobile App
                    </a>
                    <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>
                        Contact Us
                    </a>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-search_icon">
                        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>Sign In</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;

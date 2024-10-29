import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const navbar = () => {

    const [menu, setMenu] = useState("menu")


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>about</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>sing in</button>
      </div>
    </div>
  )
}

export default navbar

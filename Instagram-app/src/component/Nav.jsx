import React from 'react'
import "../index.css"
import Imagelogo from "../assets/instagram-svgrepo-com.svg"
import Imagepro from "../assets/Ellipse 1.png"
import msgIcon from "../assets/messenger-svgrepo-com.svg"
import squIcon from "../assets/plus-square-svgrepo-com.svg"

function Nav() {
  return (
    <div>
    <div id='nav-bar'>
      <img className='Logo' src={Imagelogo} alt="logo" />
      <div className='nav-search'>
      <i class='bx bx-search'></i>
      <input type="text"  placeholder='Search' />
      </div>
      <div className='nav-icon'>
        <i class='bx bxs-home'></i>
        <img src={msgIcon} />
        <img src={squIcon} />
      <i class='bx bx-compass'></i>
      <i class='bx bx-heart'></i>
      <img className='profile-pic' src={Imagepro} alt="profile-pic" />
      </div>
    </div>
    <div id='nav-bar2'>
      <img className='Logo' src={Imagelogo} alt="logo" />
      <div className='nav-icon2'>
        <i class='bx bxs-home'></i>
        <img src={msgIcon} />
        <img src={squIcon} />
      <i class='bx bx-compass'></i>
      <i class='bx bx-heart'></i>
      <img className='profile-pic' src={Imagepro} alt="profile-pic" />
      </div>
    </div>
    </div>
  )
}

export default Nav

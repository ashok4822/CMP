import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-navbar'>
            <img src={assets.college_icon} alt="" />
        <p>Arya Engineering College</p>
      </div>
      <div className='right-navbar'>
        <p>Home</p>
        <p>ACADEMICS</p>
        <p>ADMISSION</p>
        <p>Login</p>
      </div>
    </div>
  )
}

export default Navbar

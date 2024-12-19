import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='navbar'>
      <div className='left-navbar'>
            <img src={assets.college_icon} alt="" />
        <p>Arya Engineering College</p>
      </div>
      <div className='right-navbar'>
        <Link to='/'><p>HOME</p></Link>
        <p>ACADEMICS</p>
        <p>ADMISSION</p>
        <p>Login</p>
      </div>
    </div>
  )
}

export default Navbar

import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <img src={assets.college_icon} alt="" />
        <p>Arya Engineering College</p>
      </div>
      <div className="right-navbar">
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Link to='/academics'><p>ACADEMICS</p></Link>
        <Link to='/admission'><p>ADMISSION</p></Link>
        <button onClick={()=>setShowLogin(true)}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;

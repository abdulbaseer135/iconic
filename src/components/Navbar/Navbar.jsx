import React from 'react';
import './Navbar.css'; 
import iconic_tech from '../Images/iconic_tech.jpeg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img
            src={iconic_tech}
            alt="Logo"
            className="logo-image"
          />
          <h4 className="logo-name">ICONIC Tech</h4>
        </div>

        {/* Navbar Items */}
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Login Button */}
        <div className="login-button">
        <Link to='/login'><button className='login1'>Login</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

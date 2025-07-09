// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { BsCart2, BsChevronDown } from "react-icons/bs";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header">
    
      <div className="header-left">
        <h1 className="logo">
          <span className="logo-light">GO</span>
          <span className="logo-bold"> FOOD</span>
        </h1>
      </div>

      <nav className="nav-menu desktop-only">
        <a href="#">Home<span className="arrow"><BsChevronDown/></span></a>
        <a href="#">Groceries<span className="arrow"><BsChevronDown/></span></a>
        <a href="#">Pages<span className="arrow"><BsChevronDown/></span></a>
      </nav>

      <div className="header-right desktop-only">
        <a href="#" className="connect-link">Connect with us →</a>
        <div className="icon-group">
          <div className="icon-wrapper"><IoSearch /></div>
          <div className="icon-wrapper"><FaRegUser /></div>
          <div className="icon-wrapper">
            <FaRegHeart />
            <span className="notification-badge">2</span>
          </div>
          <div className="icon-wrapper">
            <BsCart2 />
            <span className="notification-badge empty">0</span>
          </div>
        </div>
      </div>

      
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

    
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-menu">
          <a href="#" onClick={toggleMobileMenu}>Home</a>
          <a href="#" onClick={toggleMobileMenu}>Groceries</a>
          <a href="#" onClick={toggleMobileMenu}>Pages</a>
        </nav>
        <div className="mobile-header-right">
          <a href="#" className="connect-link-mobile" onClick={toggleMobileMenu}>Connect with us →</a>
          <div className="icon-group-mobile">
            <div className="icon-wrapper-mobile"><IoSearch /><span>Search</span></div>
            <div className="icon-wrapper-mobile"><FaRegUser /><span>Account</span></div>
            <div className="icon-wrapper-mobile"><FaRegHeart /><span>Wishlist</span></div>
            <div className="icon-wrapper-mobile"><BsCart2 /><span>Cart</span></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
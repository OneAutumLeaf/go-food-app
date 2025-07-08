// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">GO FOOD</h1>
        <nav className="nav-menu">
          <a href="#">Home<span className="arrow">▾</span></a>
          <a href="#">Groceries<span className="arrow">▾</span></a>
          <a href="#">Pages<span className="arrow">▾</span></a>
        </nav>
      </div>
      <div className="header-right">
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
    </header>
  );
};

export default Header;
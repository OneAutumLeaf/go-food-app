// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-bowl.png'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="discount">Discount up to 20%</p>
        <h1>Buy Fresh And Organic Grocery Food</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum.
        </p>
        <div className="hero-actions">
          <button className="shop-now-btn">SHOP NOW →</button>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">35k+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">18k+</span>
              <span className="stat-label">Products</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Healthy Food Bowl" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
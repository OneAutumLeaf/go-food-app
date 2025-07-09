// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ meal }) => {
  // The API doesn't provide price or description, so we'll fake them.
  const price = (Math.random() * 2 + 7.5).toFixed(2); // Price closer to example

  return (
    <div className="product-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="product-image" />
      <div className="product-info">

        {/* --- Top Row: Contains Name and Price --- */}
        <div className="product-top-row">
          <h3 className="product-name">{meal.strMeal}</h3>
          <span className="product-price">${price}</span>
        </div>

        {/* --- Dotted Line Separator --- */}
        <div className="dotted-divider"></div>

        {/* --- Bottom Row: Contains Description and Shop Link --- */}
        <div className="product-bottom-row">
          <p className="product-desc">Lorem ipsum dolor sit amet quam in lacus risus.</p>
          <a href="#" className="product-shop-link">SHOP NOW →</a>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
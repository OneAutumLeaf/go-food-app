
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ meal }) => {
  
  const price = (Math.random() * 2 + 7.5).toFixed(2); 

  return (
    <div className="product-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="product-image" />
      <div className="product-info">

       
        <div className="product-top-row">
          <h3 className="product-name">{meal.strMeal}</h3>
          <span className="product-price">${price}</span>
        </div>

       
        <div className="dotted-divider"></div>

   
        <div className="product-bottom-row">
          <p className="product-desc">Lorem ipsum dolor sit amet quam in lacus risus.</p>
          <a href="#" className="product-shop-link">SHOP NOW →</a>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
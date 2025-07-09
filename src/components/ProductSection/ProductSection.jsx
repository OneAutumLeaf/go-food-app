
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import './ProductSection.css';

const ProductSection = ({ categories, selectedCategory, onSelectCategory, meals, loading }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const skeletonCount = 6;
  const skeletons = Array(skeletonCount).fill(0);

  const handleDropdownSelect = (categoryName) => {
    onSelectCategory(categoryName);
    setIsDropdownOpen(false);
  };

  return (
    <section className="product-section">
      <div className="section-header">
        <p>Shop by Category</p>
        <h2>Top Category Of Organic Food</h2>
      </div>

  
      <div className="filters-container">

        <div className="desktop-filters">
          {categories.map((category) => (
            <button
              key={category.idCategory}
              className={`category-btn ${category.strCategory === selectedCategory ? 'active' : ''}`}
              onClick={() => onSelectCategory(category.strCategory)}
            >
              {category.strCategory}
            </button>
          ))}
        </div>


        <div className="mobile-filters">
          <div className="dropdown-container">
            <button
              className="dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedCategory || 'Categories'}</span>
              <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}></span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-list">
                {categories.map((category) => (
                  <div
                    key={category.idCategory}
                    className="dropdown-item"
                    onClick={() => handleDropdownSelect(category.strCategory)}
                  >
                    {category.strCategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="product-list">
        {loading ? (
          skeletons.map((_, index) => <SkeletonCard key={index} />)
        ) : (
          meals.map((meal) => <ProductCard key={meal.idMeal} meal={meal} />)
        )}
      </div>
    </section>
  );
};

export default ProductSection;
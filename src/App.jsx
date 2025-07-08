// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductSection from './components/ProductSection/ProductSection';
import './App.css';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Side'); // Default category
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories.php`);
        const desiredCategories = [ "Dessert", "Side", "Seafood", "Vegetarian", "Breakfast"];
        const filteredCategories = response.data.categories.filter(cat => desiredCategories.includes(cat.strCategory));
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch meals when selectedCategory changes
  useEffect(() => {
    const fetchMeals = async () => {
      if (selectedCategory) {
        setLoading(true);
        try {
          const response = await axios.get(`${API_BASE_URL}/filter.php?c=${selectedCategory}`);
          // The design shows 6 items. We'll slice the array.
          setMeals(response.data.meals.slice(0, 6));
        } catch (error) {
          console.error(`Error fetching meals for category ${selectedCategory}:`, error);
          setMeals([]); // Clear meals on error
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMeals();
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <div className="main-content">
          <Header />
          <Hero />
          <ProductSection
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            meals={meals}
            loading={loading}
          />
      </div>
    </div>
  );
}

export default App;
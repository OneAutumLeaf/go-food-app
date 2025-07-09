// src/components/TopSection/TopSection.jsx
import React from 'react';
import Header from '../Header/Header'; // Adjust path if they are in different folders
import Hero from '../Hero/Hero';
import './TopSection.css';

const TopSection = () => {
  return (
    <section className="top-section">
      <Header />
      <Hero />
    </section>
  );
};

export default TopSection;
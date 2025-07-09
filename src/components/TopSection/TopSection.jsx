
import React from 'react';
import Header from '../Header/Header'; 
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
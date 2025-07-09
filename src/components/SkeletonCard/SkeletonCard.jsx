
import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-info">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton-footer">
          <div className="skeleton skeleton-price"></div>
          <div className="skeleton skeleton-link"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
import React from 'react';

const FeatureCard = ({ title, description, icon, bgColor }) => {
  return (
    <div className={`feature-card ${bgColor}`}>
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
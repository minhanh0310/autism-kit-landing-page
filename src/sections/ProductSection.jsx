import React from 'react';
import { productKits } from '../data/productKits';

const KitCard = ({ kit, onKitClick }) => {
    return (
        <div 
            className="kit-card-v2" 
            style={{ backgroundColor: kit.color }}
            onClick={() => onKitClick(kit)}
        >
            <span className="kit-icon-v2">{kit.icon}</span>
            <h3 className="kit-title-v2">{kit.name}</h3>
            <p className="kit-focus-v2">{kit.focus}</p>
            <button className="kit-details-btn">
                Xem Chi Tiết & Thành Phần →
            </button>
        </div>
    );
};


const ProductSection = ({ onKitClick }) => {
  return (
    <section id="product" className="product-section">
      <div className="product-content">
        <h2 className="section-heading">
          Các Bộ Kit Chuyên Biệt (Nhấn để xem chi tiết)
        </h2>
        <div className="kit-grid-v2">
          {productKits.map((kit) => (
            <KitCard key={kit.id} kit={kit} onKitClick={onKitClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
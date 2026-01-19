import React from 'react';
import { productKits } from '../data/productKits';

const KitCard = ({ kit, onKitClick }) => {
    return (
        <div 
            className="kit-card-v2" 
            onClick={() => onKitClick(kit)}
        >
            {/* 1. Phần Ảnh Sản Phẩm (Hiển thị ở trên cùng) */}
            <div className="kit-card-img-wrapper">
                <img 
                    src={kit.image} 
                    alt={kit.name} 
                    className="kit-card-thumb" 
                />
            </div>

            {/* 2. Phần Nội Dung (Hiển thị màu nền ở dưới) */}
            <div className="kit-card-body" style={{ backgroundColor: kit.color }}>
                <div className="kit-header-row">
                    <span className="kit-icon-small">{kit.icon}</span>
                    <h3 className="kit-title-v2">{kit.name}</h3>
                </div>
                
                <p className="kit-focus-v2">{kit.focus}</p>
                
                <button className="kit-details-btn">
                    Xem Chi Tiết & Thành Phần →
                </button>
            </div>
        </div>
    );
};

const ProductSection = ({ onKitClick }) => {
  return (
    <section id="product" className="product-section">
      <div className="product-content">
        <h2 className="section-heading">
          Các Bộ Kit Chuyên Biệt
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
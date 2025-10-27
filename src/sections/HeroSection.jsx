import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Giải Pháp Can Thiệp Toàn Diện Cho Trẻ Tự Kỷ 4-8 Tuổi
        </h1>
        <p className="hero-subtitle">
          Kết hợp Bộ Đồ Chơi Chuyên Biệt và Video Hướng Dẫn Chi Tiết từ Chuyên Gia, giúp Cha Mẹ (BME) đồng hành hiệu quả cùng con tại nhà.
        </p>
        <div className="hero-actions">
          <a href="#test" className="cta-button-primary">
            Làm Bài Test Khởi Đầu Miễn Phí
          </a>
          <a href="#product" className="cta-button-secondary">
            Khám Phá Các Bộ Kit
          </a>
        </div>
        <div className="hero-image-placeholder">
             [Ảnh trẻ em cười tươi đang học]
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#product", text: "Bộ Kit" },
    { href: "#video", text: "Video Chuyên gia" },
    { href: "#test", text: "Test Đánh giá" },
    { href: "#review", text: "Đánh giá" },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        <a href="/" className="logo">
          AutismKit
        </a>
        
        <nav className="nav-links-desktop">
          {menuItems.map(item => (
            <a key={item.href} href={item.href}>{item.text}</a>
          ))}
        </nav>
        
        <a href="#test" className="cta-button-header-desktop">
          BẮT ĐẦU TEST
        </a>

        <button className="hamburger-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav-links-mobile ${isMenuOpen ? 'open' : 'closed'}`}>
          {menuItems.map(item => (
            <a key={item.href} href={item.href} onClick={toggleMenu}>{item.text}</a>
          ))}
          <a href="#test" className="cta-button-mobile" onClick={toggleMenu}>
            BẮT ĐẦU TEST
          </a>
      </nav>
    </header>
  );
};

export default Header;
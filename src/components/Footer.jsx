import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col">
          <h4 className="footer-logo">AutismKit</h4>
          <p className="footer-text-sm">Giải pháp kết hợp Đồ chơi chuyên biệt và Hướng dẫn trị liệu .</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Hỗ trợ</h4>
          <ul className="footer-links">
            <li><a href="#">Quy trình Đánh giá</a></li>
            <li><a href="#">Chính sách Đổi trả</a></li>
            <li><a href="#">Liên hệ Tư vấn 1-1</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Kết nối</h4>
          <p className="footer-text-sm">Email: contact@autismkit.vn</p>
          <p className="footer-text-sm">Hotline: 0123.456.789</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} AutismKit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const SubscriptionModal = ({ onClose,onOpenCheckout }) => {
    const handleSubscribe = () => {
        onClose(); // Đóng modal giới thiệu
        onOpenCheckout({
            name: "Gói Hội Viên Theo Dõi (Membership)",
            price: "150.000₫/tháng"
        });
    };
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content sub-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                
                <div className="sub-header">
                    <span className="sub-icon">👑</span>
                    <h2>Gói Hỗ Trợ Theo Dõi (Membership)</h2>
                    <p className="sub-subtitle">Đồng hành cùng AutismKit 24/7 24/7</p>
                </div>

                <div className="sub-body">
                    <div className="sub-price-box">
                        <span className="price-large">150.000₫</span>
                        <span className="price-period">/ tháng</span>
                        <div className="price-note">Đăng ký 3 tháng tặng 1 tháng</div>
                    </div>

                    <div className="sub-benefits">
                        <h4>Quyền lợi đặc biệt:</h4>
                        <ul>
                            <li>✅ <strong>Review Video:</strong> Gửi video con chơi 1 lần/tuần .</li>
                            <li>✅ <strong>Chat Ưu Tiên:</strong> Hỏi đáp trực tiếp qua Zalo VIP (8h - 21h hàng ngày).</li>
                            <li>✅ <strong>Lộ Trình Động:</strong> Điều chỉnh bài tập hàng tháng dựa trên tiến bộ của bé.</li>
                            <li>✅ <strong>Zoom Kín:</strong> Tham gia Workshop Q&A hàng tháng dành riêng cho thành viên.</li>
                        </ul>
                    </div>

                    <button className="btn-subscribe-now"
                    onClick={handleSubscribe}>
                        Đăng Ký Hội Viên Ngay
                    </button>
                    
                    <p className="sub-cancel-text">Có thể hủy gia hạn bất cứ lúc nào.</p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionModal;
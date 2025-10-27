import React from 'react';

const KitDetailModal = ({ kit, onClose }) => {
    if (!kit) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-header" style={{ backgroundColor: kit.color }}>
                    <span className="modal-icon">{kit.icon}</span>
                    <h2 className="modal-title">{kit.name}</h2>
                </div>

                <div className="modal-body">
                    <p className="modal-focus-title">Mục tiêu can thiệp chính:</p>
                    <p className="modal-focus-text">{kit.focus}</p>

                    <p className="modal-contents-title">Thành phần chi tiết:</p>
                    <ul className="modal-contents-list">
                        {kit.contents.map((item, index) => (
                            <li key={index}> {item}</li>
                        ))}
                    </ul>

                    <div className="modal-cta-group">
                        <a href={kit.videoLink} className="modal-cta-video">
                            ▶️ Xem Video Hướng Dẫn Kỹ Thuật (Chuyên Gia)
                        </a>
                        <a href="#pricing" onClick={onClose} className="modal-cta-price">
                            Chọn Gói Mua Hàng ({kit.pricing})
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KitDetailModal;
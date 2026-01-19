import React, { useState, useEffect } from 'react';
import VideoPopup from './VideoPopup'; // Import component video vừa tạo

const KitDetailModal = ({ kit, onClose ,onOpenCheckout}) => {
    const [selectedTier, setSelectedTier] = useState('standard');
    
    // State để quản lý việc mở video popup
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        if (kit) setSelectedTier('standard');
    }, [kit]);

    if (!kit) return null;

    const currentTierData = kit.tiers ? kit.tiers[selectedTier] : {};

    // Hàm xử lý khi bấm Mua
    const handleBuyClick = () => {
        // Gọi hàm mở form checkout ở App, truyền thông tin gói đang chọn
        onOpenCheckout({
            name: `${kit.name} - ${currentTierData.name}`,
            price: currentTierData.price
        });
    };

    // Hàm mở video (Chuyển link '#' thành ID video Youtube)
    // Ví dụ ID: LXb3EKWsInQ
    const handleOpenVideo = (e) => {
        e.preventDefault(); // Ngăn chặn chuyển trang
        setIsVideoOpen(true);
    };

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content wide-modal" onClick={e => e.stopPropagation()}>
                    <button className="modal-close-btn" onClick={onClose}>&times;</button>
                    
                    <div className="modal-body-grid">
                        {/* --- CỘT TRÁI --- */}
                        <div className="modal-left">
                            <div className="modal-image-wrapper">
                                <img 
                                    src={currentTierData.image || kit.image} 
                                    alt={kit.name} 
                                    className="modal-kit-img" 
                                />
                            </div>

                            <div className="modal-header-info" style={{ backgroundColor: kit.color }}>
                                <h2>{kit.name}</h2>
                                
                                <div className="tier-selector">
                                    {['basic', 'standard', 'premium'].map((tierKey) => (
                                        <button
                                            key={tierKey}
                                            className={`tier-btn ${selectedTier === tierKey ? 'active' : ''}`}
                                            onClick={() => setSelectedTier(tierKey)}
                                        >
                                            {tierKey.charAt(0).toUpperCase() + tierKey.slice(1)}
                                        </button>
                                    ))}
                                </div>

                                <span className="modal-price-tag">{currentTierData.price}</span>

                                <div className="modal-cta-group-left">
                                    {/* Sửa nút Xem Video để mở Popup */}
                                    <button 
                                        onClick={handleOpenVideo} 
                                        className="btn-video-left"
                                    >
                                        ▶ Xem Video Demo
                                    </button>
                                    
                                    <button className="btn-buy-left"
                                    onClick={handleBuyClick}
                                    >
                                        
                                        Đặt Mua Ngay
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* --- CỘT PHẢI --- */}
                        <div className="modal-right">
                            <div className="modal-section">
                                <h3>🎯 Mục Tiêu Chung</h3>
                                <p className="highlight-text">{kit.focus}</p>
                            </div>

                            <div className="modal-section">
                                <h3>📝 Mô Tả ({currentTierData.name})</h3>
                                <p className="desc-text">
                                    {currentTierData.description}
                                </p>
                            </div>

                            <div className="modal-section">
                                <h3>📦 Thành Phần Bộ {currentTierData.name}</h3>
                                <ul className="modal-list">
                                    {currentTierData.contents && currentTierData.contents.map((item, index) => (
                                        <li key={index}>✅ {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hiển thị Video Popup nếu isVideoOpen = true */}
            {isVideoOpen && (
                <VideoPopup 
                    videoId={kit.videoId || "LXb3EKWsInQ"} // Dùng ID từ data hoặc ID mẫu
                    onClose={() => setIsVideoOpen(false)} 
                />
            )}
        </>
    );
};

export default KitDetailModal;
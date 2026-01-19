import React, { useState } from 'react'; // <--- 1. Nhớ import useState
import { pricingTiers, anchoringValue } from '../data/pricingData';
import SubscriptionModal from '../components/SubscriptionModal'; // <--- 2. Import Modal

const PricingSection = ({onOpenCheckout}) => {
    // 3. State quản lý popup subscription
    const [isSubModalOpen, setIsSubModalOpen] = useState(false);

    const handleOpenSub = (e) => {
        e.preventDefault(); // Ngăn load lại trang
        setIsSubModalOpen(true);
    };

    return (
        <section id="pricing" className="pricing-section">
            <div className="pricing-container">
                <h2 className="section-heading">
                    Lựa Chọn Gói Hỗ Trợ Phù Hợp Cho Con Bạn
                </h2>
                
                <div className="anchoring-box">
                    Giá trị tương đương dịch vụ chuyên gia 1-1: 
                    <del className="anchoring-old-price">{anchoringValue}</del>
                    <span className="anchoring-text"> </span>
                </div>

                <div className="pricing-grid">
                    {pricingTiers.map((tier, index) => (
                        <div 
                            key={index} 
                            className={`pricing-card ${tier.isBestValue ? 'best-value' : ''}`}
                        >
                            <h3 className="tier-name">{tier.name}</h3>
                            {tier.isBestValue && <div className="badge">Gợi ý</div>}
                            
                            <p className="tier-price">{tier.price}</p>
                            <p className="tier-target">Target: {tier.target}</p>
                            
                            <div className="tier-features-list">
                                {tier.features.map((feature, idx) => (
                                    <p key={idx} className="feature-item">✅ {feature}</p>
                                ))}
                            </div>
                            
                            <a href="#product" className="cta-button-tier">
                                {tier.isBestValue ? 'ĐĂNG KÝ NGAY' : 'TÌM HIỂU THÊM'}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="subscription-cta">
                    <p>Cần hỗ trợ chuyên môn liên tục? </p>
                    
                    {/* 4. Gắn sự kiện click mở popup */}
                    <a href="#" className="subscription-link" onClick={handleOpenSub}>
                        Xem Gói Hỗ Trợ Theo Dõi (Subscription) → (150.000₫/tháng)
                    </a>
                </div>
            </div>

            {/* 5. Hiển thị Modal nếu state = true */}
            {isSubModalOpen && (
                <SubscriptionModal onClose={() => setIsSubModalOpen(false)} 
                    onOpenCheckout={onOpenCheckout} />
            )}
        </section>

        
    );
};

export default PricingSection;
import React from 'react';

const WhyUsSection = () => {
    return (
        <section className="whyus-section">
            <div className="whyus-container">
                <h2 className="section-heading">
                    Tại Sao Autism Kit Là Giải Pháp Tin Cậy?
                </h2>
                
                <div className="whyus-grid">
                    <div className="whyus-card">
                        <span className="whyus-icon">🎓</span>
                        <h3 className="whyus-title">Được Kiểm Duyệt Chuyên Môn</h3>
                        <p className="whyus-description">
                            Nội dung video và bộ test được thiết kế bởi chuyên gia trị liệu được chứng nhận.
                        </p>
                    </div>

                    <div className="whyus-card">
                        <span className="whyus-icon">🛡️</span>
                        <h3 className="whyus-title">An Toàn Tuyệt Đối</h3>
                        <p className="whyus-description">
                            Cam kết vật liệu Non-toxic, có Giấy chứng nhận an toàn, đảm bảo trẻ chơi trong môi trường lành mạnh.
                        </p>
                    </div>

                    <div className="whyus-card">
                        <span className="whyus-icon">🗺️</span>
                        <h3 className="whyus-title">Hành Trình Rõ Ràng</h3>
                        <p className="whyus-description">
                            Quy trình 3 bước: Đánh giá (Test) → Can thiệp (Video) → Theo dõi (Đánh giá) giúp cha mẹ luôn biết mình đang ở đâu.
                        </p>
                    </div>
                </div>

                <div className="journey-visual">
                    <h3 className="journey-title">Hành trình 3 bước Can thiệp hiệu quả</h3>
                    <div className="journey-steps-grid">
                        <div className="journey-step">
                            <span className="step-number">1</span>
                            <h4>TEST & ASSESS</h4>
                            <p>Phụ huynh làm Bộ Test Online.</p>
                        </div>
                        <span className="arrow">→</span>
                        <div className="journey-step">
                            <span className="step-number">2</span>
                            <h4>INTERVENE & PLAY</h4>
                            <p>Sử dụng Kit + Video theo gợi ý chuyên gia.</p>
                        </div>
                        <span className="arrow">→</span>
                        <div className="journey-step">
                            <span className="step-number">3</span>
                            <h4>TRACK & UPGRADE</h4>
                            <p>Đánh giá tiến độ sau 3-4 tuần để nhận gói tiếp theo.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyUsSection;
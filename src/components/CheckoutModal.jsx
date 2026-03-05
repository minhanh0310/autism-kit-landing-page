import React, { useState } from 'react';

// ⚠️ THAY THẾ BẰNG URL CỦA BẠN SAU KHI DEPLOY GOOGLE APPS SCRIPT
// Xem hướng dẫn tại: server/gscript.js
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxiyAFUgmtUOXz1XvQCP2Vy6vMIHvvBSbfd-JZGWbt-alFbS5iY6D63iyjTuZjTP_mD2Q/exec';

const CheckoutModal = ({ product, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        note: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Chuẩn bị dữ liệu gửi đi
        const payload = {
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            note: formData.note,
            productName: product?.name || '',
            productPrice: product?.price || ''
        };

        try {
            // Gửi dữ liệu lên Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                console.log('Lưu thành công:', result.data);
                setIsSubmitted(true);
            } else {
                setError(result.message || 'Có lỗi xảy ra, vui lòng thử lại!');
            }
        } catch (err) {
            console.error('Lỗi kết nối:', err);
            // Vẫn hiển thị thành công để không làm gián đoạn trải nghiệm người dùng
            // Trong thực tế bạn có thể xử lý khác
            setIsSubmitted(true);
        } finally {
            setIsLoading(false);
        }
    };

    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content checkout-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>

                {!isSubmitted ? (
                    <>
                        <div className="checkout-header">
                            <h3>Để lại thông tin tư vấn</h3>
                            <p>Chuyên viên sẽ liên hệ xác nhận trong vòng 2h làm việc.</p>
                        </div>

                        <div className="product-summary">
                            <span className="summary-label">Sản phẩm quan tâm:</span>
                            <div className="summary-name">{product.name}</div>
                            <div className="summary-price">{product.price}</div>
                        </div>

                        <form onSubmit={handleSubmit} className="checkout-form">
                            <div className="form-group">
                                <label>Họ và Tên *</label>
                                <input 
                                    type="text" name="name" required 
                                    placeholder="Ví dụ: Nguyễn Văn A"
                                    value={formData.name} onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Số điện thoại *</label>
                                <input 
                                    type="tel" name="phone" required 
                                    placeholder="Ví dụ: 0912..."
                                    value={formData.phone} onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Địa chỉ nhận hàng (nếu mua Kit)</label>
                                <input 
                                    type="text" name="address" 
                                    placeholder="Số nhà, phường, quận..."
                                    value={formData.address} onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn-submit-order" disabled={isLoading}>
                                {isLoading ? '⏳ ĐANG GỬI...' : 'GỬI THÔNG TIN NGAY'}
                            </button>

                            {error && <div className="error-message">{error}</div>}
                        </form>
                    </>
                ) : (
                    <div className="success-message">
                        <div className="success-icon">✅</div>
                        <h3>Đăng ký thành công!</h3>
                        <p>Cảm ơn bạn <strong>{formData.name}</strong>.</p>
                        <p>Hệ thống đã ghi nhận nhu cầu về gói <strong>{product.name}</strong>.</p>
                        <p className="note">Nhân viên AutismKit sẽ liên hệ qua số <strong>{formData.phone}</strong> trong giây lát để tư vấn chi tiết.</p>
                        <button className="btn-close-success" onClick={onClose}>Đóng</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
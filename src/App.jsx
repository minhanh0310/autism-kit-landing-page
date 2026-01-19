import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import WhyUsSection from './sections/WhyUsSection';
import ProductSection from './sections/ProductSection';
import PricingSection from './sections/PricingSection'; // Chứa SubscriptionModal
import TestimonialSection from './sections/TestimonialSection';
import VideoSection from './sections/VideoSection';
import Footer from './components/Footer';

// Import Modal Components
import KitDetailModal from './components/KitDetailModal';
import CheckoutModal from './components/CheckoutModal'; // <--- Import mới

function App() {
  const [selectedKit, setSelectedKit] = useState(null);
  
  // State quản lý Checkout Form
  const [checkoutProduct, setCheckoutProduct] = useState(null);

  // Hàm mở form checkout (Được gọi từ KitModal hoặc PricingSection)
  const handleOpenCheckout = (productInfo) => {
    setCheckoutProduct(productInfo);
    // Nếu đang mở Kit Detail thì đóng lại để hiện form checkout cho thoáng
    setSelectedKit(null); 
  };

  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <VideoSection />
      
      {/* Truyền hàm mở form checkout xuống các section con */}
      <ProductSection onKitClick={setSelectedKit} />
      
      <PricingSection onOpenCheckout={handleOpenCheckout} />

      <TestimonialSection />
      <Footer />

      {/* --- MODALS --- */}
      
      {/* Modal chi tiết sản phẩm */}
      {selectedKit && (
        <KitDetailModal 
          kit={selectedKit} 
          onClose={() => setSelectedKit(null)} 
          onOpenCheckout={handleOpenCheckout} // <--- Truyền hàm này vào
        />
      )}

      {/* Modal Checkout Form (Luôn nằm trên cùng) */}
      {checkoutProduct && (
        <CheckoutModal 
          product={checkoutProduct} 
          onClose={() => setCheckoutProduct(null)} 
        />
      )}
    </div>
  );
}

export default App;
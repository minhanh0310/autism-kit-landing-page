import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import WhyUsSection from './sections/WhyUsSection';
import AssessmentSection from './sections/AssessmentSection'; // <--- BỔ SUNG LẠI IMPORT NÀY
import ProductSection from './sections/ProductSection';
import PricingSection from './sections/PricingSection'; 
import TestimonialSection from './sections/TestimonialSection';
import VideoSection from './sections/VideoSection';
import Footer from './components/Footer';

// Import Modal Components
import KitDetailModal from './components/KitDetailModal';
import CheckoutModal from './components/CheckoutModal'; 

function App() {
  const [selectedKit, setSelectedKit] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);

  const handleOpenCheckout = (productInfo) => {
    setCheckoutProduct(productInfo);
    setSelectedKit(null); 
  };

  return (
    <div className="app-container">
      <Header />
      
      <HeroSection />
      
      <WhyUsSection />
      
      {/* --- BỔ SUNG LẠI SECTION BÀI TEST Ở ĐÂY --- */}
      <AssessmentSection /> 
      {/* ----------------------------------------- */}

      <VideoSection />
      
      <ProductSection onKitClick={setSelectedKit} />
      
      <PricingSection onOpenCheckout={handleOpenCheckout} />

      <TestimonialSection />
      
      <Footer />

      {/* --- MODALS --- */}
      {selectedKit && (
        <KitDetailModal 
          kit={selectedKit} 
          onClose={() => setSelectedKit(null)} 
          onOpenCheckout={handleOpenCheckout} 
        />
      )}

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
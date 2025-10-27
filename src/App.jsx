import React, { useState } from 'react';
import './index.css'; 
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import WhyUsSection from './sections/WhyUsSection';
import ProductSection from './sections/ProductSection';
import AssessmentSection from './sections/AssessmentSection';
import PricingSection from './sections/PricingSection';
import TestimonialSection from './sections/TestimonialSection';
import Footer from './components/Footer';
import KitDetailModal from './components/KitDetailModal';

function App() {
  // State quản lý Modal chi tiết Kit
  const [selectedKit, setSelectedKit] = useState(null);

  const handleOpenModal = (kitData) => {
    setSelectedKit(kitData);
  };

  const handleCloseModal = () => {
    setSelectedKit(null);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ProductSection onKitClick={handleOpenModal} />
        <AssessmentSection />
        <PricingSection />
        <TestimonialSection />
      </main>
      <Footer />
      
      {/* Component Modal */}
      <KitDetailModal kit={selectedKit} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
import React, { useState, useRef } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import EditorialSection from './components/EditorialSection';
import AboutSection from './components/AboutSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 500);
    }
  };

  const handleExploreClick = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLookbookClick = () => {
    const editorialElement = document.getElementById('editorial');
    if (editorialElement) {
      editorialElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-velour-50 text-velour-950 font-sans selection:bg-velour-950 selection:text-white flex flex-col">
        {/* Navigation Bar */}
        <Navbar onSearchClick={handleSearchClick} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero
            onExploreClick={handleExploreClick}
            onLookbookClick={handleLookbookClick}
          />
          <Catalog searchRef={searchInputRef} />
          <EditorialSection />
          <AboutSection />
          <Newsletter />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Overlays & Modals */}
        <CartDrawer onOpenCheckout={() => setIsCheckoutOpen(true)} />
        <ProductDetailModal />
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
        <Toast />
      </div>
    </CartProvider>
  );
}

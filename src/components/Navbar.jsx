import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Search, Heart, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onSearchClick }) {
  const { totalItemsCount, setIsCartOpen, wishlist } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-velour-50/90 backdrop-blur-md border-b border-velour-200/70 shadow-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-velour-950 hover:text-velour-700 transition-colors"
                aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="text-center lg:text-left">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
                className="inline-block group"
              >
                <span className="block font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold text-velour-950 group-hover:opacity-80 transition-opacity">
                  MAISON VELOURÉ
                </span>
                <span className="block text-[10px] tracking-[0.35em] text-velour-500 uppercase -mt-0.5">
                  Paris • Prêt-à-Porter
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-xs uppercase tracking-[0.2em] font-medium text-velour-800 hover:text-velour-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-velour-950 hover:after:w-full after:transition-all"
              >
                Koleksi
              </button>
              <button
                onClick={() => scrollToSection('editorial')}
                className="text-xs uppercase tracking-[0.2em] font-medium text-velour-800 hover:text-velour-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-velour-950 hover:after:w-full after:transition-all"
              >
                Lookbook & Muses
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-xs uppercase tracking-[0.2em] font-medium text-velour-800 hover:text-velour-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-velour-950 hover:after:w-full after:transition-all"
              >
                L'Histoire
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="text-xs uppercase tracking-[0.2em] font-medium text-velour-800 hover:text-velour-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-velour-950 hover:after:w-full after:transition-all"
              >
                Kontak
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Quick Search */}
              <button
                onClick={onSearchClick}
                className="p-2 text-velour-800 hover:text-velour-950 hover:bg-velour-200/50 rounded-full transition-all"
                aria-label="Cari produk"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Indicator */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="p-2 text-velour-800 hover:text-velour-950 hover:bg-velour-200/50 rounded-full transition-all"
                  aria-label="Wishlist favorit"
                >
                  <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
                  {wishlist.length > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 text-[10px] bg-velour-950 text-white rounded-full flex items-center justify-center font-medium">
                      {wishlist.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Shopping Bag / Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-3 py-2 bg-velour-950 text-white hover:bg-velour-800 rounded-full transition-all duration-300 shadow-sm"
                aria-label="Buka keranjang belanja"
              >
                <ShoppingBag className="w-4 h-4 text-velour-gold" />
                <span className="text-xs font-medium tracking-wider hidden sm:inline">BAG</span>
                <span className="w-5 h-5 bg-white text-velour-950 text-xs rounded-full flex items-center justify-center font-bold">
                  {totalItemsCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-velour-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-velour-50 shadow-2xl p-6 flex flex-col justify-between border-r border-velour-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-velour-200">
                <div>
                  <span className="font-serif text-lg tracking-[0.2em] font-semibold text-velour-950">
                    MAISON VELOURÉ
                  </span>
                  <span className="block text-[9px] tracking-[0.3em] text-velour-500 uppercase">
                    Paris Boutique
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-velour-800 hover:text-velour-950"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 space-y-5">
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="w-full flex items-center justify-between text-left text-sm uppercase tracking-[0.2em] font-medium text-velour-950 py-2 border-b border-velour-100"
                >
                  <span>Koleksi Produk</span>
                  <ArrowRight className="w-4 h-4 text-velour-500" />
                </button>
                <button
                  onClick={() => scrollToSection('editorial')}
                  className="w-full flex items-center justify-between text-left text-sm uppercase tracking-[0.2em] font-medium text-velour-950 py-2 border-b border-velour-100"
                >
                  <span>Editorial & Muses</span>
                  <ArrowRight className="w-4 h-4 text-velour-500" />
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full flex items-center justify-between text-left text-sm uppercase tracking-[0.2em] font-medium text-velour-950 py-2 border-b border-velour-100"
                >
                  <span>Tentang Maison</span>
                  <ArrowRight className="w-4 h-4 text-velour-500" />
                </button>
                <button
                  onClick={() => scrollToSection('footer')}
                  className="w-full flex items-center justify-between text-left text-sm uppercase tracking-[0.2em] font-medium text-velour-950 py-2 border-b border-velour-100"
                >
                  <span>Customer Concierge</span>
                  <ArrowRight className="w-4 h-4 text-velour-500" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-velour-200">
              <p className="text-xs text-velour-500 text-center tracking-wider">
                Gratis Pengiriman Seluruh Indonesia untuk pesanan di atas Rp 1.000.000
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

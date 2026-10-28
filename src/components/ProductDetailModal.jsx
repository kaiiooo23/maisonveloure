import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { X, Star, ShoppingBag, Heart, Shield, RefreshCw, Truck } from 'lucide-react';

export default function ProductDetailModal() {
  const { selectedProduct, setSelectedProduct, addToCart, toggleWishlist, wishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedSize(selectedProduct.sizes[0] || 'M');
      setSelectedColor(selectedProduct.colors[0]?.name || 'Standard');
      setQuantity(1);
    }
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const isWishlisted = wishlist.includes(selectedProduct.id);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedSize, selectedColor, quantity);
    setSelectedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velour-950/70 backdrop-blur-md transition-opacity"
        onClick={() => setSelectedProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-velour-200 z-10 max-h-[92vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center text-velour-900 hover:bg-velour-950 hover:text-white transition-all"
          aria-label="Tutup detail produk"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Showcase */}
        <div className="md:w-1/2 bg-velour-100 relative min-h-[320px] md:min-h-full">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-full object-cover object-top"
          />
          {selectedProduct.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold bg-velour-950 text-white rounded-lg">
                {selectedProduct.badge}
              </span>
            </div>
          )}
        </div>

        {/* Right Side: Details & Purchasing */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Category & Code */}
            <div className="flex items-center justify-between text-xs text-velour-500 pt-2">
              <span className="uppercase tracking-[0.2em] font-medium">{selectedProduct.category}</span>
              <span className="font-mono text-velour-400">REF: {selectedProduct.id}</span>
            </div>

            {/* Product Name & Rating */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-velour-950 leading-tight">
                {selectedProduct.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-velour-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-velour-gold text-velour-gold" />
                  ))}
                </div>
                <span className="text-xs text-velour-600 font-medium">
                  {selectedProduct.rating} ({selectedProduct.reviewsCount} Ulasan Pelanggan)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 py-2 border-y border-velour-100">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-velour-950">
                {formatPrice(selectedProduct.price)}
              </span>
              {selectedProduct.originalPrice && (
                <span className="text-sm text-velour-400 line-through">
                  {formatPrice(selectedProduct.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-velour-700 leading-relaxed font-light">
              {selectedProduct.description}
            </p>

            {/* Fabric Material Highlight */}
            {selectedProduct.fabric && (
              <div className="p-3 bg-velour-50 rounded-xl border border-velour-200/70 text-xs text-velour-800">
                <span className="font-semibold block uppercase tracking-wider text-[10px] text-velour-500 mb-1">
                  Komposisi Kain & Material:
                </span>
                {selectedProduct.fabric}
              </div>
            )}

            {/* Color Selection */}
            {selectedProduct.colors && selectedProduct.colors.length > 0 && (
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-velour-800 mb-2">
                  Pilihan Warna: <span className="font-normal text-velour-500">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                        selectedColor === color.name
                          ? 'border-velour-950 bg-velour-950 text-white shadow-sm'
                          : 'border-velour-200 bg-white text-velour-800 hover:border-velour-400'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-velour-800">
                  Pilih Ukuran
                </label>
                <span className="text-[11px] text-velour-500 underline cursor-pointer">
                  Panduan Ukuran (EU)
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedSize === size
                        ? 'bg-velour-950 text-white shadow-sm'
                        : 'bg-velour-100 text-velour-700 hover:bg-velour-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-velour-800 mb-2">
                Jumlah Pesanan
              </label>
              <div className="flex items-center border border-velour-200 rounded-xl w-32 bg-velour-50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velour-700 hover:bg-velour-200 rounded-l-xl transition-colors font-bold"
                >
                  -
                </button>
                <span className="flex-1 text-center font-semibold text-sm text-velour-950">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velour-700 hover:bg-velour-200 rounded-r-xl transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4 border-t border-velour-200">
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-velour-950 hover:bg-velour-800 text-white rounded-2xl font-medium text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-velour-gold" />
                <span>Tambahkan ke Keranjang</span>
              </button>

              <button
                onClick={() => toggleWishlist(selectedProduct.id)}
                className={`w-14 rounded-2xl border flex items-center justify-center transition-all ${
                  isWishlisted
                    ? 'border-rose-300 bg-rose-50 text-rose-500'
                    : 'border-velour-200 bg-white text-velour-800 hover:border-velour-400'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Guarantee Pills */}
            <div className="grid grid-cols-3 gap-2 text-[10px] text-velour-500 uppercase tracking-wider text-center pt-2">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-velour-700" />
                <span>Express Courier</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 text-velour-700" />
                <span>14 Hari Retur</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-velour-700" />
                <span>100% Autentik</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

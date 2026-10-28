import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist, setSelectedProduct } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Default');
  const [isHovered, setIsHovered] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor, 1);
  };

  const handleCardClick = () => {
    setSelectedProduct(product);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-velour-200/80 hover:border-velour-400/80 hover:shadow-xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-velour-100 overflow-hidden image-zoom-container">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5">
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-velour-950/85 backdrop-blur-sm text-white rounded-md">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-velour-900 hover:scale-110 transition-all"
          aria-label={isWishlisted ? "Hapus dari wishlist" : "Simpan ke wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-500 text-rose-500" : "text-velour-700"}`} />
        </button>

        {/* Quick View Floating Overlay on Hover */}
        <div
          className={`absolute inset-x-3 bottom-3 transition-all duration-300 transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-velour-200/70 flex flex-col gap-2">
            {/* Quick Size Selector */}
            <div className="flex items-center justify-between text-[11px] text-velour-500 px-1">
              <span>Pilih Ukuran:</span>
              <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-6 h-6 rounded text-[10px] font-semibold transition-all ${
                      selectedSize === size
                        ? "bg-velour-950 text-white"
                        : "bg-velour-100 text-velour-700 hover:bg-velour-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Add Button */}
            <button
              onClick={handleQuickAdd}
              type="button"
              className="w-full py-2 bg-velour-950 hover:bg-velour-800 text-white rounded-lg text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-velour-gold" />
              <span>Tambah ({selectedSize})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-velour-500 mb-1.5">
            <span className="uppercase tracking-[0.15em] font-medium text-[11px]">{product.category}</span>
            <div className="flex items-center gap-1 text-velour-800">
              <Star className="w-3.5 h-3.5 fill-velour-gold text-velour-gold" />
              <span className="font-semibold text-xs">{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg font-medium text-velour-950 group-hover:text-velour-700 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>

          {/* Subtitle / Short Description */}
          <p className="text-xs text-velour-500 line-clamp-2 leading-relaxed mb-4">
            {product.subtitle || product.description}
          </p>
        </div>

        {/* Color swatches & Price */}
        <div className="pt-3 border-t border-velour-100 flex items-center justify-between">
          {/* Swatches */}
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                title={color.name}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColor === color.name
                    ? "ring-1 ring-velour-950 ring-offset-1 scale-110"
                    : "border-velour-300 opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>

          {/* Pricing */}
          <div className="text-right">
            {product.originalPrice && (
              <span className="block text-[11px] text-velour-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-base font-semibold text-velour-950 tracking-tight">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

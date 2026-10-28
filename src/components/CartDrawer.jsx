import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Sparkles } from 'lucide-react';

export default function CartDrawer({ onOpenCheckout }) {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingCost,
    totalAmount,
    isFreeShipping,
    freeShippingProgress,
    remainingForFreeShipping,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velour-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-velour-200">
          
          {/* Header */}
          <div className="p-6 border-b border-velour-200 flex items-center justify-between bg-velour-50/80">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-velour-950" />
              <h2 className="font-serif text-xl font-medium tracking-wide text-velour-950">
                Tas Belanja
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-velour-200 text-velour-800 font-bold">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-velour-500 hover:text-velour-950 rounded-full hover:bg-velour-200/50 transition-colors"
              aria-label="Tutup keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3.5 bg-velour-100/60 border-b border-velour-200/80">
            <div className="flex items-center gap-2 text-xs text-velour-800 mb-1.5 font-medium">
              <Truck className="w-4 h-4 text-velour-gold shrink-0" />
              {isFreeShipping ? (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Selamat! Anda mendapatkan Gratis Pengiriman.
                </span>
              ) : (
                <span>
                  Tambah <strong className="text-velour-950 font-bold">{formatPrice(remainingForFreeShipping)}</strong> untuk Gratis Pengiriman
                </span>
              )}
            </div>
            <div className="w-full bg-velour-200 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  isFreeShipping ? 'bg-emerald-600' : 'bg-velour-950'
                }`}
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-velour-100 flex items-center justify-center text-velour-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg text-velour-900 mb-2">
                  Tas belanja Anda masih kosong
                </h3>
                <p className="text-xs text-velour-500 max-w-xs mb-6 leading-relaxed">
                  Temukan kreasi busana haute couture terbaik dalam katalog kami.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-velour-950 text-white rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-velour-800 transition-colors"
                >
                  Mulai Jelajahi
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.itemKey}
                  className="flex gap-4 p-4 rounded-2xl bg-velour-50/70 border border-velour-200/70 hover:border-velour-300 transition-colors"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-top rounded-xl bg-velour-200 shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-semibold text-velour-950 leading-snug line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.itemKey)}
                          className="text-velour-400 hover:text-rose-600 p-1 transition-colors"
                          aria-label="Hapus item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-velour-500 mt-1">
                        <span className="px-2 py-0.5 bg-white border border-velour-200 rounded font-medium">
                          Size {item.size}
                        </span>
                        <span className="text-velour-400">•</span>
                        <span>{item.color}</span>
                      </div>
                    </div>

                    {/* Quantity controls & Price */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-velour-200/50">
                      <div className="flex items-center border border-velour-200 rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.itemKey, -1)}
                          className="w-7 h-7 flex items-center justify-center text-velour-700 hover:bg-velour-100 rounded-l-lg transition-colors font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-semibold text-velour-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, 1)}
                          className="w-7 h-7 flex items-center justify-center text-velour-700 hover:bg-velour-100 rounded-r-lg transition-colors font-bold text-xs"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-velour-950 font-mono">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-velour-200 bg-velour-50/80 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-velour-600">
                  <span>Subtotal Pesanan</span>
                  <span className="font-semibold text-velour-900 font-mono">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-velour-600">
                  <span>Biaya Pengiriman</span>
                  {shippingCost === 0 ? (
                    <span className="text-emerald-700 font-bold uppercase tracking-wider text-[10px]">
                      GRATIS
                    </span>
                  ) : (
                    <span className="font-semibold text-velour-900 font-mono">{formatPrice(shippingCost)}</span>
                  )}
                </div>
                <div className="pt-2 border-t border-velour-200 flex justify-between items-baseline">
                  <span className="font-serif text-base font-semibold text-velour-950">
                    Total Pembayaran
                  </span>
                  <span className="font-serif text-xl font-bold text-velour-950">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-4 bg-velour-950 hover:bg-velour-800 text-white rounded-2xl text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Lanjutkan ke Pembayaran</span>
                <ArrowRight className="w-4 h-4 text-velour-gold" />
              </button>

              <p className="text-[10px] text-velour-500 text-center tracking-wider">
                Pembayaran aman terenkripsi • Pajak & Bea Masuk sudah termasuk
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

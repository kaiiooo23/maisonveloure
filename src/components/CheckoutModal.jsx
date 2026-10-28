import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, CreditCard, Wallet, Truck, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose }) {
  const { cart, totalAmount, subtotal, shippingCost, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'va',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Mohon lengkapi nama penerima, nomor telepon, dan alamat pengiriman.');
      return;
    }

    const generatedOrderId = `MV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedOrderId);
    setIsSuccess(true);
    clearCart();
  };

  const handleDone = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velour-950/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-velour-200 z-10 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-velour-200 flex items-center justify-between bg-velour-50/80">
          <div>
            <span className="font-serif text-lg tracking-[0.2em] font-semibold text-velour-950">
              MAISON VELOURÉ
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-velour-500 uppercase mt-0.5">
              Secure Checkout • Concierge Order
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-velour-500 hover:text-velour-950 rounded-full hover:bg-velour-200/50 transition-colors"
            aria-label="Tutup checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-velour-gold font-semibold">
                  Pesanan Berhasil Dikonfirmasi
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-velour-950 font-medium">
                  Merci Beaucoup, {formData.fullName}!
                </h3>
                <p className="text-sm text-velour-600 max-w-md mx-auto leading-relaxed">
                  Pesanan Anda dengan nomor referensi <strong className="font-mono text-velour-950 bg-velour-100 px-2 py-0.5 rounded">{orderId}</strong> sedang disiapkan oleh atelier butik kami.
                </p>
              </div>

              <div className="p-5 bg-velour-50 rounded-2xl border border-velour-200 text-left max-w-md mx-auto space-y-3 text-xs">
                <div className="flex justify-between text-velour-600">
                  <span>Metode Pembayaran:</span>
                  <span className="font-semibold text-velour-900 uppercase">{formData.paymentMethod}</span>
                </div>
                <div className="flex justify-between text-velour-600">
                  <span>Estimasi Pengiriman:</span>
                  <span className="font-semibold text-velour-900">1 - 3 Hari Kerja</span>
                </div>
                <div className="flex justify-between text-velour-600">
                  <span>Alamat Tujuan:</span>
                  <span className="font-semibold text-velour-900 text-right max-w-[200px] truncate">{formData.address}, {formData.city}</span>
                </div>
              </div>

              <button
                onClick={handleDone}
                className="px-8 py-3.5 bg-velour-950 text-white rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velour-800 transition-colors"
              >
                Kembali ke Beranda
              </button>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Customer Info */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-velour-950 mb-3 flex items-center gap-2">
                  <span>1. Informasi Kontak & Penerima</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-velour-700 mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Nadya Clarissa"
                      className="w-full p-3 bg-velour-50 border border-velour-200 rounded-xl text-xs text-velour-950 focus:outline-none focus:ring-1 focus:ring-velour-950"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-velour-700 mb-1">Nomor WhatsApp / HP *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0812-3456-7890"
                      className="w-full p-3 bg-velour-50 border border-velour-200 rounded-xl text-xs text-velour-950 focus:outline-none focus:ring-1 focus:ring-velour-950"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-velour-700 mb-1">Email Konfirmasi</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@domain.com"
                      className="w-full p-3 bg-velour-50 border border-velour-200 rounded-xl text-xs text-velour-950 focus:outline-none focus:ring-1 focus:ring-velour-950"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-velour-950 mb-3 flex items-center gap-2">
                  <span>2. Alamat Pengiriman</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-3">
                    <label className="block text-[11px] font-medium text-velour-700 mb-1">Alamat Lengkap & Nomor Rumah *</label>
                    <textarea
                      rows={2}
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Jl. Senopati No. 45, Kebayoran Baru"
                      className="w-full p-3 bg-velour-50 border border-velour-200 rounded-xl text-xs text-velour-950 focus:outline-none focus:ring-1 focus:ring-velour-950 resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-velour-700 mb-1">Kota / Kabupaten *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Jakarta Selatan"
                      className="w-full p-3 bg-velour-50 border border-velour-200 rounded-xl text-xs text-velour-950 focus:outline-none focus:ring-1 focus:ring-velour-950"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-velour-700 mb-1">Kode Pos</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="12190"
                      className="w-full p-3 bg-velour-50 border border-velour-200 rounded-xl text-xs text-velour-950 focus:outline-none focus:ring-1 focus:ring-velour-950"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-velour-950 mb-3 flex items-center gap-2">
                  <span>3. Metode Pembayaran</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'va', name: 'Virtual Account', sub: 'BCA, Mandiri, BNI', icon: Building2 },
                    { id: 'qris', name: 'QRIS & E-Wallet', sub: 'GoPay, OVO, ShopeePay', icon: Wallet },
                    { id: 'cod', name: 'Kurir Butik (COD)', sub: 'Bayar saat busana tiba', icon: Truck },
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <label
                        key={method.id}
                        className={`flex flex-col p-4 rounded-2xl border cursor-pointer transition-all ${
                          formData.paymentMethod === method.id
                            ? 'border-velour-950 bg-velour-950 text-white shadow-md'
                            : 'border-velour-200 bg-white text-velour-900 hover:border-velour-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <Icon className={`w-5 h-5 mb-2 ${formData.paymentMethod === method.id ? 'text-velour-gold' : 'text-velour-600'}`} />
                        <span className="text-xs font-semibold">{method.name}</span>
                        <span className={`text-[10px] mt-0.5 ${formData.paymentMethod === method.id ? 'text-velour-300' : 'text-velour-500'}`}>
                          {method.sub}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Summary and Pay */}
              <div className="pt-4 border-t border-velour-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-velour-500 block">Total Akhir Yang Dibayar:</span>
                  <span className="font-serif text-2xl font-bold text-velour-950 font-mono">
                    {formatPrice(totalAmount)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-velour-950 hover:bg-velour-800 text-white rounded-2xl text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-velour-gold" />
                  <span>Selesaikan Pesanan</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

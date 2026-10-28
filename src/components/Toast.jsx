import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast, closeToast } = useCart();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      closeToast();
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-velour-950 text-white rounded-xl shadow-2xl border border-velour-800 transition-all duration-300 animate-slide-up">
      {toast.type === 'info' ? (
        <Info className="w-5 h-5 text-velour-300 shrink-0" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-velour-gold shrink-0" />
      )}
      <p className="text-sm font-medium pr-2">{toast.message}</p>
      <button
        onClick={closeToast}
        className="text-velour-500 hover:text-white p-1 rounded transition-colors"
        aria-label="Tutup notifikasi"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Mohon masukkan alamat email yang valid.', 'info');
      return;
    }

    showToast('Merci! Anda telah terdaftar dalam buletin eksklusif Maison Velouré.');
    setEmail('');
  };

  return (
    <section className="py-20 bg-velour-950 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-velour-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-velour-gold font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Le Cercle Privé</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-4 text-white">
          Akses Eksklusif Koleksi Musiman
        </h2>

        <p className="text-sm sm:text-base text-velour-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Berlangganan buletin warta Maison Velouré untuk menerima undangan pratinjau tertutup (*private trunk show*), rilis terbatas, dan editorial panduan busana Prancis.
        </p>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-velour-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan alamat email Anda..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 text-white placeholder-velour-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-velour-gold/50 focus:border-velour-gold text-xs transition-all"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-white text-velour-950 hover:bg-velour-100 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <span>Daftar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <p className="text-[11px] text-velour-400 mt-4 tracking-wider">
          Privasi Anda terjaga. Anda dapat membatalkan langganan kapan saja.
        </p>
      </div>
    </section>
  );
}

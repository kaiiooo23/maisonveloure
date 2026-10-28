import React from 'react';
import { Instagram, Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-velour-950 text-white pt-20 pb-12 border-t border-velour-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white block">
              MAISON VELOURÉ
            </span>
            <p className="text-xs tracking-[0.3em] text-velour-gold uppercase">
              Haute Couture & Prêt-à-Porter
            </p>
            <p className="text-xs text-velour-400 max-w-sm leading-relaxed font-light">
              Menghadirkan pesona keanggunan busana Prancis modern dengan standar material wol kashmir, sutra alami, dan potongan arsitektural yang abadi.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-velour-300 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Instagram Maison Veloure"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/chillwhithkaii"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-velour-300 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Twitter X"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Koleksi */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Koleksi Busana
            </h4>
            <ul className="space-y-2.5 text-xs text-velour-400 font-light">
              <li><a href="#catalog" className="hover:text-white transition-colors">Coats & Trench</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Tailored Blazers</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Cashmere Knitwear</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Silk & Tops</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Summer Outerwear</a></li>
            </ul>
          </div>

          {/* Links Column 2: Layanan Atelier */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Atelier & Layanan
            </h4>
            <ul className="space-y-2.5 text-xs text-velour-400 font-light">
              <li><a href="#editorial" className="hover:text-white transition-colors">Lookbook Editorial</a></li>
              <li><span className="cursor-default">Panduan Ukuran (EU)</span></li>
              <li><span className="cursor-default">Perawatan Wol & Sutra</span></li>
              <li><span className="cursor-default">Konsultasi Personal Stylist</span></li>
              <li><span className="cursor-default">Garansi Autentikasi 100%</span></li>
            </ul>
          </div>

          {/* Links Column 3: Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Boutique Concierge
            </h4>
            <ul className="space-y-3 text-xs text-velour-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-velour-gold shrink-0 mt-0.5" />
                <span>Rue Saint-Honoré, Paris & Senopati, Jakarta</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-velour-gold shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-velour-gold shrink-0" />
                <span>concierge@maisonveloure.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-velour-500 font-light gap-4">
          <p>&copy; {new Date().getFullYear()} Maison Velouré. Tous droits réservés.</p>
          <div className="flex space-x-6 text-[11px] tracking-wider">
            <span className="hover:text-velour-400 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-velour-400 cursor-pointer">Syarat & Ketentuan</span>
            <span className="hover:text-velour-400 cursor-pointer">Pengiriman & Retur</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { Sparkles, Compass, Feather, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-velour-100/70 border-t border-velour-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Atelier Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative offset background border */}
              <div className="absolute -inset-4 rounded-3xl bg-velour-200/80 rotate-1 -z-10" />

              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-velour-900 border border-velour-300/50 image-zoom-container">
                <img
                  src="/assets/images/about/about.jpg"
                  alt="Maison Velouré Atelier Craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velour-950/80 via-velour-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-velour-950/70 backdrop-blur-md border border-white/10">
                  <p className="text-[10px] tracking-[0.25em] text-velour-gold uppercase font-medium">L'Atelier de Confection</p>
                  <p className="font-serif text-lg font-medium">Standard Kemewahan Internasional</p>
                </div>
              </div>

            </div>
          </div>

          {/* Brand Philosophy & Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-velour-gold font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>L'Histoire & La Philosophie</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-velour-950 tracking-tight leading-tight">
                Keanggunan yang Abadi, <br />
                <span className="italic font-serif text-velour-700">Dilahirkan dari Dedikasi</span> Tekstur.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-velour-700 font-light leading-relaxed">
              Didirikan dengan inspirasi tradisi mode Rue du Faubourg Saint-Honoré, Paris, 
              <strong> Maison Velouré</strong> hadir untuk mendefinisikan ulang butik modern: perpaduan antara kemewahan visual, kenyamanan tekstil alami, dan kesederhanaan desain kontemporer.
            </p>

            <p className="text-sm sm:text-base text-velour-700 font-light leading-relaxed">
              Setiap busana dalam katalog kami diproduksi dalam kuantitas terbatas (*limited release*) guna memastikan standar penjahitan haute couture, jahitan tepi tangan halus, serta pemilihan wol kashmir dan sutra terbaik tanpa kompromi.
            </p>

            {/* Philosophy Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white rounded-2xl border border-velour-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-velour-100 flex items-center justify-center text-velour-950 shrink-0">
                  <Feather className="w-5 h-5 text-velour-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-velour-950">Bahan Alami Pilihan</h4>
                  <p className="text-xs text-velour-500 mt-1 leading-relaxed">Kashmir wol, katun organik, dan sutra berkualitas tinggi.</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-velour-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-velour-100 flex items-center justify-center text-velour-950 shrink-0">
                  <Award className="w-5 h-5 text-velour-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-velour-950">Limited Capsule Release</h4>
                  <p className="text-xs text-velour-500 mt-1 leading-relaxed">Koleksi eksklusif terbatas untuk menjaga keunikan gaya Anda.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

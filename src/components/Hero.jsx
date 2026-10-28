import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero({ onExploreClick, onLookbookClick }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-velour-100/60 via-velour-50 to-velour-50">
      {/* Subtle background ambient blur */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-velour-sand/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-velour-gold/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-velour-200/60 border border-velour-300/60 text-velour-800 text-xs tracking-[0.2em] uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5 text-velour-gold" />
              <span>Édition Limitée 2026</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.12] text-velour-950 tracking-tight">
              The Courage to Appear <br />
              <span className="italic font-serif font-light text-velour-700">Impeccably</span> Elegant.
            </h1>

            <p className="text-base sm:text-lg text-velour-700 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              <span className="font-serif italic text-velour-950">Maison Velouré, Où L'élégance Rencontre Le Courage</span> — 
              Koleksi busana siap pakai berstandar haute couture Paris yang memadukan siluet klasik Prancis dengan kenyamanan busana kontemporer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 bg-velour-950 text-white hover:bg-velour-800 text-xs uppercase tracking-[0.2em] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Jelajahi Koleksi
              </button>
              <button
                onClick={onLookbookClick}
                className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white text-velour-950 border border-velour-300 text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300"
              >
                Lihat Lookbook Muses
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-velour-200/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-2xl font-medium text-velour-950">100%</p>
                <p className="text-[11px] text-velour-500 uppercase tracking-wider mt-0.5">Atelier Quality</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-velour-950">Paris</p>
                <p className="text-[11px] text-velour-500 uppercase tracking-wider mt-0.5">Design Direction</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-velour-950">Gratis</p>
                <p className="text-[11px] text-velour-500 uppercase tracking-wider mt-0.5">Ongkir &gt; 1 Juta</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Backing decorative frame */}
              <div className="absolute -inset-4 rounded-3xl bg-velour-200/50 -rotate-2 -z-10" />
              
              {/* Main Fashion Hero Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-velour-900 border border-velour-200/50 image-zoom-container">
                <img
                  src="/assets/images/hero/dress.jpg"
                  alt="Maison Velouré Haute Couture Showcase"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velour-950/80 via-velour-950/20 to-transparent" />
                
                {/* Floating Card Caption */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-velour-950/80 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] text-velour-gold uppercase font-medium">Capsule N° 08</p>
                      <p className="font-serif text-lg font-medium">L'Étoile du Soir Dress</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-white/20 rounded-full font-mono">
                      Prêt-à-Porter
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-velour-200 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-velour-gold" />
                <span className="text-[11px] font-medium tracking-wider text-velour-900 uppercase">
                  Verified Original Fabric
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

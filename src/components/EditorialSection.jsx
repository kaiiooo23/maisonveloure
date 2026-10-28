import React from 'react';
import { editorialModels } from '../data/products';
import { Quote, Sparkles } from 'lucide-react';

export default function EditorialSection() {
  return (
    <section id="editorial" className="py-24 bg-white border-t border-velour-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-velour-gold font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editorial & Muses</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-velour-950 tracking-tight mb-4">
            Les Muses de Velouré
          </h2>
          <p className="text-sm sm:text-base text-velour-600 font-light leading-relaxed">
            Representasi keanggunan wanita modern melalui pandangan para muse mode terkemuka dalam balutan siluet eksklusif Maison Velouré.
          </p>
        </div>

        {/* Editorial Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {editorialModels.map((muse) => (
            <div
              key={muse.id}
              className="group flex flex-col bg-velour-50/50 rounded-3xl overflow-hidden border border-velour-200/70 hover:border-velour-400/80 hover:shadow-xl transition-all duration-500"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-velour-200 image-zoom-container">
                <img
                  src={muse.image}
                  alt={`${muse.name} - ${muse.role}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Editorial Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velour-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Bottom Muse Info in Photo */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] tracking-[0.25em] text-velour-gold uppercase font-medium">
                    {muse.role}
                  </p>
                  <h3 className="font-serif text-2xl font-medium tracking-wide">
                    {muse.name}
                  </h3>
                </div>
              </div>

              {/* Editorial Quote Card */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div className="relative">
                  <Quote className="w-6 h-6 text-velour-gold/40 mb-3" />
                  <p className="text-xs sm:text-sm text-velour-700 italic font-serif leading-relaxed">
                    "{muse.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-velour-100 flex items-center justify-between text-[11px] text-velour-500 uppercase tracking-wider">
                  <span>Parisian Muse</span>
                  <span className="font-mono text-velour-400">LOOK N° {muse.id.slice(-1)}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { TESTIMONIALS } from '../../config/productsData';
import { Star } from 'lucide-react';

export const V2Testimonials = () => {
  return (
    <section id="v2-depoimentos" className="py-16 sm:py-24 bg-[#ECE4D5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8A6238]">
            O que dizem sobre nós
          </h2>

          <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed font-light">
            A maior recompensa do nosso ateliê é saber que cada ponto levou aconchego e sorrisos para o seu lar.
          </p>
        </div>

        {/* Grid de Depoimentos em Cards Retrô */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E2D7C5] shadow-xs flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Estrelas Mostarda */}
              <div className="flex items-center gap-1">
                {[...Array(t.rating || 5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D6A23A] text-[#D6A23A]"
                  />
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-xs sm:text-sm text-[#57412E] italic leading-relaxed font-light">
                "{t.comment}"
              </p>

              {/* Informações da Cliente */}
              <div className="pt-3 border-t border-[#E2D7C5] flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#8A6238]">
                    {t.name}
                  </h4>
                  {t.city && <p className="text-[11px] text-[#8F7B6B]">{t.city}</p>}
                </div>
                {t.piece && (
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F5F0E6] text-[#7D8552] font-semibold border border-[#E2D7C5]">
                    {t.piece}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

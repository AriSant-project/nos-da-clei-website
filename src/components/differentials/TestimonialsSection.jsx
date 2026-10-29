import React from 'react';
import { TESTIMONIALS } from '../../config/productsData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[var(--color-bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-title)]">
            O que dizem sobre nós
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-body)]">
            A maior recompensa do nosso ateliê é saber que cada ponto levou aconchego e sorrisos para o seu lar.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--color-surface)] rounded-2xl sm:rounded-3xl p-6 border border-[var(--color-border)] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative"
            >
              <div className="space-y-4">
                {/* Estrelas & Aspas */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[var(--color-primary-soft)] fill-current rotate-180" />
                </div>

                {/* Peça Adquirida */}
                <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[var(--color-bg-subtle)] text-[var(--color-primary-hover)]">
                  Peça: {item.piece}
                </div>

                {/* Comentário */}
                <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Autor / Cliente */}
              <div className="pt-4 mt-4 border-t border-[var(--color-border)]/60 flex items-center gap-3">
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-2xs"
                  />
                )}
                <div>
                  <h4 className="font-heading text-sm font-bold text-[var(--color-text-title)]">
                    {item.name}
                  </h4>
                  {item.city && (
                    <p className="text-[11px] text-[var(--color-text-muted)]">
                      {item.city}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

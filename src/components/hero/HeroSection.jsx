import React from 'react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';
import { MessageCircle, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const whatsappUrl = buildWhatsAppUrl("Olá Nós da Clei! Vi a apresentação no catálogo e gostaria de tirar uma dúvida sobre as peças de crochê!");

  return (
    <section id="inicio" className="pt-8 pb-10 sm:pt-14 sm:pb-14 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Logotipo Centralizado em Moldura Circular Suave (Exatamente como na Referência) */}
        <div className="mb-6 flex justify-center">
          <div className="relative group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-md flex items-center justify-center p-4 border border-stone-200/70 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
              <img
                src={BRAND_CONFIG.logoUrl}
                alt={BRAND_CONFIG.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Brilho decorativo sutil */}
            <div className="absolute -inset-1 rounded-full bg-[var(--color-primary)] opacity-10 blur-xs -z-10" />
          </div>
        </div>

        {/* Frase Poética com Divisores Elegantes */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <span className="w-6 sm:w-16 h-px bg-[var(--color-subheading-green)] opacity-40"></span>
          <span className="font-heading text-sm sm:text-base italic font-medium text-[var(--color-subheading-green)] px-1">
            {BRAND_CONFIG.taglineHeader}
          </span>
          <span className="w-6 sm:w-16 h-px bg-[var(--color-subheading-green)] opacity-40"></span>
        </div>

        {/* Texto Afetivo */}
        <p className="text-sm sm:text-base text-[var(--color-text-body)] max-w-lg mx-auto font-light leading-relaxed mb-6">
          {BRAND_CONFIG.shortDescription}
        </p>

        {/* Links Rápidos / Ações */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="#catalogo"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span>Ver coleção</span>
            <Sparkles className="w-3.5 h-3.5" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white border border-[var(--color-border)] text-[var(--color-text-title)] shadow-xs hover:border-[var(--color-primary)] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

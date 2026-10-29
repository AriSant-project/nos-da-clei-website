import React, { useState } from 'react';
import { FAQS } from '../../config/productsData';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Primeiro aberto por padrão

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const whatsappUrl = buildWhatsAppUrl("Olá! Tenho uma dúvida sobre uma peça de crochê que não encontrei nas perguntas frequentes.");

  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg-subtle)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-title)]">
            Perguntas frequentes
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-body)]">
            Tudo o que você precisa saber sobre como funciona o nosso ateliê, desde a escolha das 
            linhas até a chegada da encomenda na sua casa.
          </p>
        </div>

        {/* Acordeão */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[var(--color-text-title)]">
                    {faq.question}
                  </span>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[var(--color-primary)] text-white' : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed border-t border-[var(--color-border)]/50 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ajuda Adicional */}
        <div className="mt-12 text-center p-6 bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] max-w-xl mx-auto space-y-3">
          <p className="text-sm font-semibold text-[var(--color-text-title)]">
            Ainda ficou com alguma dúvida sobre seu pedido?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar diretamente no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

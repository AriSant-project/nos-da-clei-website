import React, { useState } from 'react';
import { FAQS } from '../../config/productsData';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';

export const V2Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const whatsappUrl = buildWhatsAppUrl("Olá! Tenho uma dúvida sobre uma peça de crochê que não encontrei nas perguntas frequentes.");

  return (
    <section className="py-16 sm:py-24 bg-[#F5F0E6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8A6238]">
            Perguntas frequentes
          </h2>

          <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed font-light">
            Tudo o que você precisa saber sobre prazos, envios, cartela de fios e segurança na sua encomenda.
          </p>
        </div>

        {/* Acordeão Retrô */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border-2 border-[#E2D7C5] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-[#8A6238]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#7D8552] text-white' : 'bg-[#F5F0E6] text-[#8A6238]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#57412E] leading-relaxed border-t border-[#E2D7C5]/60 animate-fadeIn font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card de Atendimento Direto */}
        <div className="mt-10 text-center p-6 bg-white rounded-3xl border-2 border-[#E2D7C5] max-w-lg mx-auto space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-[#8A6238]">
            Ainda ficou com alguma dúvida sobre seu pedido?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#7D8552] hover:bg-[#6B7344] shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar diretamente no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Zap, CreditCard, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';

export const V2PaymentMethods = () => {
  const whatsappUrl = buildWhatsAppUrl("Olá Nós da Clei! Gostaria de tirar uma dúvida sobre as formas de pagamento e parcelamento.");

  return (
    <section id="v2-pagamento" className="py-8 sm:py-12 bg-[#F5F0E6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Quadro Principal com Estilo Boutique Retrô */}
        <div className="bg-white rounded-[2.5rem] border-2 border-[#E2D7C5] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          
          {/* Decoração sutil de iluminação */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6A23A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7D8552]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Cabeçalho do Quadro de Pagamento */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2 relative">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8A6238]">
              Formas de Pagamento
            </h2>
            <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed font-light">
              Escolha a opção mais conveniente para você. Cuidamos de cada detalhe com total segurança e respeito ao seu pedido.
            </p>
          </div>

          {/* 2 Blocos de Formas de Pagamento: Pix e Cartão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative max-w-4xl mx-auto">
            
            {/* Bloco 1: Pix Instantâneo */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F0E6]/80 border border-[#E2D7C5] flex flex-col justify-between space-y-3 transition-transform hover:-translate-y-0.5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#7D8552] flex items-center justify-center shadow-2xs border border-[#E2D7C5]">
                    <Zap className="w-5 h-5 text-[#7D8552]" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF0E1] text-[#7D8552]">
                    ✦ Mais Escolhido
                  </span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#8A6238]">
                  Pix Instantâneo (à vista ou 2x)
                </h3>
                <p className="text-xs text-[#57412E] leading-relaxed font-light">
                  Pagamento com confirmação rápida. Você pode pagar à vista ou em <strong>2x</strong> (metade no ato da encomenda e a outra metade na entrega da peça pronta).
                </p>
              </div>
            </div>

            {/* Bloco 2: Cartão de Crédito */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F0E6]/80 border border-[#E2D7C5] flex flex-col justify-between space-y-3 transition-transform hover:-translate-y-0.5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#C66F52] flex items-center justify-center shadow-2xs border border-[#E2D7C5]">
                    <CreditCard className="w-5 h-5 text-[#C66F52]" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FBEBE8] text-[#C66F52]">
                    🔒 Link Seguro
                  </span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#8A6238]">
                  Cartão de Crédito Parcelado
                </h3>
                <p className="text-xs text-[#57412E] leading-relaxed font-light">
                  O parcelamento está disponível através de um <strong>link seguro de pagamento</strong> enviado no WhatsApp. As parcelas e valores são informados no próprio link de forma transparente.
                </p>
              </div>
            </div>

          </div>

          {/* Barra de Rodapé do Quadro */}
          <div className="mt-8 pt-5 border-t border-[#E2D7C5] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative max-w-4xl mx-auto">
            <p className="text-xs text-[#8F7B6B] font-light">
              ✨ Tem alguma dúvida sobre valores ou condições de parcelamento?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#7D8552] hover:bg-[#6B7344] shadow-2xs transition-all shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>Tirar dúvidas de pagamento no WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

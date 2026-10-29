import React from 'react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';
import { InstagramIcon, PixIcon } from '../ui/Icons';
import { MessageCircle, Heart, CreditCard } from 'lucide-react';

export const V2Footer = () => {
  return (
    <footer id="v2-contato" className="bg-[#F5F0E6] pt-14 pb-10 text-[#57412E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#E2D7C5]">
          
          {/* 1. Identidade */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white border border-[#8A6238]/30 shadow-xs flex items-center justify-center p-1.5 overflow-hidden">
                <img
                  src={BRAND_CONFIG.logoUrl}
                  alt={BRAND_CONFIG.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-[#8A6238] block leading-tight">
                  Nós da Clei
                </span>
                <span className="text-[10px] text-[#7D8552] uppercase tracking-widest font-bold">
                  Boutique de Crochê
                </span>
              </div>
            </div>

            <p className="text-xs text-[#57412E] leading-relaxed font-light">
              Peças exclusivas feitas à mão, ponto por ponto, com fios selecionados e afeto para você e seu lar.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E2D7C5] flex items-center justify-center text-[#8A6238] hover:text-[#C66F52] hover:border-[#8A6238] transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={buildWhatsAppUrl("Olá Nós da Clei!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E2D7C5] flex items-center justify-center text-[#7D8552] hover:border-[#7D8552] transition-colors shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Formas de Pagamento */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#8A6238]">
              Formas de pagamento
            </h4>

            <div className="space-y-2 text-xs text-[#57412E]">
              <div className="p-2.5 rounded-xl bg-white border border-[#E2D7C5] space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#8A6238]">
                  <PixIcon className="w-3.5 h-3.5 text-[#7D8552]" />
                  Pix Instantâneo:
                </span>
                <p className="text-[11px] text-[#57412E] leading-relaxed">
                  {BRAND_CONFIG.paymentMethods.pix}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-[#E2D7C5] space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#8A6238]">
                  <CreditCard className="w-3.5 h-3.5 text-[#C66F52]" />
                  Cartão de crédito:
                </span>
                <p className="text-[11px] text-[#57412E] leading-relaxed">
                  {BRAND_CONFIG.paymentMethods.credit}
                </p>
              </div>

              <p className="text-[11px] font-medium text-[#7D8552] bg-[#EBF0E1] px-3 py-1.5 rounded-lg border border-[#7D8552]/20">
                ✨ {BRAND_CONFIG.paymentMethods.cardHighlight}
              </p>
            </div>
          </div>

          {/* 3. Atendimento e Localização */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#8A6238]">
              Atendimento & Contato
            </h4>

            <p className="text-xs text-[#57412E] leading-relaxed font-light">
              Ateliê em <strong>{BRAND_CONFIG.location}</strong>.
            </p>

            <div className="space-y-1.5 pt-1 text-xs">
              <a
                href={buildWhatsAppUrl("Olá Nós da Clei! Gostaria de falar sobre uma encomenda!")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#7D8552] hover:text-[#6B7344] font-bold"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {BRAND_CONFIG.whatsappDisplay}</span>
              </a>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8A6238] hover:text-[#C66F52] font-semibold"
              >
                <InstagramIcon className="w-4 h-4 shrink-0" />
                <span>Instagram: @{BRAND_CONFIG.instagramUser}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7B6B] text-center font-light">
          <p className="flex items-center justify-center gap-1">
            Feito à mão com muito carinho para você. <Heart className="w-3.5 h-3.5 fill-[#C66F52] text-[#C66F52]" />
          </p>
          <p>© 2026 Nós da Clei Crochê Artesanal • Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

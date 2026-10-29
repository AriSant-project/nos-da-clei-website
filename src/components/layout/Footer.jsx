import React from 'react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';
import { 
  Heart, 
  MessageCircle, 
  MapPin, 
  ArrowUp,
  CreditCard
} from 'lucide-react';
import { InstagramIcon, PixIcon } from '../ui/Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = buildWhatsAppUrl("Olá! Gostaria de conversar com você sobre um pedido em crochê!");

  return (
    <footer id="contato" className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-12 text-[var(--color-text-body)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior com 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--color-border)]/80">
          
          {/* Coluna 1: Marca & Afeto (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center p-2 border border-stone-200 overflow-hidden shrink-0">
                <img 
                  src={BRAND_CONFIG.logoUrl} 
                  alt={BRAND_CONFIG.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-[var(--color-text-title)] block leading-tight">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[11px] text-[var(--color-subheading-green)] uppercase tracking-wider font-semibold">
                  Ateliê Artesanal
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              {BRAND_CONFIG.shortDescription}
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Nosda Clei Crochê"
                className="w-9 h-9 rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Nosda Clei Crochê"
                className="w-9 h-9 rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)] flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-text-title)]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-[var(--color-primary)] transition-colors">Início</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[var(--color-primary)] transition-colors">Catálogo de peças</a>
              </li>
              <li>
                <a href="#encomenda" className="hover:text-[var(--color-primary)] transition-colors">Sob encomenda</a>
              </li>
              <li>
                <a href="#cuidados" className="hover:text-[var(--color-primary)] transition-colors">Como cuidar</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[var(--color-primary)] transition-colors">Por que o feito à mão é especial</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[var(--color-primary)] transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Formas de Pagamento & Segurança (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-text-title)]">
              Formas de pagamento
            </h4>
            
            <p className="text-xs text-[var(--color-text-body)]">
              Facilidade e transparência para a sua encomenda:
            </p>

            <div className="space-y-2.5">
              <div className="text-xs bg-[var(--color-bg-base)] p-3 rounded-xl border border-[var(--color-border)] space-y-1">
                <div className="flex items-center gap-2 font-bold text-[var(--color-text-title)]">
                  <PixIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pix</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-body)] leading-relaxed">
                  Pagamento à vista ou em 2x (metade no ato da encomenda e o restante na entrega).
                </p>
              </div>

              <div className="text-xs bg-[var(--color-bg-base)] p-3 rounded-xl border border-[var(--color-border)] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[var(--color-text-title)]">
                  <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Cartão de crédito</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-body)] leading-relaxed">
                  O parcelamento está disponível e o valor final é informado no próprio link, de acordo com a quantidade de parcelas escolhida.
                </p>
                <div className="pt-1 border-t border-[var(--color-border)]/60">
                  <span className="inline-block text-[10px] font-semibold text-[var(--color-primary-hover)] bg-[var(--color-primary-soft)] px-2 py-0.5 rounded-md">
                    ✨ No cartão o pagamento é via link, de forma prática e segura.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 4: Atendimento & Horário (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-text-title)]">
              Atendimento humanizado
            </h4>
            
            <p className="text-xs text-[var(--color-text-body)] leading-relaxed">
              Converse diretamente com a artesã responsável pelas suas peças.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[var(--color-text-title)]">
                <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                <span>{BRAND_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-title)]">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp: {BRAND_CONFIG.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-title)]">
                <InstagramIcon className="w-4 h-4 text-pink-600 shrink-0" />
                <span>@{BRAND_CONFIG.instagramUser}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-2xs transition-all"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha de Encerramento com Mensagem Afetiva & Direitos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)] text-center sm:text-left">
          
          <div className="flex items-center gap-1.5 font-medium">
            <span>Feito à mão, ponto por ponto, com</span>
            <Heart className="w-3.5 h-3.5 fill-current text-[var(--color-primary)] inline" />
            <span>para você.</span>
          </div>

          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} {BRAND_CONFIG.name}. Todos os direitos reservados.</p>
            
            {/* Botão Voltar ao Topo */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)] transition-colors shadow-2xs"
              aria-label="Voltar ao topo"
              title="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

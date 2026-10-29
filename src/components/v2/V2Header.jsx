import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';
import { Menu, X, MessageCircle } from 'lucide-react';

export const V2Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#v2-inicio" },
    { label: "Coleção", href: "#v2-catalogo" },
    { label: "Sob Encomenda", href: "#v2-encomenda" },
    { label: "Diferenciais", href: "#v2-diferenciais" },
    { label: "Cuidados & FAQ", href: "#v2-cuidados-faq" },
    { label: "Depoimentos", href: "#v2-depoimentos" },
  ];

  const whatsappUrl = buildWhatsAppUrl("Olá Nós da Clei! Gostaria de falar sobre um pedido em crochê!");

  return (
    <>
      {/* Barra de Navegação Boutique Retrô */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F0E6]/95 backdrop-blur-md shadow-xs border-b border-[#E2D7C5] py-2.5'
            : 'bg-[#F5F0E6] border-b border-[#E2D7C5]/60 py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Nós da Clei */}
          <a href="#v2-inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white border border-[#8A6238]/30 shadow-xs flex items-center justify-center p-1.5 overflow-hidden transition-transform group-hover:scale-105">
              <img
                src={BRAND_CONFIG.logoUrl}
                alt={BRAND_CONFIG.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#8A6238] leading-none">
                Nós da Clei
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#7D8552] mt-0.5">
                Boutique de Crochê
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-[#57412E] hover:text-[#8A6238] hover:bg-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Pedido WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 bg-[#7D8552] hover:bg-[#6B7344]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>Fazer pedido / WhatsApp</span>
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#8A6238] hover:bg-white/70 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Menu Mobile Retrô */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F0E6] border-b border-[#E2D7C5] shadow-lg p-5 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-[#57412E] hover:bg-white/80"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[#E2D7C5]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white shadow-xs bg-[#7D8552]"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

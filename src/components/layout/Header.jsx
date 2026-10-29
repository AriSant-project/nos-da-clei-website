import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Coleção", href: "#catalogo" },
    { label: "Sob Encomenda", href: "#encomenda" },
    { label: "Cuidados", href: "#cuidados" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const whatsappUrl = buildWhatsAppUrl("Olá Nós da Clei! Gostaria de falar sobre um pedido em crochê!");

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F0E7]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-2.5'
          : 'bg-[#F6F0E7] py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Logo / Marca */}
        <a href="#inicio" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-2xs flex items-center justify-center p-1.5 border border-stone-200 overflow-hidden">
            <img
              src={BRAND_CONFIG.logoUrl}
              alt={BRAND_CONFIG.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight">
              {BRAND_CONFIG.displayName}
            </span>
            <span className="text-[10px] tracking-wider uppercase font-medium text-[var(--color-subheading-green)]">
              Ateliê artesanal
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-950 hover:bg-white/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão de Contato WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white shadow-xs hover:shadow-md transition-all"
            style={{ backgroundColor: 'var(--color-action-green)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-action-green-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-action-green)'}
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Fazer pedido / WhatsApp</span>
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-stone-800 hover:bg-white/60 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-lg p-5">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-800 hover:bg-stone-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white shadow-xs"
                style={{ backgroundColor: 'var(--color-action-green)' }}
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

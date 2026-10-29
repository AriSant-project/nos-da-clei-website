import React from 'react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';
import { Sparkles, MessageCircle } from 'lucide-react';

export const AnnouncementBar = () => {
  const whatsappUrl = buildWhatsAppUrl("Olá! Gostaria de consultar a disponibilidade da agenda para este mês!");

  return (
    <div 
      className="text-xs sm:text-sm py-2 px-4 text-center font-medium transition-colors border-b flex items-center justify-center gap-2"
      style={{
        backgroundColor: 'var(--color-primary-soft)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-primary-hover)'
      }}
    >
      <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse text-[var(--color-primary)]" />
      <span>{BRAND_CONFIG.announcement}</span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-1 underline font-semibold hover:opacity-80 transition-opacity ml-1"
      >
        <MessageCircle className="w-3 h-3" /> Falar com a artesã
      </a>
    </div>
  );
};

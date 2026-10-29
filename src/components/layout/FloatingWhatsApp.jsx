import React, { useState } from 'react';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = buildWhatsAppUrl("Olá Nosda Clei! Estava navegando no seu site e gostaria de tirar uma dúvida sobre encomendas em crochê!");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      
      {/* Balãozinho / Tooltip delicado */}
      {showTooltip && (
        <div className="relative bg-white rounded-2xl shadow-xl border border-[var(--color-border)] p-3 max-w-[220px] animate-bounce-subtle text-left">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5 rounded-full"
            aria-label="Fechar mensagem rápida"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>Ateliê Online</span>
          </div>
          
          <p className="text-xs text-[var(--color-text-title)] leading-snug">
            Olá! 💕 Quer ajuda para escolher as cores ou tirar dúvidas sobre sua encomenda?
          </p>

          {/* Triângulo indicador do balão */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
        </div>
      )}

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 bg-[#25D366] hover:bg-[#20ba5a]"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        
        {/* Ponto indicador de atividade */}
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>

    </div>
  );
};

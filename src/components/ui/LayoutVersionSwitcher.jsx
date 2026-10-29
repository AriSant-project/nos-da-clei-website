import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, Layers } from 'lucide-react';

export const LayoutVersionSwitcher = () => {
  const { currentLayout, setLayout } = useTheme();

  return (
    <div className="bg-[#2D2118] text-[#F5F0E6] text-xs py-2 px-3 sm:px-4 border-b border-stone-800 z-50 sticky top-0 backdrop-blur-md transition-all shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Etiqueta explicativa */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D6A23A] animate-ping" />
          <span className="font-semibold text-stone-200">
            Comparador de Layouts • Nós da Clei
          </span>
          <span className="hidden md:inline text-[11px] text-stone-400">
            (Alterne em tempo real para testar os designs)
          </span>
        </div>

        {/* Botões seletores */}
        <div className="flex items-center bg-stone-900/90 rounded-full p-1 border border-stone-700">
          <button
            type="button"
            onClick={() => setLayout('v2')}
            className={`px-3 py-1 rounded-full font-medium transition-all text-xs flex items-center gap-1.5 ${
              currentLayout === 'v2'
                ? 'bg-[#7D8552] text-white shadow-xs font-semibold'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D6A23A]" />
            <span>Versão Principal (Oficial)</span>
          </button>

          <button
            type="button"
            onClick={() => setLayout('v1')}
            className={`px-3 py-1 rounded-full font-medium transition-all text-xs flex items-center gap-1.5 ${
              currentLayout === 'v1'
                ? 'bg-[#D47A46] text-white shadow-xs font-semibold'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Versão 1 (Anterior)</span>
          </button>
        </div>

      </div>
    </div>
  );
};

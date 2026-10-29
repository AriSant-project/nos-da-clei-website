import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Palette, Check, X, Info } from 'lucide-react';

export const ThemePaletteSwitcher = () => {
  const { activePalette, palettes, selectPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('palettes'); // 'palettes' | 'code'

  return (
    <div className="fixed bottom-6 left-6 z-40 pointer-events-auto">
      
      {/* Botão Gatilho Discreto */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[var(--color-surface)] text-[var(--color-text-title)] border border-[var(--color-border)] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs font-semibold"
          title="Personalizar Paleta de Cores (Design System)"
        >
          <Palette className="w-4 h-4 text-[var(--color-primary)]" />
          <span className="hidden sm:inline">Paletas da Loja</span>
          <span 
            className="w-3 h-3 rounded-full border border-white"
            style={{ backgroundColor: activePalette.colors.primary }}
          />
        </button>
      )}

      {/* Janela de Ajuste de Tema / Design System */}
      {isOpen && (
        <div className="bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] shadow-2xl p-5 w-80 sm:w-96 text-[var(--color-text-body)] animate-fadeIn">
          
          {/* Topo do Modal */}
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: activePalette.colors.primary }}
              >
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-[var(--color-text-title)]">
                  Design System Flexível
                </h3>
                <p className="text-[10px] text-[var(--color-text-muted)]">
                  Troque a paleta com 1 clique
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-stone-800"
              aria-label="Fechar painel de temas"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Abas */}
          <div className="flex gap-2 my-3 p-1 bg-[var(--color-bg-subtle)] rounded-xl text-xs">
            <button
              onClick={() => setActiveTab('palettes')}
              className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'palettes' ? 'bg-white shadow-2xs text-[var(--color-text-title)]' : 'text-[var(--color-text-muted)]'
              }`}
            >
              Paletas de Cores
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'code' ? 'bg-white shadow-2xs text-[var(--color-text-title)]' : 'text-[var(--color-text-muted)]'
              }`}
            >
              Como Substituir
            </button>
          </div>

          {/* Conteúdo Aba 1: Paletas */}
          {activeTab === 'palettes' && (
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {palettes.map((palette) => {
                const isSelected = activePalette.id === palette.id;
                return (
                  <button
                    key={palette.id}
                    onClick={() => selectPalette(palette.id)}
                    className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)]/50 ring-1 ring-[var(--color-primary)]'
                        : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-bg-subtle)]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[var(--color-text-title)]">
                          {palette.name}
                        </span>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-[var(--color-text-muted)] leading-tight">
                        {palette.tagline}
                      </p>
                    </div>

                    {/* Bolinhas de cores */}
                    <div className="flex items-center -space-x-1.5 shrink-0 ml-2">
                      <span
                        className="w-5 h-5 rounded-full border-2 border-white shadow-2xs"
                        style={{ backgroundColor: palette.colors.primary }}
                        title="Cor Primária"
                      />
                      <span
                        className="w-5 h-5 rounded-full border-2 border-white shadow-2xs"
                        style={{ backgroundColor: palette.colors.secondary }}
                        title="Cor Secundária"
                      />
                      <span
                        className="w-5 h-5 rounded-full border-2 border-white shadow-2xs"
                        style={{ backgroundColor: palette.colors.accent }}
                        title="Cor de Destaque"
                      />
                      <span
                        className="w-5 h-5 rounded-full border-2 border-white shadow-2xs"
                        style={{ backgroundColor: palette.colors.bgBase }}
                        title="Cor de Fundo"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Conteúdo Aba 2: Instruções para a Logo da Loja */}
          {activeTab === 'code' && (
            <div className="space-y-3 text-xs leading-relaxed max-h-72 overflow-y-auto pr-1">
              <div className="bg-[var(--color-bg-subtle)] p-3 rounded-xl border border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-text-title)] mb-1 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  Para colocar as cores da sua logo:
                </p>
                <p className="text-[11px] text-[var(--color-text-body)]">
                  Abra o arquivo <code className="bg-white px-1 py-0.5 rounded border text-[10px] font-mono">src/config/brandConfig.js</code> e altere os códigos hexadecimais na variável <code className="bg-white px-1 py-0.5 rounded border text-[10px] font-mono">COLOR_PALETTES</code>.
                </p>
              </div>

              <div className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-[10px] overflow-x-auto">
                <p className="text-stone-400">// Exemplo em src/index.css:</p>
                <p>:root &#123;</p>
                <p className="pl-3">--color-primary: <span className="text-pink-300">#C8757F</span>;</p>
                <p className="pl-3">--color-secondary: <span className="text-amber-300">#986B56</span>;</p>
                <p className="pl-3">--color-bg-base: <span className="text-stone-300">#FAF7F2</span>;</p>
                <p>&#125;</p>
              </div>

              <p className="text-[11px] text-[var(--color-text-muted)] italic">
                O site inteiro atualizará automaticamente de forma harmoniosa!
              </p>
            </div>
          )}

          {/* Rodapé da janelinha */}
          <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-text-muted)]">
            <span>Tema ativo: <strong>{activePalette.name}</strong></span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--color-primary)] hover:underline font-semibold"
            >
              Fechar
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

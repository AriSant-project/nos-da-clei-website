import React, { createContext, useContext, useState, useEffect } from 'react';
import { COLOR_PALETTES } from '../config/brandConfig';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Inicialização do Layout principal (v2 padrão), verificando URL query params
  const [currentLayout, setCurrentLayout] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLayout = params.get('v') || params.get('layout');
      if (urlLayout === '1' || urlLayout === 'v1') return 'v1';
      if (urlLayout === '2' || urlLayout === 'v2') return 'v2';
      const saved = localStorage.getItem('nosda_clei_layout');
      if (saved === 'v1') return 'v1';
      return 'v2';
    }
    return 'v2';
  });

  // Inicialização da paleta (retro-bloom padrão da versão oficial)
  const [currentPaletteId, setCurrentPaletteId] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedPalette = localStorage.getItem('nosda_clei_palette');
      if (savedPalette) return savedPalette;
      const params = new URLSearchParams(window.location.search);
      const urlLayout = params.get('v') || params.get('layout');
      if (urlLayout === '1' || urlLayout === 'v1') return 'atelie-quente';
    }
    return 'retro-bloom';
  });

  const activePalette = COLOR_PALETTES.find((p) => p.id === currentPaletteId) || COLOR_PALETTES[0];

  // Alternar entre layouts e ajustar paleta recomendada se desejado
  const setLayout = (layout) => {
    setCurrentLayout(layout);
    localStorage.setItem('nosda_clei_layout', layout);
    if (layout === 'v2') {
      setCurrentPaletteId('retro-bloom');
    } else {
      setCurrentPaletteId('atelie-quente');
    }
  };

  const toggleLayout = () => {
    setLayout(currentLayout === 'v1' ? 'v2' : 'v1');
  };

  useEffect(() => {
    const root = document.documentElement;
    const colors = activePalette.colors;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-primary-soft', colors.primarySoft);
    root.style.setProperty('--color-action-green', colors.actionGreen || '#738E54');
    root.style.setProperty('--color-action-green-hover', colors.actionGreenHover || '#627B45');
    root.style.setProperty('--color-subheading-green', colors.subheadingGreen || '#5F744C');
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-secondary-soft', colors.secondarySoft);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-terracotta', colors.terracotta || '#C66F52');
    root.style.setProperty('--color-vintage-blue', colors.vintageBlue || '#648A87');
    root.style.setProperty('--color-bg-base', colors.bgBase);
    root.style.setProperty('--color-bg-subtle', colors.bgSubtle);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-text-title', colors.textTitle);
    root.style.setProperty('--color-text-body', colors.textBody);
    root.style.setProperty('--color-text-muted', colors.textMuted);

    localStorage.setItem('nosda_clei_palette', activePalette.id);
  }, [activePalette]);

  const selectPalette = (id) => {
    setCurrentPaletteId(id);
  };

  return (
    <ThemeContext.Provider
      value={{
        activePalette,
        palettes: COLOR_PALETTES,
        selectPalette,
        currentLayout,
        setLayout,
        toggleLayout,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

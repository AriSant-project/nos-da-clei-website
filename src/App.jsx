import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { CatalogSection } from './components/catalog/CatalogSection';
import { CustomOrderSection } from './components/custom-order/CustomOrderSection';
import { CareGuideSection } from './components/care-guide/CareGuideSection';
import { WhyHandmadeSection } from './components/differentials/WhyHandmadeSection';
import { TestimonialsSection } from './components/differentials/TestimonialsSection';
import { FaqSection } from './components/differentials/FaqSection';
import { Footer } from './components/layout/Footer';
import { ThemePaletteSwitcher } from './components/ui/ThemePaletteSwitcher';
import { LayoutV2 } from './components/v2/LayoutV2';
import './App.css';

function MainApp() {
  const { currentLayout } = useTheme();

  return (
    <div className="min-h-screen flex flex-col antialiased">
      {currentLayout === 'v2' ? (
        /* Versão 2: Boutique Retrô & Retro Bloom */
        <LayoutV2 />
      ) : (
        /* Versão 1: Clássica Afetiva (Preservada Integralmente) */
        <div className="min-h-screen flex flex-col bg-[var(--color-bg-base)] text-[var(--color-text-body)] transition-colors duration-300">
          {/* Barra superior de aviso carinhoso */}
          <AnnouncementBar />

          {/* Header com Logo, navegação smooth scroll e CTA */}
          <Header />

          {/* Conteúdo Principal */}
          <main className="flex-1">
            {/* 1. Hero Section: Apresentação Afetiva */}
            <HeroSection />

            {/* 2. Catálogo: Produtos com Filtros por Categoria e Modal de Pedido */}
            <CatalogSection />

            {/* 3. Faça sua Encomenda Personalizada: Ideias próprias / Pinterest */}
            <CustomOrderSection />

            {/* 4. Cuidados com sua Peça: Grid explicativo de conservação */}
            <CareGuideSection />

            {/* 5. Por que o Feito à Mão é Especial: Slow fashion e exclusividade */}
            <WhyHandmadeSection />

            {/* 6. Depoimentos: Avaliações de clientes 5 estrelas */}
            <TestimonialsSection />

            {/* 7. FAQ: Perguntas frequentes */}
            <FaqSection />
          </main>

          {/* Rodapé completo com redes, formas de pagamento e afeto */}
          <Footer />

          {/* Seletor Interativo do Design System (Paletas da Loja) */}
          <ThemePaletteSwitcher />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { V2Header } from './V2Header';
import { V2Hero } from './V2Hero';
import { V2Catalog } from './V2Catalog';
import { V2CustomOrder } from './V2CustomOrder';
import { V2PaymentMethods } from './V2PaymentMethods';
import { V2WhyAndCare } from './V2WhyAndCare';
import { V2Testimonials } from './V2Testimonials';
import { V2Faq } from './V2Faq';
import { V2Footer } from './V2Footer';
import { V2WaveDivider } from './V2WaveDivider';

export const LayoutV2 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#57412E] selection:bg-[#EBF0E1] selection:text-[#8A6238]">
      {/* 1. Header Boutique Retrô */}
      <V2Header />

      {/* 2. Conteúdo Principal com Divisores Ondulados Orgânicos em Todas as Seções */}
      <main className="flex-1">
        {/* Hero Section Editorial */}
        <V2Hero />

        {/* Divisor 1: Hero (#F5F0E6) -> Catálogo (#ECE4D5) */}
        <V2WaveDivider from="#F5F0E6" to="#ECE4D5" />

        {/* Catálogo Estilo Boutique (#ECE4D5) */}
        <V2Catalog />

        {/* Divisor 2: Catálogo (#ECE4D5) -> Encomenda (#F5F0E6) */}
        <V2WaveDivider from="#ECE4D5" to="#F5F0E6" />

        {/* Encomendas Sob Medida com 3 Passos Retrô (#F5F0E6) */}
        <V2CustomOrder />

        {/* Quadro Específico de Formas de Pagamento (#F5F0E6) */}
        <V2PaymentMethods />

        {/* Divisor 3: Encomenda/Pagamento (#F5F0E6) -> Diferenciais (#ECE4D5) */}
        <V2WaveDivider from="#F5F0E6" to="#ECE4D5" />

        {/* Diferenciais Artesanais (#ECE4D5) + Divisória Ondulada 4 + Cuidados (#F5F0E6) */}
        <V2WhyAndCare />

        {/* Perguntas Frequentes (FAQ) (#F5F0E6) */}
        <V2Faq />

        {/* Divisor 5: Cuidados & FAQ (#F5F0E6) -> Depoimentos (#ECE4D5) */}
        <V2WaveDivider from="#F5F0E6" to="#ECE4D5" />

        {/* Depoimentos de Clientes (#ECE4D5) */}
        <V2Testimonials />

        {/* Divisor 6: Depoimentos (#ECE4D5) -> Rodapé (#F5F0E6) */}
        <V2WaveDivider from="#ECE4D5" to="#F5F0E6" />
      </main>

      {/* 3. Rodapé com Informações de Pagamento e Contatos */}
      <V2Footer />
    </div>
  );
};

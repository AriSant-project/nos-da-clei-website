import React from 'react';
import { Clock, Fingerprint, Leaf, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhyHandmadeSection = () => {
  const pillars = [
    {
      icon: Clock,
      title: "Tempo e Consciência",
      desc: "Nenhuma máquina no mundo é capaz de reproduzir o ponto do crochê! Cada laçada exige a atenção e dedicação das mãos da artesã durante horas.",
    },
    {
      icon: Fingerprint,
      title: "Exclusividade",
      desc: "Ainda que o mesmo padrão seja seguido, a tensão do ponto, as variações dos fios e os toques manuais tornam a sua peça única no mundo inteiro.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      desc: "Produção sob demanda e sem desperdício de insumos. Valorizamos o consumo consciente e peças duradouras.",
    },
    {
      icon: HeartHandshake,
      title: "Afeto materializado",
      desc: "Muito além de um objeto, você leva para a sua casa uma criação carregada de boas energias, carinho e respeito por cada etapa do processo.",
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-[var(--color-bg-subtle)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Centralizado Limpo */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-title)]">
            Por que o crochê artesanal é tão especial?
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-body)] leading-relaxed font-light">
            Em um mundo de produtos descartáveis e industriais em massa, o crochê nos convida 
            a desacelerar e apreciar a verdadeira arte de criar com as próprias mãos.
          </p>
        </div>

        {/* Grid dos Quadros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-primary-soft)] text-[var(--color-primary)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--color-text-title)]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão de Ação */}
        <div className="pt-10 text-center">
          <a
            href="#encomenda"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white shadow-xs hover:shadow-md transition-all"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span>Fazer parte dessa história</span>
            <CheckCircle2 className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

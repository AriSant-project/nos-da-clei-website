import React from 'react';
import { Clock, Fingerprint, Leaf, HeartHandshake, Hand, Droplets, SunMedium, Layers } from 'lucide-react';

export const V2WhyAndCare = () => {
  const pillars = [
    {
      icon: Clock,
      title: "Tempo e Consciência",
      desc: "Nenhuma máquina no mundo é capaz de reproduzir o ponto do crochê! Cada laçada exige a atenção e dedicação das mãos da artesã durante horas.",
      color: "#D6A23A",
    },
    {
      icon: Fingerprint,
      title: "Exclusividade",
      desc: "Ainda que o mesmo padrão seja seguido, a tensão do ponto, as variações dos fios e os toques manuais tornam a sua peça única no mundo inteiro.",
      color: "#7D8552",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      desc: "Produção sob demanda e sem desperdício de insumos. Valorizamos o consumo consciente e peças duradouras.",
      color: "#648A87",
    },
    {
      icon: HeartHandshake,
      title: "Afeto materializado",
      desc: "Muito além de um objeto, você leva para a sua casa uma criação carregada de boas energias, carinho e respeito por cada etapa do processo.",
      color: "#C66F52",
    },
  ];

  const careTips = [
    {
      icon: Hand,
      title: "Lave à mão com sabão neutro",
      desc: "Mergulhe em água fria com sabão líquido ou de coco. Não use cloro nem esfregue os pontos.",
    },
    {
      icon: Droplets,
      title: "Não torça, aperte suavemente",
      desc: "Pressione delicadamente em uma toalha seca para retirar a água sem esticar nem deformar.",
    },
    {
      icon: SunMedium,
      title: "Seque à sombra na horizontal",
      desc: "Nunca pendure no varal com pregadores. Estenda sobre uma superfície plana e à sombra.",
    },
    {
      icon: Layers,
      title: "Evite guardar em cabides",
      desc: "O crochê cede com o próprio peso! Guarde dobrado em gavetas ou prateleiras arejadas.",
    },
  ];

  return (
    <div id="v2-diferenciais">
      
      {/* 1. SEÇÃO POR QUE O CROCHÊ É ESPECIAL */}
      <section className="py-16 sm:py-24 bg-[#ECE4D5] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8A6238]">
              Por que o crochê artesanal é tão especial?
            </h2>
            <p className="text-xs sm:text-base text-[#57412E] leading-relaxed font-light">
              Em um mundo de produtos descartáveis e industriais em massa, o crochê nos convida a desacelerar e apreciar a verdadeira arte de criar com as próprias mãos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-3xl p-6 border-2 border-[#E2D7C5] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8A6238]/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#8A6238]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. DIVISOR ONDULADO ORGÂNICO */}
      <div className="w-full overflow-hidden leading-none -my-1 text-[#F5F0E6] bg-[#ECE4D5] pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-14 fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* 3. SEÇÃO GUIA DE CUIDADOS */}
      <section id="v2-cuidados-faq" className="py-16 sm:py-24 bg-[#F5F0E6] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8A6238]">
              Como cuidar da sua peça de crochê
            </h2>
            <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed font-light">
              Seguindo essas orientações simples, seu crochê artesanal manterá a estrutura, toque macio e cores vivas por muitos anos!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.title}
                  className="bg-white/95 rounded-3xl p-5 border border-[#E2D7C5] shadow-2xs space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#F5F0E6] text-[#7D8552] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[#8A6238]">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#57412E] leading-relaxed font-light">
                    {tip.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { 
  Hand, 
  SunMedium, 
  Layers, 
  Droplets,
  Sparkles
} from 'lucide-react';

export const CareGuideSection = () => {
  const careSteps = [
    {
      icon: Hand,
      title: "Lave à mão com sabão neutro",
      description: "Mergulhe a peça em água fria ou em temperatura ambiente com um pouco de sabão líquido ou de coco neutro. Não use alvejantes nem esfregue os pontos com força.",
      tag: "Lavagem Suave",
    },
    {
      icon: Droplets,
      title: "Não torça, aperte suavemente",
      description: "Para tirar o excesso de água, não torça o crochê como uma roupa comum. Envolva a peça delicadamente em uma toalha seca e limpa, pressionando para absorver a umidade.",
      tag: "Preservação da Trama",
    },
    {
      icon: SunMedium,
      title: "Seque à sombra e na horizontal",
      description: "Nunca use pregadores nem pendure no varal pelo fio, pois o peso da água deforma a peça. Estenda-a sobre uma toalha em superfície plana à sombra.",
      tag: "Sem Deformar",
    },
    {
      icon: Layers,
      title: "Evite guardar em cabides",
      description: "O crochê cede com a gravidade! Para que não laceie com o tempo, dobre com carinho e guarde em gavetas, prateleiras ou saquinhos de algodão respirável.",
      tag: "Armazenamento",
    },
  ];

  return (
    <section id="cuidados" className="py-16 sm:py-24 bg-[var(--color-bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-title)]">
            Como cuidar da sua peça de crochê
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-body)]">
            Um trabalho feito à mão é uma joia em fios. Seguindo esses passos simples de carinho,
            sua peça se manterá linda, macia e estruturada por muitos anos.
          </p>
        </div>

        {/* Grid dos 4 Cards Principais de Cuidados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group bg-[var(--color-surface)] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[var(--color-border)] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Linha colorida superior suave no hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />

                <div>
                  {/* Ícone com fundo delicado */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs"
                      style={{
                        backgroundColor: 'var(--color-primary-soft)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-bold text-[var(--color-text-muted)] opacity-30">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    {step.tag}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[var(--color-text-title)] mt-1 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--color-border)]/60 flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)] font-medium">
                  <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                  <span>Dica de ateliê</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

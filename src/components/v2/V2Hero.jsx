import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../utils/whatsappHelper';

export const V2Hero = () => {
  const whatsappUrl = buildWhatsAppUrl("Olá Nós da Clei! Gostaria de conversar sobre as peças artesanais!");

  return (
    <section id="v2-inicio" className="pt-8 pb-12 sm:pt-14 sm:pb-20 bg-[#F5F0E6] relative overflow-hidden">
      
      {/* Detalhes de iluminação suave de fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6A23A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#C66F52]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna de Conteúdo Editorial */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Título Poético com Destaque em Tipografia Orgânica */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#8A6238] leading-[1.15] tracking-tight">
              Entre um ponto e outro,{' '}
              <span className="italic font-normal block sm:inline text-[#C66F52]">
                teço histórias.
              </span>
            </h1>

            {/* Subtítulo Afetivo */}
            <p className="text-sm sm:text-base text-[#57412E] leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Peças de crochê feitas com muito carinho. Também aceitamos encomendas sob medida e presentes personalizados com cartela exclusiva de fios.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#v2-catalogo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 bg-[#7D8552] hover:bg-[#6B7344]"
              >
                <span>Ver coleção</span>
                <Sparkles className="w-4 h-4 text-[#D6A23A]" />
              </a>

              <a
                href="#v2-encomenda"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white border border-[#8A6238]/30 text-[#8A6238] hover:border-[#8A6238] shadow-2xs transition-all"
              >
                <span>Encomenda sob medida</span>
                <ArrowRight className="w-4 h-4 text-[#C66F52]" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#57412E] hover:text-[#8A6238] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#7D8552]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Pilares em Pílulas Delicadas */}
            <div className="pt-4 border-t border-[#E2D7C5] flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#8F7B6B]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#D6A23A]">✦</span> 100% Manual
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#7D8552]">✦</span> Fios Selecionados
              </span>
            </div>

          </div>

          {/* Coluna da Imagem Editorial (Inspirado no print Anette & Retro Bloom) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Moldura Externa com Cantos Orgânicos */}
              <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-white border-2 border-[#E2D7C5] shadow-lg">
                
                {/* Imagem Real do Ateliê: Modelo com Bolsa de Crochê Granny Square */}
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#ECE4D5]">
                  <img
                    src="/images/cliente.webp"
                    alt="Bolsa de Crochê Feita à Mão Nós da Clei"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradiente sutil inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Legenda Flutuante */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D6A23A] block">
                      Nova criação
                    </span>
                    <p className="font-heading text-lg font-bold">
                      Bag Granny Square
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

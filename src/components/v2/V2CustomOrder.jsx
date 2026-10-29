import React, { useState } from 'react';
import { Send, Lightbulb, Palette, CheckCircle2, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';

export const V2CustomOrder = () => {
  const [formData, setFormData] = useState({
    pieceType: 'Tapete de porta ou sala',
    size: 'Médio (ex: passadeira 1,20m)',
    palette: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    let msg = `Olá Nós da Clei! Vi o catálogo e gostaria de fazer uma encomenda personalizada:\n\n`;
    msg += `🧶 *Peça:* ${formData.pieceType}\n`;
    msg += `📏 *Tamanho aproximado:* ${formData.size}\n`;
    if (formData.palette) {
      msg += `🎨 *Cores de preferência:* ${formData.palette}\n`;
    }
    if (formData.details) {
      msg += `📝 *Detalhes adicionais:* ${formData.details}\n`;
    }
    msg += `\nPoderia me passar o orçamento e a disponibilidade na agenda? Muito obrigada!`;
    return msg;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="v2-encomenda" className="py-16 sm:py-24 bg-[#F5F0E6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8A6238]">
            Faça sua encomenda personalizada
          </h2>

          <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed font-light">
            Viu uma foto no Pinterest ou quer uma roupa nas suas medidas exatas? Preencha os campos abaixo e envie sua ideia diretamente para o nosso WhatsApp!
          </p>
        </div>

        {/* 3 Passos da Encomenda com Numeração Retrô */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          <div className="bg-white p-5 rounded-3xl border border-[#E2D7C5] shadow-xs relative overflow-hidden">
            <span className="text-3xl font-heading font-black text-[#D6A23A]/30 absolute top-2 right-4">
              01
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#F5F0E6] text-[#8A6238] flex items-center justify-center mb-3">
              <Lightbulb className="w-4 h-4 text-[#D6A23A]" />
            </div>
            <h3 className="font-heading text-sm font-bold text-[#8A6238] mb-1">
              1. Conte sua ideia
            </h3>
            <p className="text-xs text-[#57412E] leading-relaxed font-light">
              Diga o que você deseja, envie referências de fotos, escolha as cores e tamanhos.
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#E2D7C5] shadow-xs relative overflow-hidden">
            <span className="text-3xl font-heading font-black text-[#7D8552]/30 absolute top-2 right-4">
              02
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#F5F0E6] text-[#7D8552] flex items-center justify-center mb-3">
              <Palette className="w-4 h-4 text-[#7D8552]" />
            </div>
            <h3 className="font-heading text-sm font-bold text-[#8A6238] mb-1">
              2. Orçamento e fios
            </h3>
            <p className="text-xs text-[#57412E] leading-relaxed font-light">
              Calculamos o valor e o prazo na agenda, enviando a cartela de fios para sua aprovação.
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#E2D7C5] shadow-xs relative overflow-hidden">
            <span className="text-3xl font-heading font-black text-[#C66F52]/30 absolute top-2 right-4">
              03
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#F5F0E6] text-[#C66F52] flex items-center justify-center mb-3">
              <CheckCircle2 className="w-4 h-4 text-[#C66F52]" />
            </div>
            <h3 className="font-heading text-sm font-bold text-[#8A6238] mb-1">
              3. Produção com amor
            </h3>
            <p className="text-xs text-[#57412E] leading-relaxed font-light">
              Confeccionamos cada laçada com carinho e enviamos fotos antes do envio seguro até a sua casa!
            </p>
          </div>

        </div>

        {/* Formulário Interativo com Estilo de Caderno Retrô */}
        <div className="bg-white rounded-[2rem] border-2 border-[#E2D7C5] p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A6238] mb-1.5">
                  1. Tipo de peça:
                </label>
                <select
                  name="pieceType"
                  value={formData.pieceType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E2D7C5] bg-[#F5F0E6] text-[#57412E] focus:outline-none focus:border-[#7D8552]"
                >
                  <option value="Tapete de porta ou sala">Tapete de porta ou sala</option>
                  <option value="Passadeira de cozinha ou corredor">Passadeira de cozinha ou corredor</option>
                  <option value="Peça de roupa (cropped / cardigan)">Peça de roupa (cropped / cardigan)</option>
                  <option value="Bucket hat ou acessório">Bucket hat ou acessório</option>
                  <option value="Tote bag ou bolsa de crochê">Tote bag ou bolsa de crochê</option>
                  <option value="Mesa posta & sousplat">Mesa posta & sousplat</option>
                  <option value="Outro modelo especial">Outro modelo especial (descrever)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A6238] mb-1.5">
                  2. Tamanho aproximado:
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E2D7C5] bg-[#F5F0E6] text-[#57412E] focus:outline-none focus:border-[#7D8552]"
                >
                  <option value="Pequeno (ex: tapete de porta)">Pequeno (ex: tapete de porta)</option>
                  <option value="Médio (ex: passadeira 1,20m)">Médio (ex: passadeira 1,20m)</option>
                  <option value="Grande (ex: passadeira longa)">Grande (ex: passadeira longa)</option>
                  <option value="Sob medida corporal (P/M/G)">Sob medida corporal (P/M/G)</option>
                  <option value="A combinar">A combinar</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A6238] mb-1.5">
                3. Paleta ou cores de preferência:
              </label>
              <input
                type="text"
                name="palette"
                value={formData.palette}
                onChange={handleChange}
                placeholder="Descreva as cores desejadas (ex: cru com marrom, tons terrosos, azul com cinza...)"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E2D7C5] bg-[#F5F0E6] text-[#57412E] placeholder:text-[#8F7B6B]/70 focus:outline-none focus:border-[#7D8552]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8A6238] mb-1.5">
                4. Detalhes / dimensões / medidas:
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={2}
                placeholder="Ex: Medida exata de 1,40m x 45cm para o corredor, amarração frontal..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E2D7C5] bg-[#F5F0E6] text-[#57412E] placeholder:text-[#8F7B6B]/70 focus:outline-none focus:border-[#7D8552] resize-none"
              />
            </div>

            {/* Pré-visualização da mensagem */}
            <div className="p-3.5 bg-[#F5F0E6] rounded-2xl border border-[#E2D7C5] text-xs space-y-1">
              <span className="font-bold text-[#7D8552] flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                Mensagem formatada para o seu WhatsApp:
              </span>
              <p className="text-[11px] text-[#57412E] italic font-mono whitespace-pre-line leading-relaxed">
                {generateWhatsAppMessage()}
              </p>
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#7D8552] hover:bg-[#6B7344] shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar ideia pelo WhatsApp</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

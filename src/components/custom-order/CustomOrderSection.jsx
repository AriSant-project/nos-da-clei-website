import React, { useState } from 'react';
import { buildWhatsAppUrl, buildCustomOrderMessage } from '../../utils/whatsappHelper';
import { 
  MessageCircle, 
  Palette, 
  Send, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export const CustomOrderSection = () => {
  const [pieceType, setPieceType] = useState('Tapete de Porta ou Sala');
  const [customTypeInput, setCustomTypeInput] = useState('');
  const [size, setSize] = useState('Médio (20 a 30cm)');
  const [colors, setColors] = useState('');
  const [occasion, setOccasion] = useState('Uso Próprio (Minha Casa)');
  const [details, setDetails] = useState('');
  const [referenceLink, setReferenceLink] = useState('');

  const pieceTypeOptions = [
    "Tapete de Porta ou Sala",
    "Passadeira de Cozinha ou Corredor",
    "Peça de Roupa (Cropped / Cardigan)",
    "Bucket Hat ou Acessório",
    "Mesa Posta & Sousplat",
    "Outro (descrever abaixo)",
  ];

  const sizeOptions = [
    "Pequeno (ex: tapete de porta)",
    "Médio (ex: passadeira 1,20m)",
    "Grande (ex: passadeira longa)",
    "Sob Medida Corporal (P/M/G)",
    "A combinar",
  ];

  const colorPalettesSuggested = [
    "Tons Terrosos & Caramelo",
    "Off-White & Cru Natural",
    "Azul Marinho & Cinza",
    "Chocolate & Baunilha",
    "Outra combinação",
  ];

  // Resolve o tipo de peça final
  const resolvedPieceType = pieceType === "Outro (descrever abaixo)" && customTypeInput 
    ? customTypeInput 
    : pieceType;

  // Monta a mensagem pronta do WhatsApp
  const generatedMessage = buildCustomOrderMessage({
    pieceType: resolvedPieceType,
    size,
    colors: colors || 'A combinar',
    occasion,
    details,
    referenceLink,
  });

  const whatsAppUrl = buildWhatsAppUrl(generatedMessage);

  return (
    <section id="encomenda" className="py-16 sm:py-24 bg-[var(--color-bg-subtle)] relative overflow-hidden">
      
      {/* Luz de fundo */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-title)]">
            Faça sua encomenda personalizada
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-body)]">
            Viu uma foto no Pinterest ou quer uma roupa nas suas medidas exatas? Preencha os campos abaixo e envie sua ideia diretamente para o nosso WhatsApp!
          </p>
        </div>

        {/* 3 Passos da Encomenda */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-xs relative">
            <span className="text-3xl font-heading font-bold text-[var(--color-primary)] opacity-40 absolute top-4 right-4">
              01
            </span>
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)] flex items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[var(--color-text-title)] mb-1">
              1. Conte sua ideia
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              Diga o que você deseja, envie referências de fotos, escolha as cores e tamanhos.
            </p>
          </div>

          <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-xs relative">
            <span className="text-3xl font-heading font-bold text-[var(--color-primary)] opacity-40 absolute top-4 right-4">
              02
            </span>
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)] flex items-center justify-center mb-4">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[var(--color-text-title)] mb-1">
              2. Orçamento & fios
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              Calculamos o valor e o prazo na agenda, enviando a cartela de fios para sua aprovação.
            </p>
          </div>

          <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-xs relative">
            <span className="text-3xl font-heading font-bold text-[var(--color-primary)] opacity-40 absolute top-4 right-4">
              03
            </span>
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)] flex items-center justify-center mb-4">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[var(--color-text-title)] mb-1">
              3. Produção com amor
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
              Confeccionamos cada laçada com carinho e enviamos fotos antes do envio seguro até a sua casa!
            </p>
          </div>

        </div>

        {/* Formulário Interativo / Gerador de Pedido */}
        <div className="bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] p-6 sm:p-10 shadow-lg max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Coluna de Preenchimento */}
            <div className="space-y-6">
              
              {/* Tipo de Peça */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-title)] mb-2.5">
                  1. O que você gostaria de encomendar?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pieceTypeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setPieceType(opt)}
                      className={`text-left text-xs p-3 rounded-xl border transition-all ${
                        pieceType === opt
                          ? 'bg-[var(--color-primary-soft)] border-[var(--color-primary)] text-[var(--color-primary-hover)] font-semibold shadow-2xs'
                          : 'bg-white border-[var(--color-border)] text-[var(--color-text-body)] hover:border-[var(--color-primary)]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {pieceType === "Outro (descrever abaixo)" && (
                  <input
                    type="text"
                    value={customTypeInput}
                    onChange={(e) => setCustomTypeInput(e.target.value)}
                    placeholder="Qual peça você tem em mente? (Ex: Manta de sofá)"
                    className="w-full mt-2 px-3 py-2 text-xs rounded-xl border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:outline-none"
                  />
                )}
              </div>

              {/* Tamanho Aproximado */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-title)] mb-2.5">
                  2. Tamanho aproximado:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`text-xs px-3 py-2 rounded-xl border transition-all ${
                        size === s
                          ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] font-medium shadow-2xs'
                          : 'bg-white border-[var(--color-border)] text-[var(--color-text-body)] hover:border-[var(--color-primary)]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cores Preferidas */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-title)] mb-2.5">
                  3. Paleta ou cores de preferência:
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {colorPalettesSuggested.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColors(c)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        colors === c
                          ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-text-title)] font-semibold'
                          : 'bg-white border-[var(--color-border)] text-[var(--color-text-body)] hover:border-[var(--color-accent)]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={colors}
                  onChange={(e) => setColors(e.target.value)}
                  placeholder="Descreva as cores desejadas (ex: cru com marrom, tons terrosos, azul com cinza...)"
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:outline-none bg-white placeholder:text-stone-400"
                />
              </div>

            </div>

            {/* Coluna de Detalhes e Preview */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Ocasião */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-title)] mb-1.5">
                    4. Ocasião / Para quem é a peça?
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                  >
                    <option value="Uso Próprio (Minha Casa)">Uso Próprio (Minha Casa)</option>
                    <option value="Presente de Casamento / Chá de Casa Nova">Presente de Casamento / Casa Nova</option>
                    <option value="Presente de Aniversário">Presente de Aniversário</option>
                    <option value="Uso Pessoal (Moda / Vestuário)">Uso Pessoal (Moda / Vestuário)</option>
                    <option value="Lembrancinha Especial">Lembrancinha Especial</option>
                    <option value="Sem data específica">Sem data específica (sem pressa)</option>
                  </select>
                </div>

                {/* Detalhes / Observações */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-title)] mb-1.5">
                    5. Detalhes extras, medidas ou ideias:
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Ex: Medida exata de 1,40m x 45cm para o corredor, amarração frontal..."
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 resize-none"
                  />
                </div>

                {/* Link de Referência (Pinterest / Insta) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-title)] mb-1.5 flex items-center justify-between">
                    <span>6. Link de referência (Pinterest/Instagram):</span>
                    <span className="text-[10px] text-[var(--color-text-muted)] lowercase font-normal">(opcional)</span>
                  </label>
                  <input
                    type="url"
                    value={referenceLink}
                    onChange={(e) => setReferenceLink(e.target.value)}
                    placeholder="https://pinterest.com/pin/... ou cole no WhatsApp"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                  />
                </div>
              </div>

              {/* Box de Pré-visualização da Mensagem */}
              <div className="bg-[var(--color-bg-base)] p-4 rounded-2xl border border-[var(--color-border)] space-y-2">
                <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> Prévia da sua mensagem no WhatsApp:
                </span>
                <p className="text-xs text-[var(--color-text-body)] italic line-clamp-3 font-mono bg-white p-2.5 rounded-lg border border-[var(--color-border)]/60">
                  {generatedMessage}
                </p>
              </div>

              {/* Botão de Envio WhatsApp */}
              <div>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                >
                  <Send className="w-5 h-5 fill-white/20" />
                  <span>Enviar Ideia pelo WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[var(--color-text-muted)] mt-2">
                  Você poderá anexar fotos de inspiração diretamente na conversa com a artesã!
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

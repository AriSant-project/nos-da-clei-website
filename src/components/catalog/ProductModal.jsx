import React, { useState } from 'react';
import { buildWhatsAppUrl, buildProductMessage } from '../../utils/whatsappHelper';
import { X, MessageCircle, Clock, Ruler } from 'lucide-react';

export const ProductModal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product?.image || '');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('Tamanho Padrão');
  const [customNotes, setCustomNotes] = useState('');

  if (!product) return null;

  const suggestedColors = [
    "Tons Pastéis",
    "Off-White & Cru",
    "Rosa Chá",
    "Verde Sálvia",
    "Terracota",
    "Mostarda / Caramelo",
    "Cores da Foto",
    "Outra combinação",
  ];

  const sizes = ["Tamanho Padrão", "Versão Menor", "Versão Maior", "Medida Personalizada"];

  // Monta a mensagem completa com as seleções do usuário
  const whatsAppMessage = buildProductMessage(product, {
    colorPref: selectedColor || "A combinar",
    sizePref: selectedSize,
    notes: customNotes,
  });

  const whatsAppUrl = buildWhatsAppUrl(whatsAppMessage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[var(--color-surface)] rounded-3xl shadow-2xl border border-[var(--color-border)] overflow-hidden transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-stone-600 hover:text-stone-950 flex items-center justify-center shadow-xs hover:bg-white transition-colors"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Lado Esquerdo: Imagens e Detalhes Visuais */}
          <div className="p-6 bg-[var(--color-bg-subtle)] flex flex-col justify-between">
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-white border border-[var(--color-border)]">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Miniaturas de Galeria se houver */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImage === img ? 'border-[var(--color-primary)] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Ficha Rápida Técnica */}
            <div className="mt-6 space-y-2 pt-4 border-t border-[var(--color-border)]/80 text-xs text-[var(--color-text-body)]">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                <span><strong>Dimensões:</strong> {product.dimensions}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                <span><strong>Artesanal:</strong> {product.craftTime}</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Informações e Personalização do Pedido */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  {product.categoryLabel}
                </span>
                <h2 className="font-heading text-2xl font-bold text-[var(--color-text-title)] mt-0.5">
                  {product.name}
                </h2>
                
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xs text-[var(--color-text-muted)]">Valor orientativo:</span>
                  <span className="font-heading text-xl font-bold text-[var(--color-text-title)]">
                    {product.priceFormatted}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  {product.priceNote}
                </p>
              </div>

              {/* Descrição */}
              <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full font-medium bg-[var(--color-primary-soft)] text-[var(--color-primary-hover)]"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Personalização: Cores */}
              <div className="pt-3 border-t border-[var(--color-border)]/60">
                <label className="block text-xs font-semibold text-[var(--color-text-title)] mb-2">
                  🎨 Escolha a tonalidade preferida:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                        selectedColor === color
                          ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-xs'
                          : 'bg-white border-[var(--color-border)] text-[var(--color-text-body)] hover:border-[var(--color-primary)]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personalização: Tamanho */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-title)] mb-2">
                  📏 Tamanho desejado:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`text-xs p-2 rounded-lg border text-center transition-all ${
                        selectedSize === s
                          ? 'bg-[var(--color-primary-soft)] border-[var(--color-primary)] text-[var(--color-primary-hover)] font-semibold'
                          : 'bg-white border-[var(--color-border)] text-[var(--color-text-body)] hover:border-[var(--color-primary)]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Observações Opcionais */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-title)] mb-1">
                  ✏️ Algum detalhe especial? (Opcional):
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Ex: Quero com laço rosa, ou nome Helena bordado"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 bg-white"
                />
              </div>

            </div>

            {/* Botão de Envio WhatsApp */}
            <div className="pt-4 border-t border-[var(--color-border)]">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-[var(--color-text-muted)] mt-2">
                Você será direcionada(o) para o WhatsApp já com todos os detalhes pré-preenchidos!
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { Plus } from 'lucide-react';

export const ProductCard = ({ product, onOpenModal }) => {

  return (
    <article className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200/70 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      
      {/* Imagem do Produto com Cantos Arredondados e Proporção da Referência */}
      <div 
        className="relative aspect-square sm:aspect-4/5 overflow-hidden bg-stone-100 cursor-pointer"
        onClick={() => onOpenModal(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>

      {/* Conteúdo do Card (Tipografia e Espaçamento Inspirados no Print) */}
      <div className="p-3 sm:p-4.5 flex-1 flex flex-col justify-between">
        
        <div className="space-y-1">
          {/* Nome do Produto */}
          <h3 
            onClick={() => onOpenModal(product)}
            className="font-bold text-xs sm:text-base text-stone-900 leading-snug line-clamp-2 cursor-pointer hover:text-[var(--color-primary)] transition-colors"
          >
            {product.name}
          </h3>

          {/* Descrição Curta Afetiva */}
          <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Preço e Botão Verde com Sinal de '+' (Fiel à Referência!) */}
        <div className="pt-3 mt-2 flex items-center justify-between border-t border-stone-100">
          <div>
            <span className="font-heading font-bold text-sm sm:text-xl text-stone-900">
              {product.priceFormatted}
            </span>
          </div>

          {/* Botão Circular Verde-Oliva com '+' */}
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            aria-label={`Solicitar ${product.name} no WhatsApp`}
            title="Pedir peça no WhatsApp"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-xs hover:shadow-md transition-all duration-200 transform hover:scale-110 active:scale-95 shrink-0"
            style={{ backgroundColor: 'var(--color-action-green)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-action-green-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-action-green)'}
          >
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>
        </div>

      </div>

    </article>
  );
};

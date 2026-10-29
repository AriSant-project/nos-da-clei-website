import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../../config/productsData';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

export const CatalogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="catalogo" className="pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Título "Nossa coleção" e Contagem (Exatamente como no Print) */}
        <div className="flex items-baseline justify-between mb-4 pt-4 border-t border-stone-200/60">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Nossa coleção
          </h2>
          <span className="text-xs sm:text-sm text-stone-500 font-medium">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'peça' : 'peças'}
          </span>
        </div>

        {/* Barra de Filtros / Pílulas Horizontais (Estilo Ateliê Bossi do Print) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'text-white border-transparent shadow-xs scale-102 font-semibold'
                    : 'bg-white/80 text-stone-700 border-stone-300/80 hover:bg-white hover:border-stone-400'
                }`}
                style={{
                  backgroundColor: isSelected ? 'var(--color-primary)' : undefined,
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Cards: 2 Colunas no Mobile, 3 no Tablet, 4 no Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={(prod) => setActiveModalProduct(prod)}
            />
          ))}
        </div>

        {/* Seção Informativa de Peça Fora do Catálogo */}
        <div className="mt-12 p-5 sm:p-7 rounded-3xl bg-white border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-heading text-base sm:text-lg font-bold text-stone-900">
              Quer uma cor ou tamanho diferente?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Personalizamos qualquer peça da coleção ou tecemos a ideia que você sonhar!
            </p>
          </div>
          <a
            href="#encomenda"
            className="shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white shadow-xs transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Fazer encomenda sob medida
          </a>
        </div>

      </div>

      {/* Modal de Detalhes do Produto */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </section>
  );
};

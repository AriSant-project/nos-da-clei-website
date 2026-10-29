import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../../config/productsData';
import { buildProductWhatsAppUrl } from '../../utils/whatsappHelper';
import { MessageCircle, Eye, X } from 'lucide-react';

export const V2Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('casa');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtragem dos produtos pelas 3 categorias
  const filteredProducts = PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="v2-catalogo" className="py-16 sm:py-24 bg-[#ECE4D5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção de Catálogo */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8A6238] tracking-tight">
            Coleção
          </h2>

          <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed max-w-lg mx-auto font-light">
            Cada laçada é executada pacientemente à mão. Escolha sua peça favorita e personalizamos cores ou medidas sob medida.
          </p>
        </div>

        {/* Barra de Filtros com os 3 tipos de produtos bem descritos */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#7D8552] text-white border-[#7D8552] shadow-sm transform -translate-y-0.5'
                    : 'bg-white text-[#57412E] border-[#E2D7C5] hover:border-[#8A6238]/40 hover:bg-[#F5F0E6]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Produtos: 2 COLUNAS NO MOBILE, 3 NO TABLET, 4 NO DESKTOP */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {filteredProducts.map((product) => {
            const whatsappUrl = buildProductWhatsAppUrl(product);

            return (
              <article
                key={product.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-[#E2D7C5] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Imagem do Produto com Cantos Arredondados e Zoom Suave */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative aspect-square sm:aspect-4/5 overflow-hidden bg-[#F5F0E6] cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Botão de visualização rápida em hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#8A6238] text-[11px] font-bold shadow-xs flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Detalhes
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-heading font-bold text-xs sm:text-base text-[#8A6238] leading-snug line-clamp-2 cursor-pointer hover:text-[#C66F52] transition-colors"
                    >
                      {product.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#8F7B6B] line-clamp-2 leading-relaxed font-light">
                      {product.shortDescription || product.description}
                    </p>
                    {product.dimensions && (
                      <span className="inline-block text-[10px] font-semibold text-[#7D8552] bg-[#EBF0E1] px-2 py-0.5 rounded-md mt-1">
                        📏 {product.dimensions}
                      </span>
                    )}
                  </div>

                  {/* Preço e Botão de Ação Direta para WhatsApp */}
                  <div className="pt-3 mt-2 border-t border-[#E2D7C5]/70 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#8F7B6B] block">A partir de</span>
                      <span className="font-heading font-bold text-sm sm:text-lg text-[#8A6238]">
                        {product.priceFormatted}
                      </span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold text-white bg-[#7D8552] hover:bg-[#6B7344] shadow-2xs hover:shadow-xs transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                      <span className="hidden sm:inline">Pedir</span>
                    </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* Banner de Encomenda Customizada */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2D7C5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#8A6238]">
              Quer uma cor ou tamanho diferente para o seu ambiente?
            </h3>
            <p className="text-xs sm:text-sm text-[#57412E]">
              Personalizamos qualquer peça da coleção ou tecemos a foto de referência que você viu no Pinterest!
            </p>
          </div>

          <a
            href="#v2-encomenda"
            className="shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white shadow-xs hover:shadow-md transition-all bg-[#7D8552] hover:bg-[#6B7344]"
          >
            Fazer encomenda sob medida →
          </a>
        </div>

      </div>

      {/* Modal de Detalhes do Produto */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#F5F0E6] rounded-3xl max-w-lg w-full overflow-hidden border border-[#E2D7C5] shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 text-[#8A6238] flex items-center justify-center shadow-xs hover:bg-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto p-6 space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-[#E2D7C5]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D8552]">
                  {selectedProduct.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#8A6238]">
                  {selectedProduct.name}
                </h3>
                <p className="font-heading text-2xl font-bold text-[#C66F52] mt-1">
                  {selectedProduct.priceFormatted}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#57412E] leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Informações de Medidas e Materiais */}
              {(selectedProduct.dimensions || selectedProduct.material) && (
                <div className="bg-white p-3.5 rounded-2xl border border-[#E2D7C5] space-y-1.5 text-xs text-[#57412E]">
                  {selectedProduct.dimensions && (
                    <p><strong>Dimensões:</strong> {selectedProduct.dimensions}</p>
                  )}
                  {selectedProduct.material && (
                    <p><strong>Material:</strong> {selectedProduct.material}</p>
                  )}
                </div>
              )}

              {/* CTA do Modal */}
              <div className="pt-2">
                <a
                  href={buildProductWhatsAppUrl(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white bg-[#7D8552] hover:bg-[#6B7344] shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Pedir esta peça no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

import { BRAND_CONFIG } from '../config/brandConfig';

/**
 * Gera um link direto do WhatsApp (wa.me) devidamente encodado
 */
export const buildWhatsAppUrl = (message) => {
  const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

/**
 * Mensagem padrão ao clicar em um produto do catálogo
 */
export const buildProductMessage = (product, selectedDetails = {}) => {
  const { colorPref, sizePref, notes } = selectedDetails;
  
  let msg = `Olá, *${BRAND_CONFIG.name}*! Tudo bem? 🧶✨\n\n`;
  msg += `Vi no catálogo e me apaixonei pela peça: *${product.name}*\n`;
  msg += `• Categoria: ${product.categoryLabel}\n`;
  msg += `• Valor de referência: ${product.priceFormatted}\n`;
  
  if (colorPref) {
    msg += `• Cor/Paleta desejada: ${colorPref}\n`;
  }
  if (sizePref) {
    msg += `• Tamanho/Medida: ${sizePref}\n`;
  }
  if (notes) {
    msg += `• Observações: ${notes}\n`;
  }
  
  msg += `\nGostaria de saber a disponibilidade na agenda, opções de cores e o valor certinho para o meu CEP. Pode me ajudar? Obrigada(o)! ❤️`;
  
  return msg;
};

/**
 * Atalho direto para gerar a URL do WhatsApp para um produto
 */
export const buildProductWhatsAppUrl = (product, selectedDetails = {}) => {
  const msg = buildProductMessage(product, selectedDetails);
  return buildWhatsAppUrl(msg);
};

/**
 * Mensagem para encomenda 100% personalizada (fora do catálogo)
 */
export const buildCustomOrderMessage = ({ pieceType, size, colors, occasion, details, referenceLink }) => {
  let msg = `Olá, *${BRAND_CONFIG.name}*! Gostaria de fazer uma *Encomenda Sob Medida* em crochê! 🌸✨\n\n`;
  msg += `📝 *Minha Ideia de Peça:*\n`;
  msg += `• Tipo de Peça: ${pieceType || 'Não especificado'}\n`;
  msg += `• Tamanho/Dimensão: ${size || 'A combinar'}\n`;
  msg += `• Cores preferidas: ${colors || 'A combinar'}\n`;
  msg += `• Ocasião: ${occasion || 'Uso próprio'}\n`;
  
  if (details) {
    msg += `• Detalhes e acabamentos: ${details}\n`;
  }
  if (referenceLink) {
    msg += `• Link da referência (foto/Pinterest): ${referenceLink}\n`;
  }
  
  msg += `\nVocê teria disponibilidade na agenda para confeccionar? Aguardo seu orçamento com carinho! 🧶`;
  
  return msg;
};

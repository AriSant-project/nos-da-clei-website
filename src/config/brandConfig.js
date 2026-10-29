/**
 * CONFIGURAÇÃO DA MARCA & DESIGN SYSTEM - NÓS DA CLEI
 * Adaptado com fidelidade ao estilo visual da referência (Ateliê Bossi).
 */

export const BRAND_CONFIG = {
  name: "Nós da Clei",
  displayName: "Nós da Clei",
  taglineHeader: "Entre um ponto e outro, teço histórias",
  shortDescription: "Peças de crochê feitas com muito carinho. Também temos kits, peças sob medida e presentes personalizados.",
  logoUrl: "/images/Logo_nosdaclei.png",
  announcement: "🌸 Encomendas abertas • Peças 100% artesanais feitas com afeto",
  
  // WhatsApp oficial
  whatsappNumber: "5511945330639",
  whatsappDisplay: "(11) 94533-0639",
  instagramUser: "nosdaclei",
  instagramUrl: "https://instagram.com/nosdaclei",
  location: "Mogi das Cruzes, SP",
  
  paymentMethods: {
    pix: "Pagamento à vista ou em 2x (metade no ato da encomenda e o restante na entrega)",
    credit: "O parcelamento está disponível e o valor final é informado no próprio link, de acordo com a quantidade de parcelas escolhida.",
    cardHighlight: "No cartão o pagamento é via link, de forma prática e segura.",
  },
};

export const COLOR_PALETTES = [
  {
    id: "atelie-quente",
    name: "Creme & terracota (estilo da referência)",
    tagline: "Inspirado na referência aconchegante com tons terrosos e verde-oliva",
    colors: {
      primary: "#D47A46",          // Cor do chip "Todos" (Laranja quente/terracota do print)
      primaryHover: "#BD6534",
      primarySoft: "#FCEEE6",
      actionGreen: "#738E54",       // Cor do botão circular "+" dos cards (Verde-oliva do print)
      actionGreenHover: "#627B45",
      subheadingGreen: "#5F744C",   // Cor do subtítulo com divisórias
      secondary: "#8C5833",        // Marrom quente da logo
      secondarySoft: "#F5ECE5",
      accent: "#E29D68",
      bgBase: "#F6F0E7",           // Fundo suave e quente da referência
      bgSubtle: "#EFE6DB",
      surface: "#FFFFFF",
      border: "#E9DFD4",
      textTitle: "#322116",        // Marrom profundo elegante
      textBody: "#665245",
      textMuted: "#917E72",
    },
  },
  {
    id: "rosa-seco",
    name: "Rosa seco & creme",
    tagline: "Romântico e delicado",
    colors: {
      primary: "#C8757F",
      primaryHover: "#B45E68",
      primarySoft: "#FDF1F3",
      actionGreen: "#738E54",
      actionGreenHover: "#627B45",
      subheadingGreen: "#6F8663",
      secondary: "#986B56",
      secondarySoft: "#F7EFE9",
      accent: "#E29D68",
      bgBase: "#FAF7F2",
      bgSubtle: "#F3ECE5",
      surface: "#FFFFFF",
      border: "#E9DFD8",
      textTitle: "#382324",
      textBody: "#655353",
      textMuted: "#968383",
    },
  },
  {
    id: "retro-bloom",
    name: "Boutique Retrô (Retro Bloom)",
    tagline: "Marfim cremoso, cacau quente, verde oliva, mostarda e terracota",
    colors: {
      primary: "#7D8552",          // Verde oliva para botões e ações
      primaryHover: "#6B7344",
      primarySoft: "#EBF0E1",
      actionGreen: "#7D8552",
      actionGreenHover: "#6B7344",
      subheadingGreen: "#7D8552",
      secondary: "#8A6238",        // Cacau quente para logo e títulos
      secondarySoft: "#F2EBE2",
      accent: "#D6A23A",           // Mostarda
      terracotta: "#C66F52",       // Terracota suave
      vintageBlue: "#648A87",      // Azul vintage
      bgBase: "#F5F0E6",           // Marfim cremoso
      bgSubtle: "#ECE4D5",
      surface: "#FFFFFF",
      border: "#E2D7C5",
      textTitle: "#8A6238",        // Cacau quente
      textBody: "#57412E",
      textMuted: "#8F7B6B",
    },
  },
];

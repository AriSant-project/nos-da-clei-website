/**
 * BANCO DE DADOS DE PRODUTOS REAIS - ATELIÊ NÓS DA CLEI
 * Utiliza as fotos reais fornecidas pelo ateliê.
 */

export const CATEGORIES = [
  { id: "casa", label: "Casa & Decoração (Tapetes)", short: "Casa (Tapetes)", icon: "Home" },
  { id: "moda", label: "Moda & Vestuário (Roupas)", short: "Moda (Roupas)", icon: "Shirt" },
  { id: "infantil", label: "Infantil & Acessórios (Buckets)", short: "Infantil (Buckets)", icon: "Smile" },
];

export const PRODUCTS = [
  {
    id: "tapete-de-porta",
    name: "Tapete de Porta",
    category: "casa",
    categoryLabel: "Casa & Decoração",
    price: 135,
    priceFormatted: "R$ 135,00",
    priceNote: "Confeccionado em barbante premium com pontos macios.",
    image: "/images/Tapete de Porta.webp",
    description: "Tapete artesanal em hexágonos. Perfeito para entrada da casa, beira de cama ou lavabo.",
    dimensions: "73 cm x 53 cm",
    craftTime: "Feito 100% à mão com pontos firmes e estruturados.",
    tags: ["Tons terrosos", "Lavável", "100% artesanal"],
  },
  {
    id: "tapete-passadeira",
    name: "Tapete Passadeira",
    category: "casa",
    categoryLabel: "Casa & Decoração",
    price: 185,
    priceFormatted: "R$ 185,00",
    priceNote: "Valor sugerido para tamanho padrão. Pode ser adaptado no comprimento desejado.",
    image: "/images/Tapete Passadeira.webp",
    description: "Passadeira geométrica em hexágonos. Ideal para cozinhas, corredores ou laterais de cama.",
    dimensions: "1,40 m x 53 cm",
    craftTime: "Horas de dedicação manual em cada hexágono unido à mão.",
    tags: ["Geométrico", "Sofisticado", "Alta durabilidade"],
  },
  {
    id: "bucket-infantil",
    name: "Bucket hat infantil em crochê",
    category: "infantil",
    categoryLabel: "Infantil & Acessórios",
    price: 70,
    priceFormatted: "R$ 70,00",
    priceNote: "Feito sob medida conforme a idade ou circunferência da cabeça da criança.",
    image: "/images/Bucket Infantil.webp",
    description: "Chapeuzinho bucket delicado e respirável. Protege com conforto e muito estilo nos dias de sol e passeios.",
    dimensions: "Medidas personalizadas",
    craftTime: "Fio macio e antialérgico, seguro para a pele dos pequenos.",
    tags: ["100% algodão", "Respirável", "Antialérgico"],
  },
  {
    id: "bucket-adulto",
    name: "Bucket hat adulto em crochê",
    category: "infantil",
    categoryLabel: "Infantil & Acessórios",
    price: 90,
    priceFormatted: "R$ 90,00",
    priceNote: "Confeccionado sob medida com ajuste confortável e cores personalizadas.",
    image: "/images/Bucket Adulto v2.webp",
    description: "Chapeuzinho bucket moderno e confortável feito à mão. Estiloso para o dia a dia, passeios e dias ensolarados.",
    dimensions: "Medidas personalizadas",
    craftTime: "Fio selecionado de alta qualidade com acabamento estruturado e macio.",
    tags: ["100% algodão", "Sob medida", "100% artesanal"],
  },
  {
    id: "cardigan-granny-square",
    name: "Cardigan Granny Square",
    category: "moda",
    categoryLabel: "Moda & Vestuário",
    price: 300,
    priceFormatted: "R$ 300,00",
    priceNote: "Peça exclusiva confeccionada sob encomenda nas suas medidas corporais.",
    image: "/images/Cardigan Granny Square.webp",
    description: "Casaco estilo vintage montado com os clássicos quadradinhos de crochê, com laço frontal de amarração.",
    dimensions: "Medidas personalizadas",
    craftTime: "Uma verdadeira obra de arte manual com acabamento primoroso.",
    tags: ["Vintage", "Slow fashion", "Sob medida"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mari",
    piece: "Tapete Passadeira Hexagonal",
    comment: "Amei meu tapete! Combinou muito com a minha cozinha! Material de qualidade e feito com muito capricho.",
    rating: 5,
  },
  {
    id: 2,
    name: "Yohana",
    piece: "Cardigan Granny Square",
    comment: "Feito à mão, sob medida, de lã, nas cores que eu escolhi. Eu queria muito essa peça, mas não achava pra comprar. A Clei aceitou o desafio e ficou maravilhoso!",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Como funciona o prazo de confecção para encomendas sob medida?",
    answer: "Por ser um trabalho 100% manual e artesanal, cada peça tem seu próprio tempo de dedicação. O prazo médio varia entre 7 e 15 dias úteis após a confirmação do pedido e escolha das cores. Caso você tenha uma data urgente, nos chame no WhatsApp para checar a disponibilidade da nossa agenda!"
  },
  {
    question: "Posso escolher cores e tamanhos diferentes das fotos?",
    answer: "Com certeza! Essa é a maior magia do crochê sob medida. Trabalhamos com dezenas de opções de tons e podemos adaptar as dimensões de tapetes, passadeiras, buckets e cardigans exatamente para as suas necessidades."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos Pix à vista ou em 2x (metade no ato da encomenda e o restante na entrega), e Cartão de Crédito via link seguro de pagamento de forma prática."
  }
];

# 🧶 Nós da Clei • Boutique & Ateliê de Crochê Artesanal

[![Website](https://img.shields.io/badge/Website-Online-brightgreen?style=for-the-badge&logo=netlify)](https://nosdaclei.netlify.app/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange?style=for-the-badge)](https://oxc.rs/)

> Landing page comercial e catálogo digital responsivo para o ateliê de crochê **Nós da Clei**, desenvolvido com foco em performance, identidade visual acolhedora (*slow fashion*), experiência *mobile-first* e conversão direta via WhatsApp.

🔗 **Site publicado:** [https://nosdaclei.netlify.app/](https://nosdaclei.netlify.app/)

---

## 📌 Sobre o Negócio

O **Nós da Clei** é um ateliê de crochê artesanal localizado em **Mogi das Cruzes – SP**, especializado em peças exclusivas feitas 100% à mão. O portfólio combina itens de decoração contemporânea e moda artesanal:

- **Casa & Decoração:** Tapetes de porta hexagonais e passadeiras sob medida com pontos macios e barbante premium de alta durabilidade.
- **Moda & Vestuário:** Cardigans clássicos no estilo *Granny Square* com acabamento vintage e caimento personalizado sob medida.
- **Acessórios & Linha Infantil:** *Bucket hats* infantis e adultos confeccionados em fio 100% algodão antialérgico e respirável.
- **Peças Sob Medida:** Criações personalizadas a partir de cores, medidas ou referências enviadas pelos clientes (como inspirações do Pinterest e Instagram).

---

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto foi construir uma solução web moderna e profissional para digitalizar a presença do ateliê, atendendo aos seguintes pilares:

1. **Apresentação de Marca & Catálogo Digital:** Substituir catálogos estáticos em PDF por uma aplicação web dinâmica, interativa e de carregamento instantâneo, permitindo ao público explorar peças, dimensões, preços orientativos e tempos de produção manual.
2. **Conversão & Atendimento Humanizado:** Direcionar o fluxo de compra para o WhatsApp com mensagens estruturadas e pré-preenchidas com base na peça selecionada, preservando o atendimento consultivo e próximo típico do artesanato sob medida.
3. **Engenharia de Software & Portfólio Frontend:** Demonstrar a aplicação prática de tecnologias modernas do ecossistema JavaScript (React 19, Vite, Tailwind v4), arquitetura componentizada, SEO técnico (Schema.org JSON-LD para comércio local), otimização de imagens (WebP) e políticas rígidas de cabeçalhos de segurança HTTP.

---

## 🛠️ Tecnologias Utilizadas

A stack foi selecionada visando máxima performance de carregamento, produtividade e código limpo:

| Tecnologia / Ferramenta | Finalidade no Projeto |
| :--- | :--- |
| **React 19** (`react`, `react-dom`) | Biblioteca para construção da interface baseada em componentes funcionais e hooks. |
| **Vite 8** (`vite`, `@vitejs/plugin-react`) | Ferramenta de build e servidor de desenvolvimento ultra-rápido com HMR (*Hot Module Replacement*). |
| **Tailwind CSS v4** (`@tailwindcss/vite`) | Framework de estilização utilitária de última geração com import nativo via plugin Vite. |
| **CSS Custom Properties (Variables)** | Design Tokens e sistema de temas dinâmico (`ThemeContext`) para personalização de cores. |
| **Lucide React** (`lucide-react`) | Conjunto consistente de ícones vetoriais modernos e acessíveis. |
| **Oxlint** (`oxlint`) | Linter de código em Rust para análise estática e garantia de boas práticas no React. |
| **Sharp** (`sharp`) | Pipeline de compressão e conversão de imagens para o formato WebP de alta densidade. |
| **Schema.org & JSON-LD** | Dados estruturados para SEO local (`Store` / `LocalBusiness`), facilitando a descoberta pelo Google. |
| **Netlify** | Plataforma de hospedagem estática global com automação de headers de segurança e cache HTTP. |

---

## ✨ Funcionalidades Implementadas

### 1. 🎨 Design System & Gestão de Temas em Tempo Real
- Sistema centralizado de tokens de design via `brandConfig.js`.
- Alternador de paletas de cores (*Boutique Retrô / Retro Bloom*, *Creme & Terracota*, *Rosa Seco & Creme*) gerenciado via `ThemeContext` e persistido em `localStorage`.
- Suporte arquitetural para layouts modulares com divisores orgânicos em curvas SVG (`LayoutV2`).

### 2. 🧶 Catálogo Interativo com Filtros
- Filtragem dinâmica por categorias: **Casa & Decoração**, **Moda & Vestuário** e **Infantil & Acessórios**.
- Cards com imagens otimizadas em formato WebP, tags de diferenciais (*Slow Fashion*, *100% Algodão*, *Sob Medida*), preços sugeridos e dimensões.
- **Modal de Detalhes da Peça:** Janela modal com informações de cuidados, medidas e botão de ação direta.

### 3. 💬 Integração Fluida com WhatsApp
- Helper utilitário dedicado (`whatsappHelper.js`) que monta mensagens personalizadas e formatadas com emojis e contexto da peça selecionada.
- Links com codificação segura de URL (`encodeURIComponent`), garantindo compatibilidade entre navegadores móveis e desktop.

### 4. 📐 Seção de Encomendas Sob Medida (3 Passos)
- Guia visual passo a passo para o cliente:
  1. Escolha ou envie a ideia/referência;
  2. Defina cores, medidas e fios;
  3. Receba o orçamento com prazo e início da produção manual.
- Botão CTA com mensagem direcionada para solicitação de orçamento exclusivo.

### 5. 💳 Informações Claras de Pagamento
- Quadro explicativo com condições comerciais transparentes:
  - **Pix:** À vista ou dividido em 2x (50% no ato do pedido para compra de insumos e 50% na finalização/envio).
  - **Cartão de Crédito:** Parcelamento disponível via link seguro.

### 6. 🧼 Guia de Cuidados com as Peças
- Cards informativos ensinando o cliente a preservar o crochê artesanal:
  - Lavagem manual com sabão neutro;
  - Não torcer a trama;
  - Secagem horizontal à sombra (evita deformação dos fios);
  - Armazenamento dobrado sem cabides.

### 7. ⭐ Prova Social & Avaliações Reais
- Depoimentos autênticos de clientes (Mari e Yohana) destacando a qualidade dos acabamentos, respeito aos prazos e beleza das peças entregues.

### 8. ❓ FAQ (Perguntas Frequentes)
- Acordeão interativo com respostas diretas sobre prazos de confecção (média de 7 a 15 dias úteis), personalização de cores/dimensões e políticas de pagamento.

### 9. 🔍 SEO Técnico, Performance e Segurança
- **Metadados Completos:** Canonical URL, Open Graph para compartilhamento rico em redes sociais (WhatsApp, Instagram, Facebook) e Twitter Cards.
- **Dados Estruturados JSON-LD:** Tag Schema.org (`Store`) configurada com endereço de Mogi das Cruzes, telefone, meios de pagamento e redes oficiais.
- **Sitemap & Robots:** Arquivo `sitemap.xml` estruturado com extensões de imagem do Google e `robots.txt` para rastreamento otimizado.
- **Políticas de Segurança HTTP:** Cabeçalhos configurados no `_headers` (Netlify) e `vercel.json`: Content Security Policy (CSP), HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff` e regras de cache imutável para assets estáticos.

---

## 📂 Estrutura do Projeto

```text
Project_NosdaClei/
├── public/                       # Arquivos estáticos servidos diretamente
│   ├── images/                   # Imagens otimizadas das peças (WebP/PNG)
│   ├── _headers                  # Cabeçalhos de segurança HTTP para o Netlify
│   ├── favicon.svg               # Favicon vetorial
│   ├── robots.txt                # Regras de indexação para rastreadores
│   └── sitemap.xml               # Mapa do site com referências de páginas e imagens
├── src/                          # Código-fonte da aplicação React
│   ├── assets/                   # Ícones e imagens internas do bundle
│   ├── components/               # Componentes modulares e reutilizáveis
│   │   ├── care-guide/           # Guia de cuidados com as peças de crochê
│   │   ├── catalog/              # Catálogo, cards de produtos e modal de detalhes
│   │   ├── custom-order/         # Seção de pedidos sob medida
│   │   ├── differentials/        # FAQ, depoimentos e manifesto slow fashion
│   │   ├── hero/                 # Banner principal de boas-vindas
│   │   ├── layout/               # Header, Footer e barras de aviso
│   │   ├── ui/                   # Ícones customizados e seletor de temas
│   │   └── v2/                   # Layout boutique retrô com divisores ondulados SVG
│   ├── config/                   # Configurações globais e dados do negócio
│   │   ├── brandConfig.js        # Dados da marca, contatos e paletas do Design System
│   │   └── productsData.js       # Base de dados de produtos, depoimentos e FAQs
│   ├── context/                  # Context API do React
│   │   └── ThemeContext.jsx      # Gerenciamento de tema, paleta e layout ativo
│   ├── utils/                    # Funções utilitárias auxiliares
│   │   └── whatsappHelper.js     # Formatador de links e mensagens do WhatsApp
│   ├── App.css                   # Estilos globais e animações complementares
│   ├── App.jsx                   # Componente raiz da aplicação
│   ├── index.css                 # Import do Tailwind CSS e variáveis de cores CSS
│   └── main.jsx                  # Ponto de entrada do React 19
├── .gitignore                    # Regras de exclusão do Git
├── .oxlintrc.json                # Configuração do linter Oxlint
├── index.html                    # Documento HTML principal com meta tags e Schema.org
├── package.json                  # Manifesto de dependências e scripts npm
├── package-lock.json             # Trava de versões exatas das dependências
├── README.md                     # Documentação oficial do projeto
├── vercel.json                   # Configurações de headers caso seja hospedado na Vercel
└── vite.config.js                # Configuração do bundler Vite com Tailwind e React
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18.x ou superior recomendada)
- Gerenciador de pacotes **npm** (incluso com o Node) ou **pnpm** / **yarn**

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/nos-da-clei-website.git
cd nos-da-clei-website
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O Vite iniciará o servidor local. Acesse o endereço indicado no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

---

## 🏗️ Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local com recarregamento em tempo real (HMR). |
| `npm run build` | Compila os arquivos para produção com minificação e otimização na pasta `dist/`. |
| `npm run preview` | Executa localmente o build de produção gerado na pasta `dist/` para validação pré-deploy. |
| `npm run lint` | Executa a verificação estática do código com o linter Oxlint. |

---

## 🌐 Publicação & Deploy

O projeto está configurado para deploy estático contínuo:

- **Ambiente de Produção Atual:** Hospedado no [Netlify](https://nosdaclei.netlify.app/)
- **Processo de Build:** `npm run build`
- **Diretório de Publicação:** `dist/`
- **Cabeçalhos de Segurança:** Definidos em `public/_headers` (copiado automaticamente para a raiz de `dist/` durante o build).

---

## 🗺️ Roadmap & Melhorias Futuras

Diferenciação clara entre o estado atual e as evoluções planejadas:

### ✅ Já Implementado (Versão Atual)
- [x] Catálogo responsivo completo com categorias e modal de peça.
- [x] Gerador de mensagens inteligentes para conversão direta no WhatsApp.
- [x] Seção explicativa de encomendas sob medida e prazos.
- [x] Design System com múltiplos temas e persistência de preferências.
- [x] Dados estruturados Schema.org (`Store` / `LocalBusiness`) para SEO local no Google Search Console.
- [x] Otimização de ativos visuais em formato WebP.
- [x] Cabeçalhos de segurança HTTP (CSP, HSTS, anti-clickjacking).

### 🔮 Planejado para Futuras Versões
- [ ] **Carrinho / Sacola de Compras:** Permitir ao cliente selecionar múltiplos itens e enviar a lista unificada no WhatsApp.
- [ ] **Cálculo de Frete Integrado:** Integração com APIs de frete (Correios ou Melhor Envio) para estimativa de frete e prazo por CEP.
- [ ] **CMS Headless / Painel Administrativo:** Conectar a uma camada de backend leve (ex.: Strapi, Sanity ou Supabase) para que a artesã cadastre novas peças, fotos e altere valores sem edição de código.
- [ ] **Visualizador Lightbox / Zoom:** Zoom de alta resolução nas fotos para permitir ao cliente inspecionar o detalhe dos pontos manuais de crochê.
- [ ] **Depoimentos Dinâmicos com Envio:** Formulário para clientes deixarem fotos e avaliações diretamente pelo site.

---

## 📄 Licença

Este projeto foi desenvolvido com carinho para o ateliê **Nós da Clei**. O código-fonte está disponível para fins de estudo e composição de portfólio profissional.

---

Desenvolvido por **Aura Studio** • Feito com fios nobres, código limpo e afeto! 🧶✨

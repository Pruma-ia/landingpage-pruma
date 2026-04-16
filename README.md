# Pruma IA Landing Page

Landing page institucional da Pruma IA, focada em apresentar a proposta de automação operacional para PMEs brasileiras com uma interface clara, premium e orientada à conversão.

## Visão geral

Esta aplicação foi construída como uma SPA em React com Vite e Tailwind CSS. A página comunica a proposta da Pruma IA por meio de:

- hero principal com posicionamento de marca
- seções de dores operacionais e proposta de valor
- casos de uso por área
- explicação do processo de implementação
- blocos de confiança, FAQ e CTA final
- formulário pronto para futura integração com CRM, agenda comercial ou automação de captura

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Phosphor Icons

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+ recomendado
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview local da build

```bash
npm run preview
```

## Estrutura principal

```text
.
├── index.html
├── package.json
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Conteúdo e comportamento atual

- O conteúdo está em português do Brasil.
- O formulário final está preparado visualmente, mas ainda não envia dados.
- A página já possui animações e transições com `framer-motion`.
- O SEO básico inicial está definido em `index.html`, com `title` e `meta description`.

## Próximos passos sugeridos

- integrar o formulário com CRM ou ferramenta de automação
- adicionar analytics e rastreamento de conversão
- publicar políticas reais de privacidade e LGPD
- incluir casos, métricas e prova social aprovados pela marca

## Scripts disponíveis

```json
{
  "dev": "vite",
  "build": "tsc --noEmit -p tsconfig.json && vite build",
  "preview": "vite preview"
}
```

## Repositório

Repositório remoto: `https://github.com/Pruma-ia/landingpage-pruma`

# CLAUDE.md — landingpage-pruma

## Projeto

Landing page da **Pruma IA** — startup brasileira de automação com IA para PMEs.
URL de produção: `https://prumaia.com.br` (custom domain no GitHub Pages).

Idioma do conteúdo: **pt-BR**.
Tom: direto, confiante, B2B — fala com dono de PME, não com dev.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 (App Router, `output: "export"`) |
| UI | React 19 + TypeScript |
| Estilos | Tailwind CSS 3 + `globals.css` (keyframes custom) |
| Font | Plus Jakarta Sans (Google Fonts, via `globals.css`) |
| Deploy | GitHub Actions → GitHub Pages (`out/`) |

Sem backend. Sem banco. Sem API routes. Static export puro.

---

## Arquitetura

Tudo em **`app/page.tsx`** — um arquivo só, sem pasta `components/`.
Cada seção é um componente function declarado no mesmo arquivo.

Ordem das seções na página:
1. `Navbar` — fixa, scroll-aware, com menu mobile
2. `Hero` — dark, animação WhatsApp chat
3. `IntegrationsMarquee` — logos em marquee
4. `Problem` — 3 stat cards
5. `SolutionAtendimento` — bg branco
6. `SolutionProcessos` — bg navy (`#0B1E4A`)
7. `IntegrationDiagram` — hub visual
8. `HowItWorks` — 4 steps
9. `MidCTA` — strip cyan
10. `Differentials` — 3 cards
11. `Results` — time (3 sócios)
12. `FinalCTA` — WhatsApp CTA
13. `Footer`

---

## Design System

### Cores principais
```
Navy:   #0B1E4A  (fundo escuro, headings)
Dark:   #071330  (footer)
Cyan:   #00B4E6  (cor de marca, CTAs, destaques)
Cyan H: #0099C4  (hover do cyan)
Green:  #25D366  (WhatsApp)
```

### Classes Tailwind personalizadas
- `text-navy` / `bg-navy` → `#0B1E4A`
- `text-cyan-brand` / `bg-cyan-brand` → `#00B4E6`

### Padrão de alternância de fundo entre seções
`bg-white` → `bg-slate-50` → `bg-[#0B1E4A]` → repetir

### Animações (definidas em `globals.css`)
- `msgIn` — fade+slide para bolhas de chat
- `typingBounce` — dots de "digitando"
- `marquee` — loop horizontal de logos

---

## Imagens e Assets

Todos os assets ficam em `public/`. Para referenciar no código:

```tsx
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// uso:
<Image src={`${bp}/logo-branco.webp`} ... />
```

**Nunca usar path sem `bp`** — o `basePath` pode ser não-vazio em deploys com subpath.

Assets disponíveis em `public/`:
- `logo-branco.webp` / `logo-original.png`
- `foto-kelly.webp`, `foto-marcelo.webp`, `foto-diogo.webp`
- `og-image.png` (1200×630)

---

## Deploy

Pipeline: push em `main` → GitHub Actions (`.github/workflows/deploy.yml`) → build → `out/` → GitHub Pages.

A variável `BASE_PATH` **não é setada** no workflow (custom domain = root path).
`process.env.BASE_PATH ?? ""` retorna string vazia em produção. Não alterar esse padrão.

Variável de ambiente usada no build:
- `NEXT_PUBLIC_GA_ID` — ID do Google Analytics 4 (secret no GitHub)

---

## Links importantes

| Destino | URL |
|---------|-----|
| App (login) | `https://app.pruma.io/login` |
| App (cadastro) | `https://app.pruma.io/register` |
| WhatsApp CTA | `https://wa.me/5511978425448?text=...` |
| Contato | `contato@prumaia.com.br` |

**Número do WhatsApp:** `5511978425448` (+55 11 97842-5448) — número real da Pruma.

---

## Padrões de código

### Animações de scroll
Usar o hook `useInView` + componente `FadeIn` já existente:
```tsx
<FadeIn delay={120}>
  <MeuComponente />
</FadeIn>
```

### Ícones
Todos são SVG inline como função — sem biblioteca externa.
Padrão: `function IconNome({ className = "w-5 h-5" }: { className?: string })`.

### Seção nova — template
```tsx
function MinhaSecao() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeader label="..." title={<>...</>} subtitle="..." />
        {/* conteúdo */}
      </div>
    </section>
  );
}
```

### Âncoras de navegação existentes
- `#problema` — seção Problem
- `#solucao` — seção SolutionAtendimento
- `#como-funciona` — seção HowItWorks
- `#time` — seção Results

---

## Comandos

```bash
npm run dev      # dev server em localhost:3000
npm run build    # build estático (gera out/)
npm run lint     # ESLint
```

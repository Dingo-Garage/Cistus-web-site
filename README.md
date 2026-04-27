# Marco Pilia — The Italian Investment Gateway

Sito vetrina statico per Marco Pilia, real estate advisor specializzato in investimenti immobiliari in Italia.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v3
- GSAP + ScrollTrigger
- React Router v7

## Struttura

- **Homepage**
  - Hero — "The Italian Investment Gateway"
  - Strategic Rationale — 6 vantaggi dell'investimento in Italia
  - Investment Strategy — 3 card cliccabili (Immediate Yield, Strategic Growth, Ultra Large)
- **Pagine Investment** (`/investment/:slug`)
  - Option A — Immediate Yield
  - Option B — Strategic Growth
  - Option C — Ultra Large
- **Contact** — form per richieste di consulenza (pronto per FormSubmit.co)

## Comandi

```bash
npm install
npm run dev      # sviluppo locale
npm run build    # build per produzione (cartella dist/)
```

## Deploy

Il sito è completamente statico. Dopo `npm run build` la cartella `dist/` può essere deployata su Netlify, Vercel, Cloudflare Pages o qualsiasi hosting statico.

### Attivare il form di contatto

Il form in `src/sections/Hero.tsx` è già predisposto per [FormSubmit.co](https://formsubmit.co/):

1. Sostituire `LA_TUA_EMAIL` nell'action del `<form>`
2. Rimuovere `e.preventDefault()` in `handleSubmit`
3. Aggiungere il campo hidden `_next` per il redirect dopo l'invio

Leggi i commenti nel file `src/sections/Hero.tsx` per i dettagli.

# rulo.digital — Handoff (v1 alignment)

This repo already ships a premium bilingual marketing site for **imrulo.eth / rulo.digital**.

## Canonical positioning

> Diseño sistemas digitales premium que reflejan el nivel de tu negocio y convierten mejor.

EN: *I design premium digital systems that match the standard of your business — and convert better.*

## Stack

Next.js App Router · TypeScript · Tailwind · shadcn/ui · Framer Motion · next-intl (EN/ES) · Vercel

## Product rules

- CTA primario: WhatsApp (mensajes por **intent**)
- Solo 3 proyectos: Maison Soleil, Caribbean Party Travel, Janeiro.ai
- Tono premium, contenido, sin hype ni urgencia falsa
- Mobile-first

## WhatsApp intents

Implemented in `src/lib/whatsapp.ts` + `messages/*/WhatsAppMessages`:

| Intent | Where |
|---|---|
| `default` | FAB |
| `hero` | Hero CTA |
| `project` | Selected work cards (`{project}`) |
| `maison` | Maison case study CTA |
| `final` | Contact / why section |
| `nav` | Header, footer, mobile menu |

## Related specs (planning artifacts)

If you need the full planning pack from the redesign workshop, see companion files in this folder when present, or regenerate from:

- Architecture / IA
- Design system (Ink & Signal tokens)
- Copy ES
- Interactions (motion + FAB behavior)

## Env

See `.env.example` and `README.md`.

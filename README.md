# rulo.digital — imrulo.eth

Premium personal brand site for **imrulo.eth**: digital systems that generate direct clients and restore control over how customers arrive.

## Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS + shadcn/ui
- next-intl (English + Spanish)
- Framer Motion
- Vercel-ready

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Locale routes: `/en`, `/es`.

## Environment

Copy `.env.example` to `.env.local` and adjust WhatsApp / site URL as needed.

## Structure

- `messages/` — EN / ES copy
- `src/app/[locale]/` — localized routes + SEO metadata
- `src/components/home/` — page sections in brief order
- `src/components/layout/` — navbar, footer, language switcher
- `src/lib/site.ts` — brand, WhatsApp, Cloudinary / project assets

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

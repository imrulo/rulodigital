# rulo.digital — imrulo.eth

Premium bilingual site for **imrulo.eth**: premium digital systems that reflect the level of your business and convert better.

## Stack

- Next.js 16 (App Router) · TypeScript (strict)
- Tailwind CSS · shadcn/ui (`Button`)
- next-intl (English + Spanish)
- Framer Motion
- Vercel-ready

## Develop

```bash
npm install
npm run dev
```

Routes: `/en`, `/es`.

## Environment

Copy `.env.example` → `.env.local`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_PHONE`
- `NEXT_PUBLIC_WHATSAPP_MESSAGE_EN` / `_ES`
- `NEXT_PUBLIC_LOGO_URL` / `NEXT_PUBLIC_ABOUT_IMAGE_URL` (Cloudinary defaults already in code)

## Structure

```
messages/                 EN + ES copy
src/app/[locale]/         Localized layout + home
src/components/home/      Page sections
src/components/layout/    Header, footer, language, WhatsApp FAB
src/lib/site.ts           Brand, WhatsApp, project assets
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

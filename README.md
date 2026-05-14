# rulo-digital-site

Sitio web de alta conversión para **rulo.digital**, construido con **Next.js 16 (App Router)**, **React 19**, **TypeScript estricto**, **Tailwind CSS v4**, componentes estilo **shadcn/ui** (Radix), **Framer Motion**, **Lucide**, SEO (metadata + `next-seo` JSON-LD en FAQ), `sitemap.xml` y `robots.txt` vía rutas metadata, OG image generada (`opengraph-image.tsx`) y despliegue listo para **Vercel**.

## Requisitos

- Node.js **20+** (recomendado: la LTS actual)

## Instalación

```bash
cd rulo-digital-site
npm install
```

## Variables de entorno

Copia `.env.example` a `.env.local` y rellena:

- `NEXT_PUBLIC_WHATSAPP_PHONE` (solo dígitos, sin `+`; ejemplo Serbia: `381641409093`)
- `NEXT_PUBLIC_WHATSAPP_MESSAGE` (texto del mensaje prellenado de WhatsApp)
- `NEXT_PUBLIC_CONTACT_EMAIL` (email visible en footer/contacto y JSON-LD)
- `NEXT_PUBLIC_SITE_URL` (URL canónica, p.ej. `https://rulo.digital`)
- `NEXT_PUBLIC_LOGO_URL` (PNG del logo; por defecto ya apunta a Cloudinary en código)
- `NEXT_PUBLIC_ABOUT_IMAGE_URL` (foto real “Sobre mí”; por defecto hay un retrato en Cloudinary)
- `NEXT_PUBLIC_TELEGRAM_USERNAME` (opcional, sin `@`)
- **`RESEND_API_KEY`** y **`RESEND_FROM`**: necesarios para el lead magnet (checklist por email) vía `src/actions/lead-magnet.ts`. En [Resend](https://resend.com) verifica un dominio o usa el remitente de prueba que te indiquen.

> La web pública de **rulo.digital** prioriza **WhatsApp + formulario** (menos fricción). Las integraciones de **agenda en línea** (p. ej. Calendly) se ofrecen en **proyectos de cliente** cuando encajan con su flujo; no hace falta exponer detalles técnicos al visitante.

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Producción

```bash
npm run build
npm run start
```

## Deploy en Vercel (recomendado)

1. Crea un proyecto en Vercel e importa este repositorio.
2. Framework preset: **Next.js**.
3. Añade las variables de entorno (`NEXT_PUBLIC_*`, más `RESEND_API_KEY` / `RESEND_FROM` si usas el lead magnet) en **Project → Settings → Environment Variables** para *Production* (y *Preview* si quieres).
4. Deploy.

`vercel.json` ya incluye cabeceras de seguridad básicas y fija región `cdg1` (París). Ajusta `regions` si tu audiencia es otra.

## Dominio `rulo.digital` con DNS en Cloudflare (Vercel)

En Vercel, añade el dominio `rulo.digital` (y opcionalmente `www`) en **Project → Settings → Domains** y sigue las instrucciones que te muestre Vercel (suele recomendar **CNAME** hacia `cname.vercel-dns.com`).

### Opción A (recomendada): `www` como hostname principal

En **Cloudflare → DNS**:

- **CNAME** `www` → `cname.vercel-dns.com` (proxy “naranja” ON u OFF según tu preferencia; para debugging a veces OFF).

En **Cloudflare → Rules → Redirect Rules** (o Page Rules), redirige:

- `https://rulo.digital/*` → `https://www.rulo.digital/$1` (**301**)

En Vercel, configura `NEXT_PUBLIC_SITE_URL` como `https://www.rulo.digital` si tu canónico será `www`.

### Opción B: apex `rulo.digital` (sin `www`)

Cloudflare no permite CNAME en apex de forma estándar, pero sí **CNAME Flattening**. En la práctica, en Cloudflare sueles usar:

- **A**/`AAAA` según lo que Vercel te indique para apex, o el registro especial que Vercel solicite al validar el dominio.

Sigue exactamente el panel de Vercel al añadir `rulo.digital`: te dará los registros correctos (a veces **A** records hacia IPs de Vercel, a veces un flujo con validación).

### SSL/TLS en Cloudflare

En **SSL/TLS**:

- Si usas proxy de Cloudflare: modo **Full (strict)** (recomendado) cuando el certificado en origen (Vercel) sea válido.

## Indexación inmediata (Google)

1. Tras el deploy, abre **Google Search Console** y añade la propiedad `https://rulo.digital` (o `www`, según tu canónico).
2. Envía el sitemap: `https://rulo.digital/sitemap.xml` (Search Console → Sitemaps).
3. Usa **Inspección de URLs** en la home y en rutas nuevas (`/para-coaches`, etc.) y pulsa **Solicitar indexación** cuando esté disponible.
4. Mantén `NEXT_PUBLIC_SITE_URL` alineado con el dominio canónico real (apex vs `www`) para que `metadataBase`, `canonical` y el sitemap coincidan.

## Subir a GitHub (`imrulo/rulodigital`)

Desde la carpeta del proyecto, lo más fiable en Windows es ejecutar:

```bat
push-github.bat
```

Ese script hace: `git init` (si falta), `git add`, `commit` (si hay cambios), `remote` a `https://github.com/imrulo/rulodigital.git` y `push` a `main`. Si GitHub ya tiene commits iniciales (p. ej. README), intenta `pull --allow-unrelated-histories` y vuelve a empujar.

### Manual (si prefieres comandos)

```bash
git init -b main
git add -A
git commit -m "Initial commit: rulo.digital marketing site"
git branch -M main
git remote remove origin 2>/dev/null
git remote add origin https://github.com/imrulo/rulodigital.git
git push -u origin main
```

### Si el `push` falla (lo más típico)

1. **Identidad Git** (si falla el `commit`):

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

2. **Autenticación GitHub** (si falla el `push`):
   - **`gh auth login`** (recomendado si puedes instalar GitHub CLI).
   - **PAT por HTTPS**: GitHub → Settings → Developer settings → Personal access tokens. Al pedir contraseña, pega el **token** (no la contraseña de tu cuenta).
   - **SSH**: cambia el remote a `git@github.com:imrulo/rulodigital.git` y usa una clave añadida en GitHub.

3. **Repo remoto no vacío** (README/license creados al crear el repo en la web): el `push-github.bat` ya intenta `pull --allow-unrelated-histories` **y `-X ours`** para que, si choca `README.md`, se quede **tu README del proyecto**. Si ya te quedaste a medias con un merge en conflicto, ejecuta:

```bat
fix-readme-merge.bat
```

O manualmente:

```bash
git checkout --ours README.md
git add README.md
git commit -m "Merge origin/main; keep local README"
git push -u origin main
```

Si quieres **cancelar** el merge y volver al estado previo:

```bash
git merge --abort
```

> Nota: desde el agente de Cursor en este entorno **no puedo ejecutar `git push` en tu PC** (la terminal aquí no persiste cambios en tu disco), por eso el script `push-github.bat` es el camino más directo.

## Scripts útiles

- **Deploy (Vercel CLI)**: instala `vercel` y ejecuta `vercel` / `vercel --prod` (opcional si ya usas Git integration).

## SEO (`next-seo` + Metadata API)

- **Metadata / Open Graph / Twitter cards**: `src/app/layout.tsx` + `metadata` por página (título por defecto de home en `src/lib/site-config.ts`).
- **`sitemap.xml` / `robots.txt`**: `src/app/sitemap.ts` y `src/app/robots.ts` (dinámicos según `NEXT_PUBLIC_SITE_URL`).
- **JSON‑LD**: `Organization` + `Service` + `VideoObject` en `src/app/layout.tsx`; `FAQPage` en `src/components/home/faq-section.tsx` (HTML en página, ideal para crawlers).
- **`next-seo`**: está instalado como dependencia. Los componentes JSON‑LD de `next-seo` pueden romper el **prerender estático** con **React 19 / Next 16** en algunas combinaciones; por eso el **FAQ** usa JSON‑LD manual equivalente a `FAQPageJsonLd`. Si más adelante `next-seo` estabiliza RSC/static, puedes migrar el FAQ a `<FAQPageJsonLd />` en un **client component** o con `next/dynamic({ ssr:false })` (consciente del trade‑off SEO).

## Sustituciones rápidas (branding)

- Sustituye el vídeo demo del hero y el `VideoObject` en `src/lib/site-config.ts` (`demoVideo.contentUrl` / `posterUrl`) por tu export en `public/` o Cloudinary (ideal: `.webm` corto y ligero).
- Sustituye `NEXT_PUBLIC_ABOUT_IMAGE_URL` por tu foto real en “Sobre mí”.
- Sustituye imágenes de testimonios por assets reales con permiso.

const rawPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "381641409093";

/** Texto por defecto de los enlaces a WhatsApp (incluye el botón flotante). */
export const WHATSAPP_FLOAT_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Hola Rulo, quiero mi landing page en 48h";

export const siteConfig = {
  name: "rulo.digital",
  /** Title SEO home (exacto auditoría). */
  titleDefault:
    "Landing Page + Captación en 48h | 397 € (lanzamiento) – Rulo.digital",
  /** Meta description global (exacto auditoría). */
  description:
    "Te creo tu landing page de alta conversión en 48 horas. WhatsApp + reservas + SEO local. Solo 10 plazas a 397 €. Clientes escribiendo ya.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rulo.digital",
  locale: "es_ES",
  tagline:
    "Creo sistemas digitales que generan clientes para negocios y profesionales.",
  offer: {
    price: "397",
    currency: "EUR",
    slotsTotal: 10,
    headline: "Precio lanzamiento 397 € (solo primeros 10)",
  },
  whatsapp: {
    phoneE164Digits: rawPhone.replace(/\D/g, ""),
    defaultMessage: WHATSAPP_FLOAT_MESSAGE,
  },
  telegramUsername: process.env.NEXT_PUBLIC_TELEGRAM_USERNAME ?? "",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "marketing@rulo.digital",
  githubProfileUrl: "https://github.com/imrulo",
  /** Retrato “Sobre mí” (sustituye con NEXT_PUBLIC_ABOUT_IMAGE_URL en producción). */
  aboutPortraitUrl:
    process.env.NEXT_PUBLIC_ABOUT_IMAGE_URL?.trim() ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/v1778752609/63335114_dw6rrw.jpg",
  logoUrl:
    process.env.NEXT_PUBLIC_LOGO_URL ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/v1778754242/rulo_digital_logo_150u8n150u8n150u_p5pm7n.png",
  /** Demo hero (VideoObject + opcional autoplay desktop). */
  demoVideo: {
    contentUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    posterUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    name: "Demo visual — landing en vivo (referencia)",
    description:
      "Referencia de ritmo y montaje para una landing orientada a conversión; sustituye por tu vídeo final en Cloudinary o alojamiento propio.",
  },
  links: {
    home: "/",
    servicios: "/servicios",
    ejemplos: "/ejemplos",
    sobre: "/sobre",
    contacto: "/contacto",
    paraCoaches: "/para-coaches",
    paraDentistas: "/para-dentistas",
    paraAbogados: "/para-abogados",
  },
  social: {
    twitterHandle: "@rulodigital",
  },
} as const;

export function getWhatsAppHref(message?: string): string {
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  const phone = siteConfig.whatsapp.phoneE164Digits;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getTelegramHref(): string | null {
  const u = siteConfig.telegramUsername.trim();
  if (!u) return null;
  const user = u.replace(/^@/, "");
  return `https://t.me/${user}`;
}

/** Ruta al formulario de contacto (alternativa al chat). */
export function contactFormPath(): string {
  return `${siteConfig.links.contacto}#formulario`;
}

export function canonical(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Teléfono WhatsApp en E.164 sin “+”.
 * Configura un número del mercado (ES/EU) en Vercel: NEXT_PUBLIC_WHATSAPP_PHONE.
 * El fallback es solo para desarrollo local; no lo dejes en producción si no es el real.
 */
const rawPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "381641409093";

/** Texto por defecto de los enlaces a WhatsApp (incluye el botón flotante). */
export const WHATSAPP_FLOAT_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Hola Rulo, quiero mi landing en 48h";

/** CTA primario unificado (beneficio + plazo). */
export const PRIMARY_CTA_LABEL = "Quiero mi landing en 48h";

export const siteConfig = {
  name: "rulo.digital",
  /** Title SEO home. */
  titleDefault:
    "Landing Page + Captación en 48h | 397 € (lanzamiento) – Rulo.digital",
  /** Meta description global. */
  description:
    "Landing de conversión lista en 48h para coaches, clínicas y profesionales. WhatsApp + formulario + SEO base. Solo 10 plazas a 397 €.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rulo.digital",
  locale: "es_ES",
  tagline:
    "Pack Express: página clara, WhatsApp + formulario y SEO base. Sin meses de agencia. Sin web que no vende.",
  offer: {
    price: "397",
    currency: "EUR",
    slotsTotal: 10,
    headline: "Precio lanzamiento 397 € (solo primeros 10)",
  },
  cta: {
    primaryLabel: PRIMARY_CTA_LABEL,
    primaryAria: "Abrir WhatsApp para pedir mi landing en 48 horas",
    secondaryLabel: "Prefiero el formulario breve",
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
  /**
   * Imagen de atmósfera del hero (full-bleed).
   * Cuando tengas un vídeo demo real, súbelo a Cloudinary y enlázalo en heroVideoUrl.
   */
  heroImageUrl:
    process.env.NEXT_PUBLIC_HERO_IMAGE_URL?.trim() ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/v1778752609/63335114_dw6rrw.jpg",
  /** Vacío = sin vídeo en hero (evita demos placeholder). */
  heroVideoUrl: process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() ?? "",
  links: {
    home: "/",
    servicios: "/servicios",
    ejemplos: "/ejemplos",
    sobre: "/sobre",
    contacto: "/contacto",
    privacidad: "/privacidad",
    cookies: "/cookies",
    terminos: "/terminos",
    avisoLegal: "/aviso-legal",
    reembolsos: "/reembolsos",
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

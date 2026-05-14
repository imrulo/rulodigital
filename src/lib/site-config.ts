const rawPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "34600111222";
const rawMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Hola Rulo, quiero mi landing page en 48h";

export const siteConfig = {
  name: "rulo.digital",
  titleDefault:
    "rulo.digital — Landing + captación lista en 48 horas (lanzamiento 397 €)",
  description:
    "Creo sistemas digitales que generan clientes para negocios y profesionales. Landing page + sistema de captación listo en 48 horas. Precio lanzamiento 397 € (solo primeros 10).",
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
    defaultMessage: rawMessage,
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  telegramUsername: process.env.NEXT_PUBLIC_TELEGRAM_USERNAME ?? "",
  links: {
    home: "/",
    servicios: "/servicios",
    ejemplos: "/ejemplos",
    sobre: "/sobre",
    contacto: "/contacto",
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

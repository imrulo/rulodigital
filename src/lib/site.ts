const rawPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "381641409093";

export const site = {
  name: "rulo.digital",
  brand: "imrulo",
  eth: ".eth",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rulo.digital",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "marketing@rulo.digital",
  github: "https://github.com/imrulo",
  whatsapp: {
    phone: rawPhone.replace(/\D/g, ""),
    messageEn:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE_EN ??
      "Hi imrulo, I’d like to talk about building a digital system that brings me direct clients.",
    messageEs:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE_ES ??
      "Hola imrulo, quiero hablar sobre un sistema digital que me traiga clientes directos.",
  },
  logoUrl:
    process.env.NEXT_PUBLIC_LOGO_URL ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/v1778754242/rulo_digital_logo_150u8n150u8n150u_p5pm7n.png",
  portraitUrl:
    process.env.NEXT_PUBLIC_ABOUT_IMAGE_URL ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/v1778752609/63335114_dw6rrw.jpg",
} as const;

export function whatsappHref(locale: "en" | "es"): string {
  const text = locale === "es" ? site.whatsapp.messageEs : site.whatsapp.messageEn;
  return `https://wa.me/${site.whatsapp.phone}?text=${encodeURIComponent(text)}`;
}

export const projects = [
  {
    id: "maison-soleil",
    image:
      "https://www.maisonsoleil.info/images/real/anse-soleil-aerial-maison-soleil.webp",
    href: "https://www.maisonsoleil.info",
  },
  {
    id: "caribbean-party-travel",
    image:
      "https://res.cloudinary.com/dhedmpc0f/video/upload/so_0,w_1200,h_800,c_fill,q_auto,f_jpg/nuevo1WhatsApp_Video_2026-07-24_at_02.10.07_zjvvfl.jpg",
    href: "https://caribbeanpartytravel.com",
  },
  {
    id: "duradomains",
    image:
      "https://res.cloudinary.com/dhedmpc0f/image/upload/f_auto,q_auto,w_1200,h_800,c_pad,b_rgb:1a2332/duradomain_logo-removebg_meae9w.png",
    href: "https://duradomains.com",
  },
  {
    id: "janeiro",
    image:
      "https://res.cloudinary.com/dhedmpc0f/image/upload/f_png,w_1200,h_800,c_pad,b_rgb:F7F6F3/v1785046019/janeiro_ywv2az.svg",
    href: "https://janeiro-ai-landing.vercel.app",
  },
] as const;

export const maisonImages = {
  hero: "https://www.maisonsoleil.info/images/real/hero-house-sunset.webp",
  aerial: "https://www.maisonsoleil.info/images/real/anse-soleil-aerial-maison-soleil.webp",
  suite: "https://www.maisonsoleil.info/images/real/garden-suite-1-terrace-living-bedroom.webp",
  gallery: "https://www.maisonsoleil.info/images/real/art-gallery-interior-main.webp",
} as const;

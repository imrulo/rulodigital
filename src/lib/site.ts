const rawPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "381641409093";

export const site = {
  name: "rulo.digital",
  brand: "imrulo",
  eth: ".eth",
  personName: "Rulo",
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
  /** Logo oficial Cloudinary (repo / env). */
  logoUrl:
    process.env.NEXT_PUBLIC_LOGO_URL ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/f_auto,q_auto,w_640/v1778754242/rulo_digital_logo_150u8n150u8n150u_p5pm7n.png",
  /** Retrato “Sobre mí” Cloudinary (repo / env). */
  portraitUrl:
    process.env.NEXT_PUBLIC_ABOUT_IMAGE_URL ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/f_auto,q_auto,w_1200,c_fill,g_face/v1778752609/63335114_dw6rrw.jpg",
} as const;

export function whatsappHref(locale: "en" | "es"): string {
  const text = locale === "es" ? site.whatsapp.messageEs : site.whatsapp.messageEn;
  return `https://wa.me/${site.whatsapp.phone}?text=${encodeURIComponent(text)}`;
}

export type ProjectId =
  | "maison-soleil"
  | "caribbean-party-travel"
  | "duradomains"
  | "janeiro";

export type ProjectVisual = {
  id: ProjectId;
  href: string;
  image: string;
  /** cover for photography, contain for logo/brand panels */
  fit: "cover" | "contain";
  panel: string;
};

export const projects: readonly ProjectVisual[] = [
  {
    id: "maison-soleil",
    href: "https://www.maisonsoleil.info",
    image:
      "https://www.maisonsoleil.info/images/real/anse-soleil-aerial-maison-soleil.webp",
    fit: "cover",
    panel: "#1c2633",
  },
  {
    id: "caribbean-party-travel",
    href: "https://caribbeanpartytravel.com",
    image:
      "https://res.cloudinary.com/dhedmpc0f/video/upload/so_0,w_1400,h_900,c_fill,g_auto,q_auto,f_jpg/nuevo1WhatsApp_Video_2026-07-24_at_02.10.07_zjvvfl.jpg",
    fit: "cover",
    panel: "#0f1c24",
  },
  {
    id: "duradomains",
    href: "https://duradomains.com",
    image:
      "https://res.cloudinary.com/dhedmpc0f/image/upload/f_auto,q_auto,w_900/duradomain_logo-removebg_meae9w.png",
    fit: "contain",
    panel: "#121820",
  },
  {
    id: "janeiro",
    href: "https://janeiro-ai-landing.vercel.app",
    image:
      "https://res.cloudinary.com/dhedmpc0f/image/upload/f_png,w_900/q_auto/v1785046019/janeiro_ywv2az.svg",
    fit: "contain",
    panel: "#F3EEE6",
  },
] as const;

/** Solo para el caso Maison Soleil — no usar en el hero de marca. */
export const maisonImages = {
  aerial:
    "https://www.maisonsoleil.info/images/real/anse-soleil-aerial-maison-soleil.webp",
  sunset:
    "https://www.maisonsoleil.info/images/real/hero-house-sunset.webp",
  suite:
    "https://www.maisonsoleil.info/images/real/garden-suite-1-terrace-living-bedroom.webp",
  gallery:
    "https://www.maisonsoleil.info/images/real/art-gallery-interior-main.webp",
} as const;

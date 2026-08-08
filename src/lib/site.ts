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
      "Hi Rulo — digital project for my business.",
    messageEs:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE_ES ??
      "Hola Rulo — proyecto digital para mi negocio.",
  },
  /** Logo oficial Cloudinary (repo / env). */
  logoUrl:
    process.env.NEXT_PUBLIC_LOGO_URL ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/v1778754242/rulo_digital_logo_150u8n150u8n150u_p5pm7n.png",
  /** Retrato “Sobre mí” Cloudinary (repo / env). */
  portraitUrl:
    process.env.NEXT_PUBLIC_ABOUT_IMAGE_URL ??
    "https://res.cloudinary.com/dhedmpc0f/image/upload/f_auto,q_auto,w_1400,c_fill,g_face/v1778752609/63335114_dw6rrw.jpg",
} as const;

export type ProjectId = "maison-soleil" | "caribbean-party-travel" | "janeiro";

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
      "https://res.cloudinary.com/dhedmpc0f/image/upload/f_auto,q_auto,w_1400,c_fill/v1779096343/WhatsApp_Image_2026-05-17_at_3.54.48_PM_ede3yd.jpg",
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
    id: "janeiro",
    href: "https://janeiro.ai",
    image:
      "https://res.cloudinary.com/dhedmpc0f/image/upload/f_png,w_900/q_auto/v1785046019/janeiro_ywv2az.svg",
    fit: "contain",
    panel: "#F3EEE6",
  },
] as const;

/** Solo para el caso Maison Soleil — no usar en el hero de marca. */
export const maisonImages = {
  primary:
    "https://res.cloudinary.com/dhedmpc0f/image/upload/f_auto,q_auto,w_1600,c_fill/v1779096343/WhatsApp_Image_2026-05-17_at_3.54.48_PM_ede3yd.jpg",
  suite:
    "https://www.maisonsoleil.info/images/real/garden-suite-1-terrace-living-bedroom.webp",
} as const;

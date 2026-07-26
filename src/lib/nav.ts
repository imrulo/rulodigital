import { siteConfig } from "@/lib/site-config";

/** Navegación principal orientada a JTBD (nichos + oferta). */
export const mainNav = [
  { href: siteConfig.links.servicios, label: "Servicios" },
  { href: siteConfig.links.ejemplos, label: "Ejemplos" },
  { href: siteConfig.links.recursos, label: "Recursos" },
  { href: siteConfig.links.paraCoaches, label: "Coaches" },
  { href: siteConfig.links.paraDentistas, label: "Dentistas" },
  { href: siteConfig.links.paraAbogados, label: "Abogados" },
  { href: siteConfig.links.contacto, label: "Contacto" },
] as const;

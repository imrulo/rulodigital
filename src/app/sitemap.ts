import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const moneyPaths = new Set<string>([
    siteConfig.links.servicios,
    siteConfig.links.paraCoaches,
    siteConfig.links.paraDentistas,
    siteConfig.links.paraAbogados,
  ]);

  const midPaths = new Set<string>([
    siteConfig.links.ejemplos,
    siteConfig.links.contacto,
  ]);

  const legalPaths = new Set<string>([
    siteConfig.links.privacidad,
    siteConfig.links.cookies,
    siteConfig.links.terminos,
    siteConfig.links.avisoLegal,
    siteConfig.links.reembolsos,
  ]);

  const routes = [
    "/",
    siteConfig.links.servicios,
    siteConfig.links.ejemplos,
    siteConfig.links.sobre,
    siteConfig.links.contacto,
    siteConfig.links.paraCoaches,
    siteConfig.links.paraDentistas,
    siteConfig.links.paraAbogados,
    siteConfig.links.privacidad,
    siteConfig.links.cookies,
    siteConfig.links.terminos,
    siteConfig.links.avisoLegal,
    siteConfig.links.reembolsos,
  ] as const;

  return routes.map((path) => {
    let priority = 0.6;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

    if (path === "/") {
      priority = 1;
      changeFrequency = "weekly";
    } else if (moneyPaths.has(path)) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (midPaths.has(path)) {
      priority = 0.8;
    } else if (legalPaths.has(path)) {
      priority = 0.3;
    } else if (path === siteConfig.links.sobre) {
      priority = 0.55;
    }

    return {
      url: `${base}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}

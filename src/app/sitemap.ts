import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const routes = [
    "/",
    siteConfig.links.servicios,
    siteConfig.links.ejemplos,
    siteConfig.links.sobre,
    siteConfig.links.contacto,
    siteConfig.links.paraCoaches,
    siteConfig.links.paraDentistas,
    siteConfig.links.paraAbogados,
  ] as const;

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

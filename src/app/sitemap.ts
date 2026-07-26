import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routing.locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${site.url}/${l}`]),
      ),
    },
  }));
}

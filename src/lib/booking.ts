import { siteConfig } from "@/lib/site-config";

export function getCalendlyEmbedSrc(): string {
  const url = siteConfig.calendlyUrl.trim();
  if (!url) return "";
  try {
    const u = new URL(url.startsWith("http") ? url : `https://${url}`);
    u.searchParams.set("embed_domain", "1");
    if (!u.searchParams.has("embed")) u.searchParams.set("embed", "true");
    return u.toString();
  } catch {
    const joiner = url.includes("?") ? "&" : "?";
    return `${url}${joiner}embed=true&embed_domain=1`;
  }
}

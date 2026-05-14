import { siteConfig } from "@/lib/site-config";

export function CalendlyEmbed({ className }: { className?: string }) {
  const url = siteConfig.calendlyUrl.trim();
  if (!url) {
    return (
      <div
        className={
          className ??
          "rounded-2xl border border-dashed border-border bg-secondary/30 p-6 text-sm text-muted-foreground"
        }
      >
        Configura <code className="font-mono text-xs">NEXT_PUBLIC_CALENDLY_URL</code> en Vercel para
        activar el embed. Mientras tanto, el CTA principal es WhatsApp.
      </div>
    );
  }

  const embedUrl = (() => {
    try {
      const u = new URL(url);
      u.searchParams.set("embed_domain", "1");
      if (!u.searchParams.has("embed")) u.searchParams.set("embed", "true");
      return u.toString();
    } catch {
      const joiner = url.includes("?") ? "&" : "?";
      return `${url}${joiner}embed=true&embed_domain=1`;
    }
  })();

  return (
    <div className={className}>
      <iframe
        title="Reserva una llamada"
        src={embedUrl}
        className="h-[720px] w-full rounded-2xl border border-border bg-white"
        loading="lazy"
      />
    </div>
  );
}

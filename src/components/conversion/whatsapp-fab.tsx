import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

export function WhatsAppFab() {
  const msg = siteConfig.whatsapp.defaultMessage;
  const aria = `Abrir WhatsApp con mensaje: ${msg}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
      <Button
        asChild
        size="xl"
        className="rounded-full px-6 shadow-[0_12px_40px_rgba(0,255,157,0.35)]"
      >
        <a
          href={getWhatsAppHref()}
          target="_blank"
          rel="noreferrer"
          aria-label={aria}
          title={msg}
        >
          <MessageCircle className="size-5" aria-hidden />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">WA</span>
        </a>
      </Button>
    </div>
  );
}

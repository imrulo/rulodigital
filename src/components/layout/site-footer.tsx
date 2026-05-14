import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig, getWhatsAppHref, getTelegramHref } from "@/lib/site-config";

export function SiteFooter() {
  const tg = getTelegramHref();
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-bold">
              rulo<span className="text-accent">.</span>digital
            </p>
            <p className="mt-3 max-w-sm text-sm text-neutral-300">{siteConfig.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-200">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>
                <Link className="hover:text-white" href={siteConfig.links.servicios}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href={siteConfig.links.ejemplos}>
                  Ejemplos
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href={siteConfig.links.sobre}>
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href={siteConfig.links.contacto}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-200">¿Listo en 48h?</p>
            <p className="mt-3 text-sm text-neutral-300">
              Si quieres clientes ya — no “una web bonita” — escríbeme y lo montamos con foco en
              conversión.
            </p>
            <Button asChild className="mt-4" size="lg">
              <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            {tg ? (
              <p className="mt-3 text-xs text-neutral-400">
                Alternativa rápida:{" "}
                <a className="underline hover:text-white" href={tg} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </p>
            ) : null}
          </div>
        </div>
        <Separator className="my-10 bg-white/10" />
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} {siteConfig.name}. Hecho para vender con claridad.
        </p>
      </div>
    </footer>
  );
}

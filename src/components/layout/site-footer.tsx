import Link from "next/link";
import { MessageCircle, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig, getWhatsAppHref, getTelegramHref } from "@/lib/site-config";
import { BrandLogo } from "@/components/layout/brand-logo";

export function SiteFooter() {
  const tg = getTelegramHref();
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href={siteConfig.links.home}
              className="inline-flex rounded-xl bg-white p-2.5 ring-1 ring-white/10 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label="Ir a inicio — Rulo.digital"
            >
              <BrandLogo variant="footer" priority={false} />
            </Link>
            <p className="mt-3 max-w-sm text-sm text-neutral-300">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-neutral-300">
              <a
                className="inline-flex items-center gap-2 font-medium text-white underline-offset-4 hover:underline"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                <Mail className="size-4 shrink-0 text-accent" aria-hidden />
                {siteConfig.contactEmail}
              </a>
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              <a
                className="inline-flex items-center gap-2 font-medium text-white underline-offset-4 hover:underline"
                href={siteConfig.githubProfileUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4 shrink-0 text-accent" aria-hidden />
                GitHub
              </a>
            </p>
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
              <li>
                <Link className="hover:text-white" href={siteConfig.links.paraCoaches}>
                  Para coaches
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href={siteConfig.links.paraDentistas}>
                  Para dentistas
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href={siteConfig.links.paraAbogados}>
                  Para abogados
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-200">¿Listo rápido?</p>
            <p className="mt-3 text-sm text-neutral-300">
              Si quieres clientes ya — no “una web bonita” — escríbeme y vemos encaje y plan en claro.
            </p>
            <Button asChild className="mt-4" size="lg">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                aria-label="Escribir por WhatsApp desde el pie de página"
              >
                <MessageCircle className="size-4" aria-hidden />
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

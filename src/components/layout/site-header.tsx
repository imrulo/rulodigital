import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getBookingHref } from "@/lib/site-config";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { BrandLogo } from "@/components/layout/brand-logo";

const nav = [
  { href: siteConfig.links.servicios, label: "Servicios" },
  { href: siteConfig.links.ejemplos, label: "Ejemplos" },
  { href: siteConfig.links.sobre, label: "Sobre mí" },
  { href: siteConfig.links.contacto, label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={siteConfig.links.home}
          className="group flex min-w-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Ir a inicio — Rulo.digital"
        >
          <BrandLogo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="lg" className="shadow-[0_0_24px_rgba(0,255,157,0.25)]">
            <a
              href={getBookingHref()}
              target="_blank"
              rel="noreferrer"
              aria-label="Reservar intro en Calendly"
            >
              <CalendarClock className="size-5" aria-hidden />
              Reservar (Calendly)
            </a>
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

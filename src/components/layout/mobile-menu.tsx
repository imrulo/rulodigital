"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const nav = [
  { href: siteConfig.links.servicios, label: "Servicios" },
  { href: siteConfig.links.ejemplos, label: "Ejemplos" },
  { href: siteConfig.links.sobre, label: "Sobre mí" },
  { href: siteConfig.links.contacto, label: "Contacto" },
];

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Abrir menú">
            <Menu className="size-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm border-border bg-background">
          <DialogHeader>
            <DialogTitle className="font-heading">Menú</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

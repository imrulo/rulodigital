"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppHref } from "@/lib/site-config";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Abrir menú de navegación">
            <Menu className="size-5" aria-hidden />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm border-border bg-background">
          <DialogHeader>
            <DialogTitle className="font-heading">Menú</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            {mainNav.map((item) => (
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
            <Link
              href={siteConfig.links.sobre}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Sobre mí
            </Link>
            <Button asChild className="mt-2">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                aria-label={siteConfig.cta.primaryAria}
              >
                <MessageCircle className="size-4" aria-hidden />
                {siteConfig.cta.primaryLabel}
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

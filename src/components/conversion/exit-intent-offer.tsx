"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

export function ExitIntentOffer() {
  const [open, setOpen] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => {
      if (firedRef.current) return;
      if (e.clientY > 0) return;
      firedRef.current = true;
      setOpen(true);
    };
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    return () => document.documentElement.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-border bg-background">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            ¿Te vas sin tu plaza a {siteConfig.offer.price} €?
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Pack Express: landing + captación en 48h. Solo {siteConfig.offer.slotsTotal} plazas a
            precio lanzamiento. Si encaja, escribeme y vemos alcance sin humo.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:justify-start">
          <Button asChild size="lg">
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
          <Button variant="ghost" onClick={() => setOpen(false)} aria-label="Cerrar aviso">
            Ahora no
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

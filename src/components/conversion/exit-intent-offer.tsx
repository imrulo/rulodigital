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
            Espera: quedan pocas plazas del lanzamiento
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {siteConfig.offer.headline}. Si sales ahora, mañana puede estar cerrado o subir de
            precio. Si encaja contigo, hablemos 2 minutos por WhatsApp y te digo si lo hacemos en 48h
            sí o sí.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:justify-start">
          <Button asChild size="lg">
            <a href={getWhatsAppHref()} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              Reservar mi plaza
            </a>
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Ahora no
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

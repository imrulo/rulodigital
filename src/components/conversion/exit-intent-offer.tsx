"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarClock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getBookingHref, siteConfig } from "@/lib/site-config";

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
            Últimas 3 plazas a 397 € — ¿Quieres tu landing en 48h?
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {siteConfig.offer.headline}. Si encaja contigo, reserva una intro en Calendly y vemos
            alcance, mensaje y siguiente paso sin humo.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:justify-start">
          <Button asChild size="lg">
            <a
              href={getBookingHref()}
              target="_blank"
              rel="noreferrer"
              aria-label="Reservar intro en Calendly desde el aviso de salida"
            >
              <CalendarClock className="size-4" aria-hidden />
              Reservar en Calendly
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

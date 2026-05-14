"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendLeadMagnetChecklist, type LeadMagnetState } from "@/actions/lead-magnet";

const initial: LeadMagnetState = { ok: false, message: "" };

export function LeadMagnetOptIn() {
  const [state, formAction, isPending] = useActionState(sendLeadMagnetChecklist, initial);

  return (
    <section className="border-y border-border bg-secondary/30 py-12" aria-labelledby="lead-magnet-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <div className="max-w-xl">
          <h2 id="lead-magnet-heading" className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Lead magnet: checklist “7 errores que te hacen perder clientes”
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Déjame tu nombre y email: te envío el PDF/HTML por correo. Si necesitas prioridad humana,
            reserva en Calendly o usa el WhatsApp flotante.
          </p>
        </div>

        <motion.form
          action={formAction}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md rounded-2xl border border-border bg-white p-4 shadow-sm"
        >
          <div className="grid gap-2">
            <Label htmlFor="lead-name">Nombre</Label>
            <Input id="lead-name" name="name" required autoComplete="name" placeholder="Tu nombre" />
          </div>
          <div className="mt-3 grid gap-2">
            <Label htmlFor="lead-email">Email</Label>
            <Input
              id="lead-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@email.com"
            />
          </div>
          <Button className="mt-3 w-full" type="submit" disabled={isPending} aria-busy={isPending}>
            {isPending ? "Enviando…" : "Enviarme la checklist"}
          </Button>
          {state.message ? (
            <p
              className={`mt-3 text-xs ${state.ok ? "text-emerald-700" : "text-red-700"}`}
              role="status"
            >
              {state.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

"use client";

import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { subscribeNewsletter, type NewsletterState } from "@/actions/newsletter";
import { buildNewsletterWhatsAppHref } from "@/lib/whatsapp-links";

const initial: NewsletterState = { ok: false, message: "" };

export function LeadMagnetOptIn() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, initial);
  const [email, setEmail] = useState("");
  const waHref = state.ok && email ? buildNewsletterWhatsAppHref(email) : null;

  return (
    <section className="border-y border-border bg-secondary/30 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <div className="max-w-xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Lead magnet: checklist de 7 errores que te hacen perder clientes
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Opt-in pequeño, sin drama. Déjame tu email y te la envío. Si quieres prioridad, el
            atajo es WhatsApp (siempre).
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
            <Label htmlFor="lead-email">Email</Label>
            <Input
              id="lead-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button className="mt-3 w-full" type="submit" disabled={isPending}>
            {isPending ? "Enviando…" : "Quiero la checklist"}
          </Button>
          {state.message ? (
            <p
              className={`mt-3 text-xs ${state.ok ? "text-emerald-700" : "text-red-700"}`}
              role="status"
            >
              {state.message}
            </p>
          ) : null}
          {state.ok && waHref ? (
            <Button asChild className="mt-3 w-full" variant="secondary" type="button">
              <a href={waHref} target="_blank" rel="noreferrer">
                Abrir WhatsApp (prioridad)
              </a>
            </Button>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

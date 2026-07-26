"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendLeadMagnetChecklist, type LeadMagnetState } from "@/actions/lead-magnet";
import { trackEvent } from "@/lib/analytics";
import { leadMagnets, type LeadMagnetKey } from "@/lib/lead-magnets";
import { siteConfig } from "@/lib/site-config";

const initial: LeadMagnetState = { ok: false, message: "" };

const magnetOptions = Object.values(leadMagnets);

type Props = {
  /** Preselección (p. ej. en landings de nicho). */
  defaultMagnet?: LeadMagnetKey;
};

export function LeadMagnetOptIn({ defaultMagnet = "general" }: Props) {
  const [state, formAction, isPending] = useActionState(sendLeadMagnetChecklist, initial);
  const trackedOk = useRef(false);
  const selected = leadMagnets[defaultMagnet] ?? leadMagnets.general;

  useEffect(() => {
    if (state.ok && !trackedOk.current) {
      trackedOk.current = true;
      trackEvent("lead_magnet_submit", { magnet: defaultMagnet });
    }
  }, [state.ok, defaultMagnet]);

  return (
    <section className="border-y border-border bg-secondary/30 py-12" aria-labelledby="lead-magnet-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <div className="max-w-xl">
          <h2 id="lead-magnet-heading" className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            {selected.heading}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{selected.blurb}</p>
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
            <Label htmlFor="lead-magnet">Checklist</Label>
            <select
              id="lead-magnet"
              name="magnet"
              defaultValue={defaultMagnet}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {magnetOptions.map((m) => (
                <option key={m.key} value={m.key}>
                  {m.formLabel}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3 grid gap-2">
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
          <div className="mt-4 flex items-start gap-3">
            <input
              id="lead-privacy"
              name="privacy_accept"
              type="checkbox"
              value="on"
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-[#00D68F]"
              aria-required="true"
            />
            <Label htmlFor="lead-privacy" className="text-sm font-normal leading-snug text-muted-foreground">
              Acepto la{" "}
              <Link
                href={siteConfig.links.privacidad}
                className="font-medium text-foreground underline underline-offset-2 hover:text-accent"
              >
                Política de Privacidad
              </Link>
              .
            </Label>
          </div>
          <Button className="mt-4 w-full" type="submit" disabled={isPending} aria-busy={isPending}>
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

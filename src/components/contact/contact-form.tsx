"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact, type ContactState } from "@/actions/contact";
import { MessageCircle } from "lucide-react";
import { getWhatsAppHref, siteConfig } from "@/lib/site-config";

const initial: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initial);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const showWhatsApp = state.ok && name && email && message;

  return (
    <form
      action={formAction}
      className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm"
      aria-label="Formulario de contacto"
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Teléfono (opcional)</Label>
        <Input id="phone" name="phone" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">¿Qué necesitas?</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Cuéntame tu negocio, tu ciudad, y qué quieres que pase cuando alguien entra."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" disabled={isPending} aria-busy={isPending}>
        {isPending ? "Enviando…" : "Enviar solicitud"}
      </Button>

      {state.message ? (
        <p className={`text-sm ${state.ok ? "text-emerald-700" : "text-red-700"}`} role="status">
          {state.message}
        </p>
      ) : null}

      {showWhatsApp ? (
        <Button asChild variant="secondary" size="lg" type="button">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noreferrer"
            aria-label={siteConfig.cta.primaryAria}
          >
            <MessageCircle className="size-5" aria-hidden />
            {siteConfig.cta.primaryLabel}
          </a>
        </Button>
      ) : null}
    </form>
  );
}

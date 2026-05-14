"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact, type ContactState } from "@/actions/contact";
import { buildContactWhatsAppHref } from "@/lib/whatsapp-links";
import { MessageCircle } from "lucide-react";

const initial: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initial);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const waHref =
    state.ok && name && email && message
      ? buildContactWhatsAppHref({ name, email, phone, message })
      : null;

  return (
    <form action={formAction} className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
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

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? "Enviando…" : "Enviar y continuar en WhatsApp"}
      </Button>

      {state.message ? (
        <p className={`text-sm ${state.ok ? "text-emerald-700" : "text-red-700"}`} role="status">
          {state.message}
        </p>
      ) : null}

      {waHref ? (
        <Button asChild variant="secondary" size="lg" type="button">
          <a href={waHref} target="_blank" rel="noreferrer">
            <MessageCircle className="size-5" />
            Abrir WhatsApp con tu mensaje
          </a>
        </Button>
      ) : null}
    </form>
  );
}

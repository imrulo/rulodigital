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

const niches = [
  { value: "", label: "Selecciona tu perfil" },
  { value: "coach", label: "Coach / formador" },
  { value: "dentista", label: "Dentista / clínica" },
  { value: "abogado", label: "Abogado / despacho" },
  { value: "otro-profesional", label: "Otro profesional / local" },
] as const;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initial);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [niche, setNiche] = useState("");
  const [city, setCity] = useState("");
  const [offer, setOffer] = useState("");
  const [message, setMessage] = useState("");

  const showWhatsApp = state.ok && name && email;

  const waFollowUp = showWhatsApp
    ? getWhatsAppHref(
        [
          `Hola Rulo, soy ${name}.`,
          niche ? `Perfil: ${niche}.` : "",
          city ? `Ciudad: ${city}.` : "",
          offer ? `Vendo: ${offer}.` : "",
          "Quiero mi landing en 48h.",
        ]
          .filter(Boolean)
          .join(" "),
      )
    : getWhatsAppHref();

  return (
    <form
      action={formAction}
      className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm"
      aria-label="Formulario de contacto"
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <Label htmlFor="niche">Tu perfil</Label>
          <select
            id="niche"
            name="niche"
            required
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {niches.map((n) => (
              <option key={n.value || "empty"} value={n.value} disabled={n.value === ""}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">Ciudad</Label>
          <Input
            id="city"
            name="city"
            required
            autoComplete="address-level2"
            placeholder="Madrid, Valencia…"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="offer">¿Qué vendes o ofreces?</Label>
        <Input
          id="offer"
          name="offer"
          required
          placeholder="Ej: sesiones 1:1, implantes, laboral…"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Teléfono (opcional)</Label>
        <Input
          id="phone"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Detalle (opcional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Web actual, plazos, o qué te frena hoy."
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
            href={waFollowUp}
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

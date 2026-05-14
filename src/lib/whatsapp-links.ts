import { getWhatsAppHref } from "@/lib/site-config";

export function buildNewsletterWhatsAppHref(email: string): string {
  const msg = `Hola Rulo, acabo de pedir la checklist. Mi email es: ${email}`;
  return getWhatsAppHref(msg);
}

export function buildContactWhatsAppHref(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  const text = [
    "Hola Rulo, quiero mi landing en 48h.",
    "",
    `Nombre: ${input.name}`,
    `Email: ${input.email}`,
    input.phone ? `Teléfono: ${input.phone}` : null,
    "",
    "Contexto:",
    input.message,
  ]
    .filter(Boolean)
    .join("\n");

  return getWhatsAppHref(text);
}

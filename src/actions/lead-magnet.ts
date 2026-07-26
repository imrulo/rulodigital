"use server";

import { Resend } from "resend";
import { buildChecklistEmailHtml } from "@/lib/checklist-email-html";
import { getLeadMagnet } from "@/lib/lead-magnets";
import { siteConfig } from "@/lib/site-config";

export type LeadMagnetState =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function sendLeadMagnetChecklist(
  _prev: LeadMagnetState | undefined,
  formData: FormData,
): Promise<LeadMagnetState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const magnetKey = String(formData.get("magnet") ?? "general").trim();
  const magnet = getLeadMagnet(magnetKey);

  if (!name || name.length < 2) {
    return { ok: false, message: "Indica tu nombre (mínimo 2 caracteres)." };
  }
  if (!email || !email.includes("@")) {
    return { ok: false, message: "Email inválido. Revísalo e inténtalo otra vez." };
  }

  const privacy = String(formData.get("privacy_accept") ?? "");
  if (privacy !== "on") {
    return {
      ok: false,
      message: "Debes aceptar la Política de Privacidad para recibir la checklist.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();

  if (!apiKey || !from) {
    return {
      ok: false,
      message: `Falta configurar RESEND_API_KEY y RESEND_FROM en el servidor. Mientras tanto, escribe a ${siteConfig.contactEmail} y te envío la checklist a mano.`,
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: magnet.subject,
    html: buildChecklistEmailHtml({ name, email, magnet }),
  });

  if (error) {
    return {
      ok: false,
      message: `No pude enviar el email automáticamente (${error.message}). Escríbenos a ${siteConfig.contactEmail}.`,
    };
  }

  return {
    ok: true,
    message: "Enviado. Revisa tu bandeja de entrada (y spam) en 1–2 minutos.",
  };
}

"use server";

export type NewsletterState =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function subscribeNewsletter(
  _prev: NewsletterState | undefined,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return { ok: false, message: "Email inválido. Revisa y vuelve a intentar." };
  }

  // Aquí conectas tu ESP (Resend, Brevo, etc.). Por ahora: éxito + CTA WhatsApp.
  return {
    ok: true,
    message:
      "Listo. Revisa tu email en 1 minuto. Si no llega, escríbeme por WhatsApp y te lo mando a mano.",
  };
}

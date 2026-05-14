"use server";

export type ContactState =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false, message: "Nombre demasiado corto." };
  }
  if (!email.includes("@")) {
    return { ok: false, message: "Email inválido." };
  }
  if (!message || message.length < 10) {
    return { ok: false, message: "Cuéntame un poco más (mínimo 10 caracteres)." };
  }

  // Conecta aquí tu backend/email/CRM. Por ahora devolvemos OK y empujamos a WhatsApp.
  void phone;

  return {
    ok: true,
    message:
      "Recibido. Si quieres respuesta ultra rápida, abre WhatsApp con el botón de abajo (así no se pierde nada en bandeja).",
  };
}

"use server";

export type ContactState =
  | { ok: true; message: string }
  | { ok: false; message: string };

const allowedNiches = new Set(["coach", "dentista", "abogado", "otro-profesional"]);

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const phone = String(formData.get("phone") ?? "").trim();
  const niche = String(formData.get("niche") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const offer = String(formData.get("offer") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false, message: "Nombre demasiado corto." };
  }
  if (!email.includes("@")) {
    return { ok: false, message: "Email inválido." };
  }
  if (!allowedNiches.has(niche)) {
    return { ok: false, message: "Selecciona tu perfil (coach, dentista, abogado u otro)." };
  }
  if (!city || city.length < 2) {
    return { ok: false, message: "Indica tu ciudad." };
  }
  if (!offer || offer.length < 3) {
    return { ok: false, message: "Cuéntame qué vendes u ofreces (mínimo 3 caracteres)." };
  }

  // Persistencia / CRM: conectar Resend, Notion o webhook aquí.
  void phone;
  void message;

  return {
    ok: true,
    message:
      "Recibido. Si quieres acelerar, abre WhatsApp con el botón de abajo: lleva tu perfil y ciudad ya escritos.",
  };
}

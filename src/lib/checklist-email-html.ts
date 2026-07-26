import type { LeadMagnetCopy } from "@/lib/lead-magnets";

type ChecklistEmailParams = {
  name: string;
  email: string;
  magnet: LeadMagnetCopy;
};

export function buildChecklistEmailHtml({
  name,
  email,
  magnet,
}: ChecklistEmailParams): string {
  const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const items = magnet.errors
    .map(
      (e, i) =>
        `<li style="margin-bottom:10px;"><strong>${i + 1}. ${e.title}</strong> — ${e.body}</li>`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${magnet.title}</title>
</head>
<body style="margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#f4f4f5;color:#18181b;line-height:1.55;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f5;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:16px;border:1px solid #e4e4e7;padding:28px 24px;">
          <tr>
            <td>
              <p style="margin:0 0 8px;font-size:13px;color:#52525b;">Rulo.digital</p>
              <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#09090b;">Hola ${safeName}, aquí tienes tu checklist</h1>
              <p style="margin:0 0 20px;font-size:15px;color:#3f3f46;">
                Pedido desde <strong>${safeEmail}</strong>. ${magnet.intro}
              </p>
              <h2 style="margin:24px 0 12px;font-size:16px;font-weight:700;color:#09090b;">${magnet.title}</h2>
              <ol style="margin:0;padding-left:20px;font-size:15px;color:#27272a;">
                ${items}
              </ol>
              <p style="margin:24px 0 0;font-size:14px;color:#52525b;">
                ¿Quieres una landing de conversión en 48h? Responde a este email o escríbeme por WhatsApp y seguimos.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

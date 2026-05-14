type ChecklistEmailParams = {
  name: string;
  email: string;
};

export function buildChecklistEmailHtml({ name, email }: ChecklistEmailParams): string {
  const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Checklist — 7 errores que te hacen perder clientes</title>
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
                Pedido desde <strong>${safeEmail}</strong>. Guarda este email: son errores típicos que veo en landings de servicios locales y profesionales.
              </p>
              <h2 style="margin:24px 0 12px;font-size:16px;font-weight:700;color:#09090b;">7 errores que te hacen perder clientes</h2>
              <ol style="margin:0;padding-left:20px;font-size:15px;color:#27272a;">
                <li style="margin-bottom:10px;"><strong>Hero vago</strong> — no dice qué vendes, a quién ni qué hacer ahora.</li>
                <li style="margin-bottom:10px;"><strong>Demasiadas opciones</strong> — varios CTAs compiten y el usuario no elige ninguno.</li>
                <li style="margin-bottom:10px;"><strong>Prueba social débil</strong> — genérica o ausente; no genera confianza real.</li>
                <li style="margin-bottom:10px;"><strong>Formularios largos</strong> — cada campo extra baja conversión.</li>
                <li style="margin-bottom:10px;"><strong>Velocidad y móvil</strong> — si carga lento o se rompe en móvil, te vas.</li>
                <li style="margin-bottom:10px;"><strong>SEO local ignorado</strong> — ciudad, servicio y señales locales mal conectadas.</li>
                <li style="margin-bottom:10px;"><strong>Seguimiento inexistente</strong> — no mides ni mejoras lo que ya funciona.</li>
              </ol>
              <p style="margin:24px 0 0;font-size:14px;color:#52525b;">
                ¿Quieres que lo arreglemos en una landing enfocada a conversión? Escríbeme por WhatsApp o responde a este email y seguimos.
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

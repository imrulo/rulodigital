/**
 * Datos LSSI opcionales. Configúralos en Vercel cuando tengas NIF/domicilio reales.
 * Sin ellos, el aviso legal muestra el aviso de pendiente (sin inventar datos).
 */
export type LegalIdentity = {
  legalName: string;
  taxId: string;
  address: string;
  registry: string;
  email: string;
  siteUrl: string;
};

export function getLegalIdentity(): LegalIdentity {
  return {
    legalName: process.env.NEXT_PUBLIC_LEGAL_NAME?.trim() ?? "",
    taxId: process.env.NEXT_PUBLIC_LEGAL_TAX_ID?.trim() ?? "",
    address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS?.trim() ?? "",
    registry: process.env.NEXT_PUBLIC_LEGAL_REGISTRY?.trim() ?? "",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "marketing@rulo.digital",
    siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rulo.digital").replace(/\/$/, ""),
  };
}

export function hasCompleteLegalIdentity(id: LegalIdentity): boolean {
  return Boolean(id.legalName && id.taxId && id.address);
}

import type { NicheKey } from "@/lib/niche-copy";

export type LeadMagnetKey = "general" | NicheKey;

export type LeadMagnetCopy = {
  key: LeadMagnetKey;
  formLabel: string;
  heading: string;
  blurb: string;
  subject: string;
  title: string;
  intro: string;
  errors: { title: string; body: string }[];
};

export const leadMagnets: Record<LeadMagnetKey, LeadMagnetCopy> = {
  general: {
    key: "general",
    formLabel: "General (cualquier negocio)",
    heading: "Checklist: 7 errores que te hacen perder clientes",
    blurb:
      "Errores típicos en landings de servicios. Te la envío por email; si estás caliente, escríbeme por WhatsApp.",
    subject: "Tu checklist: 7 errores que te hacen perder clientes",
    title: "7 errores que te hacen perder clientes",
    intro:
      "Errores típicos que veo en landings de servicios locales y profesionales.",
    errors: [
      { title: "Hero vago", body: "No dice qué vendes, a quién ni qué hacer ahora." },
      { title: "Demasiadas opciones", body: "Varios CTAs compiten y el usuario no elige ninguno." },
      { title: "Prueba social débil", body: "Genérica o ausente; no genera confianza real." },
      { title: "Formularios largos", body: "Cada campo extra baja conversión." },
      { title: "Velocidad y móvil", body: "Si carga lento o se rompe en móvil, te vas." },
      { title: "SEO local ignorado", body: "Ciudad, servicio y señales locales mal conectadas." },
      { title: "Seguimiento inexistente", body: "No mides ni mejoras lo que ya funciona." },
    ],
  },
  coaches: {
    key: "coaches",
    formLabel: "Para coaches",
    heading: "Checklist coach: 7 fugas que vacían tu agenda",
    blurb:
      "Pensada para coaches y formadores: mensaje, oferta y siguiente paso hacia sesión o WhatsApp.",
    subject: "Checklist coach: 7 fugas que vacían tu agenda",
    title: "7 fugas que vacían la agenda de un coach",
    intro: "Patrones que frenan reservas en páginas de coaching y mentoring.",
    errors: [
      { title: "Promesa abstracta", body: "Hablas de transformación, no del resultado de la 1ª sesión." },
      { title: "Sin oferta binaria", body: "El visitante no sabe si pedir discovery, pack o solo info." },
      { title: "Prueba del método ausente", body: "No se entiende cómo trabajas ni para quién no eres." },
      { title: "CTA tímido", body: "El botón está abajo o compite con redes y blog." },
      { title: "Objeciones sin FAQ", body: "Precio, tiempo y “¿es para mí?” quedan sin respuesta." },
      { title: "Sin ciudad / nicho", body: "Pierdes búsquedas locales y de especialidad." },
      { title: "Sin seguimiento", body: "El lead descarga y nadie le escribe en 24h." },
    ],
  },
  dentistas: {
    key: "dentistas",
    formLabel: "Para dentistas",
    heading: "Checklist clínica: 7 errores que matan citas",
    blurb:
      "Para clínicas dentales: claridad de servicios, urgencias y un CTA que pida cita sin miedo.",
    subject: "Checklist clínica dental: 7 errores que matan citas",
    title: "7 errores que matan citas en clínicas dentales",
    intro: "Lo que hace que un paciente busque “dentista + ciudad” y se vaya a la competencia.",
    errors: [
      { title: "Menú clínico infinito", body: "Todo el catálogo arriba; nada destaca." },
      { title: "Urgencias escondidas", body: "Quien duele no encuentra el botón en 3 segundos." },
      { title: "Poca confianza visible", body: "Equipo, clínica y reseñas reales no están cerca del CTA." },
      { title: "Teléfono en el footer", body: "En móvil el CTA primario debe estar siempre a un toque." },
      { title: "Lenguaje intimidante", body: "Tecnicismos sin beneficio ni siguiente paso." },
      { title: "SEO local flojo", body: "Título y H1 sin servicio + ciudad." },
      { title: "Sin medir llamadas", body: "No sabes qué campaña o página trae citas." },
    ],
  },
  abogados: {
    key: "abogados",
    formLabel: "Para abogados",
    heading: "Checklist despacho: 7 fallos que atraen curiosos",
    blurb:
      "Para despachos: especialidad clara, proceso transparente y consultas cualificadas.",
    subject: "Checklist despacho: 7 fallos que atraen curiosos",
    title: "7 fallos que atraen curiosos (y filtran mal clientes)",
    intro: "Errores típicos en landings de abogados que diluyen autoridad y cualificación.",
    errors: [
      { title: "Especialidad diluida", body: "Pareces generalista; Google y el cliente no te etiquetan." },
      { title: "Paredes de texto", body: "Párrafos legales sin estructura de decisión." },
      { title: "Formulario eterno", body: "Pides datos de expediente antes de generar confianza." },
      { title: "Sin proceso/tiempos", body: "Miedo a “factura sorpresa” sin orientación." },
      { title: "CTA genérico", body: "“Contactar” en vez de “solicitar consulta”." },
      { title: "Claims arriesgados", body: "Promesas absolutas que restan credibilidad profesional." },
      { title: "Sin silo local", body: "No captas “abogado [área] + ciudad”." },
    ],
  },
};

export function getLeadMagnet(key: string | null | undefined): LeadMagnetCopy {
  if (key && key in leadMagnets) {
    return leadMagnets[key as LeadMagnetKey];
  }
  return leadMagnets.general;
}

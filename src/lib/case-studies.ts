import { siteConfig } from "@/lib/site-config";

export type CaseStudy = {
  niche: string;
  nichePath: string;
  title: string;
  problem: string;
  change: string;
  outcome: string;
  waMessage: string;
  img: string;
};

/**
 * Patrones de conversión por nicho (estructura y criterio).
 * Sustituir por casos reales con URL + métricas cuando existan.
 */
export const caseStudies: CaseStudy[] = [
  {
    niche: "Coaches",
    nichePath: siteConfig.links.paraCoaches,
    title: "De “transformación abstracta” a sesión concreta",
    problem:
      "La home hablaba de mindset y valores, pero no decía qué pasa en la primera sesión ni qué botón pulsar.",
    change:
      "Oferta binaria arriba, prueba del método en 3 bullets, FAQ de objeciones y CTA único a WhatsApp/reserva.",
    outcome: "Menos curiosos, más mensajes con contexto (“quiero sesión 1:1”).",
    waMessage: "Hola Rulo, soy coach y quiero una landing que llene agenda",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=70",
  },
  {
    niche: "Dentistas",
    nichePath: siteConfig.links.paraDentistas,
    title: "De catálogo clínico a “pide cita ya”",
    problem:
      "Servicios interminables, poco contraste en urgencias y el teléfono perdido en el footer.",
    change:
      "Jerarquía de servicios clave, bloque de confianza (equipo/clínica) y CTA fijo a llamar o escribir.",
    outcome: "El visitante entiende el siguiente paso en segundos, también en móvil.",
    waMessage: "Hola Rulo, tengo clínica dental y quiero landing para citas",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=70",
  },
  {
    niche: "Abogados",
    nichePath: siteConfig.links.paraAbogados,
    title: "De párrafos legales a consulta cualificada",
    problem:
      "Mucho texto institucional, especialidad diluida y formulario largo que ahuyenta.",
    change:
      "Especialidad visible, proceso/tiempos orientativos, formulario corto o WhatsApp para filtrar curiosos.",
    outcome: "Más consultas alineadas con la especialidad que quieres vender.",
    waMessage: "Hola Rulo, soy abogado y quiero landing para consultas cualificadas",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=70",
  },
];

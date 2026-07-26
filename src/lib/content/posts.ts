import { siteConfig } from "@/lib/site-config";

export type PostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  intent: "consideration" | "commercial" | "top" | "niche";
  readingMinutes: number;
  ctaPrimary: { label: string; href: string; waMessage?: string };
  ctaSecondary?: { label: string; href: string };
  related: { label: string; href: string }[];
  sections: PostSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "landing-vs-web-clinicas-dentales",
    title: "Landing page vs web para clínicas dentales: qué convierte más citas",
    description:
      "Cuándo te basta una landing de conversión y cuándo necesitas una web completa. Enfoque práctico para clínicas que quieren citas, no “presencia”.",
    publishedAt: "2026-07-20",
    intent: "consideration",
    readingMinutes: 6,
    ctaPrimary: {
      label: siteConfig.cta.primaryLabel,
      href: "whatsapp",
      waMessage: "Hola Rulo, soy clínica dental y quiero una landing para citas",
    },
    ctaSecondary: { label: "Ver landing para dentistas", href: siteConfig.links.paraDentistas },
    related: [
      { label: "Pack Express 397 €", href: siteConfig.links.servicios },
      { label: "Landing dentista Madrid", href: siteConfig.links.paraDentistasMadrid },
      { label: "Ejemplos de conversión", href: siteConfig.links.ejemplos },
    ],
    sections: [
      {
        heading: "El paciente no “explora”: decide en segundos",
        paragraphs: [
          "Quien busca “dentista + ciudad” o “urgencia dental” no quiere un tour corporativo. Quiere saber si le puedes atender, cuánto de claro es el siguiente paso y si puede confiar.",
          "Una web de 12 páginas con historia, blog y menú infinito suele diluir esa decisión. Una landing bien hecha la acelera.",
        ],
      },
      {
        heading: "Qué hace una landing (y qué no)",
        paragraphs: [
          "Una landing de clínica tiene un trabajo: convertir la visita en cita o mensaje. Un solo mensaje principal, prueba de confianza cerca del CTA y un botón imposible de perder en móvil.",
        ],
        bullets: [
          "Servicios clave visibles (no todo el catálogo clínico a la vez).",
          "Urgencias o primera visita destacadas si son tu entrada de demanda.",
          "CTA fijo: llamar, WhatsApp o pedir cita.",
          "SEO local básico: servicio + ciudad en título y H1.",
        ],
      },
      {
        heading: "Cuándo sí necesitas una web más amplia",
        paragraphs: [
          "Si tienes varias sedes, equipo grande, blog médico serio o campañas que aterrizan en muchas ofertas distintas, una arquitectura multi-página tiene sentido.",
          "Incluso entonces, la página que recibe el anuncio o la búsqueda de intención alta debería comportarse como landing: una promesa, una acción.",
        ],
      },
      {
        heading: "Recomendación práctica",
        paragraphs: [
          "Empieza por una landing de conversión. Mide llamadas y mensajes. Luego amplía solo lo que aporte pacientes. El Pack Express de rulo.digital está pensado exactamente para ese primer sistema en 48 horas hábiles.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-cuesta-landing-conversion-2026",
    title: "Cuánto cuesta una landing de conversión en 2026 (y por qué no es 99 €)",
    description:
      "Rangos reales del mercado español: landings express baratas vs packs orientados a conversión. Qué incluye el precio y qué preguntas hacer antes de pagar.",
    publishedAt: "2026-07-22",
    intent: "commercial",
    readingMinutes: 7,
    ctaPrimary: {
      label: siteConfig.cta.primaryLabel,
      href: "whatsapp",
      waMessage: "Hola Rulo, quiero el Pack Express a 397 €",
    },
    ctaSecondary: { label: "Ver detalle del Pack Express", href: siteConfig.links.servicios },
    related: [
      { label: "Para coaches", href: siteConfig.links.paraCoaches },
      { label: "Para dentistas", href: siteConfig.links.paraDentistas },
      { label: "Para abogados", href: siteConfig.links.paraAbogados },
    ],
    sections: [
      {
        heading: "El rango que verás en España",
        paragraphs: [
          "En 2026 conviven tres bandas: landings “baratas” (aprox. 99–150 €) con entrega rápida; freelancers CRO/diseño (aprox. 600–1.500 €); y agencias a medida (varios miles).",
          "El precio solo es barato si el resultado es conversaciones. Una página online que no pide la acción correcta es un coste oculto cada semana.",
        ],
      },
      {
        heading: "Qué suele incluir (y qué no) una landing de 99 €",
        paragraphs: [
          "Muchas ofertas express cubren plantilla, textos básicos, WhatsApp y publicación. Útil si solo necesitas “estar”. Débil si tu mensaje es confuso o tu nicho tiene objeciones fuertes.",
        ],
        bullets: [
          "A menudo falta diagnóstico de oferta.",
          "Poca personalización por nicho.",
          "Prueba social y FAQ de objeciones genéricas o vacías.",
          "Garantías de plazo variables; lee la letra pequeña.",
        ],
      },
      {
        heading: "Por qué el Pack Express está en 397 €",
        paragraphs: [
          "No compite por ser el más barato. Compite por criterio: brief express, estructura de venta, CTA único, SEO base y entrega en 48 horas hábiles con garantía de plazo (devolución si el retraso es imputable).",
          "Si tu negocio vive de consultas —coach, clínica, despacho, servicio local— ese margen suele pagarse solo con un cliente nuevo.",
        ],
      },
      {
        heading: "Preguntas antes de contratar",
        paragraphs: ["Usa esta checklist mental antes de pagar cualquier landing:"],
        bullets: [
          "¿Quién escribe el mensaje de venta?",
          "¿Qué acción quiero que haga el visitante?",
          "¿Hay garantía de plazo real?",
          "¿Puedo medir WhatsApp/formularios después?",
          "¿El precio incluye mobile-first y velocidad?",
        ],
      },
    ],
  },
  {
    slug: "7-errores-perder-clientes-web",
    title: "7 errores en tu web que te hacen perder clientes (checklist)",
    description:
      "Los fallos más habituales en landings de servicios: hero vago, CTAs múltiples, prueba social débil y más. Incluye CTA a checklist por email.",
    publishedAt: "2026-07-18",
    intent: "top",
    readingMinutes: 5,
    ctaPrimary: {
      label: siteConfig.cta.primaryLabel,
      href: "whatsapp",
      waMessage: "Hola Rulo, quiero arreglar los errores de mi web con una landing",
    },
    ctaSecondary: { label: "Ir al Pack Express", href: siteConfig.links.servicios },
    related: [
      { label: "Recursos / checklist", href: "/recursos#checklist" },
      { label: "Ejemplos", href: siteConfig.links.ejemplos },
      { label: "Contacto", href: siteConfig.links.contacto },
    ],
    sections: [
      {
        heading: "1. Hero vago",
        paragraphs: [
          "Si en 5 segundos no se entiende qué vendes, a quién y qué hacer ahora, el scroll se convierte en rebote. Cambia adjetivos por resultado + acción.",
        ],
      },
      {
        heading: "2. Demasiados CTAs",
        paragraphs: [
          "“Ver más”, “Síguenos”, “Descarga”, “Contacta” y tres botones más compiten entre sí. En una landing de captación, un CTA primario manda.",
        ],
      },
      {
        heading: "3. Prueba social débil o inventada",
        paragraphs: [
          "Testimonios genéricos o números sin fuente destruyen confianza. Mejor poca prueba real que mucho teatro.",
        ],
      },
      {
        heading: "4. Formularios eternos",
        paragraphs: [
          "Cada campo extra baja conversión. Nombre, email, ciudad y qué necesita suelen bastar para cualificar.",
        ],
      },
      {
        heading: "5. Móvil y velocidad ignorados",
        paragraphs: [
          "Si la página tarda o el botón no se ve con el pulgar, pierdes el lead más barato: el que ya llegó.",
        ],
      },
      {
        heading: "6. SEO local desconectado",
        paragraphs: [
          "Tu cliente busca servicio + ciudad. Título, H1 y prueba deben hablar ese idioma.",
        ],
      },
      {
        heading: "7. Cero seguimiento",
        paragraphs: [
          "Sin medir clics a WhatsApp o envíos de formulario, no sabes qué mejorar. Activa eventos antes de subir presupuesto en ads.",
        ],
      },
      {
        heading: "Siguiente paso",
        paragraphs: [
          "Si quieres la checklist en el email (versión general o por nicho), úsala desde la home o escríbeme y la adaptamos a tu sector. Si prefieres que te lo deje resuelto en una landing, el Pack Express está listo.",
        ],
      },
    ],
  },
  {
    slug: "landing-para-coaches-estructura-agenda",
    title: "Landing para coaches: estructura que llena agenda (sin web eterna)",
    description:
      "Cómo ordenar mensaje, oferta, prueba y CTA para que un coach consiga sesiones o conversaciones. Plantilla mental lista para publicar en 48h.",
    publishedAt: "2026-07-24",
    intent: "niche",
    readingMinutes: 6,
    ctaPrimary: {
      label: siteConfig.cta.primaryLabel,
      href: "whatsapp",
      waMessage: "Hola Rulo, soy coach y quiero una landing que llene agenda",
    },
    ctaSecondary: { label: "Landing para coaches", href: siteConfig.links.paraCoaches },
    related: [
      { label: "Pack Express", href: siteConfig.links.servicios },
      { label: "7 errores que pierden clientes", href: "/recursos/7-errores-perder-clientes-web" },
      { label: "Ejemplos", href: siteConfig.links.ejemplos },
    ],
    sections: [
      {
        heading: "Tu cliente compra un resultado, no tu biografía",
        paragraphs: [
          "Las páginas de coaching fallan cuando hablan de “transformación” sin decir qué pasa en la primera sesión, para quién es y qué se pide ahora.",
          "La estructura ganadora es binaria: problema → método breve → prueba → CTA a sesión o WhatsApp.",
        ],
      },
      {
        heading: "Bloques que no pueden faltar",
        paragraphs: ["Orden recomendado en una sola página:"],
        bullets: [
          "H1 con resultado + para quién.",
          "Oferta principal (1:1, pack, grupo) sin menú confuso.",
          "3 bullets del método (sin paper académico).",
          "Prueba: casos, reseñas reales o proceso.",
          "FAQ de precio, duración y “¿es para mí?”.",
          "CTA único repetido arriba y abajo.",
        ],
      },
      {
        heading: "Objeciones que debes matar en la propia página",
        paragraphs: [
          "“No tengo tiempo”, “ya probé coaching”, “¿online funciona?”. Si no las respondes, el visitante se va a pensarlo… y no vuelve.",
        ],
      },
      {
        heading: "Publicar en 48h sin eternizar el branding",
        paragraphs: [
          "No necesitas un rebranding de 8 semanas para empezar a llenar agenda. Necesitas claridad y un sistema de captación. Eso es exactamente el Pack Express orientado a coaches.",
        ],
      },
    ],
  },
  {
    slug: "landing-abogados-consultas-cualificadas",
    title: "Landing para abogados: cómo atraer consultas cualificadas (sin curiosos)",
    description:
      "Especialidad visible, proceso claro y CTA a consulta. Estructura para despachos que quieren filtrar mejor y parecer creíbles.",
    publishedAt: "2026-07-25",
    intent: "niche",
    readingMinutes: 6,
    ctaPrimary: {
      label: siteConfig.cta.primaryLabel,
      href: "whatsapp",
      waMessage: "Hola Rulo, soy abogado y quiero landing para consultas",
    },
    ctaSecondary: { label: "Landing para abogados", href: siteConfig.links.paraAbogados },
    related: [
      { label: "Pack Express", href: siteConfig.links.servicios },
      { label: "Cuánto cuesta una landing", href: "/recursos/cuanto-cuesta-landing-conversion-2026" },
      { label: "Contacto", href: siteConfig.links.contacto },
    ],
    sections: [
      {
        heading: "Autoridad ≠ muro de texto",
        paragraphs: [
          "El visitante asustado o con un problema urgente no lee 2.000 palabras. Necesita especialidad, encaje y un primer paso seguro (consulta).",
        ],
      },
      {
        heading: "Estructura que filtra",
        paragraphs: ["Una landing de despacho efectiva suele incluir:"],
        bullets: [
          "Especialidad principal arriba (laboral, familia, penal…).",
          "Para quién sí / para quién no (cualifica sin ser agresivo).",
          "Proceso y tiempos orientativos.",
          "Formulario corto o WhatsApp — no expediente completo en el primer toque.",
          "Claims medidos y disclaimers donde toque.",
        ],
      },
      {
        heading: "SEO local sin parecer spam",
        paragraphs: [
          "“Abogado [área] + ciudad” sigue siendo cómo busca mucha gente. Integra ciudad y especialidad en título y prueba, no en un párrafo de keywords.",
        ],
      },
      {
        heading: "De la duda a la consulta",
        paragraphs: [
          "Si quieres ese sistema publicado en 48 horas hábiles, con precio cerrado y garantía de plazo, el Pack Express está pensado para despachos que priorizan conversaciones cualificadas.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

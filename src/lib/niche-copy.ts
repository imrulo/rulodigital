export type NicheKey = "coaches" | "dentistas" | "abogados";

export type NicheContent = {
  key: NicheKey;
  path: string;
  title: string;
  description: string;
  h1: string;
  sub: string;
  bullets: string[];
  faq: { question: string; answer: string }[];
  waMessage: string;
  breadcrumbLabel: string;
};

export const nicheCoaches: NicheContent = {
  key: "coaches",
  path: "/para-coaches",
  breadcrumbLabel: "Para coaches",
  title: "Landing para coaches en 48h | Captación y agenda — 397 €",
  description:
    "Landing de conversión para coaches: oferta clara, WhatsApp/reservas y SEO. Pack Express 397 €, entrega en 48h. Plazas limitadas.",
  h1: "Landing para coaches que llenan agenda (sin web eterna)",
  sub:
    "Tu cliente no compra “transformación abstracta”: compra un resultado concreto, un proceso claro y un siguiente paso fácil. Yo lo traduzco a una página que pide sesión o conversación directa.",
  waMessage: "Hola Rulo, soy coach y quiero mi landing en 48h",
  bullets: [
    "Mensaje de valor por nicho (1:1, corporativo, salud…) con un camino claro hacia el contacto.",
    "Prueba social creíble: casos, métricas y testimonios alineados con tu método.",
    "SEO local + páginas de servicio para captar búsquedas de intención alta.",
    "Si quieres agenda en línea en tu web, la integramos (por ejemplo Calendly) cuando encaje con tu flujo.",
  ],
  faq: [
    {
      question: "¿Sirve si vendo paquetes de sesiones?",
      answer:
        "Sí: estructuramos una oferta principal, FAQs que quitan objeciones y un flujo hacia contacto o reserva. Si más adelante quieres checkout, lo planificamos sin bloquear el lanzamiento.",
    },
    {
      question: "¿Qué necesito entregarte?",
      answer:
        "Tu propuesta, público ideal, testimonios (aunque sean breves), fotos y links actuales. Con eso armamos una landing que vende con claridad.",
    },
    {
      question: "¿Cómo seguimos si me interesa?",
      answer:
        "Escríbeme por WhatsApp con contexto (qué vendes y ciudad) o deja tus datos en el formulario de contacto. Te respondo con el siguiente paso concreto.",
    },
  ],
};

export const nicheDentistas: NicheContent = {
  key: "dentistas",
  path: "/para-dentistas",
  breadcrumbLabel: "Para dentistas",
  title: "Landing para dentistas y clínicas | Citas en 48h — 397 €",
  description:
    "Landing para clínicas dentales orientada a citas: servicios claros, urgencias, confianza y WhatsApp. Pack Express 397 € en 48h.",
  h1: "Landing para dentistas que convierte visitas en citas",
  sub:
    "La gente busca “dentista + ciudad” y decide en segundos. Necesita servicios entendibles, prueba de confianza y un botón claro: llamar o escribir.",
  waMessage: "Hola Rulo, tengo clínica dental y quiero mi landing en 48h",
  bullets: [
    "Jerarquía de servicios (implantes, ortodoncia, estética, urgencias…) sin pánicos clínicos.",
    "Bloques de confianza: equipo, clínica, normas y tiempos de respuesta.",
    "CTA principal al contacto y microcopy que reduce miedo y dudas.",
    "Base SEO local para aparecer cuando alguien necesita solución ya. Agenda en línea opcional si tu clínica la usa.",
  ],
  faq: [
    {
      question: "¿Puedo destacar urgencias dentales?",
      answer:
        "Sí: lo ubicamos como entrada rápida con mensaje claro y CTA visible, sin saturar al paciente con tecnicismos.",
    },
    {
      question: "¿Trabajáis con revisiones de Google / reseñas?",
      answer:
        "Integramos reseñas reales y enlaces a tu ficha si aportan confianza. Lo importante es coherencia: lo que prometes arriba se cumple en la clínica.",
    },
    {
      question: "¿Cómo seguimos si me interesa?",
      answer:
        "Escríbeme por WhatsApp con tu ciudad y servicios clave, o usa el formulario de contacto. Te digo encaje y siguiente paso sin perder tiempo.",
    },
  ],
};

export const nicheAbogados: NicheContent = {
  key: "abogados",
  path: "/para-abogados",
  breadcrumbLabel: "Para abogados",
  title: "Landing para abogados | Consultas cualificadas en 48h — 397 €",
  description:
    "Landing de alta conversión para despachos: especialidad clara, confidencialidad y solicitud de consulta. Pack Express 397 €.",
  h1: "Landing para abogados que filtra curiosos y atrae clientes",
  sub:
    "Tu página debe decir qué problema resuelves, para quién y cómo dar el primer paso. Sin párrafos interminables: autoridad + claridad + CTA a consulta.",
  waMessage: "Hola Rulo, soy abogado y quiero mi landing en 48h",
  bullets: [
    "Especialidad visible (laboral, familia, penal…) con lenguaje comprensible.",
    "Proceso y tiempos orientativos para reducir fricción y miedo a “factura sorpresa”.",
    "Formulario corto o contacto directo para cualificar sin ahogar al usuario.",
    "SEO local alineado con cómo busca la gente en tu ciudad. Agenda en línea opcional si tu despacho la usa.",
  ],
  faq: [
    {
      question: "¿Cumple con comunicación responsable del colegio?",
      answer:
        "El copy lo adaptamos a tu criterio profesional: claims medidos, disclaimers donde toque y CTAs a consulta (no promesas mágicas).",
    },
    {
      question: "¿Qué pasa si tengo varias áreas?",
      answer:
        "Elegimos una entrada principal (la que más te interesa vender) y dejamos el resto como rutas secundarias claras, sin competir en el hero.",
    },
    {
      question: "¿Cómo seguimos si me interesa?",
      answer:
        "Escríbeme por WhatsApp con tu especialidad y ciudad, o deja tus datos en el formulario. Te respondo con propuesta de alcance y timing.",
    },
  ],
};

export const allNiches = [nicheCoaches, nicheDentistas, nicheAbogados] as const;

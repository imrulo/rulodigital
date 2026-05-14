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
};

export const nicheCoaches: NicheContent = {
  key: "coaches",
  path: "/para-coaches",
  title: "Landing para coaches — captación y reservas",
  description:
    "Landing de conversión para coaches: propuesta clara, reservas y seguimiento sin humo. Lanzamiento 397 € (plazas limitadas).",
  h1: "Landing para coaches que llenan agenda (sin web eterna)",
  sub:
    "Tu cliente no compra “transformación abstracta”: compra un resultado concreto, un proceso claro y un siguiente paso fácil. Yo lo traduzco a una página que pide sesión o intro call.",
  bullets: [
    "Mensaje de valor por nicho (1:1, corporativo, salud…) con CTA único hacia reserva.",
    "Prueba social creíble: casos, métricas y testimonios alineados con tu método.",
    "SEO local + páginas de servicio para captar búsquedas de intención alta.",
    "Integración con Calendly (o tu herramienta) para que el lead reserve sin fricción.",
  ],
  faq: [
    {
      question: "¿Sirve si vendo paquetes de sesiones?",
      answer:
        "Sí: estructuramos una oferta principal, FAQs que quitan objeciones y un flujo hacia reserva o contacto. Si necesitas checkout más adelante, lo planificamos sin bloquear el lanzamiento.",
    },
    {
      question: "¿Qué necesito entregarte?",
      answer:
        "Tu propuesta, público ideal, testimonios (aunque sean breves), fotos y links actuales. Con eso armamos una landing que vende con claridad.",
    },
    {
      question: "¿Cómo reservo contigo?",
      answer:
        "Reserva en Calendly desde la web. Si prefieres chat directo, usa el botón flotante de WhatsApp con el mensaje predefinido.",
    },
  ],
};

export const nicheDentistas: NicheContent = {
  key: "dentistas",
  path: "/para-dentistas",
  title: "Landing para clínicas dentales — citas y confianza",
  description:
    "Landing orientada a conversión para dentistas: servicios claros, urgencias, confianza y reserva de cita. Lanzamiento 397 € (plazas limitadas).",
  h1: "Landing para dentistas que convierte visitas en citas",
  sub:
    "La gente busca “dentista + ciudad” y decide en segundos. Necesita servicios entendibles, prueba de confianza y un botón claro: llamar o reservar cita.",
  bullets: [
    "Jerarquía de servicios (implantes, ortodoncia, estética, urgencias…) sin pánicos clínicos.",
    "Bloques de confianza: equipo, clínica, normas y tiempos de respuesta.",
    "CTA principal a reserva o teléfono + microcopy que reduce miedo y dudas.",
    "Base SEO local para aparecer cuando alguien necesita solución ya.",
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
      question: "¿Cómo reservo contigo?",
      answer:
        "Reserva en Calendly desde la web. Si prefieres chat directo, usa el botón flotante de WhatsApp con el mensaje predefinido.",
    },
  ],
};

export const nicheAbogados: NicheContent = {
  key: "abogados",
  path: "/para-abogados",
  title: "Landing para despachos — consultas cualificadas",
  description:
    "Landing de alta conversión para abogados: especialidad clara, confidencialidad y solicitud de consulta. Lanzamiento 397 € (plazas limitadas).",
  h1: "Landing para abogados que filtra curiosos y atrae clientes",
  sub:
    "Tu página debe decir qué problema resuelves, para quién y cómo dar el primer paso. Sin párrafos interminables: autoridad + claridad + CTA a consulta.",
  bullets: [
    "Especialidad visible (laboral, familia, penal…) con lenguaje comprensible.",
    "Proceso y tiempos orientativos para reducir fricción y miedo a “factura sorpresa”.",
    "Formulario corto o reserva para cualificar sin ahogar al usuario.",
    "SEO local alineado con cómo busca la gente en tu ciudad.",
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
      question: "¿Cómo reservo contigo?",
      answer:
        "Reserva en Calendly desde la web. Si prefieres chat directo, usa el botón flotante de WhatsApp con el mensaje predefinido.",
    },
  ],
};

import { FaqAccordion } from "@/components/home/faq-accordion";
import type { FaqItem } from "@/lib/jsonld";
import { faqJsonLd } from "@/lib/jsonld";

export function FaqSection({ items }: { items: FaqItem[] }) {
  const json = faqJsonLd(items);

  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="faq-heading" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          FAQ
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Respuestas directas. Si no está aquí, reserva en Calendly o escribe al email de contacto.
        </p>
        <div className="mt-8">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}

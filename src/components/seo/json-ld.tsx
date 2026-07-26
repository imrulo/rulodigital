type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** JSON-LD seguro para RSC (sin dependencias de next-seo). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

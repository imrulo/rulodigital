import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";

export async function DifferentiatorSection() {
  const t = await getTranslations("Differentiator");
  const points = t.raw("points") as string[];

  return (
    <section className="border-b border-border/80 bg-ink py-16 text-cream sm:py-20">
      <div className="section-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea-soft">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {t("body")}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="border-l border-sea-soft/70 pl-4 text-sm leading-relaxed text-cream/75 sm:text-base"
              >
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

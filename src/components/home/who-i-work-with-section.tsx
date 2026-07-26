import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";

export async function WhoIWorkWithSection() {
  const t = await getTranslations("Audience");
  const pains = t.raw("pains") as string[];
  const fits = t.raw("fits") as string[];
  const examples = t.raw("examples") as string[];

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight text-navy sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-heading text-2xl text-navy">{t("painTitle")}</h3>
            <ul className="mt-5 space-y-4">
              {pains.map((pain) => (
                <li
                  key={pain}
                  className="border-l-2 border-sea pl-4 text-base leading-relaxed text-muted-foreground"
                >
                  {pain}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-heading text-2xl text-navy">{t("fitsTitle")}</h3>
            <ul className="mt-5 space-y-3">
              {fits.map((fit) => (
                <li
                  key={fit}
                  className="border-b border-border pb-3 text-sm font-medium text-navy"
                >
                  {fit}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-sea">
              {t("examplesTitle")}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {examples.map((example) => (
                <li key={example} className="text-sm text-muted-foreground">
                  {example}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

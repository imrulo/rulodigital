import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";

export async function FitFilterSection() {
  const t = await getTranslations("FitFilter");
  const good = t.raw("good") as string[];
  const bad = t.raw("bad") as string[];

  return (
    <section className="bg-stone py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight text-navy sm:text-5xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-heading text-2xl text-navy">{t("goodTitle")}</h3>
            <ul className="mt-5 space-y-4">
              {good.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-sea pl-4 text-base leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="font-heading text-2xl text-navy">{t("badTitle")}</h3>
            <ul className="mt-5 space-y-4">
              {bad.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-border pl-4 text-base leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 max-w-3xl border-t border-border pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea">
              {t("nextStepTitle")}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("nextStep")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

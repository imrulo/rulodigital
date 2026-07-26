import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";

export async function HowIWorkSection() {
  const t = await getTranslations("Process");
  const steps = t.raw("steps") as Array<{ title: string; text: string }>;

  return (
    <section id="how" className="scroll-mt-24 border-t border-border/80 bg-stone py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
        </Reveal>

        <ol className="mt-10 space-y-0 border-t border-border">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <li className="grid gap-3 border-b border-border py-6 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sea">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-navy sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

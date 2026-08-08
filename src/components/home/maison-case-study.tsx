import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import type { AppLocale } from "@/i18n/routing";
import { maisonImages } from "@/lib/site";
import { WhatsAppLink } from "@/components/conversion/whatsapp-link";

type MaisonCaseStudyProps = {
  locale: AppLocale;
};

export async function MaisonCaseStudy({ locale }: MaisonCaseStudyProps) {
  const t = await getTranslations("Maison");
  const story = t.raw("story") as string[];
  const points = t.raw("points") as Array<{ label: string; text: string }>;
  const proof = t.raw("proof") as string[];

  return (
    <section id="maison" className="scroll-mt-24 bg-navy py-20 text-cream sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea-soft">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 max-w-4xl font-heading text-4xl tracking-tight sm:text-5xl md:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/85">
            {t("lead")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="relative md:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-navy-soft">
              <Image
                src={maisonImages.primary}
                alt="Maison Soleil, Seychelles"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.06} className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-navy-soft md:h-full md:min-h-[22rem] md:aspect-auto">
              <Image
                src={maisonImages.suite}
                alt="Maison Soleil garden suite terrace"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-cream/85 sm:text-lg">
              {story.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-t border-cream/20 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea-soft">
                {t("shiftTitle")}
              </p>
              <p className="mt-4 font-heading text-2xl leading-snug text-cream sm:text-3xl">
                {t("shift")}
              </p>
              <div className="mt-8 space-y-5">
                {points.map((point) => (
                  <div key={point.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea-soft">
                      {point.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
              <Button asChild variant="accent" size="lg" className="mt-8">
                <WhatsAppLink locale={locale} intent="maison">
                  {t("cta")}
                </WhatsAppLink>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea-soft">
            {t("proofTitle")}
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {proof.map((item) => (
              <li
                key={item}
                className="border border-cream/15 bg-navy-soft/60 px-5 py-4 text-sm leading-relaxed text-cream/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

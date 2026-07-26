"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border/80 bg-cream/70 p-1 text-xs font-semibold tracking-wide",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((item) => {
        const active = item === locale;
        return (
          <button
            key={item}
            type="button"
            onClick={() => router.replace(pathname, { locale: item })}
            className={cn(
              "rounded-full px-2.5 py-1 uppercase transition-colors",
              active
                ? "bg-navy text-cream"
                : "text-muted-foreground hover:text-navy",
            )}
            aria-pressed={active}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

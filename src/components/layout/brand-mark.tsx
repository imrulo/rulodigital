import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
  tone?: "light" | "dark";
};

export function BrandMark({
  className,
  showWordmark = true,
  tone = "light",
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${site.brand}${site.eth}`}
    >
      <span className="relative h-8 w-[7.5rem] shrink-0 sm:h-9 sm:w-36">
        <Image
          src={site.logoUrl}
          alt=""
          fill
          priority
          sizes="144px"
          className={cn(
            "object-contain object-left",
            tone === "dark" && "brightness-0 invert opacity-95",
          )}
        />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "hidden font-heading text-[1.35rem] leading-none tracking-[-0.04em] sm:inline",
            tone === "dark" ? "text-cream" : "text-navy",
          )}
        >
          {site.brand}
          <span className="text-[0.72em] font-normal text-gold transition-colors group-hover:text-gold-soft">
            {site.eth}
          </span>
        </span>
      ) : null}
    </Link>
  );
}

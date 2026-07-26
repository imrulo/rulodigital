import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
  /** Dark footers: light chip so the Cloudinary logo stays visible. */
  onDark?: boolean;
};

export function BrandMark({
  className,
  showWordmark = true,
  onDark = false,
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${site.brand}${site.eth}`}
    >
      <span
        className={cn(
          onDark &&
            "rounded-xl bg-cream px-2.5 py-1.5 ring-1 ring-white/10",
        )}
      >
        <span className="relative block h-8 w-[7.5rem] sm:h-9 sm:w-36">
          <Image
            src={site.logoUrl}
            alt=""
            fill
            priority={!onDark}
            sizes="160px"
            className="object-contain object-left"
          />
        </span>
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "hidden font-heading text-[1.35rem] leading-none tracking-[-0.04em] sm:inline",
            onDark ? "text-cream" : "text-navy",
          )}
        >
          {site.brand}
          <span className="text-[0.72em] font-normal text-sea transition-colors group-hover:text-sea-soft">
            {site.eth}
          </span>
        </span>
      ) : null}
    </Link>
  );
}

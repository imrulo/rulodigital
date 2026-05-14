import Link from "next/link";
import type { ReactNode } from "react";

const mint = "#00D68F";
const ink = "#0A0A0A";

type LegalPageShellProps = {
  title: string;
  updated?: string;
  children: ReactNode;
};

/**
 * Marco premium minimalista para páginas legales (fondo #0A0A0A, acentos #00D68F).
 * Sustituye el HTML del cuerpo en `src/legal/bodies/*.ts` cuando tengas el texto definitivo.
 */
export function LegalPageShell({ title, updated, children }: LegalPageShellProps) {
  return (
    <div className="min-h-dvh" style={{ backgroundColor: ink, color: "#fafafa" }}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <Link
          href="/"
          className="text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: mint }}
        >
          ← Volver al inicio
        </Link>
        <h1 className="mt-8 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
        {updated ? (
          <p className="mt-3 text-sm" style={{ color: "#a3a3a3" }}>
            Última actualización: {updated}
          </p>
        ) : null}
        <div
          className="legal-prose mt-12 space-y-6 text-sm leading-relaxed sm:text-base"
          style={{ color: "#d4d4d4" }}
        >
          {children}
        </div>
      </div>
      <style>{`
        .legal-prose h2 {
          font-family: var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .legal-prose h2:first-child { margin-top: 0; }
        .legal-prose p { margin-bottom: 0.75rem; }
        .legal-prose ul { list-style: disc; padding-left: 1.25rem; margin: 0.5rem 0 1rem; }
        .legal-prose li { margin-bottom: 0.35rem; }
        .legal-prose a { color: ${mint}; text-decoration: underline; text-underline-offset: 3px; }
        .legal-prose a:hover { opacity: 0.9; }
        .legal-prose strong { color: #ffffff; font-weight: 600; }
      `}</style>
    </div>
  );
}

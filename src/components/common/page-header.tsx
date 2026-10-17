import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

// Shared page heading. Optional children provide actions such as Sign out.
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-6 rounded-xl border border-gold/20 bg-gradient-to-br from-burgundy to-wine px-6 py-7 text-ivory shadow-lift md:px-10 md:py-9">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.28em] text-gold-soft uppercase">{eyebrow}</p>
        <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">{title}</h1>
        <span className="mt-4 block h-[2px] w-14 rounded-full bg-gold" aria-hidden="true" />
        <p className="mt-4 text-sm leading-relaxed text-ivory/80">{description}</p>
      </div>
      {children}
    </header>
  );
}

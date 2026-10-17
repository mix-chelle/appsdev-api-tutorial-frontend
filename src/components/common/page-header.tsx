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
    <header className="relative mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-5 overflow-hidden rounded-xl border border-gold/25 bg-gradient-to-br from-burgundy to-wine px-6 py-6 text-ivory shadow-lift before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gold/40 before:content-[''] md:px-10 md:py-8">
      <div className="min-w-0 md:border-r md:border-gold/20 md:pr-8">
        {/* Current section sits on a notched ribbon label. */}
        <p className="inline-flex items-center bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.1em] text-wine uppercase [clip-path:polygon(0_0,100%_0,calc(100%_-_8px)_50%,100%_100%,0_100%,8px_50%)]">{eyebrow}</p>
        <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">{title}</h1>
        <span className="mt-4 block h-[2px] w-14 rounded-full bg-gold" aria-hidden="true" />
        <p className="mt-4 text-sm leading-relaxed text-ivory/80">{description}</p>
      </div>
      {children}
    </header>
  );
}

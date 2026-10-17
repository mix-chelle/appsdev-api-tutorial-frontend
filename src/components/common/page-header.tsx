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
    <header className="mb-8 flex flex-wrap items-center justify-between gap-6 rounded-xl bg-burgundy p-6 text-ivory md:p-8">
      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        <span className="mt-3 block h-px w-12 bg-gold-soft" aria-hidden="true" />
        <p className="mt-3 text-sm text-ivory/75">{description}</p>
      </div>
      {children}
    </header>
  );
}

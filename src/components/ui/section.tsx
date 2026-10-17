import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export function Section({ children }: SectionProps) {
  // Shared page width and responsive padding keep every screen aligned.
  return (
    <section className="mx-auto max-w-7xl animate-fade-in px-4 py-8 md:px-6 md:py-10 lg:px-8">
      {children}
    </section>
  );
}

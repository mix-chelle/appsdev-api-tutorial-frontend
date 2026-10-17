type AuthFormHeaderProps = {
  title: string;
  description: string;
};

// Reuse the same heading style while each auth page supplies its own text.
export function AuthFormHeader({ title, description }: AuthFormHeaderProps) {
  return (
    <header>
      <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {description}
      </p>
    </header>
  );
}

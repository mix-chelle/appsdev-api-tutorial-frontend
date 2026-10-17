// Shared branding for the login and signup pages.
export function AuthHeader() {
  return (
    <header className="mb-8 text-center">
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-burgundy uppercase">Your kitchen companion</p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">Recipe Book</h1>
      <p className="mt-3 text-sm text-muted">Keep your favorite meals in one place.</p>
    </header>
  );
}

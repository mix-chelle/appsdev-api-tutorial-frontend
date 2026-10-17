// Shared branding for the login and signup pages.
export function AuthHeader() {
  return (
    <header className="mb-6">
      <p className="text-[11px] font-semibold tracking-[0.2em] text-burgundy uppercase">Your kitchen companion</p>
      <h1 className="mt-2 text-xl font-semibold tracking-tight text-ink">Recipe Book</h1>
      <p className="mt-1 text-sm text-muted">Keep your favorite meals in one place.</p>
    </header>
  );
}

export function WorkingOnNow() {
  return (
    <div className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="pulse-dot" />
        <span className="meta-label">ACTIVE MANDATE</span>
      </div>
      <p className="font-display text-3xl italic leading-tight text-[var(--text-primary)] md:text-5xl">
        Building WeLikeSports: social betting rails where the pool wins and the house does not.
      </p>
      <p className="mt-4 max-w-3xl text-sm text-[var(--text-muted)]">
        On-chain parimutuel mechanics, composable incentives, and a product surface designed for people
        who want skin in the game, not extractive middlemen.
      </p>
      <a
        href="https://welikesports.com"
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block text-sm text-[var(--accent)] underline underline-offset-4"
      >
        Visit welikesports.com →
      </a>
    </div>
  );
}

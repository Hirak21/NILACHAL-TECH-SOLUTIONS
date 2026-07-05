import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-gold)]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--fg)]">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-[var(--muted)]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}

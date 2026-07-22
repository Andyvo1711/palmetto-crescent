import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-sunset">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-marsh-deep">
        This page washed out to sea.
      </h1>
      <p className="mt-3 text-ink/60">
        We couldn&apos;t find what you were looking for. Try heading back to the front page.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm border border-marsh px-5 py-2.5 font-mono text-sm uppercase tracking-wide text-marsh transition hover:bg-marsh hover:text-sand"
      >
        Back to Home
      </Link>
    </div>
  );
}

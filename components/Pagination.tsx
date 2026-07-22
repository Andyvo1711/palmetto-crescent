import Link from 'next/link';

export default function Pagination({
  basePath,
  currentPage,
  totalPages,
}: {
  basePath: string;
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-14 flex items-center justify-center gap-2 font-mono text-sm"
      aria-label="Pagination"
    >
      <Link
        href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : '#'}
        aria-disabled={currentPage === 1}
        className={`rounded-sm border px-3 py-1.5 transition ${
          currentPage === 1
            ? 'pointer-events-none border-ink/10 text-ink/30'
            : 'border-marsh/30 text-marsh hover:bg-marsh hover:text-sand'
        }`}
      >
        &larr; Prev
      </Link>

      {pages.map((p) => (
        <Link
          key={p}
          href={`${basePath}?page=${p}`}
          className={`rounded-sm border px-3 py-1.5 transition ${
            p === currentPage
              ? 'border-sunset bg-sunset text-sand'
              : 'border-marsh/30 text-marsh hover:bg-marsh hover:text-sand'
          }`}
        >
          {p}
        </Link>
      ))}

      <Link
        href={currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : '#'}
        aria-disabled={currentPage === totalPages}
        className={`rounded-sm border px-3 py-1.5 transition ${
          currentPage === totalPages
            ? 'pointer-events-none border-ink/10 text-ink/30'
            : 'border-marsh/30 text-marsh hover:bg-marsh hover:text-sand'
        }`}
      >
        Next &rarr;
      </Link>
    </nav>
  );
}

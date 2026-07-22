import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
import CrescentMark from './CrescentMark';

export default function Header() {
  return (
    <header className="bg-marsh-deep text-sand">
      <div className="border-b border-sweetgrass/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-3">
            <CrescentMark className="h-9 w-9 text-sweetgrass" />
            <div>
              <span className="block font-display text-2xl font-semibold tracking-tight text-sand">
                Palmetto &amp; Crescent
              </span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-tidewater">
                South Carolina, Daily
              </span>
            </div>
          </Link>
        </div>
      </div>
      <nav className="mx-auto max-w-6xl px-5">
        <ul className="flex flex-wrap gap-x-7 gap-y-2 py-3 font-mono text-[13px] uppercase tracking-wide">
          {CATEGORIES.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/category/${cat.slug}`}
                className="text-sand/85 transition hover:text-sweetgrass"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

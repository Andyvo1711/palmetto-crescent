import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';
import CrescentMark from './CrescentMark';

export default function Footer() {
  return (
    <footer className="mt-20 bg-marsh-deep text-sand/80">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <CrescentMark className="h-6 w-6 text-sweetgrass" />
              <span className="font-display text-lg font-semibold text-sand">
                Palmetto &amp; Crescent
              </span>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-sand/60">
              Independent coverage of South Carolina &mdash; from the Lowcountry marshes
              to the Upstate foothills.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-tidewater">
              Sections
            </h3>
            <ul className="mt-3 space-y-2 font-body text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sand/80 transition hover:text-sweetgrass"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-sand/10 pt-6 font-mono text-xs text-sand/50">
          &copy; 2026 Palmetto &amp; Crescent. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { PostMeta } from '@/lib/posts';
import { CategoryMeta } from '@/lib/categories';
import FeaturedTile from './FeaturedTile';
import SideListItem from './SideListItem';

export default function CategoryBlock({
  category,
  featured,
  others,
}: {
  category: CategoryMeta;
  featured: PostMeta;
  others: PostMeta[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="flex items-baseline justify-between border-b border-marsh/20 pb-3">
        <h2 className="font-display text-2xl font-semibold text-marsh-deep sm:text-3xl">
          {category.name}
        </h2>
        <Link
          href={`/category/${category.slug}`}
          className="font-mono text-xs uppercase tracking-wide text-sunset transition hover:text-sunset-dark"
        >
          View all &rarr;
        </Link>
      </div>
      <p className="mt-2 max-w-2xl font-body text-sm text-ink/60">{category.tagline}</p>

      <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <FeaturedTile post={featured} />
        </div>
        <div className="flex flex-col justify-between gap-5 lg:col-span-5">
          {others.map((post) => (
            <SideListItem key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

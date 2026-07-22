import { notFound } from 'next/navigation';
import { CATEGORIES, getCategoryMeta } from '@/lib/categories';
import { getPostsByCategory } from '@/lib/posts';
import ArticleGridCard from '@/components/ArticleGridCard';
import Pagination from '@/components/Pagination';

const PAGE_SIZE = 9;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = getCategoryMeta(params.slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);
  const currentPage = Math.max(1, Number(searchParams.page) || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pagePosts = posts.slice(start, start + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <header className="max-w-2xl border-b border-marsh/20 pb-6">
        <h1 className="font-display text-3xl font-semibold text-marsh-deep sm:text-4xl">
          {category.name}
        </h1>
        <p className="mt-2 font-body text-ink/60">{category.tagline}</p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {pagePosts.map((post) => (
          <ArticleGridCard key={post.slug} post={post} />
        ))}
      </div>

      <Pagination
        basePath={`/category/${category.slug}`}
        currentPage={safePage}
        totalPages={totalPages}
      />
    </div>
  );
}

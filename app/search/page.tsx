import type { Metadata } from 'next';
import { searchPosts } from '@/lib/posts';
import ArticleGridCard from '@/components/ArticleGridCard';

export const metadata: Metadata = {
  title: 'Search',
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const q = searchParams.q;
  const query = (Array.isArray(q) ? q[0] : q)?.trim() ?? '';
  const results = query ? searchPosts(query) : [];

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <header className="max-w-2xl border-b border-marsh/20 pb-6">
        <h1 className="font-display text-3xl font-semibold text-marsh-deep sm:text-4xl">
          {query ? `Results for “${query}”` : 'Search'}
        </h1>
        <p className="mt-2 font-body text-ink/60">
          {query
            ? `${results.length} ${results.length === 1 ? 'article' : 'articles'} found.`
            : 'Enter a keyword above to search all articles.'}
        </p>
      </header>

      {query && results.length === 0 ? (
        <p className="mt-10 font-body text-ink/60">
          No articles matched your search. Try a different keyword.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((post) => (
            <ArticleGridCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

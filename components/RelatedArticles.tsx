import { PostMeta } from '@/lib/posts';
import ArticleGridCard from './ArticleGridCard';

export default function RelatedArticles({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto mt-16 max-w-3xl border-t border-marsh/20 pt-10">
      <h2 className="font-display text-xl font-semibold text-marsh-deep">
        More from this section
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
        {posts.map((post) => (
          <ArticleGridCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

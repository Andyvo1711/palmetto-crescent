import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts';
import { getCategoryMeta } from '@/lib/categories';
import { formatDate } from '@/lib/formatDate';
import RelatedArticles from '@/components/RelatedArticles';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const category = getCategoryMeta(post.category);
  const related = getRelatedPosts(post, 3);

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      {category && (
        <Link
          href={`/category/${category.slug}`}
          className="font-mono text-xs uppercase tracking-[0.18em] text-sunset"
        >
          {category.name}
        </Link>
      )}
      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-marsh-deep sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 font-mono text-sm text-ink/50">{formatDate(post.date)}</p>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm bg-marsh/10">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          priority
          className="object-cover"
        />
      </div>
      <p className="mt-2 font-mono text-xs text-ink/40">{post.imageCredit}</p>

      <div
        className="prose-article mt-8 max-w-none font-body text-[17px] text-ink"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <RelatedArticles posts={related} />
    </article>
  );
}

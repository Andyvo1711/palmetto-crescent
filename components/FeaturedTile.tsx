import Image from 'next/image';
import Link from 'next/link';
import { PostMeta } from '@/lib/posts';
import { getCategoryMeta } from '@/lib/categories';

export default function FeaturedTile({
  post,
  size = 'md',
}: {
  post: PostMeta;
  size?: 'lg' | 'md';
}) {
  return (
    <Link
      href={`/article/${post.slug}`}
      className="group block h-full overflow-hidden rounded-sm"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-marsh/10">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sweetgrass">
            {getCategoryMeta(post.category)?.name ?? post.category}
          </span>
          <h3
            className={`mt-1.5 font-display font-semibold leading-tight text-sand ${
              size === 'lg' ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {post.title}
          </h3>
          <p className="mt-2 hidden max-w-lg font-body text-sm text-sand/80 sm:block">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}

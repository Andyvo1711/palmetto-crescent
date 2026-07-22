import Image from 'next/image';
import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

export default function ArticleGridCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/article/${post.slug}`} className="group block">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-marsh/10">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink transition group-hover:text-sunset">
        {post.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 font-body text-sm text-ink/65">{post.excerpt}</p>
    </Link>
  );
}

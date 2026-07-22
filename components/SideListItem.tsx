import Image from 'next/image';
import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

export default function SideListItem({ post }: { post: PostMeta }) {
  return (
    <Link href={`/article/${post.slug}`} className="group flex items-center gap-3.5">
      <div className="relative aspect-[16/9] w-24 flex-none overflow-hidden rounded-sm bg-marsh/10 sm:w-28">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="120px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h4 className="font-display text-[15px] font-medium leading-snug text-ink transition group-hover:text-sunset sm:text-base">
        {post.title}
      </h4>
    </Link>
  );
}

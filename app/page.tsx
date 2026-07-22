import { CATEGORIES } from '@/lib/categories';
import { getAllPostsMeta, getFeaturedPost, PostMeta } from '@/lib/posts';
import FeaturedTile from '@/components/FeaturedTile';
import CategoryBlock from '@/components/CategoryBlock';
import CrescentDivider from '@/components/CrescentDivider';

export default function HomePage() {
  const allPosts = getAllPostsMeta();
  const hero = getFeaturedPost();

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-8 sm:pt-12">
        <FeaturedTile post={hero} size="lg" />
      </section>

      {CATEGORIES.map((category) => {
        const categoryPosts = allPosts.filter(
          (p) => p.category === category.slug && p.slug !== hero.slug
        );
        const featured =
          categoryPosts.find((p) => p.featured) ?? categoryPosts[0];
        const others = categoryPosts
          .filter((p) => p.slug !== featured.slug)
          .slice(0, 4);

        return (
          <div key={category.slug}>
            <CrescentDivider />
            <CategoryBlock category={category} featured={featured} others={others} />
          </div>
        );
      })}
    </>
  );
}

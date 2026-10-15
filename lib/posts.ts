import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { CategorySlug } from './categories';

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

export interface PostMeta {
  title: string;
  slug: string;
  excerpt: string;
  category: CategorySlug;
  date: string;
  coverImage: string;
  featured: boolean;
  imageCredit: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function readAllSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = readAllSlugs();
  const posts = slugs.map((slug) => {
    const fullPath = path.join(ARTICLES_DIR, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data as PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: CategorySlug): PostMeta[] {
  return getAllPostsMeta().filter((p) => p.category === category);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  return {
    ...(data as PostMeta),
    contentHtml,
  };
}

export function getRelatedPosts(current: PostMeta, count = 3): PostMeta[] {
  const sameCategory = getPostsByCategory(current.category).filter(
    (p) => p.slug !== current.slug
  );
  return sameCategory.slice(0, count);
}

export function searchPosts(query: string): PostMeta[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const results: { post: PostMeta; score: number }[] = [];

  for (const slug of readAllSlugs()) {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.md`), 'utf8');
    const { data, content } = matter(raw);
    const post = data as PostMeta;
    const title = (post.title ?? '').toLowerCase();
    const excerpt = (post.excerpt ?? '').toLowerCase();
    const body = content.toLowerCase();

    let score = 0;
    let matchedAll = true;
    for (const term of terms) {
      const termScore =
        (title.includes(term) ? 10 : 0) +
        (excerpt.includes(term) ? 4 : 0) +
        (body.includes(term) ? 1 : 0);
      if (termScore === 0) {
        matchedAll = false;
        break;
      }
      score += termScore;
    }
    if (matchedAll) results.push({ post, score });
  }

  results.sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1));
  return results.map((r) => r.post);
}

export function getFeaturedPost(): PostMeta {
  const all = getAllPostsMeta();
  const featured = all.find((p) => p.featured);
  return featured ?? all[0];
}

export function getAllSlugs(): string[] {
  return readAllSlugs();
}

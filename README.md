# Palmetto & Crescent — South Carolina News

A Next.js (App Router) + TypeScript news site for South Carolina, with articles
stored as Markdown files (no database/CMS).

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Markdown content via `gray-matter` + `remark`

## Design

- **Name:** *Palmetto & Crescent* — a nod to the palmetto tree and crescent moon
  on the South Carolina state flag.
- **Palette:** Marsh green, Sweetgrass gold, Sunset coral, Sand ivory, Tidewater
  blue-grey — drawn from the Lowcountry marsh, sweetgrass basket-weaving
  tradition, and coastal sunsets.
- **Type:** Fraunces (display) + IBM Plex Sans (body) + IBM Plex Mono (labels/nav).
- **Signature element:** a crescent-moon SVG divider between homepage sections.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To verify a production build:

```bash
npm run build
npm run start
```

## Content

Articles live in `content/articles/*.md`, one file per article, each with
frontmatter:

```yaml
---
title: "..."
slug: "..."          # must match the filename (without .md)
excerpt: "..."
category: "education" # education | healthcare | business-leaders | finance-economy | beauty-wellness
date: "2026-04-09"
coverImage: "https://..."
featured: false        # true marks the category's (or site's) lead story
imageCredit: "..."
---

Markdown body content here.
```

73 sample articles are included (14–15 per category). To regenerate or extend
the sample set, see `scripts/generate_articles.py` (a Python content generator
used to produce the seed data — not part of the Next.js app itself).

### A note on cover images

Cover images use [Lorem Picsum](https://picsum.photos) (seeded, so each
article gets a distinct, stable image) rather than hand-picked Unsplash/Pexels
photo IDs, since this project was built in an offline sandbox with no way to
verify live photo URLs. `coverImage` is a plain string field, so you can swap
in real Unsplash/Pexels URLs at any time — just update the frontmatter.

## Pages

- `/` — hero + five category sections in order: Education, Healthcare,
  Business Leaders, Finance & Economy, Beauty & Wellness. No dates or post
  counts are shown here.
- `/category/[slug]` — paginated article grid (9 per page). No dates or post
  counts.
- `/article/[slug]` — cover image with photo credit, title, publish date,
  category, full content, and 3 related articles.

import { MetadataRoute } from 'next';
import { guides } from '@/data/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://outward2guide.com';

  // 1. Core static page routes
  const staticPaths = [
    '',
    '/guides',
    '/database',
    '/database/weapons',
    '/database/armor',
    '/database/skills',
    '/database/crafting',
    '/database/enemies',
    '/map',
    '/tools',
    '/builds',
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  // 2. Hardcoded alternative slugs from layout/generateStaticParams
  const alternativeSlugs = [
    'everything-we-know',
    'starting-scenarios-guide',
    'combat-system-guide',
    'magic-system-explained',
    'survival-essentials',
    'best-starter-builds',
    'outward-1-vs-2',
    'pc-requirements-potato-mode',
    'co-op-guide',
    'cooking-recipes-guide',
    'alchemy-potions-guide',
    'mercenary-faction-guide',
    'historians-faction-guide',
    'humanitarian-faction-guide',
    'backpack-management-tips',
    'class-trainer-locations',
    'defeat-scenarios-guide',
    'hardcore-mode-guide',
    'dual-wielding-builds',
    'aurai-world-lore',
  ];

  // 3. Dynamic database guide slugs
  const databaseSlugs = guides.map((g) => g.slug);

  // Merge and deduplicate all slugs
  const allSlugs = Array.from(new Set([...databaseSlugs, ...alternativeSlugs]));

  const guideUrls = allSlugs.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...guideUrls];
}

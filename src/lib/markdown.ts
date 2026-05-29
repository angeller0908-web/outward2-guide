import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsDirectory = path.join(process.cwd(), 'src/content/news');
  function formatDate(value: unknown, fallback: string): string {
    if (value instanceof Date) {
      return value.toISOString().split('T')[0];
    }
    if (typeof value === 'string') {
      return value;
    }
    if (value) {
      return String(value);
    }
    return fallback;
  }



export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getAllNews(): NewsPost[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      let title = matterResult.data.title || slug;
      let excerpt = matterResult.data.excerpt || '';

      if (!matterResult.data.title) {
        const titleMatch = fileContents.match(/^#\s+(.*)/m);
        if (titleMatch) title = titleMatch[1];
      }

      if (!excerpt) {
        const plainText = matterResult.content
          .replace(/#+\s.*$/gm, '') // Remove headings
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
          .replace(/[*_~`]/g, '') // Remove bold/italic/code
          .replace(/^\s*[-*]\s/gm, '') // Remove lists
          .trim();
        excerpt = plainText.substring(0, 120).trim();
        if (plainText.length > 120) excerpt += '...';
      }

      // If no date, use file creation/modified time or a fallback
      const stat = fs.statSync(fullPath);
      const date = formatDate(matterResult.data.date, stat.mtime.toISOString().split('T')[0]);

      return {
        slug,
        title,
        date,
        excerpt,
        content: matterResult.content,
      };
    });

  return allNewsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  let title = matterResult.data.title || slug;
  if (!matterResult.data.title) {
    const titleMatch = fileContents.match(/^#\s+(.*)/m);
    if (titleMatch) title = titleMatch[1];
  }

  const stat = fs.statSync(fullPath);
  const date = formatDate(matterResult.data.date, stat.mtime.toISOString().split('T')[0]);

  return {
    slug,
    title,
    date,
    excerpt: matterResult.data.excerpt || '',
    content: matterResult.content,
  };
}

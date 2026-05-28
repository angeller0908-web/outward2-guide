import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { getNewsBySlug, getAllNews } from '@/lib/markdown';
import styles from './page.module.css';

export async function generateStaticParams() {
  const posts = getAllNews();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} - Outward 2 Guide`,
    description: post.excerpt || `Read about ${post.title}`,
  };
}

export default async function NewsPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <div className={styles.breadcrumb}>
        <Link href="/news" className={styles.backLink}>← Back to News</Link>
      </div>
      
      <article className={styles.article}>
        <header className={styles.header}>
          <time className={styles.date}>{post.date}</time>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        <div className={styles.content}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

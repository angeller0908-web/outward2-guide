import Link from 'next/link';
import { getAllNews } from '@/lib/markdown';
import styles from './page.module.css';

export const metadata = {
  title: 'News & Updates - Outward 2 Guide',
  description: 'Latest community news, beta updates, and AI-curated guides for Outward 2.',
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className="page-title">News & Updates</h1>
        <p className="page-description">Latest community news, beta updates, and AI-curated guides.</p>
      </div>

      <div className={styles.grid}>
        {news.length === 0 ? (
          <p className={styles.emptyState}>No news articles found. Add some Markdown files to src/content/news!</p>
        ) : (
          news.map((post) => (
            <Link href={`/news/${post.slug}`} key={post.slug} className={styles.card}>
              {post.image && (
                <div className={styles.cardImageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
              )}
              <div className={styles.cardContent}>
                <span className={styles.date}>{post.date}</span>
                <h2 className={styles.title}>{post.title}</h2>
                {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                <span className={styles.readMore}>Read article →</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Interactive Map | Outward 2 Guide',
  description: 'Explore the interactive map of Aurai for Outward 2. Track quests, items, dungeons, and trainers.',
};

export default function MapPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.icon}>🗺️</span>
        <h1 className={styles.title}>Interactive Map</h1>
        <p className={styles.desc}>
          We are currently charting the vast, unforgiving lands of Aurai in Outward 2. Our complete high-resolution interactive map will launch concurrently with the official game release.
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Complete point-of-interest markers (Dungeons, Cities, Camps)</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Filterable lists for loot caches, unique items, and trainers</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Interactive questline routing and step-by-step navigation</span>
          </div>
        </div>

        <Link href="/" className={styles.backBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

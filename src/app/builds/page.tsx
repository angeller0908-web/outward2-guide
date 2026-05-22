import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Build Planner | Outward 2 Guide',
  description: 'Plan your Outward 2 character build. Select skills, armor sets, weapons, and trainer combinations.',
};

export default function BuildsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.icon}>🧙‍♂️</span>
        <h1 className={styles.title}>Build Planner</h1>
        <p className={styles.desc}>
          Architect your ultimate survivor. Our interactive Outward 2 character build planner is currently in active development. Combine armor, stats, and specialized skills ahead of the launch.
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Plan your 3-class trainer combinations and see active skill combos</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Simulate your equipment weight load and active weather resistances</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Export and share your build codes directly with the community</span>
          </div>
        </div>

        <Link href="/" className={styles.backBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

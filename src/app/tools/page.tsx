import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Calculators & Tools | Outward 2 Guide',
  description: 'Survival calculators, damage metrics, and crafting aids for Outward 2.',
};

export default function ToolsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.icon}>🛠️</span>
        <h1 className={styles.title}>Survival Tools</h1>
        <p className={styles.desc}>
          Equip yourself for the journey. Our dedicated suite of survival calculators and damage trackers is undergoing final configuration.
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Damage & Resistances Calculator for advanced combat simulation</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Weight vs. Speed Penalty indexer</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureDot}>✦</span>
            <span>Enchanting recipe simulator</span>
          </div>
        </div>

        <Link href="/" className={styles.backBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

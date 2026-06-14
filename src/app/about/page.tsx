import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About | Outward 2 Guide',
  description:
    'Learn about Outward 2 Guide — a fan-made, community-driven resource offering comprehensive guides, interactive databases, a map explorer, and build planners for Outward 2 by Nine Dots Studio.',
};

const features = [
  {
    icon: '📖',
    title: 'Guides',
    description:
      'From beginner survival tips to advanced boss strategies, our guides cover every aspect of life in Aurai.',
    href: '/guides',
    linkLabel: 'Browse Guides →',
  },
  {
    icon: '⚔️',
    title: 'Database',
    description:
      'Searchable databases for weapons, armor, skills, crafting recipes, and enemy stats — all in one place.',
    href: '/database',
    linkLabel: 'Explore Database →',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>About Us</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleGlow}>Outward 2 Guide</span>
          </h1>
          <p className={styles.heroDesc}>
            A comprehensive guide and database for{' '}
            <strong>Outward 2</strong>, the open-world survival RPG by{' '}
            <strong>Nine Dots Studio</strong>. Everything you need to survive
            and thrive in the world of Aurai.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.missionCard}>
            <span className={styles.missionIcon}>🔥</span>
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionText}>
              Outward 2 throws you into a brutal, beautiful world where every
              decision matters. Our mission is to help players survive and
              thrive in Aurai with detailed guides, interactive databases,
              build planners, and community-driven content. Whether you are
              taking your first steps outside Cierzo or pushing into the most
              punishing endgame dungeons, we have got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>What We Offer</span>
            <h2 className={styles.sectionTitle}>Tools for Every Adventurer</h2>
            <p className={styles.sectionDesc}>
              From beginner walk-throughs to endgame optimization, our
              resources are designed to make your journey through Aurai as
              rewarding as possible.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
                <Link href={feature.href} className={styles.featureLink}>
                  {feature.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.disclaimer}>
            <span className={styles.disclaimerIcon}>⚠️</span>
            <h2 className={styles.disclaimerTitle}>Fan-Made Project</h2>
            <p className={styles.disclaimerText}>
              Outward 2 Guide is a <strong>fan-made, community-driven</strong>{' '}
              project and is <strong>NOT</strong> affiliated with, endorsed by,
              or connected to <strong>Nine Dots Studio</strong> or{' '}
              <strong>Deep Silver</strong> in any way. All game assets,
              trademarks, and copyrights belong to their respective owners.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactTitle}>Get in Touch</h2>
            <p className={styles.contactDesc}>
              Have a suggestion, found an error, or want to contribute?
              We would love to hear from you.
            </p>
            <a
              href="mailto:contact@outward2guide.com"
              className={styles.contactEmail}
            >
              ✉️ contact@outward2guide.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Back Link ── */}
      <div className={styles.backLinkWrapper}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact | Outward 2 Guide',
  description:
    'Get in touch with the Outward 2 Guide team for feedback, corrections, suggestions, or business inquiries.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.icon}>✉️</span>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.desc}>
          Have feedback, spotted an error in a guide, or want to suggest new
          content? We&apos;d love to hear from you. Reach out for any questions,
          corrections, suggestions, or business inquiries.
        </p>

        <div className={styles.emailSection}>
          <span className={styles.emailLabel}>Email</span>
          <a
            href="mailto:contact@outward2guide.com"
            className={styles.emailLink}
          >
            contact@outward2guide.com
          </a>
          <span className={styles.responseTime}>
            We typically respond within 48 hours.
          </span>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Content Corrections</h2>
          <p className={styles.sectionText}>
            Found inaccurate information in one of our guides? Please email us
            with the guide URL and a description of the correction. We
            appreciate the community helping us keep everything accurate and
            up-to-date.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Community</h2>
          <div className={styles.communityLinks}>
            <a href="#" className={styles.communityLink}>
              <span className={styles.communityIcon}>💬</span>
              Discord
            </a>
            <a href="#" className={styles.communityLink}>
              <span className={styles.communityIcon}>▶️</span>
              YouTube
            </a>
            <a href="#" className={styles.communityLink}>
              <span className={styles.communityIcon}>𝕏</span>
              X / Twitter
            </a>
          </div>
        </div>

        <Link href="/" className={styles.backBtn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

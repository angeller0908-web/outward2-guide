import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Outward 2 Guide',
  description:
    'Privacy Policy for Outward 2 Guide (outward2guide.com). Learn how we collect, use, and protect your information when you visit our game guide website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Back Navigation */}
        <Link href="/" className={styles.backLink}>
          <span className={styles.backArrow}>←</span>
          Back to Home
        </Link>

        {/* Page Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: May 28, 2026</p>
        </header>

        {/* Introduction */}
        <section className={styles.section}>
          <p className={styles.paragraph}>
            Welcome to Outward 2 Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website{' '}
            <a
              href="https://outward2guide.com"
              className={styles.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              outward2guide.com
            </a>{' '}
            (the &quot;Site&quot;). Please read this Privacy Policy carefully. By accessing or using
            the Site, you agree to the terms of this Privacy Policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.paragraph}>
            We do not require you to create an account or provide any personal information to use
            our Site. We do not collect your name, email address, phone number, or any other
            personally identifiable information unless you voluntarily contact us.
          </p>
          <p className={styles.paragraph}>
            However, certain information is collected automatically when you visit the Site:
          </p>
          <ul className={styles.list}>
            <li>Device type, browser type, and operating system</li>
            <li>IP address (anonymized where supported)</li>
            <li>Pages visited, time spent on pages, and navigation paths</li>
            <li>Referring website or source</li>
            <li>General geographic location (country/region level)</li>
          </ul>
        </section>

        {/* Google Analytics */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Google Analytics</h2>
          <p className={styles.paragraph}>
            We use Google Analytics (tracking ID: G-D82CDXJ7GH) to understand how visitors interact
            with our Site. Google Analytics collects data such as how often users visit the Site,
            what pages they visit, and what other sites they used prior to coming to our Site.
          </p>
          <p className={styles.paragraph}>
            Google Analytics uses cookies to collect this information. The data collected is
            aggregated and anonymized, meaning it cannot be used to identify you personally. Google
            may use the data collected to contextualize and personalize the ads of its own
            advertising network.
          </p>
          <p className={styles.paragraph}>
            You can learn more about how Google uses data by visiting{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className={styles.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            . You can opt out of Google Analytics by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className={styles.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        {/* Google AdSense & Advertising */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Google AdSense &amp; Advertising</h2>
          <p className={styles.paragraph}>
            We use (or plan to use) Google AdSense to display advertisements on our Site. Google
            AdSense uses cookies and web beacons to serve ads based on your prior visits to our Site
            and other websites on the Internet. Third-party vendors, including Google, use cookies to
            serve ads based on your browsing activity.
          </p>
          <p className={styles.paragraph}>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on
            your visit to our Site and/or other sites on the Internet. These cookies do not collect
            personally identifiable information. You may opt out of personalized advertising by
            visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              className={styles.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>{' '}
            or the{' '}
            <a
              href="https://optout.networkadvertising.org/"
              className={styles.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Network Advertising Initiative opt-out page
            </a>
            .
          </p>
        </section>

        {/* Cookies */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cookie Policy</h2>
          <p className={styles.paragraph}>
            Cookies are small text files stored on your device when you visit a website. Our Site
            uses the following types of cookies:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Analytics Cookies:</strong> Used by Google Analytics to collect anonymized
              usage data and improve our Site.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used by Google AdSense and third-party ad
              networks to serve relevant advertisements.
            </li>
            <li>
              <strong>Functional Cookies:</strong> May be used to remember your preferences, such
              as theme settings or dismissed notices.
            </li>
          </ul>
          <p className={styles.paragraph}>
            You can control or delete cookies through your browser settings. Please note that
            disabling cookies may affect the functionality of certain parts of the Site.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Links</h2>
          <p className={styles.paragraph}>
            Our Site may contain links to third-party websites, including game-related resources,
            wikis, community forums, and external tools. We are not responsible for the privacy
            practices or the content of these third-party sites. We encourage you to review the
            privacy policies of any third-party sites you visit.
          </p>
        </section>

        {/* Data Security */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Security</h2>
          <p className={styles.paragraph}>
            We take reasonable measures to help protect the information collected through our Site.
            However, no method of transmission over the Internet or method of electronic storage is
            100% secure. While we strive to use commercially acceptable means to protect your
            information, we cannot guarantee its absolute security.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Children&apos;s Privacy</h2>
          <p className={styles.paragraph}>
            Our Site is not directed to children under the age of 13. We do not knowingly collect
            personally identifiable information from children under 13. If we become aware that a
            child under 13 has provided us with personal information, we will take steps to delete
            such information. If you believe that we might have any information from or about a child
            under 13, please contact us at{' '}
            <a href="mailto:contact@outward2guide.com" className={styles.emailLink}>
              contact@outward2guide.com
            </a>
            .
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated &quot;Last updated&quot; date. We encourage you to review this
            Privacy Policy periodically to stay informed about how we are protecting your
            information.
          </p>
        </section>

        {/* Contact Us */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className={styles.paragraph}>
            <a href="mailto:contact@outward2guide.com" className={styles.emailLink}>
              contact@outward2guide.com
            </a>
          </p>
        </section>

        <hr className={styles.divider} />

        {/* Footer Note */}
        <p className={styles.footerNote}>
          This privacy policy applies solely to information collected by outward2guide.com.
          Outward 2 Guide is a fan-made resource and is not affiliated with Nine Dots Studio or
          the official Outward franchise.
        </p>
      </div>
    </div>
  );
}

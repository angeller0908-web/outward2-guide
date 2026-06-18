'use client';

import Link from 'next/link';
import styles from './page.module.css';

// Featured guides data
const featuredGuides = [
  {
    slug: 'everything-we-know',
    title: 'Outward 2: Everything We Know So Far',
    description: 'A comprehensive overview of all confirmed features, mechanics, and changes from Outward 1.',
    category: 'beginner',
    tags: ['Overview', 'Pre-Launch'],
    icon: '📋',
    readTime: 12,
    date: 'May 2026',
    tagClass: 'tagGold',
  },
  {
    slug: 'starting-scenarios-guide',
    title: 'Starting Scenarios Breakdown: Tramontane, Haboob, or Simeon\'s Bastion?',
    description: 'Detailed analysis of all three starting scenarios to help you pick the best opening for your playstyle.',
    category: 'beginner',
    tags: ['Beginner', 'Character Creation'],
    icon: '🏔️',
    readTime: 8,
    date: 'May 2026',
    tagClass: 'tagNature',
  },
  {
    slug: 'combat-system-guide',
    title: 'Combat System Deep Dive: Dodge, Block, & Combo Mastery',
    description: 'Master the responsive combat system. Learn dodge cancels, impact management, and devastating combo chains.',
    category: 'beginner',
    tags: ['Combat', 'Advanced'],
    icon: '⚔️',
    readTime: 15,
    date: 'May 2026',
    tagClass: 'tagFire',
  },
  {
    slug: 'magic-system-explained',
    title: 'Magic System Explained: Sigils, Runes & Spellcasting',
    description: 'Unlock your arcane potential. Learn how to gain mana, master sigil combinations, and discover powerful spell interactions.',
    category: 'beginner',
    tags: ['Magic', 'Builds'],
    icon: '🔮',
    readTime: 10,
    date: 'May 2026',
    tagClass: 'tagMagic',
  },
  {
    slug: 'survival-essentials',
    title: 'Survival Essentials: Food, Weather & Backpack Management',
    description: 'Stay alive in Aurai. Essential tips for managing hunger, thirst, exhaustion, and harsh weather conditions.',
    category: 'survival',
    tags: ['Survival', 'Essential'],
    icon: '🎒',
    readTime: 9,
    date: 'May 2026',
    tagClass: 'tagNature',
  },
  {
    slug: 'best-starter-builds',
    title: 'Top 5 Beginner Builds to Dominate Early Game',
    description: 'Proven build combinations for new players. Includes warrior, ranger, mage, and hybrid setups with gear recommendations.',
    category: 'builds',
    tags: ['Builds', 'Beginner'],
    icon: '🛡️',
    readTime: 14,
    date: 'May 2026',
    tagClass: 'tagIce',
  },
];

const databaseCategories = [
  { name: 'Weapons', count: '80+ Items', icon: '⚔️', iconClass: 'categoryIconWeapons', href: '/database/weapons' },
  { name: 'Armor', count: '60+ Sets', icon: '🛡️', iconClass: 'categoryIconArmor', href: '/database/armor' },
  { name: 'Skills', count: '100+ Abilities', icon: '✨', iconClass: 'categoryIconSkills', href: '/database/skills' },
  { name: 'Crafting', count: '150+ Recipes', icon: '🧪', iconClass: 'categoryIconCrafting', href: '/database/crafting' },
  { name: 'Enemies', count: '50+ Creatures', icon: '👹', iconClass: 'categoryIconEnemies', href: '/database/enemies' },
];

const features = [
  {
    icon: '🗺️',
    title: 'Interactive Map',
    description: 'Fully interactive world map with toggleable markers for NPCs, treasures, resources, bosses, and campsite locations.',
  },
  {
    icon: '⚒️',
    title: 'Build Planner',
    description: 'Plan your perfect character with our build calculator. Choose from 3 class slots, optimize gear, and share builds with the community.',
  },
  {
    icon: '📊',
    title: 'Complete Database',
    description: 'Every weapon, armor set, skill, and recipe — searchable, sortable, and filterable. All the data you need in one place.',
  },
  {
    icon: '📖',
    title: 'In-Depth Guides',
    description: 'Step-by-step walkthroughs for every quest, boss strategy, and survival challenge. Written by experienced Outward veterans.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>
            <span className={styles.heroPulse} />
            Early Access coming 2027
          </div>
          <h1 className={styles.heroTitle}>
            Your Ultimate{' '}
            <span className={styles.heroTitleGlow}>Outward 2</span>{' '}
            Companion
          </h1>
          <p className={styles.heroDesc}>
            Comprehensive guides, interactive maps, build planners, and a complete database
            for the challenging survival RPG. Prepare for Aurai — no hand-holding here.
          </p>
          <div className={styles.heroCta}>
            <Link href="/guides" className="btn btn-primary btn-lg">
              Browse Guides
            </Link>
            <Link href="/database" className="btn btn-outline btn-lg">
              Explore Database
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>80+</div>
          <div className={styles.statLabel}>Weapons</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>60+</div>
          <div className={styles.statLabel}>Armor Sets</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>100+</div>
          <div className={styles.statLabel}>Skills</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>150+</div>
          <div className={styles.statLabel}>Recipes</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>20+</div>
          <div className={styles.statLabel}>Guides</div>
        </div>
      </div>

      {/* Featured Guides Section */}
      <section className={styles.section} id="featured-guides">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                Featured <span className={styles.sectionTitleAccent}>Guides</span>
              </h2>
              <p className={styles.sectionDesc}>
                Essential reading for adventurers heading into Aurai
              </p>
            </div>
            <Link href="/guides" className={styles.sectionLink}>
              View All Guides →
            </Link>
          </div>
          <div className={styles.guidesGrid}>
            {featuredGuides.map((guide) => (
              <Link
                href={`/guides/${guide.slug}`}
                key={guide.slug}
                className={styles.guideCard}
              >
                <div className={styles.guideCardImage}>
                  <span className={styles.guideCardIcon}>{guide.icon}</span>
                </div>
                <div className={styles.guideCardBody}>
                  <div className={styles.guideCardTags}>
                    {guide.tags.map((tag) => (
                      <span key={tag} className={`tag ${guide.tagClass === 'tagFire' ? 'tag-fire' : guide.tagClass === 'tagMagic' ? 'tag-magic' : guide.tagClass === 'tagNature' ? 'tag-nature' : guide.tagClass === 'tagIce' ? 'tag-ice' : 'tag-gold'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.guideCardTitle}>{guide.title}</h3>
                  <p className={styles.guideCardDesc}>{guide.description}</p>
                  <div className={styles.guideCardMeta}>
                    <span>📅 {guide.date}</span>
                    <span>⏱ {guide.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Database Categories */}
      <section className={styles.section} id="database">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                Game <span className={styles.sectionTitleAccent}>Database</span>
              </h2>
              <p className={styles.sectionDesc}>
                Every item, skill, and recipe — searchable and sortable
              </p>
            </div>
            <Link href="/database" className={styles.sectionLink}>
              Full Database →
            </Link>
          </div>
          <div className={styles.categories}>
            {databaseCategories.map((cat) => (
              <Link
                href={cat.href}
                key={cat.name}
                className={styles.categoryCard}
              >
                <div className={`${styles.categoryIcon} ${styles[cat.iconClass]}`}>
                  {cat.icon}
                </div>
                <div>
                  <div className={styles.categoryName}>{cat.name}</div>
                  <div className={styles.categoryCount}>{cat.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section} id="features">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                Why <span className={styles.sectionTitleAccent}>Outward 2 Guide</span>?
              </h2>
              <p className={styles.sectionDesc}>
                Everything you need to survive and thrive in Aurai
              </p>
            </div>
          </div>
          <div className={styles.features}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.ctaSection} id="newsletter">
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Stay Ahead of the Pack</h2>
            <p className={styles.ctaDesc}>
              Get notified when new guides drop. Day-one walkthroughs, build updates, and hidden secrets — straight to your inbox.
            </p>
            <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.ctaInput}
                id="newsletter-email"
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn btn-fire">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

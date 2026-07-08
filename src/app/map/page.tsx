import type { Metadata } from 'next';
import Link from 'next/link';
import { regions } from '@/data/regions';
import Breadcrumb from '@/components/layout/Breadcrumb';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'World Map & Regions | Outward 2 Guide',
  description:
    "Explore the four regions of Aurai in Outward 2: Tramontane, Haboob, Simeon's Bastion, and the Gates of Catharsis. HD regional maps, points of interest, resources, and connected zones.",
  openGraph: {
    title: 'World Map & Regions | Outward 2 Guide',
    description:
      "Interactive-style regional maps for Outward 2. Click any region to view HD map, POIs, resources, and travel connections.",
    url: 'https://outward2guide.com/map',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Map & Regions | Outward 2 Guide',
    description:
      "Explore Aurai's regions in Outward 2 with HD maps, points of interest, and resource guides.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://outward2guide.com/map' },
};

const mapResources = [
  {
    icon: '📍',
    name: 'All Points of Interest',
    desc: 'Cities, dungeons, trainers, camps, and landmarks per region.',
    href: '/map#regions',
  },
  {
    icon: '🎒',
    name: 'Resource Farming',
    desc: 'Key materials, ores, herbs, and creature drops by biome.',
    href: '/map#regions',
  },
  {
    icon: '🧭',
    name: 'Interactive Map (Soon)',
    desc: 'Toggleable markers powered by live in-game data.',
    href: '/map#interactive-map',
  },
];

export default function MapPage() {
  // JSON-LD structured data for the map / collection page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Outward 2 World Map & Regions',
    description:
      "Explore the four regions of Aurai in Outward 2: Tramontane, Haboob, Simeon's Bastion, and the Gates of Catharsis.",
    url: 'https://outward2guide.com/map',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: regions.map((region, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: region.name,
        url: `https://outward2guide.com/map/${region.id}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.page}>
        <Breadcrumb
          items={[{ label: 'World Map', href: '/map' }]}
        />

        {/* Header */}
        <header className={styles.header} id="regions">
          <span className={styles.headerIcon}>🗺️</span>
          <h1 className={styles.title}>
            Regions of <span className={styles.titleAccent}>Aurai</span>
          </h1>
          <p className={styles.subtitle}>
            Outward 2 features four distinct regions, each with unique biomes, cities, and
            dangers. Click any region card below to open its detailed map page with HD artwork,
            points of interest, resources, and travel connections.
          </p>
          <span className={styles.headerMeta}>
            🧭 {regions.length} regions • updated for Early Access launch
          </span>
        </header>

        {/* Region Cards Grid */}
        <div className={styles.regionGrid} role="list">
          {regions.map((region) => (
            <Link
              key={region.id}
              href={`/map/${region.id}`}
              className={styles.regionCard}
              role="listitem"
              aria-label={`Explore ${region.name}: ${region.subname}`}
            >
              <div className={styles.regionImageWrap}>
                <img
                  src={region.image}
                  alt={`${region.name} — ${region.subname}`}
                  className={styles.regionImage}
                  loading="lazy"
                />
                <div className={styles.regionImageOverlay} />
              </div>
              <div className={styles.regionBody}>
                <span className={`${styles.regionBadge} ${styles[region.badgeClass]}`}>
                  {region.badgeIcon} {region.badgeLabel}
                </span>
                <h2 className={styles.regionName}>{region.name}</h2>
                <p className={styles.regionSubname}>{region.subname}</p>
                <p className={styles.regionDesc}>{region.description}</p>
                <div className={styles.regionTags}>
                  {region.tags.map((tag) => (
                    <span key={tag.label} className={styles.regionTag}>
                      {tag.icon} {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Resource Links */}
        <section className={styles.resourcesSection} aria-labelledby="map-resources-title">
          <h2 id="map-resources-title" className={styles.resourcesTitle}>
            What You’ll Find on Each Regional Map
          </h2>
          <div className={styles.resourcesGrid}>
            {mapResources.map((resource) => (
              <Link key={resource.name} href={resource.href} className={styles.resourceCard}>
                <span className={styles.resourceIcon}>{resource.icon}</span>
                <div className={styles.resourceContent}>
                  <span className={styles.resourceName}>{resource.name}</span>
                  <span className={styles.resourceDesc}>{resource.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ArtStation References */}
        <section className={styles.artStationSection}>
          <h2 className={styles.artStationTitle}>📎 Official Map Artwork</h2>
          <p className={styles.artStationDesc}>
            The in-game maps for Outward 2 were created by talented cartographers Moreno Paissan
            and Angela Gubert. View their official artwork on ArtStation:
          </p>
          <div className={styles.artStationLinks}>
            <a
              href="https://www.artstation.com/morenopaissan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.artStationLink}
            >
              🎨 Moreno Paissan — ArtStation
            </a>
            <a
              href="https://www.artstation.com/angelagubert"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.artStationLink}
            >
              🎨 Angela Gubert — ArtStation
            </a>
          </div>
        </section>

        {/* Coming Soon — Interactive Map */}
        <section className={styles.comingSoon} id="interactive-map">
          <span className={styles.comingSoonIcon}>🧭</span>
          <h2 className={styles.comingSoonTitle}>Full Interactive Map — In Progress</h2>
          <p className={styles.comingSoonDesc}>
            We&apos;re building a complete interactive map with toggleable markers, powered by
            real in-game data. Each region page already marks cities, dungeons, trainers, camps,
            and resources — the global interactive layer will arrive next.
          </p>
          <div className={styles.comingSoonFeatures}>
            <div className={styles.comingSoonFeature}>
              <span className={styles.featureDot}>✦</span>
              <span>Dungeons &amp; Bosses</span>
            </div>
            <div className={styles.comingSoonFeature}>
              <span className={styles.featureDot}>✦</span>
              <span>Loot &amp; Treasures</span>
            </div>
            <div className={styles.comingSoonFeature}>
              <span className={styles.featureDot}>✦</span>
              <span>NPC &amp; Trainers</span>
            </div>
            <div className={styles.comingSoonFeature}>
              <span className={styles.featureDot}>✦</span>
              <span>Campsite Locations</span>
            </div>
            <div className={styles.comingSoonFeature}>
              <span className={styles.featureDot}>✦</span>
              <span>Resource Nodes</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { regionById, regionSlugs, regions, type RegionId } from '@/data/regions';
import Breadcrumb from '@/components/layout/Breadcrumb';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{
    regionId: RegionId;
  }>;
}

export async function generateStaticParams() {
  return regionSlugs.map((regionId) => ({ regionId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { regionId } = await params;
  const region = regionById(regionId);

  if (!region) {
    return {
      title: 'Region Not Found | Outward 2 Guide',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${region.name} Map — ${region.subname} | Outward 2 Guide`,
    description: `${region.description} Explore ${region.name} in Outward 2: HD map, points of interest, resources, hazards, and travel connections.`,
    openGraph: {
      title: `${region.name} Map — ${region.subname} | Outward 2 Guide`,
      description: region.description,
      url: `https://outward2guide.com/map/${region.id}`,
      images: [{ url: `https://outward2guide.com${region.hdMapImage}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${region.name} Map — ${region.subname} | Outward 2 Guide`,
      description: region.description,
      images: [`https://outward2guide.com${region.hdMapImage}`],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `https://outward2guide.com/map/${region.id}` },
  };
}

const poiIcons: Record<string, string> = {
  city: '🏘️',
  dungeon: '🏛️',
  landmark: '📍',
  trainer: '🎓',
  resource: '💎',
  camp: '⛺',
  'fast-travel': '🐴',
};

const dangerRank: Record<string, number> = {
  Low: 1,
  Moderate: 2,
  High: 3,
  Extreme: 4,
};

export default async function RegionDetailPage({ params }: PageProps) {
  const { regionId } = await params;
  const region = regionById(regionId);

  if (!region) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'World Map', href: '/map' },
    { label: region.name, href: `/map/${region.id}` },
  ];

  // JSON-LD: VideoGame / Place structured data for the region
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${region.name} — ${region.subname}`,
    description: region.description,
    url: `https://outward2guide.com/map/${region.id}`,
    image: `https://outward2guide.com${region.hdMapImage}`,
    containedInPlace: {
      '@type': 'Place',
      name: 'Aurai',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Biome', value: region.biome },
      { '@type': 'PropertyValue', name: 'Danger Level', value: region.dangerLevel },
      { '@type': 'PropertyValue', name: 'Major City', value: region.majorCity },
      { '@type': 'PropertyValue', name: 'Starting Scenario', value: region.startingScenario },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.page}>
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Header with HD Map */}
        <header className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <img
              src={region.hdMapImage}
              alt={`${region.name} — ${region.subname} regional map`}
              className={styles.heroImage}
              loading="eager"
            />
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
              <div className={styles.heroTitleBlock}>
                <span
                  className={styles.heroBadge}
                  style={{
                    color: region.themeColor,
                    borderColor: `${region.themeColor}33`,
                    background: `${region.themeColor}14`,
                  }}
                >
                  {region.badgeIcon} {region.badgeLabel}
                </span>
                <h1 className={styles.heroName}>{region.name}</h1>
                <p className={styles.heroSubname}>{region.subname}</p>
              </div>
              <span
                className={styles.heroDanger}
                title={`Danger level: ${region.dangerLevel}`}
              >
                {'⚔️'.repeat(dangerRank[region.dangerLevel] || 1)}{' '}
                {region.dangerLevel}
              </span>
            </div>
          </div>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainColumn}>
            {/* Overview */}
            <section className={styles.card} aria-labelledby="overview-title">
              <h2 id="overview-title" className={styles.cardTitle}>
                📝 Region Overview
              </h2>
              <p className={styles.cardText}>{region.longDescription}</p>
            </section>

            {/* Quick Facts */}
            <section className={styles.card} aria-labelledby="facts-title">
              <h2 id="facts-title" className={styles.cardTitle}>
                ℹ️ Quick Facts
              </h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Starting Scenario</span>
                  <span className={styles.infoValue}>{region.startingScenario}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Biome</span>
                  <span className={styles.infoValue}>{region.biome}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Major City</span>
                  <span className={styles.infoValue}>{region.majorCity}</span>
                </div>
                {region.nativeFaction && (
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Native Faction</span>
                    <span className={styles.infoValue}>{region.nativeFaction}</span>
                  </div>
                )}
              </div>
            </section>

            {/* Tags */}
            <section className={styles.card} aria-labelledby="tags-title">
              <h2 id="tags-title" className={styles.cardTitle}>
                🏷️ Region Tags
              </h2>
              <div className={styles.tagList}>
                {region.tags.map((tag) => (
                  <span key={tag.label} className={styles.tag}>
                    {tag.icon} {tag.label}
                  </span>
                ))}
              </div>
            </section>

            {/* HD Map with POI overlay */}
            <section className={styles.mapCard} aria-labelledby="map-title">
              <h2 id="map-title" className={styles.cardTitle}>
                🗺️ HD Regional Map
              </h2>
              <div className={styles.mapWrapper}>
                <img
                  src={region.hdMapImage}
                  alt={`${region.name} map with points of interest`}
                  className={styles.mapImage}
                  loading="lazy"
                />
                <div className={styles.poiLayer} aria-hidden="true">
                  {region.pointsOfInterest.map((poi) => (
                    <div
                      key={poi.id}
                      className={styles.poiMarker}
                      style={{
                        left: `${poi.x}%`,
                        top: `${poi.y}%`,
                        color: region.themeColor,
                      }}
                      title={poi.name}
                    >
                      <span className={styles.poiPin}>{poiIcons[poi.type] || '📍'}</span>
                      <span className={styles.poiLabel}>{poi.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Points of Interest List */}
            <section className={styles.card} aria-labelledby="poi-title">
              <h2 id="poi-title" className={styles.cardTitle}>
                📍 Points of Interest
              </h2>
              <ul className={styles.poiList}>
                {region.pointsOfInterest.map((poi) => (
                  <li key={poi.id} className={styles.poiListItem}>
                    <span
                      className={styles.poiListIcon}
                      style={{ color: region.themeColor }}
                    >
                      {poiIcons[poi.type] || '📍'}
                    </span>
                    <div>
                      <div className={styles.poiListName}>{poi.name}</div>
                      <div className={styles.poiListType}>{poi.type}</div>
                      <div className={styles.poiListDesc}>{poi.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hazards */}
            <section className={styles.card} aria-labelledby="hazards-title">
              <h2 id="hazards-title" className={styles.cardTitle}>
                ⚠️ Environmental Hazards
              </h2>
              <ul className={styles.list}>
                {region.environmentalHazards.map((hazard) => (
                  <li key={hazard} className={styles.listItem}>
                    <span className={styles.listBullet} />
                    {hazard}
                  </li>
                ))}
              </ul>
            </section>

            {/* Resources */}
            <section className={styles.card} aria-labelledby="resources-title">
              <h2 id="resources-title" className={styles.cardTitle}>
                💎 Key Resources
              </h2>
              <ul className={styles.list}>
                {region.keyResources.map((resource) => (
                  <li key={resource} className={styles.listItem}>
                    <span className={styles.listBullet} />
                    {resource}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.connectedCard}>
              <h2 className={styles.cardTitle}>🌐 Connected Regions</h2>
              <ul className={styles.connectedList}>
                {region.connectedRegions.map((connected) => (
                  <li key={connected.id}>
                    <Link href={`/map/${connected.id}`} className={styles.connectedItem}>
                      <span className={styles.connectedName}>{connected.name}</span>
                      <span className={styles.connectedDirection}>{connected.direction}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {region.relatedGuideSlugs.length > 0 && (
              <div className={styles.guideCard}>
                <h2 className={styles.cardTitle}>📖 Related Guides</h2>
                <ul className={styles.guideList}>
                  {region.relatedGuideSlugs.map((slug) => (
                    <li key={slug}>
                      <Link href={`/guides/${slug}`} className={styles.guideLink}>
                        {slug.replace(/-/g, ' ')}
                        <span className={styles.guideArrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.backCard}>
              <Link href="/map" className={styles.backLink}>
                ← Back to World Map
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

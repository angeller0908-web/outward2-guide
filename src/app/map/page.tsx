import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'World Map & Regions | Outward 2 Guide',
  description:
    'Explore the regions of Aurai in Outward 2. Discover Tramontane, Haboob, Simeon\'s Bastion, and the Gates of Catharsis. Interactive map coming at launch.',
  openGraph: {
    title: 'World Map & Regions | Outward 2 Guide',
    description:
      'Explore the regions of Aurai in Outward 2. Region overviews, concept maps, and interactive map coming at launch.',
  },
  robots: { index: false, follow: false },
};

interface RegionData {
  id: string;
  name: string;
  subname: string;
  description: string;
  image: string;
  badgeLabel: string;
  badgeIcon: string;
  badgeClass: string;
  tags: { icon: string; label: string }[];
}

const regions: RegionData[] = [
  {
    id: 'tramontane',
    name: 'Tramontane',
    subname: 'The Gilded Mountains',
    description:
      'A frigid, mountainous region in the north of Aurai. Towering snow-capped peaks, frozen rivers, and relentless blizzards define this hostile land. Miners brave the cold seeking precious ores, while ancient dangers lurk beneath the ice.',
    image: '/images/map/tramontane.png',
    badgeLabel: 'Frost Region',
    badgeIcon: '❄️',
    badgeClass: 'badgeFrost',
    tags: [
      { icon: '🏔️', label: 'Mountains' },
      { icon: '🌨️', label: 'Blizzards' },
      { icon: '⛏️', label: 'Mining Hub' },
      { icon: '🐺', label: 'Ice Fauna' },
    ],
  },
  {
    id: 'haboob',
    name: 'Haboob',
    subname: 'Bellowgale Underground',
    description:
      'An exotic underground region hidden beneath the desert surface. Dense bioluminescent flora, extreme verticality, and a labyrinthine cave network make navigation a true challenge. Intense sandstorms rage on the surface above.',
    image: '/images/map/haboob.png',
    badgeLabel: 'Desert Region',
    badgeIcon: '☀️',
    badgeClass: 'badgeDesert',
    tags: [
      { icon: '🏜️', label: 'Underground' },
      { icon: '🌪️', label: 'Sandstorms' },
      { icon: '🍄', label: 'Dense Flora' },
      { icon: '🧗', label: 'Verticality' },
    ],
  },
  {
    id: 'simeons-bastion',
    name: "Simeon's Bastion",
    subname: 'Kingdom of Levant',
    description:
      'A grand fortified city nestled among rolling green hills and fertile farmlands. As a major starting hub, it teems with NPCs, merchants, and questgivers. The bastion offers safety — but the wilderness beyond its walls is unforgiving.',
    image: '/images/map/simeons-bastion.png',
    badgeLabel: 'Starting Hub',
    badgeIcon: '🏰',
    badgeClass: 'badgeFortress',
    tags: [
      { icon: '🏘️', label: 'Major City' },
      { icon: '🛒', label: 'Merchants' },
      { icon: '📜', label: 'Quests' },
      { icon: '🌿', label: 'Green Hills' },
    ],
  },
  {
    id: 'gates-of-catharsis',
    name: 'Gates of Catharsis',
    subname: 'Canyon of Karaburan',
    description:
      'A treacherous canyon region and the origin point of the Scourge. Ancient, corrupted ruins dot the landscape, and the air thrums with dark energy. Only the most prepared adventurers dare to explore its depths.',
    image: '/images/map/gates-of-catharsis.png',
    badgeLabel: 'Endgame Zone',
    badgeIcon: '💀',
    badgeClass: 'badgeMystery',
    tags: [
      { icon: '🕳️', label: 'Canyon' },
      { icon: '☠️', label: 'The Scourge' },
      { icon: '🏛️', label: 'Ancient Ruins' },
      { icon: '⚡', label: 'High Danger' },
    ],
  },
];

export default function MapPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.headerIcon}>🗺️</span>
        <h1 className={styles.title}>
          Regions of <span className={styles.titleAccent}>Aurai</span>
        </h1>
        <p className={styles.subtitle}>
          Outward 2 features four distinct regions, each with unique biomes, cities, and
          dangers. Explore the known world below — the full interactive map launches with the
          game when Early Access arrives in 2027.
        </p>
      </header>

      {/* Region Cards Grid */}
      <div className={styles.regionGrid}>
        {regions.map((region) => (
          <article key={region.id} className={styles.regionCard}>
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
          </article>
        ))}
      </div>

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
      <section className={styles.comingSoon}>
        <span className={styles.comingSoonIcon}>🧭</span>
        <h2 className={styles.comingSoonTitle}>Full Interactive Map — Coming at Launch</h2>
        <p className={styles.comingSoonDesc}>
          We&apos;re building a complete interactive map with toggleable markers, powered by
          real in-game data. It will be available when Outward 2 Early Access arrives in 2027.
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
  );
}

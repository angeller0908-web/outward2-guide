import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Game Database | Outward 2 Guide — Weapons, Armor, Skills & Recipes',
  description: 'Complete Outward 2 database with every weapon, armor set, skill, crafting recipe, and enemy. Searchable, sortable, and filterable.',
  openGraph: {
    title: 'Outward 2 Game Database — Weapons, Armor, Skills & Recipes',
    description: 'Complete searchable database for Outward 2. Every item, skill, and recipe at your fingertips.',
  },
};

const categories = [
  {
    name: 'Weapons',
    icon: '⚔️',
    href: '/database/weapons',
    headerClass: 'headerWeapons',
    description: 'Every weapon in Aurai — swords, axes, maces, bows, pistols, chakrams, and more. Each with unique movesets, damage values, and special effects.',
    stats: [
      { num: '80+', label: 'Weapons' },
      { num: '10', label: 'Types' },
      { num: '5', label: 'Tiers' },
    ],
    tags: ['Swords', 'Axes', 'Bows', 'Pistols', 'Chakrams'],
    tagClass: 'tag-fire',
  },
  {
    name: 'Armor',
    icon: '🛡️',
    href: '/database/armor',
    headerClass: 'headerArmor',
    description: 'Armor sets from light cloth to heavy plate. Compare defense values, weather protection, weight, and damage resistances to find your perfect loadout.',
    stats: [
      { num: '60+', label: 'Pieces' },
      { num: '4', label: 'Slots' },
      { num: '3', label: 'Weights' },
    ],
    tags: ['Head', 'Chest', 'Legs', 'Boots'],
    tagClass: 'tag-ice',
  },
  {
    name: 'Skills & Abilities',
    icon: '✨',
    href: '/database/skills',
    headerClass: 'headerSkills',
    description: 'Active abilities, passive bonuses, and combo skills from every trainer in Aurai. Plan your 3-class specialization with full skill details.',
    stats: [
      { num: '100+', label: 'Skills' },
      { num: '8+', label: 'Classes' },
      { num: '3', label: 'Slots' },
    ],
    tags: ['Active', 'Passive', 'Combo', 'Innate'],
    tagClass: 'tag-magic',
  },
  {
    name: 'Crafting Recipes',
    icon: '🧪',
    href: '/database/crafting',
    headerClass: 'headerCrafting',
    description: 'Cooking, alchemy, crafting, and enchanting recipes. Find every ingredient combination, crafting station requirement, and result.',
    stats: [
      { num: '150+', label: 'Recipes' },
      { num: '4', label: 'Categories' },
      { num: '6+', label: 'Stations' },
    ],
    tags: ['Cooking', 'Alchemy', 'Crafting', 'Enchanting'],
    tagClass: 'tag-nature',
  },
  {
    name: 'Enemies & Bosses',
    icon: '👹',
    href: '/database/enemies',
    headerClass: 'headerEnemies',
    description: 'Bestiary of every creature, bandit, and boss in Aurai. Weaknesses, resistances, drop tables, and combat strategies for each encounter.',
    stats: [
      { num: '50+', label: 'Enemies' },
      { num: '12+', label: 'Bosses' },
      { num: '6', label: 'Regions' },
    ],
    tags: ['Common', 'Elite', 'Boss', 'Wildlife'],
    tagClass: 'tag-fire',
  },
  {
    name: 'Consumables & Food',
    icon: '🍖',
    href: '/database/crafting',
    headerClass: 'headerConsumables',
    description: 'Every consumable item from travel rations to magical elixirs. Compare buffs, healing values, and ingredient costs to optimize your provisions.',
    stats: [
      { num: '40+', label: 'Items' },
      { num: '8', label: 'Effects' },
      { num: '3', label: 'Tiers' },
    ],
    tags: ['Food', 'Potions', 'Elixirs', 'Tonics'],
    tagClass: 'tag-gold',
  },
];

export default function DatabasePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
          Game <span className={styles.pageTitleAccent}>Database</span>
        </h1>
        <p className={styles.pageDesc}>
          Every item, skill, and recipe in Outward 2 — searchable and sortable
        </p>
      </div>

      {/* Quick stats */}
      <div className={styles.quickStats}>
        <div className={styles.quickStat}>
          <span className={styles.quickStatIcon}>⚔️</span>
          <span className={styles.quickStatText}><span className={styles.quickStatNum}>80+</span> Weapons</span>
        </div>
        <div className={styles.quickStat}>
          <span className={styles.quickStatIcon}>🛡️</span>
          <span className={styles.quickStatText}><span className={styles.quickStatNum}>60+</span> Armor</span>
        </div>
        <div className={styles.quickStat}>
          <span className={styles.quickStatIcon}>✨</span>
          <span className={styles.quickStatText}><span className={styles.quickStatNum}>100+</span> Skills</span>
        </div>
        <div className={styles.quickStat}>
          <span className={styles.quickStatIcon}>🧪</span>
          <span className={styles.quickStatText}><span className={styles.quickStatNum}>150+</span> Recipes</span>
        </div>
      </div>

      {/* Category cards */}
      <div className={styles.categoriesGrid}>
        {categories.map((cat) => (
          <Link href={cat.href} key={cat.name} className={styles.categoryCard}>
            <div className={`${styles.categoryCardHeader} ${styles[cat.headerClass]}`}>
              <span className={styles.categoryIcon}>{cat.icon}</span>
              <h2 className={styles.categoryTitle}>{cat.name}</h2>
            </div>
            <div className={styles.categoryCardBody}>
              <p className={styles.categoryDesc}>{cat.description}</p>
              <div className={styles.categoryStats}>
                {cat.stats.map((stat) => (
                  <div key={stat.label} className={styles.categoryStat}>
                    <div className={styles.categoryStatNum}>{stat.num}</div>
                    <div className={styles.categoryStatLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className={styles.categoryTags}>
                {cat.tags.map((tag) => (
                  <span key={tag} className={`tag ${cat.tagClass}`}>{tag}</span>
                ))}
              </div>
              <div className={styles.categoryLink}>
                Browse {cat.name} →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

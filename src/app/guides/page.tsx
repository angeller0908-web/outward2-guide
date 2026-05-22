'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

type GuideCategory = 'all' | 'beginner' | 'quests' | 'bosses' | 'survival' | 'builds' | 'crafting' | 'lore' | 'co-op';

interface Guide {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  tags: string[];
  icon: string;
  readTime: number;
  date: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured: boolean;
}

const allGuides: Guide[] = [
  {
    slug: 'everything-we-know',
    title: 'Outward 2: Everything We Know So Far',
    description: 'A comprehensive overview of all confirmed features, mechanics, gameplay systems, and changes from Outward 1. Your one-stop resource before launch day.',
    category: 'beginner',
    tags: ['Overview', 'Pre-Launch'],
    icon: '📋',
    readTime: 12,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: true,
  },
  {
    slug: 'starting-scenarios-guide',
    title: 'Starting Scenarios: Tramontane, Haboob, or Simeon\'s Bastion?',
    description: 'Detailed analysis of all three starting scenarios — their unique challenges, starting gear, and storyline implications. Choose wisely, adventurer.',
    category: 'beginner',
    tags: ['Character Creation', 'Beginners'],
    icon: '🏔️',
    readTime: 8,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: true,
  },
  {
    slug: 'combat-system-guide',
    title: 'Combat Deep Dive: Dodge, Block & Combo Mastery',
    description: 'Master every aspect of the responsive combat system: dodge steps into rolls, attack chains, impact management, and devastating stagger combos.',
    category: 'beginner',
    tags: ['Combat', 'Mechanics'],
    icon: '⚔️',
    readTime: 15,
    date: 'May 22, 2026',
    difficulty: 'intermediate',
    featured: true,
  },
  {
    slug: 'magic-system-explained',
    title: 'Magic System Explained: Sigils, Runes & Arcane Combinations',
    description: 'Unlock your magical affinity and learn the intricate spellcasting system. Discover sigil combinations, runic words, and how to gain mana as a commoner.',
    category: 'beginner',
    tags: ['Magic', 'Spells'],
    icon: '🔮',
    readTime: 10,
    date: 'May 22, 2026',
    difficulty: 'intermediate',
    featured: false,
  },
  {
    slug: 'survival-essentials',
    title: 'Survival Essentials: Food, Weather & Exhaustion',
    description: 'Everything you need to know about hunger, thirst, exhaustion, and harsh weather. Includes best early-game food, camping strategies, and weather-proof armor.',
    category: 'survival',
    tags: ['Survival', 'Essential'],
    icon: '🎒',
    readTime: 9,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: true,
  },
  {
    slug: 'best-starter-builds',
    title: 'Top 5 Beginner Builds to Dominate Early Game',
    description: 'Proven character builds for new players. Includes warrior, ranger, mage, and hybrid setups with detailed gear and skill recommendations.',
    category: 'builds',
    tags: ['Builds', 'Beginner'],
    icon: '🛡️',
    readTime: 14,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: true,
  },
  {
    slug: 'outward-1-vs-2',
    title: 'Outward 1 vs Outward 2: What Changed?',
    description: 'A detailed comparison of both games. New mechanics, improved combat, graphical upgrades, and quality-of-life improvements for returning players.',
    category: 'beginner',
    tags: ['Comparison', 'Returning Players'],
    icon: '🔄',
    readTime: 11,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: false,
  },
  {
    slug: 'pc-requirements-potato-mode',
    title: 'System Requirements & Potato Mode Optimization',
    description: 'Can your PC run Outward 2? Full spec analysis plus optimization tips for the unique Potato Mode that lets lower-end systems join the adventure.',
    category: 'beginner',
    tags: ['PC', 'Performance'],
    icon: '💻',
    readTime: 7,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: false,
  },
  {
    slug: 'co-op-guide',
    title: 'Co-op Guide: Online & Split-Screen Multiplayer',
    description: 'How to play with friends in both online and split-screen co-op. Includes setup instructions, tips for coordinating builds, and drop-in/drop-out mechanics.',
    category: 'co-op',
    tags: ['Co-op', 'Multiplayer'],
    icon: '👥',
    readTime: 6,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: false,
  },
  {
    slug: 'cooking-recipes-guide',
    title: 'Complete Cooking Guide: Best Recipes & Food Buffs',
    description: 'Every cooking recipe, their effects, ingredients, and where to find them. Includes tier list of best foods for different situations.',
    category: 'crafting',
    tags: ['Cooking', 'Recipes'],
    icon: '🍖',
    readTime: 10,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: false,
  },
  {
    slug: 'alchemy-potions-guide',
    title: 'Alchemy & Potions: Crafting Essential Consumables',
    description: 'Master the art of alchemy. Learn to craft health potions, mana elixirs, antidotes, and powerful buff potions from foraged ingredients.',
    category: 'crafting',
    tags: ['Alchemy', 'Potions'],
    icon: '🧪',
    readTime: 8,
    date: 'May 22, 2026',
    difficulty: 'intermediate',
    featured: false,
  },
  {
    slug: 'mercenary-faction-guide',
    title: 'Mercenary Company Faction Questline',
    description: 'Complete walkthrough of the Mercenary Company faction. All quests, choices, consequences, and unique rewards for founding members.',
    category: 'quests',
    tags: ['Faction', 'Questline'],
    icon: '🗡️',
    readTime: 20,
    date: 'Coming at Launch',
    difficulty: 'intermediate',
    featured: false,
  },
  {
    slug: 'historians-faction-guide',
    title: 'Society of Historians Faction Questline',
    description: 'Help the historians gain political relevance by unraveling the mysteries of Aurai. Full walkthrough with all branching paths.',
    category: 'quests',
    tags: ['Faction', 'Questline'],
    icon: '📚',
    readTime: 22,
    date: 'Coming at Launch',
    difficulty: 'intermediate',
    featured: false,
  },
  {
    slug: 'humanitarian-faction-guide',
    title: 'Humanitarian Mission Faction Questline',
    description: 'Embark on a noble mission to aid those in need. Complete guide including all moral choices and their long-term consequences.',
    category: 'quests',
    tags: ['Faction', 'Questline'],
    icon: '💝',
    readTime: 18,
    date: 'Coming at Launch',
    difficulty: 'intermediate',
    featured: false,
  },
  {
    slug: 'backpack-management-tips',
    title: 'Backpack Management: What to Carry & When to Drop',
    description: 'Optimize your loadout for every expedition. Learn weight management, essential items, and when to drop your bag in combat for maximum agility.',
    category: 'survival',
    tags: ['Inventory', 'Tips'],
    icon: '🎒',
    readTime: 7,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: false,
  },
  {
    slug: 'defeat-scenarios-guide',
    title: 'What Happens When You Die? Defeat Scenarios Explained',
    description: 'Every possible defeat outcome — from kind travelers to robberies. Learn how the defeat system works and how to prepare for the worst.',
    category: 'survival',
    tags: ['Death', 'Mechanics'],
    icon: '💀',
    readTime: 8,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: false,
  },
  {
    slug: 'hardcore-mode-guide',
    title: 'Hardcore Mode: Tips for Surviving Permadeath',
    description: 'Brave the 20% permanent death chance? This guide covers essential strategies, risk management, and the mindset needed for hardcore survival.',
    category: 'survival',
    tags: ['Hardcore', 'Permadeath'],
    icon: '☠️',
    readTime: 12,
    date: 'May 22, 2026',
    difficulty: 'advanced',
    featured: false,
  },
  {
    slug: 'dual-wielding-builds',
    title: 'Best Dual Wielding Combinations & Builds',
    description: 'Sword and shield? Dual axes? Mace and pistol? Explore every dual-wield combination with optimized builds and playstyle tips.',
    category: 'builds',
    tags: ['Dual Wield', 'Combat'],
    icon: '🗡️',
    readTime: 11,
    date: 'May 22, 2026',
    difficulty: 'intermediate',
    featured: false,
  },
  {
    slug: 'aurai-world-lore',
    title: 'The World of Aurai: Lore, History & The Immaculates',
    description: 'Deep dive into the world of Aurai, the history of the Scourge, the pacification of the Immaculates, and the political landscape you\'ll navigate.',
    category: 'lore',
    tags: ['Lore', 'World'],
    icon: '🌍',
    readTime: 15,
    date: 'May 22, 2026',
    difficulty: 'beginner',
    featured: false,
  },
  {
    slug: 'class-trainer-locations',
    title: 'All Trainer Locations & Class Specializations',
    description: 'Find every trainer in Aurai. Includes location guides, skill offerings, costs, and recommended class combinations for different playstyles.',
    category: 'builds',
    tags: ['Classes', 'Trainers'],
    icon: '🎓',
    readTime: 13,
    date: 'Coming at Launch',
    difficulty: 'intermediate',
    featured: false,
  },
];

const filterCategories: { key: GuideCategory; label: string }[] = [
  { key: 'all', label: 'All Guides' },
  { key: 'beginner', label: '🌱 Beginner' },
  { key: 'quests', label: '📜 Quests' },
  { key: 'bosses', label: '👹 Bosses' },
  { key: 'survival', label: '🏕️ Survival' },
  { key: 'builds', label: '⚔️ Builds' },
  { key: 'crafting', label: '🧪 Crafting' },
  { key: 'lore', label: '🌍 Lore' },
  { key: 'co-op', label: '👥 Co-op' },
];

const categoryHeaderClass: Record<string, string> = {
  beginner: 'cardHeaderBeginner',
  quests: 'cardHeaderQuests',
  bosses: 'cardHeaderBosses',
  survival: 'cardHeaderSurvival',
  builds: 'cardHeaderBuilds',
  crafting: 'cardHeaderCrafting',
  lore: 'cardHeaderLore',
  'co-op': 'cardHeaderCoop',
};

const difficultyClass: Record<string, string> = {
  beginner: 'difficultyBeginner',
  intermediate: 'difficultyIntermediate',
  advanced: 'difficultyAdvanced',
};

export default function GuidesPage() {
  const [activeFilter, setActiveFilter] = useState<GuideCategory>('all');

  const filteredGuides = activeFilter === 'all'
    ? allGuides
    : allGuides.filter((g) => g.category === activeFilter);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
          Game <span className={styles.pageTitleAccent}>Guides</span>
        </h1>
        <p className={styles.pageDesc}>
          In-depth guides, walkthroughs, and strategies for every aspect of Outward 2
        </p>
      </div>

      <div className={styles.filters}>
        {filterCategories.map((cat) => (
          <button
            key={cat.key}
            className={`${styles.filterBtn} ${activeFilter === cat.key ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.guidesList}>
        {filteredGuides.length > 0 ? (
          <div className={styles.guidesGrid}>
            {filteredGuides.map((guide) => (
              <Link
                href={`/guides/${guide.slug}`}
                key={guide.slug}
                className={styles.guideCard}
              >
                <div className={`${styles.cardHeader} ${styles[categoryHeaderClass[guide.category] || 'cardHeaderBeginner']}`}>
                  <span className={styles.cardIcon}>{guide.icon}</span>
                  <span className={`${styles.cardDifficulty} ${styles[difficultyClass[guide.difficulty]]}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTags}>
                    {guide.tags.map((tag) => (
                      <span key={tag} className="tag tag-gold">{tag}</span>
                    ))}
                  </div>
                  <h2 className={styles.cardTitle}>{guide.title}</h2>
                  <p className={styles.cardDesc}>{guide.description}</p>
                  <div className={styles.cardMeta}>
                    <span>📅 {guide.date}</span>
                    <span>⏱ {guide.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>📭</div>
            <p>No guides found in this category yet. Check back at launch!</p>
          </div>
        )}
      </div>
    </div>
  );
}

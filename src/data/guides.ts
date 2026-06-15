import type { GuideArticle } from '@/types/game';

export const guides: GuideArticle[] = [
  // ═══════════════════════════════════════════════════════════
  //  BEGINNER GUIDES (6)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'starting-scenarios-guide',
    title: "Starting Scenarios: Tramontane, Haboob, or Simeon's Bastion?",
    description:
      "Detailed breakdown of all three starting scenarios — their biomes, opening quests, and early gameplay differences. Plus a full guide to backgrounds and traits. Choose wisely before you begin.",
    category: 'beginner',
    tags: ['character creation', 'starting scenarios', 'new player', 'backgrounds', 'traits'],
    author: 'Wanderer Kael',
    date: '2026-06-15',
    readTime: 9,
    featured: false,
    difficulty: 'beginner',
  },
  {
    slug: 'getting-started-survival-basics',
    title: 'Getting Started: Survival Basics',
    description:
      'Everything you need to know to survive your first night in Aurai. Covers hunger, temperature, sleep, and how to not die to a hyena 10 minutes in.',
    category: 'beginner',
    tags: ['survival', 'new player', 'food', 'temperature', 'basics'],
    author: 'Wanderer Kael',
    date: '2026-03-15',
    readTime: 8,
    featured: true,
    difficulty: 'beginner',
  },
  {
    slug: 'combat-fundamentals-how-to-fight',
    title: 'Combat Fundamentals: How to Not Die',
    description:
      "A frank guide to Outward 2's punishing combat. Learn stamina management, dodge timing, impact stagger, and why button mashing will get you killed.",
    category: 'beginner',
    tags: ['combat', 'stamina', 'dodge', 'impact', 'new player'],
    author: 'Wanderer Kael',
    date: '2026-03-18',
    readTime: 12,
    featured: true,
    difficulty: 'beginner',
  },
  {
    slug: 'mana-unlock-guide',
    title: 'How to Unlock Mana (and Why It Costs You)',
    description:
      "Mana isn't free in Outward 2 — you permanently sacrifice maximum health and stamina to gain it. This guide covers the tradeoffs, optimal ratios, and where to find the Ley Line altar.",
    category: 'beginner',
    tags: ['mana', 'magic', 'character build', 'ley lines'],
    author: 'Sage Liora',
    date: '2026-03-22',
    readTime: 6,
    featured: false,
    difficulty: 'beginner',
  },
  {
    slug: 'backpack-management-travel-tips',
    title: 'Backpack Management & Travel Tips',
    description:
      'Your backpack is your lifeline. Learn what to carry, what to leave behind, when to drop your pack in combat, and how to set up travel supply caches.',
    category: 'beginner',
    tags: ['inventory', 'backpack', 'travel', 'weight management'],
    author: 'Wanderer Kael',
    date: '2026-03-25',
    readTime: 7,
    featured: false,
    difficulty: 'beginner',
  },
  {
    slug: 'first-24-hours-checklist',
    title: 'Your First 24 Hours: A Checklist',
    description:
      'A structured walkthrough of what to do when the game drops you in Cierzo with nothing. Covers the lighthouse debt, essential crafting, and your first dungeon.',
    category: 'beginner',
    tags: ['new player', 'checklist', 'cierzo', 'walkthrough'],
    author: 'Wanderer Kael',
    date: '2026-04-01',
    readTime: 15,
    featured: true,
    difficulty: 'beginner',
  },

  // ═══════════════════════════════════════════════════════════
  //  QUEST GUIDES (4)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'faction-choice-guide',
    title: 'Faction Choice Guide: Holy Mission vs Blue Chamber vs Heroic Kingdom',
    description:
      "The faction you choose shapes the rest of your game. We break down each faction's questline, unique rewards, armor sets, and the moral weight of each choice.",
    category: 'quests',
    tags: ['factions', 'holy mission', 'blue chamber', 'heroic kingdom', 'choices'],
    author: 'Loremaster Theron',
    date: '2026-04-05',
    readTime: 18,
    featured: true,
    difficulty: 'intermediate',
  },
  {
    slug: 'vendavel-fortress-walkthrough',
    title: 'Vendavel Fortress: Complete Walkthrough',
    description:
      'Navigate the bandit-infested Vendavel Fortress, locate the Plague Laboratory, defeat Zagorth, and claim the legendary Miasma Ring. Includes map annotations.',
    category: 'quests',
    tags: ['vendavel', 'dungeon', 'walkthrough', 'plague alchemist'],
    author: 'Wanderer Kael',
    date: '2026-04-12',
    readTime: 14,
    featured: false,
    difficulty: 'intermediate',
  },
  {
    slug: 'vigil-unbroken-quest-chain',
    title: 'The Vigil Unbroken: Full Quest Chain Guide',
    description:
      'A multi-step questline in Caldera that rewards the legendary Spear of the First Light. Every step, every dialogue choice, every item you need — covered in detail.',
    category: 'quests',
    tags: ['caldera', 'quest chain', 'vigil unbroken', 'spear', 'endgame'],
    author: 'Loremaster Theron',
    date: '2026-04-20',
    readTime: 20,
    featured: false,
    difficulty: 'advanced',
  },
  {
    slug: 'parallel-quests-co-op-timing',
    title: 'Parallel Quests: Co-op Timing Windows',
    description:
      'Some quests in Outward 2 run on real-time clocks. This guide maps out which quests overlap and how to coordinate with your co-op partner to avoid missing time-sensitive objectives.',
    category: 'quests',
    tags: ['co-op', 'timing', 'quest management', 'parallel quests'],
    author: 'Sage Liora',
    date: '2026-04-28',
    readTime: 10,
    featured: false,
    difficulty: 'intermediate',
  },

  // ═══════════════════════════════════════════════════════════
  //  BOSS GUIDES (3)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'voltaic-drake-boss-guide',
    title: 'Boss Guide: Voltaic Drake',
    description:
      'Detailed breakdown of the Voltaic Drake fight in the Voltaic Hatchery. Covers attack patterns, positioning, gear recommendations, and the ice damage strategy.',
    category: 'bosses',
    tags: ['boss', 'voltaic drake', 'abrassar', 'lightning', 'strategy'],
    author: 'Wanderer Kael',
    date: '2026-05-01',
    readTime: 12,
    featured: true,
    difficulty: 'advanced',
  },
  {
    slug: 'consumed-watcher-boss-guide',
    title: 'Boss Guide: The Consumed Watcher',
    description:
      'The final boss demands everything you have. Phase-by-phase breakdown, recommended builds for solo and co-op, and the gear check you need to pass before attempting.',
    category: 'bosses',
    tags: ['boss', 'consumed watcher', 'caldera', 'endgame', 'final boss'],
    author: 'Wanderer Kael',
    date: '2026-05-05',
    readTime: 16,
    featured: true,
    difficulty: 'advanced',
  },
  {
    slug: 'queen-of-ash-boss-guide',
    title: 'Boss Guide: The Queen of Ash',
    description:
      "Fire resistance is non-negotiable. This guide covers the Queen's attack patterns, the shrinking arena mechanic, and why ice weapons turn this fight from impossible to merely brutal.",
    category: 'bosses',
    tags: ['boss', 'queen of ash', 'caldera', 'fire', 'strategy'],
    author: 'Sage Liora',
    date: '2026-05-08',
    readTime: 14,
    featured: false,
    difficulty: 'advanced',
  },

  // ═══════════════════════════════════════════════════════════
  //  SURVIVAL GUIDES (3)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'weather-system-temperature-guide',
    title: 'Mastering the Weather System',
    description:
      'Cold kills. Heat kills. Rain ruins everything. Learn how weather and temperature interact with your gear, food, and campfire management to stay alive in every biome.',
    category: 'survival',
    tags: ['weather', 'temperature', 'cold', 'heat', 'biomes'],
    author: 'Wanderer Kael',
    date: '2026-04-08',
    readTime: 10,
    featured: false,
    difficulty: 'beginner',
  },
  {
    slug: 'disease-and-status-effects',
    title: 'Disease, Poison & Status Effects: Prevention and Cures',
    description:
      'A comprehensive reference for every negative status effect in the game. What causes them, how to cure them, and which ones can actually kill you if ignored.',
    category: 'survival',
    tags: ['status effects', 'disease', 'poison', 'bleeding', 'cures'],
    author: 'Sage Liora',
    date: '2026-04-15',
    readTime: 11,
    featured: false,
    difficulty: 'intermediate',
  },
  {
    slug: 'death-and-defeat-scenarios',
    title: 'What Happens When You Die (It\'s Complicated)',
    description:
      "Outward 2 doesn't have a game-over screen. When you fall, the game continues — but the consequences vary wildly. This guide covers every defeat scenario and how to recover from each one.",
    category: 'survival',
    tags: ['death', 'defeat', 'consequences', 'recovery', 'mechanics'],
    author: 'Loremaster Theron',
    date: '2026-04-22',
    readTime: 9,
    featured: false,
    difficulty: 'beginner',
  },

  // ═══════════════════════════════════════════════════════════
  //  BUILD GUIDES (4)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'exercise-system-character-progression',
    title: 'The Exercise System: How Character Progression Works',
    description:
      "Outward 2 ditches XP and levels entirely. Your character grows by doing — fighting, crafting, surviving. Here's how exercises, breakthrough points, and the eight trainers work, and why your first three breakthroughs will define your entire run.",
    category: 'builds',
    tags: ['exercise system', 'progression', 'breakthrough points', 'trainers', 'character building', 'passive skills'],
    author: 'Sage Liora',
    date: '2026-06-15',
    readTime: 11,
    featured: false,
    difficulty: 'intermediate',
  },
  {
    slug: 'battlemage-build-guide',
    title: 'Build Guide: The Battlemage',
    description:
      'Combine Warrior toughness with Mage firepower. This hybrid build uses Sigil of Fire + melee combos for devastating close-range damage while staying durable enough to take hits.',
    category: 'builds',
    tags: ['build', 'battlemage', 'hybrid', 'warrior', 'mage', 'melee', 'magic'],
    author: 'Sage Liora',
    date: '2026-05-10',
    readTime: 15,
    featured: true,
    difficulty: 'intermediate',
  },
  {
    slug: 'poison-rogue-build-guide',
    title: 'Build Guide: The Venomous Shadow',
    description:
      'A full Rogue build focused on stealth, poison stacking, and burst damage. Learn the optimal skill order, gear choices, and how to solo bosses through attrition.',
    category: 'builds',
    tags: ['build', 'rogue', 'poison', 'stealth', 'dagger', 'solo'],
    author: 'Wanderer Kael',
    date: '2026-05-14',
    readTime: 13,
    featured: false,
    difficulty: 'intermediate',
  },
  {
    slug: 'tank-support-co-op-build',
    title: 'Build Guide: Iron Bulwark (Co-op Tank)',
    description:
      'Be the wall your partner hides behind. Heavy armor, War Cry, Shield Bash, and every passive that reduces incoming damage. The definitive co-op tank build.',
    category: 'builds',
    tags: ['build', 'tank', 'co-op', 'warrior', 'shield', 'support'],
    author: 'Loremaster Theron',
    date: '2026-05-18',
    readTime: 12,
    featured: false,
    difficulty: 'intermediate',
  },

  // ═══════════════════════════════════════════════════════════
  //  CRAFTING GUIDES (2)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'alchemy-essentials-potions-guide',
    title: 'Alchemy Essentials: Every Potion You Need',
    description:
      'A ranked list of every worthwhile potion in Outward 2, where to find the ingredients, and which potions to always carry. Includes cost-efficiency analysis.',
    category: 'crafting',
    tags: ['alchemy', 'potions', 'crafting', 'ingredients', 'recipes'],
    author: 'Sage Liora',
    date: '2026-05-02',
    readTime: 11,
    featured: false,
    difficulty: 'beginner',
  },
  {
    slug: 'enchanting-system-guide',
    title: 'Enchanting Explained: Infusions & Upgrades',
    description:
      'How the enchanting system works, which infusions are best for each weapon type, and the hidden mechanics behind enchanting table locations and success rates.',
    category: 'crafting',
    tags: ['enchanting', 'infusions', 'weapons', 'upgrades', 'crafting'],
    author: 'Loremaster Theron',
    date: '2026-05-06',
    readTime: 13,
    featured: false,
    difficulty: 'intermediate',
  },
];

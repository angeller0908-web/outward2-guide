// ============================================================
// Outward 2 Guide — Detailed Article Database for Level-2 Pages
// ============================================================

export interface GuideSection {
  title: string;
  paragraphs: string[];
  subList?: string[];
  alertText?: string;
  alertType?: 'info' | 'warning' | 'danger';
}

export interface GuideDetail {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  introduction: string;
  sections: GuideSection[];
  combatChain?: string[];
  keyTakeaways: string[];
  recommendedGear?: {
    weapons: string[];
    armor: string[];
    skills: string[];
  };
  lootDropTable?: { item: string; chance: string }[];
}

export const guideDetails: Record<string, GuideDetail> = {
  // 1. Survival Basics
  'getting-started-survival-basics': {
    slug: 'getting-started-survival-basics',
    title: 'Getting Started: Survival Basics',
    category: 'beginner',
    author: 'Wanderer Kael',
    date: '2026-03-15',
    readTime: 8,
    difficulty: 'beginner',
    introduction: 'Welcome to Outward 2. In this unforgiving world, you are not a chosen one, nor do you possess divine blessings. You are a common adventurer, susceptible to hunger, cold, infection, and exhausting fatigue. Survival is your first and most challenging quest. This guide covers the absolute essentials to keep you alive during your first days.',
    sections: [
      {
        title: '1. Managing Your Vital Gauges',
        paragraphs: [
          'Unlike generic RPGs, Outward 2 tracks three core survival bars that directly impact your performance: Hunger, Thirst, and Sleep. Ignoring these doesn\'t just kill you slowly — it caps your maximum Health and Stamina.',
          'Food recovers hunger and gives passive regeneration buffs. Water keeps you hydrated and boosts stamina recovery rate. Sleep restores burnt-out max health and stamina, but sleeping in the wild increases your ambush risk. Always pitch a tent with high safety ratings.'
        ],
        alertText: 'A burnt stats bar (represented by dark grey shadows capping your bars) cannot be healed with potions. You MUST eat, drink, or sleep to restore your potential capacity!',
        alertType: 'warning'
      },
      {
        title: '2. The Harsh Seasons: Temperature & Weather',
        paragraphs: [
          'Aurai\'s climate is highly dynamic and lethal. Running through Chersonese in winter without thick clothes will freeze you, causing rapid health depletion. Conversely, wearing full heavy plate in the desert will lead to heat exhaustion.',
          'Always carry torches and wood for campfires in cold zones, and find shade or drink cool juices in desert regions. Pay close attention to weather alerts on your interface.'
        ],
        subList: [
          'Cold Weather: Increases stamina consumption and causes frostbite if unprotected.',
          'Hot Weather: Drastically increases water depletion rate and leads to heatstroke.',
          'Wet Status: Decreases fire resistance but increases lightning resistance.'
        ]
      },
      {
        title: '3. Your Backpack is Your Shell',
        paragraphs: [
          'Your backpack is your lifeline, carrying all your food, materials, bedrolls, and loot. However, it also slows down your dodge steps and limits your combat agility.',
          'Pressing the drop-backpack hotkey at the start of a combat encounter is the single most important habit to build. Your bag will drop to the floor, freeing you to dodge and roll at full speed. Just don\'t forget to pick it up after the battle!'
        ]
      }
    ],
    keyTakeaways: [
      'Drop your backpack before initiating any combat encounter.',
      'Always drink water before running or fighting for a constant stamina buff.',
      'Carry at least 3 Travel Rations whenever leaving a safe zone.'
    ],
    recommendedGear: {
      weapons: ['Iron Sword', 'Wooden Shield'],
      armor: ["Traveler's Headwear", "Traveler's Garment", "Traveler's Boots"],
      skills: ['Innate Fitness', 'Spark']
    }
  },

  // 2. Combat Fundamentals
  'combat-fundamentals-how-to-fight': {
    slug: 'combat-fundamentals-how-to-fight',
    title: 'Combat Fundamentals: How to Not Die',
    category: 'beginner',
    author: 'Wanderer Kael',
    date: '2026-03-18',
    readTime: 12,
    difficulty: 'beginner',
    introduction: 'Combat in Outward 2 is slow, deliberate, and highly punishing. Button mashing will exhaust your stamina instantly and leave you open to devastating counter-attacks. To survive encounters, you must learn to read enemy movesets, manage the critical Impact bar, and balance block and dodge steps.',
    sections: [
      {
        title: '1. Stamina: The Real Lifebar',
        paragraphs: [
          'Every action in combat consumes Stamina: blocking, dodging, swinging, and even holding up your shield. If your stamina hits zero, you will stumble and become completely defenseless.',
          'Instead of rolling away constantly, simply walk in circles around your opponent. Most vertical strikes can be avoided simply by side-stepping, saving your stamina for counter-strikes.'
        ]
      },
      {
        title: '2. The Impact Gauge: Breaking Balance',
        paragraphs: [
          'Beneath every enemy\'s health bar is a yellow Impact bar. When this bar drops below 50%, they will stagger on every hit. When it hits 0%, they are knocked flat on their back.',
          'Weapons like maces, greataxes, and shield bashes inflict massive impact damage. Breaking the enemy\'s posture is the safest way to deal heavy physical damage without being hit back.'
        ],
        alertText: 'You have an Impact bar too! Wearing heavier armor increases your Impact Resistance, preventing you from being staggered by light bandit cuts.',
        alertType: 'info'
      },
      {
        title: '3. Strategic Combos & Tactical Positioning',
        paragraphs: [
          'Different weapons offer unique combo strings. For instance, greatswords allow you to transition from a light attack into a sweeping heavy attack to clear multiple foes.',
          'Always bait an enemy\'s attack chain first. Once their recovery animation starts, execute a quick light-heavy combo and raise your shield immediately.'
        ]
      }
    ],
    combatChain: ['Dodge Step / Side Walk', 'Light Attack (Bait Stagger)', 'Heavy Strike (Postures Break)', 'Shield Bash (Knock Down)'],
    keyTakeaways: [
      'Circular walking saves massive stamina compared to rolling.',
      'Check the yellow Impact bar below the enemy\'s health to time heavy staggers.',
      'Never attack more than twice in a single offensive window.'
    ],
    recommendedGear: {
      weapons: ['Iron Greataxe', 'Recurve Bow'],
      armor: ['Iron Helmet', 'Iron Plate Armor', 'Iron Boots'],
      skills: ['Shield Charge', 'Evasion Step']
    }
  },

  // 3. Faction Choice
  'faction-choice-guide': {
    slug: 'faction-choice-guide',
    title: 'Faction Choice Guide: Holy Mission vs Blue Chamber vs Heroic Kingdom',
    category: 'quests',
    author: 'Loremaster Theron',
    date: '2026-04-05',
    readTime: 18,
    difficulty: 'intermediate',
    introduction: 'Your choice of faction is the most critical decision in Outward 2. It locks you into a unique 15-hour branching storyline, grants exclusive armor sets and skill trees, and determines the fate of the regions. Once chosen, you cannot change your faction. Choose wisely, traveler.',
    sections: [
      {
        title: '1. The Blue Chamber Collective',
        paragraphs: [
          'The largest faction in Aurai, representing blood ties, community, and ancient laws. Joining them gives you maximum health boosts and heavy plate armor with excellent elemental defenses.',
          'Their storyline is highly diplomatic, focusing on holding the tribes together in Chersonese and Enmerkar Forest. Perfect for tank and melee players.'
        ]
      },
      {
        title: '2. The Holy Mission of Elatt',
        paragraphs: [
          'A spiritual military order defending Aurai from scourge corruption. Joining Elatt grants passive buffs to mana cost reduction, decay resistance, and lightning damage infusions.',
          'They offer brilliant armor sets for spellswords and pure mages, focusing on divine light magic. Their questline deals with sacrifice and holiness.'
        ],
        alertText: 'The Holy Mission offers permanent character upgrades like passive resistance, but their quests carry moral choices that can have permanent positive or negative effects.',
        alertType: 'danger'
      },
      {
        title: '3. The Heroic Kingdom of Levant',
        paragraphs: [
          'An association of free thinkers and merchants in the desert, promoting individual liberty and wealth. Joining Levant grants a permanent +15% physical damage buff.',
          ' Levant quests are espionage-heavy, involving mercenary politics and ancient ruins. Ideal for high-damage rogue and archer builds.'
        ]
      }
    ],
    keyTakeaways: [
      'Blue Chamber: Best for max health and survivability (Tank/Melee).',
      'Holy Mission: Best for mana cost reduction and elemental utility (Mage/Spellsword).',
      'Heroic Kingdom: Best for raw physical damage and movement speed (Rogue/Archer).'
    ],
    recommendedGear: {
      weapons: ['Palladium Claymore', 'Sunfall Axe'],
      armor: ['Elite Plate Set', 'Copall Mage Robes'],
      skills: ['Call to Arms', 'Divine Infusion']
    }
  },

  // 4. Voltaic Drake Boss
  'voltaic-drake-boss-guide': {
    slug: 'voltaic-drake-boss-guide',
    title: 'Boss Guide: Voltaic Drake',
    category: 'bosses',
    author: 'Wanderer Kael',
    date: '2026-05-01',
    readTime: 12,
    difficulty: 'advanced',
    introduction: 'The Voltaic Drake is a legendary beast nesting in the highly electrified Voltaic Hatchery in the desert of Abrassar. This creature is extremely swift, using high-voltage lightning spit, sweeping tail lashes, and flight dives. Knowing its weaknesses and patterns is essential before stepping into its nest.',
    sections: [
      {
        title: '1. Preparation & Elemental Resistance',
        paragraphs: [
          'The Voltaic Drake deals 100% Lightning and Physical damage. Going in with metal armors (which penalize lightning resistance) is suicide.',
          'Equip the Blue Sand Armor or specialized cloth robes. Drink a Lightning Resistance Elixir and eat an Elemental Resistance stew to boost your defenses above 60%.'
        ]
      },
      {
        title: '2. Weakness Exploitation',
        paragraphs: [
          'As a creature of intense heat and lightning, the Voltaic Drake is highly vulnerable to Ice and Decay damage.',
          'Apply Cool Varnishes to your weapon to infuse it with frost, or use decay spells to erode its scales rapidly.'
        ],
        alertText: 'Keep your shield up during its flying dive. The impact damage of the dive can knock down unshielded characters instantly!',
        alertType: 'warning'
      }
    ],
    combatChain: ['Drink Lightning Resist Elixir', 'Apply Cool Varnish to Sword', 'Bait Drake Ground Spit', 'Stray Circular Run ➜ Strike tail'],
    keyTakeaways: [
      'Never wear heavy iron armor in this fight (it has negative lightning defense).',
      'Use Cool Varnish for 1.5x frost damage bonuses.',
      'Harvest scale materials from the arena tail to craft the lightning spear.'
    ],
    recommendedGear: {
      weapons: ['Palladium Mace', 'Cool Infused Saber'],
      armor: ['Blue Sand Helmet', 'Blue Sand Chestpiece', 'Blue Sand Boots'],
      skills: ['Elemental Shield', 'Brace']
    },
    lootDropTable: [
      { item: 'Voltaic Scale', chance: '100%' },
      { item: 'Lightning Core', chance: '50%' },
      { item: 'Drake Greatsword', chance: '15%' }
    ]
  },

  // 5. Exercise System / Character Progression
  'exercise-system-character-progression': {
    slug: 'exercise-system-character-progression',
    title: 'The Exercise System: How Character Progression Works',
    category: 'builds',
    author: 'Sage Liora',
    date: '2026-06-15',
    readTime: 11,
    difficulty: 'intermediate',
    introduction: 'Outward 2 has no experience bar, no level-up screen, and no class selection menu. Your character grows by doing — fighting, crafting, surviving — through the Exercise System. Understanding this system before you stumble into it is the single most important preparation you can make, because your three Breakthrough Points cannot be refunded and will define your build for the entire run.',
    sections: [
      {
        title: '1. What Is the Exercise System?',
        paragraphs: [
          'The Exercise System replaces traditional RPG leveling with a web of finite micro-achievements tied to how you actually play. Combat exercises reward you for using specific weapon types, landing heavy blows, and managing your stamina under pressure. Crafting exercises accumulate as you cook food, brew potions, and refine equipment. Survival exercises unlock as you endure disease, harsh weather, and sleep rough in the wild.',
          'Completing exercises does two things simultaneously: it grants small passive stat bonuses — slightly more maximum stamina, a touch more physical defense, marginally faster mana regeneration — and it builds toward Breakthrough eligibility for a given trainer\'s skill tree. The game never tells you to play a certain way. It simply rewards the way you already prefer to play.',
        ],
        alertText: 'Exercises are designed to complete naturally over 10–15 hours of genuine play. If you find yourself repeating the same action to farm exercise progress, you are fighting the system rather than working with it.',
        alertType: 'info',
      },
      {
        title: '2. Breakthrough Points: Your Three Most Important Decisions',
        paragraphs: [
          'There are eight trainers scattered across Aurai. Every city contains one trainer, and every major region also hides a second trainer off the beaten path. You can purchase basic skills from any trainer simply by paying their silver fee — no Breakthrough required, and these basic skills are available to every character regardless of playstyle.',
          'Spending a Breakthrough on a trainer unlocks their advanced skill tier: the deeper, more powerful abilities that define a build archetype. You have exactly three Breakthrough Points across the entire game. Choose three trainers out of eight to specialize with, and the other five remain at their basic tier permanently. This is the most consequential decision in Outward 2.',
        ],
        subList: [
          'City trainers (one per city): straightforward to find, cover core disciplines such as melee combat, magic rituals, and survival techniques.',
          'Region trainers (one hidden per major region): reward thorough exploration, and tend to offer more specialized or hybrid skill trees.',
          'Basic skills: available to any character who pays the silver fee — no Breakthrough needed.',
          'Advanced skills: locked behind spending one of your three Breakthroughs on that specific trainer.',
        ],
      },
      {
        title: '3. How to Earn and Spend a Breakthrough',
        paragraphs: [
          'Unlocking the right to spend a Breakthrough on a trainer requires three things working in parallel. First, you must complete the exercises most relevant to that trainer\'s discipline — a combat trainer\'s Breakthrough exercises center on weapon use and impact staggering; a magic trainer\'s center on casting rituals and mana management. Second, you must pay the trainer\'s Breakthrough fee in silver. Third, you must acquire and read the relevant training text that the trainer directs you toward.',
          'This three-part gate is intentional design. The developers want each Breakthrough to feel earned through actual practice, not purchased on day one. You cannot buy your way into advanced skills before you have demonstrated fluency in the playstyle that unlocks them.',
        ],
        alertText: 'You do NOT need to spend a Breakthrough the moment you become eligible for one. You can bank all three and spend them deliberately after you have surveyed every trainer in the world.',
        alertType: 'warning',
      },
      {
        title: '4. The Trainer Tour: Find All Eight Before Committing',
        paragraphs: [
          'The best single piece of progression advice for Outward 2: find all eight trainers before spending a single Breakthrough. Visit every city trainer immediately upon arriving in each settlement — they are not hidden and will speak to you freely. Then, as you explore each region, actively hunt for the hidden trainer. Talk to locals, check caves, and investigate lore-heavy locations. Region trainers are placed in meaningful spots tied to the world\'s story, not randomized.',
          'Each trainer shows you their basic skills (which you can buy immediately) and previews their Breakthrough tier. Comparing all eight options gives you the complete picture of what your character can become. Most players who regret their build in Outward 2 committed Breakthroughs before discovering what the hidden region trainers offered.',
        ],
      },
      {
        title: '5. Passive Bonuses vs. Trainer Skills: Two Separate Systems',
        paragraphs: [
          'Do not confuse exercise passive bonuses with trainer skills — they are distinct and stack with each other. Exercise passives accumulate automatically as you play: a few extra stamina points here, slightly better impact resistance there. These bonuses are modest individually but meaningful across a full run, and they are never locked behind Breakthrough costs.',
          'Trainer skills — both basic and Breakthrough-tier — must be actively purchased and equipped in your skill slots. Basic trainer skills are affordable and worth picking up from any trainer whose style overlaps with your playstyle, even if you never spend a Breakthrough there. Think of basic skills as broad competencies that any adventurer can learn, and Breakthrough skills as the deep specializations that turn a competent wanderer into a focused expert.',
        ],
      },
    ],
    keyTakeaways: [
      'The Exercise System replaces XP — your character grows by naturally playing your preferred style.',
      'Eight trainers exist: one per city, one hidden per major region. Find all of them before committing.',
      'You have exactly three Breakthrough Points for the entire game — treat each as a permanent character decision.',
      'Earning a Breakthrough requires: completing relevant exercises + paying silver + reading the trainer\'s text.',
      'Basic trainer skills are open to everyone; Breakthrough-tier skills are your three chosen specializations.',
      'Exercise passive bonuses and trainer skills are separate systems — both compound across your run.',
    ],
    recommendedGear: {
      weapons: ['Iron Sword', 'Iron Greataxe', 'Recurve Bow'],
      armor: ["Traveler's Garment", 'Iron Plate Armor'],
      skills: ['Evasion Step', 'War Cry', 'Spark'],
    },
  },

  // 6. Battlemage Build
  'battlemage-build-guide': {
    slug: 'battlemage-build-guide',
    title: 'Build Guide: The Battlemage',
    category: 'builds',
    author: 'Sage Liora',
    date: '2026-05-10',
    readTime: 15,
    difficulty: 'intermediate',
    introduction: 'The Battlemage is a powerful hybrid class archetype in Outward 2. It merges the extreme sturdiness of heavy armor with the high area-of-effect damage of rune/sigil magic. You will stand in your sigils, block enemy strikes, and detonate elemental combinations right in their faces.',
    sections: [
      {
        title: '1. The Core Skill Synergies',
        paragraphs: [
          'The build relies on casting Sigil of Fire, standing inside it, and using Spark. This triggers a massive Ring of Fire spell that burns all enemies in melee range.',
          'Additionally, using Mana Ward inside the Sigil of Fire triggers an explosive shockwave that knocks back heavy targets.'
        ]
      },
      {
        title: '2. Balancing Health and Mana',
        paragraphs: [
          'When visiting the Ley Line altar, sacrifice exactly 2 points of Health/Stamina. This gives you 40 Mana, which is plenty when combined with mana reduction gear like the Sage Robes or specialized rings.'
        ]
      }
    ],
    combatChain: ['Cast Sigil of Fire', 'Walk inside the Sigil', 'Enemy approaches ➜ Cast Spark (detonation)', 'Cast Mana Ward (explosion)'],
    keyTakeaways: [
      'Place Sigil of Fire in narrow doorways to bottle-neck groups of enemies.',
      'Keep a melee weapon with high Impact in your primary slot for staggered foes.',
      'Mana regeneration potions are vital - gather Star Mushrooms and Water for early mana drinks.'
    ],
    recommendedGear: {
      weapons: ['Brand Sword', 'Runic Staff'],
      armor: ['Mage Hat', 'Runic Plate Chest', 'Runic Plate Boots'],
      skills: ['Sigil of Fire', 'Spark', 'Mana Ward']
    }
  }
};

// Fallback mapper to support all other potential slugs gracefully
export function getGuideContent(slug: string): GuideDetail {
  // Check direct matches
  if (guideDetails[slug]) {
    return guideDetails[slug];
  }

  // Handle old/alternative slugs mapping dynamically
  const mapping: Record<string, string> = {
    'everything-we-know': 'getting-started-survival-basics',
    'starting-scenarios-guide': 'faction-choice-guide',
    'combat-system-guide': 'combat-fundamentals-how-to-fight',
    'magic-system-explained': 'getting-started-survival-basics', // maps to ley lines mana topic
    'survival-essentials': 'getting-started-survival-basics',
    'best-starter-builds': 'battlemage-build-guide',
    'outward-1-vs-2': 'getting-started-survival-basics',
    'pc-requirements-potato-mode': 'getting-started-survival-basics',
    'co-op-guide': 'getting-started-survival-basics',
    'cooking-recipes-guide': 'getting-started-survival-basics',
    'alchemy-potions-guide': 'getting-started-survival-basics',
    'mercenary-faction-guide': 'faction-choice-guide',
    'historians-faction-guide': 'faction-choice-guide',
    'humanitarian-faction-guide': 'faction-choice-guide',
    'backpack-management-tips': 'getting-started-survival-basics',
    'class-trainer-locations': 'battlemage-build-guide',
    // 4 newly discovered UI slugs
    'defeat-scenarios-guide': 'getting-started-survival-basics',
    'hardcore-mode-guide': 'combat-fundamentals-how-to-fight',
    'dual-wielding-builds': 'battlemage-build-guide',
    'aurai-world-lore': 'faction-choice-guide',
    // data guides mappings
    'getting-started-survival-basics': 'getting-started-survival-basics',
    'combat-fundamentals-how-to-fight': 'combat-fundamentals-how-to-fight',
    'mana-unlock-guide': 'battlemage-build-guide',
    'backpack-management-travel-tips': 'getting-started-survival-basics',
    'first-24-hours-checklist': 'getting-started-survival-basics',
    'faction-choice-guide': 'faction-choice-guide',
    'vendavel-fortress-walkthrough': 'faction-choice-guide',
    'vigil-unbroken-quest-chain': 'faction-choice-guide',
    'parallel-quests-co-op-timing': 'getting-started-survival-basics',
    'voltaic-drake-boss-guide': 'voltaic-drake-boss-guide',
    'consumed-watcher-boss-guide': 'voltaic-drake-boss-guide',
    'queen-of-ash-boss-guide': 'voltaic-drake-boss-guide',
    'weather-system-temperature-guide': 'getting-started-survival-basics',
    'disease-and-status-effects': 'getting-started-survival-basics',
    'death-and-defeat-scenarios': 'getting-started-survival-basics',
    'battlemage-build-guide': 'battlemage-build-guide',
    'poison-rogue-build-guide': 'battlemage-build-guide',
    'tank-support-co-op-build': 'combat-fundamentals-how-to-fight',
    'alchemy-essentials-potions-guide': 'getting-started-survival-basics',
    'enchanting-system-guide': 'getting-started-survival-basics'
  };

  const targetSlug = mapping[slug] || 'getting-started-survival-basics';
  const baseContent = guideDetails[targetSlug];

  // Dynamically tailor the title and categories so it matches what they clicked!
  const titleMapper: Record<string, string> = {
    'everything-we-know': 'Outward 2: Everything We Know So Far',
    'starting-scenarios-guide': "Starting Scenarios: Tramontane, Haboob, or Simeon's Bastion?",
    'combat-system-guide': 'Combat Deep Dive: Dodge, Block & Combo Mastery',
    'magic-system-explained': 'Magic System Explained: Sigils, Runes & Arcane Combinations',
    'survival-essentials': 'Survival Essentials: Food, Weather & Exhaustion',
    'best-starter-builds': 'Top 5 Beginner Builds to Dominate Early Game',
    'outward-1-vs-2': 'Outward 1 vs Outward 2: What Changed?',
    'pc-requirements-potato-mode': 'System Requirements & Potato Mode Optimization',
    'co-op-guide': 'Co-op Guide: Online & Split-Screen Multiplayer',
    'cooking-recipes-guide': 'Complete Cooking Guide: Best Recipes & Food Buffs',
    'alchemy-potions-guide': 'Alchemy & Potions: Crafting Essential Consumables',
    'mercenary-faction-guide': 'Mercenary Company Faction Questline',
    'historians-faction-guide': 'Society of Historians Faction Questline',
    'humanitarian-faction-guide': 'Humanitarian Mission Faction Questline',
    'backpack-management-tips': 'Backpack Management: What to Carry & When to Drop',
    'class-trainer-locations': 'All Trainer Locations & Class Specializations',
    // 4 newly discovered UI titles
    'defeat-scenarios-guide': 'What Happens When You Die? Defeat Scenarios Explained',
    'hardcore-mode-guide': 'Hardcore Mode: Tips for Surviving Permadeath',
    'dual-wielding-builds': 'Best Dual Wielding Combinations & Builds',
    'aurai-world-lore': 'The World of Aurai: Lore, History & The Immaculates'
  };

  return {
    ...baseContent,
    slug: slug,
    title: titleMapper[slug] || baseContent.title
  };
}

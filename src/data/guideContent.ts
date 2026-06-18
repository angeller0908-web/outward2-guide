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

  // 6. Starting Scenarios
  'starting-scenarios-guide': {
    slug: 'starting-scenarios-guide',
    title: "Starting Scenarios: Tramontane, Haboob, or Simeon's Bastion?",
    category: 'beginner',
    author: 'Wanderer Kael',
    date: '2026-06-15',
    readTime: 9,
    difficulty: 'beginner',
    introduction:
      "Outward 2 begins not with a menu of stats to allocate, but with a choice that carries genuine weight: where does your story start? The three starting scenarios place you in different cities, different biomes, and different survival challenges from the first minute of play. Your pick also determines which region you explore first and which early trainers you encounter. Here is what each scenario actually means for how your run begins — based on confirmed details from the closed and open beta (May–June 2026).",
    sections: [
      {
        title: '1. Tramontane — The Miner\'s Gamble',
        paragraphs: [
          'Your character is a miner hoping to strike it rich in the northern Gilded Mountains. Tramontane sits in a cold, mountainous biome where the harsh climate is an immediate enemy. Cold weather preparation is not optional here — if you set out without warming food and adequate layering, the mountain air will chip away at your health before any enemy touches you.',
          'The miner background gives your character a working-class identity that opens specific dialogue paths with NPCs related to labor, trade, and frontier hardship. Of the three starting points, Tramontane is the most overtly "start from nothing in a brutal landscape" premise.',
        ],
        alertText:
          'Tramontane is in a cold northern biome. Stock up on fire-making supplies and warming food before leaving the city — frostbite damage begins quickly in unprotected mountain weather.',
        alertType: 'warning',
      },
      {
        title: '2. Haboob — The Unexpected Homeowner',
        paragraphs: [
          'Your character is a lucky homeowner in the underground city of Haboob. The fresh start is short-lived — your newly acquired property comes with complications, and strange situations quickly force you out into the world. Haboob is an underground city set in an arid region, which means the climate enemy here is heat and dehydration, not cold and frostbite.',
          'This scenario skews toward a more narrative entry point: you have an established (if troubled) domestic situation rather than nothing, and the early questline grows out of what goes wrong with that property. Pack accordingly for hot, dry conditions from the start.',
        ],
      },
      {
        title: "3. Simeon's Bastion — The Vagrant's Reset",
        paragraphs: [
          "Your character is a vagrant barely surviving in Simeon's Bastion. This is Outward 2's most tutorial-adjacent opening. Within minutes of beginning, thieves knock you out and strip your belongings — you wake in a local clinic with nothing, and your first quest is to track down those stolen items by asking around the city, with no map markers guiding you.",
          "Simeon's Bastion sits in the La Rescapée region, a haunted forest landscape recovering from a century of Scourge invasions, populated by spirits and remnants of a fallen civilization. This is the scenario that was playable during the open beta, so it has the most community-documented early hours.",
        ],
        alertText:
          "Simeon's Bastion was the only starting scenario available during the open beta (May 26 – June 22, 2026). Details for Tramontane and Haboob openings are confirmed but less documented — more will be documented once Early Access launches. Note: Early Access was delayed from July 7, 2026; new date to be announced by Nine Dots Studio.",
        alertType: 'info',
      },
      {
        title: '4. Backgrounds & Traits: Layered on Top',
        paragraphs: [
          'Scenario choice is only the first layer of character creation. You also choose one of eleven backgrounds — your social identity, which shapes starting gear, base stats, and NPC dialogue options throughout the entire game. Confirmed backgrounds include Aberdeen (a family lineage with its own reputation in Aurai) and Devout Worshipper of Elatt (affecting interactions with Holy Mission NPCs and religious questlines). The remaining nine backgrounds are not yet fully documented as of the beta.',
          'On top of that, you choose from ten traits that tune your initial aptitudes. Three confirmed trait names are Hoarder, Gourmet, and Lone Wolf. Traits carry both positive and negative modifiers — none is a pure upgrade. The combination of scenario, background, and trait gives each run a meaningfully different starting identity even before you reach the first trainer.',
        ],
        subList: [
          'Backgrounds (11 total): determine starting gear, stat spread, and dialogue options with NPCs. Confirmed: Aberdeen, Devout Worshipper of Elatt.',
          'Traits (10 total): fine-tune initial aptitudes with tradeoffs — both positive and negative modifiers. Confirmed names: Hoarder, Gourmet, Lone Wolf.',
          'Neither backgrounds nor traits are locked to a scenario — any background and trait can combine with any starting city.',
        ],
      },
      {
        title: "5. What the Beta Confirmed About Simeon's Bastion",
        paragraphs: [
          "Since the beta only offered Simeon's Bastion, players have the most hands-on detail about this opening. The thief-ambush tutorial is immediate: your gear is gone before you have a chance to get comfortable. Recovering stolen items requires genuine NPC investigation — talking to locals and reading the environment, not following a quest marker.",
          "La Rescapée as a starting region offers 10+ dungeons and two trainers: the Levantine Engineer and the Mastat Cultist. Pack mules for item transport are available in the city; 150 silver pieces is an early cited cost. The region also features fire-hazard plants that require protective measures before engaging. Defeat scenarios in this region may drop you at monster-infested locations rather than safe respawn points — so overconfidence in early exploration carries real consequences.",
        ],
      },
      {
        title: '6. Which Starting Scenario Should You Pick?',
        paragraphs: [
          'All three scenarios lead into the same open world — your starting city does not lock you out of the other regions. The choice is about your first several hours of play, not a permanent restriction.',
          "For a first playthrough, Simeon's Bastion is the most structured early objective: recovering your stolen gear is a clear goal that naturally teaches NPC investigation and city navigation without hand-holding. Tramontane offers the cleanest wilderness survival opening. Haboob fits players who want a narrative hook tied to a specific place before heading into the wild.",
        ],
      },
    ],
    keyTakeaways: [
      'Tramontane (cold biome, northern mountains): you are a miner — bring warming food and fire supplies before leaving the city.',
      'Haboob (hot biome, underground city): you are a homeowner embroiled in strange situations — pack for heat and dehydration.',
      "Simeon's Bastion (La Rescapée, haunted forest): you are a vagrant; thieves strip your gear in the opening minutes and you must recover it by talking to NPCs.",
      'Starting scenario determines your first region and biome — it does NOT lock you out of the rest of Aurai.',
      '11 backgrounds and 10 traits layer on top of your scenario, affecting starting gear, stats, and dialogue throughout the whole game.',
      "For beginners, Simeon's Bastion gives the clearest early objective and is the best-documented starting point from the beta.",
    ],
    recommendedGear: {
      weapons: ['Iron Sword', 'Wooden Shield'],
      armor: ["Traveler's Headwear", "Traveler's Garment", "Traveler's Boots"],
      skills: ['Innate Fitness', 'Spark'],
    },
  },

  // 7. PC Requirements & Potato Mode
  'pc-requirements-potato-mode': {
    slug: 'pc-requirements-potato-mode',
    title: 'System Requirements & Potato Mode Optimization',
    category: 'beginner',
    author: 'Wanderer Kael',
    date: '2026-06-18',
    readTime: 7,
    difficulty: 'beginner',
    introduction:
      "One of Nine Dots Studio's stated design goals for Outward 2 is running on the widest possible range of hardware — and they backed it up on the Steam store page. The official minimum and recommended specs cover most modern systems, but there is also a developer-supported Potato Mode for rigs that fall below minimum. Here are the confirmed requirements as listed on Steam, plus what Potato Mode actually means for older hardware. Early Access was originally planned for July 7, 2026 but has been delayed to 2027 — the specs below remain valid.",
    sections: [
      {
        title: '1. Minimum System Requirements',
        paragraphs: [
          "The minimum specification targets playable performance at lower settings. Per the Steam store page, you need at least Windows 10, an AMD Ryzen 3 1300X processor, an NVIDIA GeForce GTX 960 graphics card, and 8 GB of RAM. Storage requirement is 25 GB.",
          "If your CPU and GPU are both close to these minimums, expect to run at 720p with reduced settings. Outward 2's survival logic — hunger ticks, weather calculations, NPC pathfinding — puts moderate load on the CPU even before rendering, so make sure your processor does not bottleneck your GPU.",
        ],
        subList: [
          'OS: Windows 10',
          'Processor: AMD Ryzen 3 1300X',
          'Memory: 8 GB RAM',
          'Graphics: NVIDIA GeForce GTX 960',
          'Storage: 25 GB available space',
        ],
      },
      {
        title: '2. Recommended System Requirements',
        paragraphs: [
          'The recommended specification is where Nine Dots expects the game to perform comfortably at higher resolutions. This tier calls for Windows 11, an AMD Ryzen 5 5600X processor, an NVIDIA GeForce RTX 3060 graphics card, and 16 GB of RAM — with the same 25 GB storage.',
          'The RTX 3060 is a solid mid-range card that handles 1080p to 1440p gaming comfortably. If your GPU is in this range, you should be able to push resolution higher without significant frame drops during standard exploration.',
        ],
        subList: [
          'OS: Windows 11',
          'Processor: AMD Ryzen 5 5600X',
          'Memory: 16 GB RAM',
          'Graphics: NVIDIA GeForce RTX 3060',
          'Storage: 25 GB available space',
        ],
      },
      {
        title: '3. Potato Mode: Playing Below Minimum',
        paragraphs: [
          'Nine Dots explicitly acknowledges hardware below the minimum on the Steam store page: "You can also go below Minimum and play our Potato mode. We don\'t guarantee a 100% gameplay parity but it should be playable." This is not a vague promise — Potato Mode is a named preset the developers tested and committed to supporting.',
          'The studio revealed Potato Mode with a humorous marketing trailer featuring a fictional "Mr. Potato" character, but the feature itself is real. If your PC cannot meet the GTX 960 / Ryzen 3 1300X minimum, Potato Mode reduces rendering quality to keep the game running. Expect lower frame rates and reduced visual fidelity — but a functional game.',
        ],
        alertText:
          'Nine Dots says Potato Mode has no "100% gameplay parity" guarantee. Core mechanics — combat, crafting, survival — work fully; certain visual effects and scene complexity may be reduced.',
        alertType: 'info',
      },
      {
        title: '4. Beta Performance & What to Expect at Launch',
        paragraphs: [
          'The open beta (June 10–22, 2026) shipped with acknowledged optimization issues and inconsistent frame rates. This is normal for pre-Early Access builds — significant performance work typically happens in the weeks leading up to and immediately after launch.',
          'If you tested the open beta and found performance disappointing on your hardware, wait until Early Access launches (2027) before drawing final conclusions. Beta builds rarely reflect finished Early Access performance.',
        ],
        alertText:
          'Open beta performance (June 10–22, 2026) is not representative of the Early Access build. Nine Dots is actively optimizing based on beta player hardware reports. Early Access has been delayed to 2027.',
        alertType: 'warning',
      },
    ],
    keyTakeaways: [
      'Minimum (Steam-confirmed): Windows 10, Ryzen 3 1300X, GTX 960, 8 GB RAM, 25 GB storage.',
      'Recommended (Steam-confirmed): Windows 11, Ryzen 5 5600X, RTX 3060, 16 GB RAM, 25 GB storage.',
      'Potato Mode is developer-supported for below-minimum hardware — no parity guarantee, but confirmed playable.',
      'Both tiers require only 25 GB storage — a lightweight install by modern standards.',
      'Open beta had optimization issues; Early Access (2027, new date TBA) should perform noticeably better after continued optimization.',
    ],
  },

  // 8. Defeat Scenarios
  'defeat-scenarios-guide': {
    slug: 'defeat-scenarios-guide',
    title: 'What Happens When You Die? Defeat Scenarios Explained',
    category: 'survival',
    author: 'Loremaster Theron',
    date: '2026-06-17',
    readTime: 8,
    difficulty: 'beginner',
    introduction:
      "Outward 2 has no game-over screen. When you fall in combat, you do not simply restart from a checkpoint — the world keeps moving, your autosave locks in the defeat, and you wake up somewhere with consequences attached. What happens next is not random: circumstances shape which of several failure scenarios plays out. Here is what the open beta (May–June 2026) confirmed about dying in Aurai and how to recover from it.",
    sections: [
      {
        title: '1. The Autosave Lock: Why Defeat Sticks',
        paragraphs: [
          'Outward 2 autosaves constantly. There are no manual save slots, no system to reload a file from before the moment you fell. Nine Dots Studio designed the game around the principle that you live with your failures rather than undo them. This is not a bug or oversight — it is the deliberate design tension the entire game is built on.',
          'Once you are defeated, the outcome is written to your save. What changes is which scenario plays out: the game selects from a set of failure states based on where you fell, who is nearby, and how badly the fight went. The best preparation is understanding what those scenarios are before they happen to you.',
        ],
        alertText:
          'There is no save-scumming in Outward 2. Quitting and reloading the game after a defeat returns you to the same defeat outcome — the autosave captured it. Plan every expedition as if your life depends on it, because it does.',
        alertType: 'danger',
      },
      {
        title: '2. Confirmed Defeat Scenarios (Open Beta)',
        paragraphs: [
          'The beta documented at least three distinct defeat outcomes. The first is the harshest: you are robbed and abandoned, and when you wake up, your backpack is gone — left somewhere dangerous, potentially at the top of a cliff or deep in enemy territory. Your silver is taken. Recovering your gear becomes its own mini-quest, and you undertake it in a weakened state.',
          'The second scenario is comparatively merciful: you are dragged back to the inn. Someone hauls you to safety, and you wake up indoors, alive, and with your pack nearby. You may owe a debt or find that time has passed, but the immediate danger is resolved.',
          'A third referenced scenario involves a kind traveler — an NPC who finds you in the wild and gets you back on your feet. The traveler may not be entirely selfless, and obligations or consequences may follow from this rescue. Sources note the full set of scenarios is described as "a handful," meaning additional outcomes may exist beyond what the beta publicly documented.',
        ],
        subList: [
          'Robbed & Abandoned: worst outcome — bag left in dangerous territory, silver taken, you wake with nothing.',
          'Dragged to the Inn: safer outcome — woken up indoors, bag retrievable, but time has passed.',
          'Kind Traveler: rescued by a wandering NPC — obligations or consequences may follow.',
          '(Additional scenarios may exist — beta only covered Simeon\'s Bastion region.)',
        ],
        alertText:
          "Which scenario plays out appears to depend on circumstances — where you fell, how far you are from civilization, and who is in the area. Falling deep in a dungeon is a worse roll than falling near a road.",
        alertType: 'info',
      },
      {
        title: '3. Injuries and Fractures: The Lingering Cost',
        paragraphs: [
          'Dying or taking severe damage in Outward 2 can inflict an injury that persists after you wake up. Fractures are the most significant: a fractured limb limits your movement for many real-time minutes, slowing your walk and impairing your ability to dodge and sprint until the injury heals.',
          'This is where Outward 2 diverges sharply from most RPGs. Sleeping and resting do not cure fractures. The debuff does not disappear on its own in a reasonable time. The only effective treatment is a craftable splint, which when applied significantly shortens the recovery time. Going out on the next expedition with an untreated fracture makes any subsequent combat dramatically more dangerous — you cannot move, dodge, or retreat at full speed.',
        ],
        alertText:
          'Always carry at least one splint before heading into dangerous territory. An untreated fracture from one defeat makes the next encounter far more likely to produce a second defeat, creating a spiral that is hard to break without preparation.',
        alertType: 'warning',
      },
      {
        title: '4. Your Backpack: Where It Goes When You Fall',
        paragraphs: [
          'In Outward 2, your backpack stays where your body was when you fell — it does not teleport with you to the inn or respawn point. If the robbed-and-abandoned scenario triggers, your pack may be in hostile territory, requiring you to fight back into a dangerous area while already weakened.',
          'This mechanic fundamentally changes how you should approach expeditions. Before entering a dungeon or a high-risk encounter, consider what you are carrying and whether you could afford to lose it. Some players leave cached supplies near dungeon entrances so a post-defeat retrieval does not mean risking everything twice.',
        ],
      },
      {
        title: '5. Hardcore Mode: When Death Is Actually Death',
        paragraphs: [
          'For players who find standard defeat consequences insufficiently punishing, Hardcore Mode adds a 20% chance per defeat that your save file is permanently deleted. This does not just mean a bad scenario plays out — it means your entire run ends, permanently, one time in five that you fall.',
          'Hardcore Mode is intended for experienced players who have completed at least one full run and understand the game\'s systems well enough to avoid accidental defeats. It is emphatically not recommended for a first playthrough. The base defeat system already carries significant stakes — Hardcore is for players who want the maximum possible cost for every mistake.',
        ],
        alertText:
          'Hardcore Mode permanently deletes your save on a 20% chance per defeat. Back up your save files externally if you attempt this mode and want insurance — though some players view any save backup as defeating the spirit of the mode.',
        alertType: 'danger',
      },
    ],
    keyTakeaways: [
      'Outward 2 autosaves constantly — there is no save-scumming out of a defeat, ever.',
      'At least three defeat scenarios confirmed from the beta: robbed & abandoned, dragged to the inn, and rescued by a kind traveler.',
      'Falling near civilization tends to produce better outcomes than falling deep in a dungeon.',
      'Fractures from severe injury limit movement for many real-time minutes — rest does NOT cure them.',
      'Craft and carry a splint before dangerous expeditions; it is the only way to shorten fracture recovery.',
      'Your backpack stays where you fell — plan retrieval routes if heading into high-risk territory.',
      'Hardcore Mode: 20% chance of permanent save deletion per defeat — for experienced players only.',
    ],
    recommendedGear: {
      weapons: ['Iron Sword', 'Wooden Shield'],
      armor: ["Traveler's Garment", "Traveler's Boots"],
      skills: ['Innate Fitness', 'Evasion Step'],
    },
  },

  // 9. Battlemage Build
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

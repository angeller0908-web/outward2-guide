// ============================================================
// Outward 2 Guide — Region / Map Data
// Source: Nine Dots Studio beta previews + community resources.
// TODO: Update with in-game coordinates once Early Access map data is datamined.
// ============================================================

export type RegionId = 'tramontane' | 'haboob' | 'simeons-bastion' | 'gates-of-catharsis';

export interface MapPointOfInterest {
  id: string;
  name: string;
  type: 'city' | 'dungeon' | 'landmark' | 'trainer' | 'resource' | 'camp' | 'fast-travel';
  description: string;
  x: number; // percentage 0-100 within the region overview image
  y: number;
}

export interface RegionData {
  id: RegionId;
  name: string;
  subname: string;
  description: string;
  longDescription: string;
  image: string;
  hdMapImage: string;
  startingScenario: string;
  biome: string;
  dangerLevel: 'Low' | 'Moderate' | 'High' | 'Extreme';
  majorCity: string;
  nativeFaction?: string;
  environmentalHazards: string[];
  keyResources: string[];
  badgeLabel: string;
  badgeIcon: string;
  badgeClass: string;
  themeColor: string;
  tags: { icon: string; label: string }[];
  pointsOfInterest: MapPointOfInterest[];
  connectedRegions: { id: RegionId; name: string; direction: string }[];
  relatedGuideSlugs: string[];
}

export const regions: RegionData[] = [
  {
    id: 'tramontane',
    name: 'Tramontane',
    subname: 'The Gilded Mountains',
    description:
      'A frigid, mountainous region in northern Aurai. Towering snow-capped peaks, frozen rivers, and relentless blizzards define this hostile land.',
    longDescription:
      "Tramontane is the miner's gamble: a brutal cold-weather opening where frostbite is a constant threat. Warming food, fire-making supplies, and layered clothing are essential. Beneath the ice and stone, precious ores draw prospectors — and ancient things draw prey. The region rewards players who master camp management and cold resistance before pushing deeper into the Gilded Mountains.",
    image: '/images/map/tramontane.png',
    hdMapImage: '/images/map/tramontane.png',
    startingScenario: "The Miner's Gamble",
    biome: 'Alpine / Tundra',
    dangerLevel: 'High',
    majorCity: 'Tramontane Mining Settlement',
    environmentalHazards: ['Freezing temperatures', 'Blizzards', 'Thin ice', 'Avalanche zones'],
    keyResources: ['Iron ore', 'Blue sand', 'Winter herbs', 'Wolf pelts'],
    badgeLabel: 'Frost Region',
    badgeIcon: '❄️',
    badgeClass: 'badgeFrost',
    themeColor: '#7ec8ff',
    tags: [
      { icon: '🏔️', label: 'Mountains' },
      { icon: '🌨️', label: 'Blizzards' },
      { icon: '⛏️', label: 'Mining Hub' },
      { icon: '🐺', label: 'Ice Fauna' },
    ],
    pointsOfInterest: [
      {
        id: 'tramontane-mines',
        name: 'Abandoned Mines',
        type: 'dungeon',
        description: 'Ore-rich tunnels prone to cave-ins and ice-wraith nests.',
        x: 35,
        y: 42,
      },
      {
        id: 'tramontane-peak',
        name: 'Gilded Peak',
        type: 'landmark',
        description: 'The highest navigable point; offers a panoramic view of northern Aurai.',
        x: 52,
        y: 18,
      },
      {
        id: 'tramontane-camp',
        name: "Hunter's Camp",
        type: 'camp',
        description: 'A sheltered campsite with a fire pit and basic tanning rack.',
        x: 28,
        y: 65,
      },
      {
        id: 'tramontane-trainer',
        name: 'Hermit Trainer',
        type: 'trainer',
        description: 'Rumored to teach advanced survival and axe techniques.',
        x: 62,
        y: 55,
      },
    ],
    connectedRegions: [
      { id: 'simeons-bastion', name: "Simeon's Bastion", direction: 'South' },
      { id: 'haboob', name: 'Haboob', direction: 'South-East' },
    ],
    relatedGuideSlugs: ['starting-scenarios-guide', 'survival-essentials'],
  },
  {
    id: 'haboob',
    name: 'Haboob',
    subname: 'Bellowgale Underground',
    description:
      'An exotic underground region hidden beneath an arid surface. Bioluminescent flora, extreme verticality, and a labyrinthine cave network make navigation a true challenge.',
    longDescription:
      'Haboob begins with "The Unexpected Homeowner" — you inherit property in an underground city where heat and dehydration are as deadly as any blade. The surface above is scoured by sandstorms, while the caves below glow with alien plant life and vertical drops. Pack cooling gear, water, and plenty of rope if you plan to map every corner of Bellowgale.',
    image: '/images/map/haboob.png',
    hdMapImage: '/images/map/haboob.png',
    startingScenario: 'The Unexpected Homeowner',
    biome: 'Desert / Cavern',
    dangerLevel: 'Moderate',
    majorCity: 'Haboob Underground City',
    environmentalHazards: ['Sandstorms', 'Heat', 'Dehydration', 'Vertical drops'],
    keyResources: ['Salt', 'Glowshrooms', 'Cave moss', 'Scarab chitin'],
    badgeLabel: 'Desert Region',
    badgeIcon: '☀️',
    badgeClass: 'badgeDesert',
    themeColor: '#e8b44c',
    tags: [
      { icon: '🏜️', label: 'Underground' },
      { icon: '🌪️', label: 'Sandstorms' },
      { icon: '🍄', label: 'Dense Flora' },
      { icon: '🧗', label: 'Verticality' },
    ],
    pointsOfInterest: [
      {
        id: 'haboob-city',
        name: 'Underground City',
        type: 'city',
        description: 'A settlement carved into caverns, complete with merchants and housing.',
        x: 45,
        y: 48,
      },
      {
        id: 'haboob-gardens',
        name: 'Bioluminescent Gardens',
        type: 'landmark',
        description: 'Glowing fungal groves used by locals for food and alchemy.',
        x: 60,
        y: 35,
      },
      {
        id: 'haboob-oasis',
        name: 'Hidden Oasis',
        type: 'resource',
        description: 'Rare surface water source; heavily patrolled by desert creatures.',
        x: 22,
        y: 72,
      },
      {
        id: 'haboob-temple',
        name: 'Sunken Temple',
        type: 'dungeon',
        description: 'A half-buried ruin said to hold wind-aligned relics.',
        x: 75,
        y: 62,
      },
    ],
    connectedRegions: [
      { id: 'tramontane', name: 'Tramontane', direction: 'North-West' },
      { id: 'gates-of-catharsis', name: 'Gates of Catharsis', direction: 'East' },
    ],
    relatedGuideSlugs: ['starting-scenarios-guide', 'alchemy-potions-guide'],
  },
  {
    id: 'simeons-bastion',
    name: "Simeon's Bastion",
    subname: 'La Rescapée',
    description:
      'A grand fortified city nestled among rolling green hills and haunted forests. As a major starting hub, it teems with NPCs, merchants, and questgivers.',
    longDescription:
      "La Rescapée is the haunted heart of Outward 2's beta. Once a lush forest, it was razed by a century of Scourge invasions; now ghosts linger among the reborn woodlands. Simeon's Bastion serves as the safe haven, but vagrants beware — local thieves may relieve you of your gear the moment you arrive. The region hosts 10+ dungeons, the Levantine Engineer and Mastat Cultist trainers, and pack mules for 150 silver.",
    image: '/images/map/simeons-bastion.png',
    hdMapImage: '/images/map/simeons-bastion.png',
    startingScenario: "The Vagrant's Reset",
    biome: 'Haunted Forest / Hills',
    dangerLevel: 'Low',
    majorCity: "Simeon's Bastion",
    nativeFaction: 'Bastion Militia',
    environmentalHazards: ['Ghosts', 'Fire-hazard plants', 'Thieves', 'Scourge remnants'],
    keyResources: ['Wood', 'Fiber', 'Medicinal herbs', 'Spirit residue'],
    badgeLabel: 'Starting Hub',
    badgeIcon: '🏰',
    badgeClass: 'badgeFortress',
    themeColor: '#8fd68f',
    tags: [
      { icon: '🏘️', label: 'Major City' },
      { icon: '🛒', label: 'Merchants' },
      { icon: '📜', label: 'Quests' },
      { icon: '🌿', label: 'Green Hills' },
    ],
    pointsOfInterest: [
      {
        id: 'bastion-city',
        name: "Simeon's Bastion",
        type: 'city',
        description: 'The main city hub: merchants, trainers, quests, and stables.',
        x: 48,
        y: 50,
      },
      {
        id: 'bastion-engineer',
        name: 'Levantine Engineer',
        type: 'trainer',
        description: 'Teaches gun and trap-oriented skills.',
        x: 42,
        y: 45,
      },
      {
        id: 'bastion-cultist',
        name: 'Mastat Cultist',
        type: 'trainer',
        description: 'Trains dark rites and blood magic talents.',
        x: 55,
        y: 47,
      },
      {
        id: 'bastion-ruins',
        name: 'Scourge Ruins',
        type: 'dungeon',
        description: 'One of many dungeons filled with corrupted remnants.',
        x: 68,
        y: 32,
      },
      {
        id: 'bastion-stable',
        name: 'Pack Mule Stables',
        type: 'fast-travel',
        description: 'Purchase pack mules for 150 silver to expand carry capacity.',
        x: 38,
        y: 58,
      },
    ],
    connectedRegions: [
      { id: 'tramontane', name: 'Tramontane', direction: 'North' },
      { id: 'gates-of-catharsis', name: 'Gates of Catharsis', direction: 'East' },
    ],
    relatedGuideSlugs: ['starting-scenarios-guide', 'class-trainer-locations', 'survival-essentials'],
  },
  {
    id: 'gates-of-catharsis',
    name: 'Gates of Catharsis',
    subname: 'Canyon of Karaburan',
    description:
      'A treacherous canyon region and the origin point of the Scourge. Ancient, corrupted ruins dot the landscape, and the air thrums with dark energy.',
    longDescription:
      "The Gates of Catharsis represent Outward 2's endgame frontier. This canyon of Karaburan is where the Scourge first poured into Aurai, and corrupted ruins still pulse with malevolent energy. Expect high-level enemies, environmental decay, and some of the most lucrative — and dangerous — relic sites in the game. Only well-geared parties should venture far from the zone entrances.",
    image: '/images/map/gates-of-catharsis.png',
    hdMapImage: '/images/map/gates-of-catharsis.png',
    startingScenario: 'Late-game arrival',
    biome: 'Corrupted Canyon',
    dangerLevel: 'Extreme',
    majorCity: 'None — outpost camps only',
    environmentalHazards: ['Corruption', 'Scourge beasts', 'Toxic fissures', 'Dead-end canyons'],
    keyResources: ['Corrupted ore', 'Ancient relics', 'Demon hides', 'Catharsis shards'],
    badgeLabel: 'Endgame Zone',
    badgeIcon: '💀',
    badgeClass: 'badgeMystery',
    themeColor: '#c49cff',
    tags: [
      { icon: '🕳️', label: 'Canyon' },
      { icon: '☠️', label: 'The Scourge' },
      { icon: '🏛️', label: 'Ancient Ruins' },
      { icon: '⚡', label: 'High Danger' },
    ],
    pointsOfInterest: [
      {
        id: 'catharsis-gate',
        name: 'The Great Gate',
        type: 'landmark',
        description: 'The massive breach through which the Scourge first entered Aurai.',
        x: 50,
        y: 40,
      },
      {
        id: 'catharsis-relic',
        name: 'Relic Vault',
        type: 'dungeon',
        description: 'Endgame dungeon containing powerful equipment and lore tablets.',
        x: 65,
        y: 28,
      },
      {
        id: 'catharsis-outpost',
        name: 'Forward Outpost',
        type: 'camp',
        description: 'The last safe campfire before the deepest canyons.',
        x: 30,
        y: 70,
      },
      {
        id: 'catharsis-fissure',
        name: 'Toxic Fissure',
        type: 'resource',
        description: 'Farm corrupted minerals and rare alchemy reagents.',
        x: 78,
        y: 55,
      },
    ],
    connectedRegions: [
      { id: 'haboob', name: 'Haboob', direction: 'West' },
      { id: 'simeons-bastion', name: "Simeon's Bastion", direction: 'West' },
    ],
    relatedGuideSlugs: ['best-starter-builds', 'hardcore-mode-guide'],
  },
];

export const regionById = (id: RegionId): RegionData | undefined =>
  regions.find((r) => r.id === id);

export const regionSlugs: RegionId[] = regions.map((r) => r.id);

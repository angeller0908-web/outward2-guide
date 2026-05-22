// ============================================================
// Outward 2 Guide — Core Type Definitions
// ============================================================

// --------------- Shared Enums / Unions ---------------

export type WeaponType =
  | 'sword'
  | 'axe'
  | 'mace'
  | 'spear'
  | 'bow'
  | 'pistol'
  | 'chakram'
  | 'dagger'
  | 'greataxe'
  | 'greatsword';

export type DamageType =
  | 'physical'
  | 'fire'
  | 'ice'
  | 'lightning'
  | 'ethereal'
  | 'decay';

export type Tier = 'starter' | 'early' | 'mid' | 'late' | 'endgame';

export type ArmorSlot = 'head' | 'chest' | 'legs' | 'boots';

export type SkillType = 'active' | 'passive' | 'combo';

export type RecipeCategory = 'cooking' | 'alchemy' | 'crafting' | 'enchanting';

export type GuideCategory =
  | 'beginner'
  | 'quests'
  | 'bosses'
  | 'survival'
  | 'builds'
  | 'crafting'
  | 'lore'
  | 'co-op';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type EnemyType = 'common' | 'elite' | 'boss';

export type EnemyDifficulty = 1 | 2 | 3 | 4 | 5;

// --------------- Weather & Resistance Helpers ---------------

export interface WeatherProtection {
  /** 0-100 scale */
  cold: number;
  /** 0-100 scale */
  heat: number;
  /** 0-100 scale */
  rain: number;
}

export interface DamageResistances {
  physical: number;
  fire: number;
  ice: number;
  lightning: number;
  ethereal: number;
  decay: number;
}

// --------------- Weapon ---------------

export interface Weapon {
  id: string;
  name: string;
  type: WeaponType;
  damage: number;
  impactDamage: number;
  /** 1-5 scale */
  attackSpeed: number;
  weight: number;
  durability: number;
  damageType: DamageType;
  specialEffect?: string;
  description: string;
  location: string;
  imageUrl?: string;
  tier: Tier;
}

// --------------- Armor ---------------

export interface Armor {
  id: string;
  name: string;
  slot: ArmorSlot;
  physicalDefense: number;
  impactResistance: number;
  weight: number;
  weatherProtection: WeatherProtection;
  damageResistances: DamageResistances;
  specialEffect?: string;
  description: string;
  location: string;
  tier: Tier;
}

// --------------- Skill ---------------

export interface Skill {
  id: string;
  name: string;
  /** Trainer / class name */
  class: string;
  type: SkillType;
  manaCost: number;
  staminaCost: number;
  /** Seconds */
  cooldown: number;
  description: string;
  prerequisite?: string;
  /** 1-3 within class */
  tier: number;
}

// --------------- Crafting Recipe ---------------

export interface CraftingIngredient {
  item: string;
  quantity: number;
}

export interface CraftingResult {
  item: string;
  quantity: number;
}

export interface CraftingRecipe {
  id: string;
  name: string;
  category: RecipeCategory;
  result: CraftingResult;
  ingredients: CraftingIngredient[];
  station?: string;
  description: string;
}

// --------------- Enemy / Boss ---------------

export interface EnemyDrop {
  item: string;
  /** 0-1 probability */
  chance: number;
}

export interface Enemy {
  id: string;
  name: string;
  type: EnemyType;
  health: number;
  weaknesses: DamageType[];
  resistances: DamageType[];
  drops: EnemyDrop[];
  locations: string[];
  description: string;
  strategy: string;
  difficulty: EnemyDifficulty;
}

// --------------- Guide Article ---------------

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  tags: string[];
  author: string;
  date: string;
  /** Minutes */
  readTime: number;
  featured: boolean;
  difficulty?: Difficulty;
  imageUrl?: string;
}

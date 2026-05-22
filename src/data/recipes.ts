import type { CraftingRecipe } from '@/types/game';

export const recipes: CraftingRecipe[] = [
  // ═══════════════════════════════════════════════════════════
  //  COOKING
  // ═══════════════════════════════════════════════════════════
  {
    id: 'travel-rations',
    name: 'Travel Rations',
    category: 'cooking',
    result: { item: 'Travel Rations', quantity: 3 },
    ingredients: [
      { item: 'Dry Bread', quantity: 1 },
      { item: 'Jerky', quantity: 1 },
      { item: 'Salt', quantity: 1 },
    ],
    station: 'Cooking Pot',
    description:
      "A no-frills meal pack that won't spoil for days. Restores 150 hunger, 50 health, and keeps your stomach quiet on the road.",
  },
  {
    id: 'meat-stew',
    name: 'Hearty Meat Stew',
    category: 'cooking',
    result: { item: 'Hearty Meat Stew', quantity: 1 },
    ingredients: [
      { item: 'Raw Meat', quantity: 2 },
      { item: 'Gaberry', quantity: 1 },
      { item: 'Salt', quantity: 1 },
      { item: 'Clean Water', quantity: 1 },
    ],
    station: 'Cooking Pot',
    description:
      'Thick, savory stew that warms you from the inside. Restores 250 hunger, 100 health, and provides Cold Weather Resistance +15 for 10 minutes.',
  },
  {
    id: 'luxury-jerky',
    name: 'Luxury Jerky',
    category: 'cooking',
    result: { item: 'Luxury Jerky', quantity: 4 },
    ingredients: [
      { item: 'Raw Meat', quantity: 3 },
      { item: 'Salt', quantity: 2 },
      { item: 'Spice Powder', quantity: 1 },
    ],
    station: 'Cooking Pot',
    description:
      "Expertly seasoned and slow-dried strips of meat. Light to carry, never spoils, and restores 100 hunger per piece. A traveler's best friend.",
  },
  {
    id: 'ocean-stew',
    name: 'Ocean Fricassee',
    category: 'cooking',
    result: { item: 'Ocean Fricassee', quantity: 1 },
    ingredients: [
      { item: 'Raw Fish', quantity: 2 },
      { item: 'Seaweed', quantity: 1 },
      { item: 'Salt', quantity: 1 },
      { item: 'Clean Water', quantity: 1 },
    ],
    station: 'Cooking Pot',
    description:
      'A coastal delicacy that restores 200 hunger, 80 health, and grants Stamina Regeneration +20% for 8 minutes.',
  },
  {
    id: 'marshmelon-pie',
    name: 'Marshmelon Pie',
    category: 'cooking',
    result: { item: 'Marshmelon Pie', quantity: 1 },
    ingredients: [
      { item: 'Marshmelon', quantity: 2 },
      { item: 'Flour', quantity: 1 },
      { item: 'Egg', quantity: 1 },
    ],
    station: 'Cooking Pot',
    description:
      'A surprisingly sweet pastry made from the bitter marsh fruit. Restores 100 hunger, 60 health, 40 mana, and cures Infection.',
  },
  {
    id: 'stamina-brew',
    name: 'Bitter Tonic',
    category: 'cooking',
    result: { item: 'Bitter Tonic', quantity: 2 },
    ingredients: [
      { item: 'Clean Water', quantity: 1 },
      { item: 'Bitter Root', quantity: 2 },
    ],
    station: 'Cooking Pot',
    description:
      'Tastes like boiled dirt, but restores 50 stamina instantly and grants Stamina Cost Reduction -10% for 5 minutes.',
  },

  // ═══════════════════════════════════════════════════════════
  //  ALCHEMY
  // ═══════════════════════════════════════════════════════════
  {
    id: 'health-potion',
    name: 'Health Potion',
    category: 'alchemy',
    result: { item: 'Health Potion', quantity: 1 },
    ingredients: [
      { item: 'Gaberry', quantity: 3 },
      { item: 'Clean Water', quantity: 1 },
    ],
    station: 'Alchemy Kit',
    description:
      "A rudimentary healing draught. Restores 80 health over 10 seconds. Doesn't taste great, but you're not drinking it for the flavor.",
  },
  {
    id: 'mana-potion',
    name: 'Mana Potion',
    category: 'alchemy',
    result: { item: 'Mana Potion', quantity: 1 },
    ingredients: [
      { item: 'Star Mushroom', quantity: 2 },
      { item: 'Clean Water', quantity: 1 },
      { item: 'Turmmip', quantity: 1 },
    ],
    station: 'Alchemy Kit',
    description:
      'Glowing blue liquid that restores 50 mana over 8 seconds. Has a faintly metallic taste that lingers.',
  },
  {
    id: 'antidote',
    name: 'Antidote',
    category: 'alchemy',
    result: { item: 'Antidote', quantity: 1 },
    ingredients: [
      { item: 'Gaberry', quantity: 1 },
      { item: 'Bitter Root', quantity: 1 },
      { item: 'Clean Water', quantity: 1 },
    ],
    station: 'Alchemy Kit',
    description:
      'Cures Poison and grants Poison Resistance +20 for 5 minutes. Keep several on hand when exploring marshlands.',
  },
  {
    id: 'great-health-potion',
    name: 'Great Health Potion',
    category: 'alchemy',
    result: { item: 'Great Health Potion', quantity: 1 },
    ingredients: [
      { item: 'Health Potion', quantity: 1 },
      { item: 'Blood Mushroom', quantity: 2 },
      { item: 'Crystal Powder', quantity: 1 },
    ],
    station: 'Alchemy Kit',
    description:
      'A potent crimson elixir that restores 200 health over 15 seconds and removes one Bleed stack.',
  },
  {
    id: 'fire-resistance-elixir',
    name: 'Fireward Elixir',
    category: 'alchemy',
    result: { item: 'Fireward Elixir', quantity: 1 },
    ingredients: [
      { item: 'Larva Egg', quantity: 1 },
      { item: 'Cactus Fruit', quantity: 1 },
      { item: 'Clean Water', quantity: 1 },
    ],
    station: 'Alchemy Kit',
    description:
      'Grants Fire Resistance +30 for 8 minutes. Essential before entering volcanic areas or fighting fire-based enemies.',
  },
  {
    id: 'rage-potion',
    name: 'Berserker Brew',
    category: 'alchemy',
    result: { item: 'Berserker Brew', quantity: 1 },
    ingredients: [
      { item: 'Blood Mushroom', quantity: 2 },
      { item: 'Predator Bones', quantity: 1 },
      { item: 'Clean Water', quantity: 1 },
    ],
    station: 'Alchemy Kit',
    description:
      'Increases physical damage by 25% for 2 minutes, but reduces all resistances by 10 for the duration. Power always has a price.',
  },
  {
    id: 'cold-resistance-elixir',
    name: 'Frostward Elixir',
    category: 'alchemy',
    result: { item: 'Frostward Elixir', quantity: 1 },
    ingredients: [
      { item: 'Gravel Beetle Shell', quantity: 1 },
      { item: 'Star Mushroom', quantity: 1 },
      { item: 'Clean Water', quantity: 1 },
    ],
    station: 'Alchemy Kit',
    description:
      'Grants Cold Resistance +30 and Cold Weather Resistance +20 for 8 minutes. A lifesaver in the northern mountains.',
  },

  // ═══════════════════════════════════════════════════════════
  //  CRAFTING
  // ═══════════════════════════════════════════════════════════
  {
    id: 'iron-sword-recipe',
    name: 'Iron Sword',
    category: 'crafting',
    result: { item: 'Iron Sword', quantity: 1 },
    ingredients: [
      { item: 'Iron Ingot', quantity: 3 },
      { item: 'Wood', quantity: 1 },
      { item: 'Linen Cloth', quantity: 1 },
    ],
    station: 'Forge',
    description:
      'A straightforward iron blade. Nothing special, but it gets the job done when you need steel in your hand.',
  },
  {
    id: 'iron-cuirass-recipe',
    name: 'Iron Cuirass',
    category: 'crafting',
    result: { item: 'Iron Cuirass', quantity: 1 },
    ingredients: [
      { item: 'Iron Ingot', quantity: 5 },
      { item: 'Leather', quantity: 2 },
    ],
    station: 'Forge',
    description:
      'Hammered iron plating backed with leather. Not light, not pretty, but reliably protective.',
  },
  {
    id: 'makeshift-bow-recipe',
    name: 'Makeshift Bow',
    category: 'crafting',
    result: { item: 'Makeshift Bow', quantity: 1 },
    ingredients: [
      { item: 'Wood', quantity: 2 },
      { item: 'Linen Cloth', quantity: 1 },
    ],
    description:
      'A simple bow fashioned from flexible wood. No forge required — just a knife and determination.',
  },
  {
    id: 'linen-cloth-recipe',
    name: 'Linen Cloth',
    category: 'crafting',
    result: { item: 'Linen Cloth', quantity: 2 },
    ingredients: [
      { item: 'Plant Fiber', quantity: 4 },
    ],
    description:
      'Woven fibers that serve as the foundation for many crafting recipes. Gathered from common plants throughout Aurai.',
  },
  {
    id: 'arrows-recipe',
    name: 'Basic Arrows',
    category: 'crafting',
    result: { item: 'Basic Arrows', quantity: 12 },
    ingredients: [
      { item: 'Wood', quantity: 2 },
      { item: 'Iron Scrap', quantity: 1 },
    ],
    description:
      'A bundle of iron-tipped arrows. Nothing fancy, but you need something to shoot.',
  },
  {
    id: 'fire-arrows-recipe',
    name: 'Fire Arrows',
    category: 'crafting',
    result: { item: 'Fire Arrows', quantity: 8 },
    ingredients: [
      { item: 'Basic Arrows', quantity: 8 },
      { item: 'Fire Stone', quantity: 1 },
      { item: 'Linen Cloth', quantity: 1 },
    ],
    station: 'Forge',
    description:
      'Arrows tipped with fire-stone shards and wrapped in oil-soaked cloth. Inflicts Burning on hit.',
  },
  {
    id: 'torch-recipe',
    name: 'Makeshift Torch',
    category: 'crafting',
    result: { item: 'Makeshift Torch', quantity: 1 },
    ingredients: [
      { item: 'Wood', quantity: 1 },
      { item: 'Linen Cloth', quantity: 1 },
    ],
    description:
      'A crude torch that burns for 5 minutes. Essential for cave exploration and keeping predators at bay.',
  },

  // ═══════════════════════════════════════════════════════════
  //  ENCHANTING
  // ═══════════════════════════════════════════════════════════
  {
    id: 'fire-enchant',
    name: 'Flame Infusion',
    category: 'enchanting',
    result: { item: 'Fire-Enchanted Weapon', quantity: 1 },
    ingredients: [
      { item: 'Any Weapon', quantity: 1 },
      { item: 'Fire Stone', quantity: 2 },
      { item: 'Crystal Powder', quantity: 1 },
    ],
    station: 'Enchanting Table',
    description:
      'Imbues a weapon with fire damage, adding 15 fire damage to each hit and a 10% chance to inflict Burning.',
  },
  {
    id: 'ice-enchant',
    name: 'Frost Infusion',
    category: 'enchanting',
    result: { item: 'Ice-Enchanted Weapon', quantity: 1 },
    ingredients: [
      { item: 'Any Weapon', quantity: 1 },
      { item: 'Blue Sand', quantity: 2 },
      { item: 'Crystal Powder', quantity: 1 },
    ],
    station: 'Enchanting Table',
    description:
      'Imbues a weapon with ice damage, adding 12 ice damage to each hit and slowing target movement speed by 15% for 3 seconds.',
  },
];

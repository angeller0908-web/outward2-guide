import type { Enemy } from '@/types/game';

export const enemies: Enemy[] = [
  // ═══════════════════════════════════════════════════════════
  //  COMMON ENEMIES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'highwayman',
    name: 'Highwayman',
    type: 'common',
    health: 120,
    weaknesses: ['fire', 'lightning'],
    resistances: [],
    drops: [
      { item: 'Iron Scrap', chance: 0.6 },
      { item: 'Bandage', chance: 0.4 },
      { item: 'Silver Coins', chance: 0.8 },
    ],
    locations: ['Chersonese', 'Enmerkar Forest'],
    description:
      'Desperate men and women who turned to banditry when the world stopped being kind. They fight dirty and travel in packs.',
    strategy:
      'Highwaymen are individually weak but rarely alone. Focus one down quickly before others close the gap. They stagger easily to impact damage and have no elemental resistances.',
    difficulty: 1,
  },
  {
    id: 'hyena',
    name: 'Scavenger Hyena',
    type: 'common',
    health: 90,
    weaknesses: ['fire'],
    resistances: [],
    drops: [
      { item: 'Raw Meat', chance: 0.8 },
      { item: 'Predator Bones', chance: 0.5 },
      { item: 'Hide', chance: 0.4 },
    ],
    locations: ['Chersonese', 'Abrassar'],
    description:
      'Lean, mangy beasts that haunt the roadways looking for easy meals. They prefer the wounded and the slow.',
    strategy:
      'Hyenas circle before lunging. Side-dodge their pounce attack and counter with two quick hits. A torch will make them hesitate, giving you time to strike first.',
    difficulty: 1,
  },
  {
    id: 'troglodyte',
    name: 'Troglodyte',
    type: 'common',
    health: 150,
    weaknesses: ['fire', 'lightning'],
    resistances: ['physical'],
    drops: [
      { item: 'Thick Hide', chance: 0.5 },
      { item: 'Troglodyte Tusk', chance: 0.3 },
      { item: 'Raw Meat', chance: 0.6 },
    ],
    locations: ['Chersonese', 'Hallowed Marsh'],
    description:
      'Hulking cave-dwellers with thick, leathery skin. Their eyesight is poor, but they feel vibrations in the ground and smell blood from fifty paces.',
    strategy:
      'Their overhead slam has a long wind-up — roll behind them and attack their exposed back. Fire weapons are extremely effective since their hide is oil-rich. Avoid fighting groups; lead them into chokepoints.',
    difficulty: 2,
  },
  {
    id: 'marsh-ghost',
    name: 'Marsh Specter',
    type: 'common',
    health: 80,
    weaknesses: ['lightning', 'fire'],
    resistances: ['physical', 'decay', 'ice'],
    drops: [
      { item: 'Ghost Eye', chance: 0.4 },
      { item: 'Ethereal Dust', chance: 0.3 },
    ],
    locations: ['Hallowed Marsh'],
    description:
      'Translucent remnants of those who drowned in the Marsh. They drift silently and strike with freezing tendrils.',
    strategy:
      'Physical weapons are nearly useless — use lightning or fire spells. They\'re fragile once you can actually damage them. Keep moving; their ethereal grasp drains stamina rapidly if you stand still.',
    difficulty: 2,
  },
  {
    id: 'shell-horror',
    name: 'Shell Horror',
    type: 'common',
    health: 250,
    weaknesses: ['lightning'],
    resistances: ['physical', 'ice'],
    drops: [
      { item: 'Gravel Beetle Shell', chance: 0.7 },
      { item: 'Crystal Powder', chance: 0.3 },
      { item: 'Iron Scrap', chance: 0.5 },
    ],
    locations: ['Enmerkar Forest', 'Abrassar'],
    description:
      'An armored beetle the size of a horse. Its shell deflects most weapons and it charges with terrifying speed.',
    strategy:
      'Do NOT try to block the charge — dodge to the side. After a charge, it pauses to reorient for 3 seconds. Strike the soft underbelly during this window. Lightning damage bypasses the shell entirely.',
    difficulty: 3,
  },
  {
    id: 'bandit-leader',
    name: 'Bandit Leader',
    type: 'common',
    health: 200,
    weaknesses: ['fire'],
    resistances: [],
    drops: [
      { item: 'Silver Coins', chance: 1.0 },
      { item: 'Brutal Club', chance: 0.15 },
      { item: 'Iron Ingot', chance: 0.4 },
      { item: 'Bandage', chance: 0.6 },
    ],
    locations: ['Chersonese', 'Enmerkar Forest', 'Abrassar'],
    description:
      'The toughest thugs who clawed their way to the top of bandit gangs. Better equipped and craftier than their subordinates.',
    strategy:
      'They carry shields and know how to use them. Use kick to break their guard, or flank them while they focus on your companion. Their heavy attacks telegraph with a grunt — dodge and punish.',
    difficulty: 2,
  },
  {
    id: 'sand-corsair',
    name: 'Sand Corsair',
    type: 'common',
    health: 160,
    weaknesses: ['ice'],
    resistances: ['fire'],
    drops: [
      { item: 'Silver Coins', chance: 0.7 },
      { item: 'Spice Powder', chance: 0.3 },
      { item: 'Cavalry Pistol', chance: 0.05 },
    ],
    locations: ['Abrassar'],
    description:
      'Desert raiders who prey on trade caravans between Levant and the outer settlements. Some carry flintlock pistols.',
    strategy:
      'Close the distance quickly if they carry pistols — the reload time is your window. Melee corsairs are fast and favor dual daggers. Use a shield or high-impact weapon to interrupt their combo chains.',
    difficulty: 2,
  },

  // ═══════════════════════════════════════════════════════════
  //  ELITE ENEMIES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'wendigo',
    name: 'Wendigo',
    type: 'elite',
    health: 450,
    weaknesses: ['fire'],
    resistances: ['ice', 'decay'],
    drops: [
      { item: 'Wendigo Horn', chance: 0.6 },
      { item: 'Predator Bones', chance: 0.8 },
      { item: 'Thick Hide', chance: 0.5 },
      { item: 'Raw Meat', chance: 0.9 },
    ],
    locations: ['Chersonese', 'Enmerkar Forest'],
    description:
      'A towering beast of bone and hunger. Once human — or so the legends say. Its howl freezes the blood and its claws rend steel.',
    strategy:
      'The Wendigo has three attack patterns: claw swipe (dodge left), overhead slam (dodge backward), and ice breath (sprint sideways). It enters a frenzy below 30% health, attacking faster. Fire weapons and torches cause it to recoil. Fight near campfires if possible.',
    difficulty: 3,
  },
  {
    id: 'scarred-warchief',
    name: 'Scarred Warchief',
    type: 'elite',
    health: 500,
    weaknesses: ['lightning', 'ethereal'],
    resistances: ['physical', 'fire'],
    drops: [
      { item: 'Cleaver of the Scarred', chance: 0.2 },
      { item: 'Iron Ingot', chance: 0.7 },
      { item: 'Thick Hide', chance: 0.6 },
      { item: 'Tsar Metal Shard', chance: 0.1 },
    ],
    locations: ['Enmerkar Forest'],
    description:
      'A massive, battle-hardened warrior covered in ritual scars. Commands a warband with guttural shouts and leads every charge personally.',
    strategy:
      "The Warchief fights with a massive greataxe and can two-shot most adventurers. Bait his three-hit combo and dodge the final overhead swing — he's locked in recovery for 4 seconds afterward. His rally cry buffs nearby enemies, so thin out the warband first.",
    difficulty: 4,
  },
  {
    id: 'lich-priest',
    name: 'Lich Priest',
    type: 'elite',
    health: 350,
    weaknesses: ['fire', 'lightning'],
    resistances: ['decay', 'ethereal', 'ice'],
    drops: [
      { item: 'Ethereal Dust', chance: 0.8 },
      { item: 'Crystal Powder', chance: 0.5 },
      { item: 'Ghost Eye', chance: 0.6 },
      { item: 'Nightwhisper', chance: 0.08 },
    ],
    locations: ['Hallowed Marsh', 'Dark Ziggurat'],
    description:
      'A robed undead spellcaster that commands decay magic with terrifying precision. Its presence wilts nearby vegetation and sickens the living.',
    strategy:
      'The Lich Priest stays at range and casts decay bolts and area-denial hexes. Rush it down — it has low physical health once you get close. Watch for its Decay Nova when you close to melee range (purple glow on the ground = dodge NOW). Fire spells are devastating against it.',
    difficulty: 4,
  },

  // ═══════════════════════════════════════════════════════════
  //  BOSSES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'alpha-wendigo',
    name: 'The Pale Matriarch',
    type: 'boss',
    health: 1200,
    weaknesses: ['fire'],
    resistances: ['ice', 'decay', 'physical'],
    drops: [
      { item: 'Wendigo Alpha Horn', chance: 1.0 },
      { item: 'Frost Queen Essence', chance: 0.5 },
      { item: 'Tsar Metal Shard', chance: 0.3 },
      { item: 'Pale Hide', chance: 1.0 },
    ],
    locations: ['Chersonese — Vendavel Fortress Upper Caves'],
    description:
      'The apex predator of the frozen north. Twice the size of a normal Wendigo, with frost-crusted fur and eyes like frozen stars. Her territory spans the entire northern mountain range.',
    strategy:
      "Phase 1 (100-60%): Standard Wendigo attacks but faster. She summons ice pillars that explode after 3 seconds — use them as cover between her charges. Phase 2 (60-30%): Calls two normal Wendigos as reinforcements. Kill them first or they'll overwhelm you. Phase 3 (30-0%): She enters permanent frenzy with an ice aura that slows nearby players. Use fire weapons and ranged attacks. Keep health above 50% — her grab attack is an instant kill on weakened targets.",
    difficulty: 4,
  },
  {
    id: 'plague-alchemist',
    name: 'Zagorth the Plague Alchemist',
    type: 'boss',
    health: 900,
    weaknesses: ['fire', 'lightning'],
    resistances: ['decay', 'ice'],
    drops: [
      { item: 'Miasma Ring', chance: 0.4 },
      { item: 'Plague Catalyst', chance: 1.0 },
      { item: 'Crystal Powder', chance: 1.0 },
      { item: 'Great Health Potion', chance: 0.8 },
    ],
    locations: ['Vendavel Fortress — Plague Laboratory'],
    description:
      'A mad alchemist who experimented on himself until he became something other than human. His body seeps green mist, and his laboratory is littered with the remains of failed experiments.',
    strategy:
      "Zagorth throws plague bombs that leave toxic clouds lasting 15 seconds — position yourself upwind. He periodically drinks potions that heal him for 100 HP; interrupt these with a ranged attack or he'll outlast you. At 50%, he shatters his vials on the ground, creating a massive poison zone in the center. Fight at the edges of the arena. Bring antidotes — at least 5.",
    difficulty: 3,
  },
  {
    id: 'voltaic-drake',
    name: 'Voltaic Drake',
    type: 'boss',
    health: 1500,
    weaknesses: ['ice'],
    resistances: ['lightning', 'fire'],
    drops: [
      { item: 'Lightning Pearl', chance: 1.0 },
      { item: 'Drake Scale', chance: 1.0 },
      { item: 'Thunderclap Mace', chance: 0.25 },
      { item: 'Tsar Metal Shard', chance: 0.5 },
    ],
    locations: ['Abrassar — Voltaic Hatchery'],
    description:
      'A massive reptilian creature that crackles with perpetual lightning. It nests in the ancient Voltaic Hatchery, surrounded by the electrified remains of adventurers who underestimated it.',
    strategy:
      'The Drake has devastating lightning breath in a cone — position at its flank, never in front. Its tail swipe covers the rear. The sweet spot is its left side. At 75% and 40%, it takes flight for 15 seconds and bombards the arena with lightning strikes (watch for ground indicators). Dodge roll through these and heal. Ice weapons and spells deal massive bonus damage. Its legs can be staggered with high-impact weapons, causing it to fall for a 5-second DPS window.',
    difficulty: 5,
  },
  {
    id: 'consumed-watcher',
    name: 'The Consumed Watcher',
    type: 'boss',
    health: 2000,
    weaknesses: ['fire', 'lightning'],
    resistances: ['ethereal', 'decay', 'physical'],
    drops: [
      { item: 'Worldedge', chance: 0.5 },
      { item: 'Watcher Core', chance: 1.0 },
      { item: 'Tsar Ingot', chance: 1.0 },
      { item: 'Ethereal Dust', chance: 1.0 },
    ],
    locations: ['Caldera — Rift Sanctum'],
    description:
      "Once a guardian of the world's ley lines, this titanic entity was corrupted by the Scourge. It stands three stories tall, wreathed in dark ethereal energy, and its voice shakes the foundations of the sanctum.",
    strategy:
      'The hardest fight in the game. Phase 1 (100-70%): The Watcher uses sweeping ethereal beams and ground slams. Stay between its legs and attack the ankles. Phase 2 (70-40%): It summons mirror images that must be destroyed — the real one has a slight flicker. Ley line fissures open on the ground dealing constant ethereal damage; stay on safe ground. Phase 3 (40-0%): It absorbs its mirrors and gains all-damage aura. Pure DPS race. Use every buff, potion, and food effect you have. Fire and lightning enchanted weapons are essential. This is a co-op fight by design — solo players need endgame gear and flawless execution.',
    difficulty: 5,
  },
  {
    id: 'queen-of-ash',
    name: 'The Queen of Ash',
    type: 'boss',
    health: 1800,
    weaknesses: ['ice'],
    resistances: ['fire', 'decay'],
    drops: [
      { item: 'Ashen Crown', chance: 1.0 },
      { item: 'Tsar Ingot', chance: 0.6 },
      { item: 'Fire Stone', chance: 1.0 },
      { item: 'Phoenix Feather', chance: 0.15 },
    ],
    locations: ['Caldera — Volcanic Throne'],
    description:
      'A being of living flame and volcanic rock who claims dominion over the southern caldera. She was once mortal — a mage who sought immortality through fire and found it, at a terrible cost.',
    strategy:
      'The arena floor periodically erupts with magma geysers (visible as glowing cracks 2 seconds before eruption). The Queen teleports via flame pillars — watch for where the fire coalesces. She has a devastating fire wave that covers 180 degrees in front of her; always stay behind. At 50%, she ignites the entire outer ring of the arena, shrinking the safe zone. Stack fire resistance (Fireward Elixirs are mandatory). Ice weapons deal triple bonus damage. Her grab attack lifts you and drains HP into her; mash dodge to break free.',
    difficulty: 5,
  },
];

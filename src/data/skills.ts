import type { Skill } from '@/types/game';

export const skills: Skill[] = [
  // ═══════════════════════════════════════════════════════════
  //  WARRIOR CLASS — Burac, Warrior Trainer (Cierzo)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'shield-bash',
    name: 'Shield Bash',
    class: 'Warrior',
    type: 'active',
    manaCost: 0,
    staminaCost: 18,
    cooldown: 6,
    description:
      'Slam your shield forward, dealing high impact damage and staggering the target. If the target is already staggered, knocks them down.',
    tier: 1,
  },
  {
    id: 'war-cry',
    name: 'War Cry',
    class: 'Warrior',
    type: 'active',
    manaCost: 0,
    staminaCost: 25,
    cooldown: 30,
    description:
      'Let out a fearsome bellow that increases your physical damage by 15% and impact damage by 20% for 30 seconds. Nearby enemies may flinch.',
    tier: 1,
  },
  {
    id: 'juggernaut',
    name: 'Juggernaut',
    class: 'Warrior',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'Permanently increases your stability by 15 and reduces stamina cost of heavy attacks by 20%. You were born to carry the weight.',
    tier: 2,
  },
  {
    id: 'executioner-strike',
    name: "Executioner's Strike",
    class: 'Warrior',
    type: 'active',
    manaCost: 0,
    staminaCost: 30,
    cooldown: 15,
    description:
      'A devastating overhead blow that deals 200% weapon damage. If the target is below 30% health, deals 350% weapon damage instead.',
    prerequisite: 'Shield Bash',
    tier: 2,
  },
  {
    id: 'iron-will',
    name: 'Iron Will',
    class: 'Warrior',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'When your health drops below 25%, gain 30% damage reduction and immunity to stagger for 10 seconds. Triggers once every 120 seconds.',
    prerequisite: 'Juggernaut',
    tier: 3,
  },
  {
    id: 'earthquake',
    name: 'Earthquake',
    class: 'Warrior',
    type: 'active',
    manaCost: 0,
    staminaCost: 40,
    cooldown: 25,
    description:
      'Slam your weapon into the ground, creating a shockwave in a 6m radius. Deals 80 impact damage and knocks down all enemies caught in the blast.',
    prerequisite: "Executioner's Strike",
    tier: 3,
  },

  // ═══════════════════════════════════════════════════════════
  //  RANGER CLASS — Oda, Ranger Trainer (Berg)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evasion-shot',
    name: 'Evasion Shot',
    class: 'Ranger',
    type: 'active',
    manaCost: 0,
    staminaCost: 14,
    cooldown: 5,
    description:
      'Fire an arrow while leaping backward, creating distance between you and the target. The arrow deals 80% weapon damage.',
    tier: 1,
  },
  {
    id: 'set-trap',
    name: 'Set Pressure Trap',
    class: 'Ranger',
    type: 'active',
    manaCost: 0,
    staminaCost: 12,
    cooldown: 8,
    description:
      'Place a hidden pressure trap at your feet. The first enemy to step on it takes 35 physical damage and is immobilized for 3 seconds. Lasts 60 seconds.',
    tier: 1,
  },
  {
    id: 'piercing-shot',
    name: 'Piercing Shot',
    class: 'Ranger',
    type: 'active',
    manaCost: 0,
    staminaCost: 22,
    cooldown: 10,
    description:
      "Draw back a reinforced arrow that penetrates armor, dealing 150% weapon damage and ignoring 50% of the target's physical defense.",
    prerequisite: 'Evasion Shot',
    tier: 2,
  },
  {
    id: 'predator-instinct',
    name: "Predator's Instinct",
    class: 'Ranger',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'Your awareness sharpens. Nearby enemies are highlighted through walls for 20m, and you deal 20% more damage to unaware targets.',
    tier: 2,
  },
  {
    id: 'rain-of-arrows',
    name: 'Rain of Arrows',
    class: 'Ranger',
    type: 'active',
    manaCost: 0,
    staminaCost: 35,
    cooldown: 30,
    description:
      'Fire a volley of arrows into the sky that rain down on a target area (5m radius) after 1.5 seconds, dealing 40 damage per arrow (8 arrows total).',
    prerequisite: 'Piercing Shot',
    tier: 3,
  },
  {
    id: 'snare-mastery',
    name: 'Snare Mastery',
    class: 'Ranger',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'Your traps deal 50% more damage, last twice as long, and you can have 3 active traps simultaneously instead of 1.',
    prerequisite: 'Set Pressure Trap',
    tier: 3,
  },

  // ═══════════════════════════════════════════════════════════
  //  MAGE CLASS — Adalbert, Sage Trainer (Monsoon)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'spark',
    name: 'Spark',
    class: 'Mage',
    type: 'active',
    manaCost: 8,
    staminaCost: 0,
    cooldown: 3,
    description:
      'Hurl a small bolt of raw mana at a target, dealing 18 ethereal damage. Low cost, low cooldown—bread and butter for any spellcaster.',
    tier: 1,
  },
  {
    id: 'mana-ward',
    name: 'Mana Ward',
    class: 'Mage',
    type: 'active',
    manaCost: 20,
    staminaCost: 0,
    cooldown: 20,
    description:
      'Project a shimmering barrier that absorbs up to 60 damage over 8 seconds. While active, incoming elemental damage is reduced by 25%.',
    tier: 1,
  },
  {
    id: 'sigil-of-fire',
    name: 'Sigil of Fire',
    class: 'Mage',
    type: 'active',
    manaCost: 25,
    staminaCost: 0,
    cooldown: 15,
    description:
      'Inscribe a flaming sigil on the ground (4m radius). While standing in the sigil, your fire spells deal 40% more damage and cost 20% less mana. Lasts 20 seconds.',
    tier: 2,
  },
  {
    id: 'arcane-syntax',
    name: 'Arcane Syntax',
    class: 'Mage',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'Your maximum mana increases by 30 and mana regeneration increases by 0.3/s. Additionally, your spells have a 10% chance to not consume mana.',
    prerequisite: 'Spark',
    tier: 2,
  },
  {
    id: 'meteor',
    name: 'Meteor',
    class: 'Mage',
    type: 'active',
    manaCost: 50,
    staminaCost: 0,
    cooldown: 45,
    description:
      'Call down a massive fireball from the sky that strikes a target area after 2 seconds, dealing 120 fire damage in a 6m radius and inflicting Burning for 10 seconds. Requires Sigil of Fire.',
    prerequisite: 'Sigil of Fire',
    tier: 3,
  },
  {
    id: 'ley-line-connection',
    name: 'Ley Line Connection',
    class: 'Mage',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'You tap directly into the ley lines. Sigils last 50% longer, and casting a spell inside any sigil restores 5 mana.',
    prerequisite: 'Arcane Syntax',
    tier: 3,
  },

  // ═══════════════════════════════════════════════════════════
  //  ROGUE CLASS — Rivka, Shadow Trainer (Levant)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'stealth',
    name: 'Stealth',
    class: 'Rogue',
    type: 'active',
    manaCost: 0,
    staminaCost: 10,
    cooldown: 12,
    description:
      'Fade into the shadows, becoming invisible for 8 seconds or until you attack. Your next attack from stealth deals 50% bonus damage.',
    tier: 1,
  },
  {
    id: 'poison-weapon',
    name: 'Poison Weapon',
    class: 'Rogue',
    type: 'active',
    manaCost: 0,
    staminaCost: 8,
    cooldown: 30,
    description:
      'Coat your weapon in venom for 30 seconds. Each hit applies a stack of poison that deals 3 decay damage per second for 10 seconds (up to 5 stacks).',
    tier: 1,
  },
  {
    id: 'shadow-step',
    name: 'Shadow Step',
    class: 'Rogue',
    type: 'active',
    manaCost: 5,
    staminaCost: 15,
    cooldown: 8,
    description:
      'Teleport behind a targeted enemy within 10m, entering stealth for 2 seconds. If you attack during this window, the hit is a guaranteed backstab.',
    prerequisite: 'Stealth',
    tier: 2,
  },
  {
    id: 'opportunist',
    name: 'Opportunist',
    class: 'Rogue',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'Backstab damage increased by an additional 40%. Attacks against staggered enemies have a 30% chance to critically strike.',
    tier: 2,
  },
  {
    id: 'death-mark',
    name: 'Death Mark',
    class: 'Rogue',
    type: 'active',
    manaCost: 10,
    staminaCost: 20,
    cooldown: 40,
    description:
      'Mark a single target for death. For 15 seconds, all damage they take is increased by 25%, and they cannot regenerate health. If the target dies while marked, cooldown is reset.',
    prerequisite: 'Shadow Step',
    tier: 3,
  },
  {
    id: 'cloak-and-dagger',
    name: 'Cloak and Dagger',
    class: 'Rogue',
    type: 'combo',
    manaCost: 5,
    staminaCost: 25,
    cooldown: 20,
    description:
      'Throw a smoke bomb, blinding enemies in a 4m radius for 3 seconds, then instantly enter stealth. Your next attack from this stealth ignores all armor.',
    prerequisite: 'Opportunist',
    tier: 3,
  },

  // ═══════════════════════════════════════════════════════════
  //  GENERAL SKILLS — Various trainers
  // ═══════════════════════════════════════════════════════════
  {
    id: 'roll-dodge',
    name: 'Survivor Roll',
    class: 'General',
    type: 'active',
    manaCost: 0,
    staminaCost: 10,
    cooldown: 0,
    description:
      'Perform a quick dodge roll in any direction. Grants brief invincibility frames during the roll animation.',
    tier: 1,
  },
  {
    id: 'push-kick',
    name: 'Push Kick',
    class: 'General',
    type: 'active',
    manaCost: 0,
    staminaCost: 8,
    cooldown: 3,
    description:
      'A simple but effective kick that deals 15 impact damage and pushes the target back. Useful for creating breathing room.',
    tier: 1,
  },
  {
    id: 'fire-affinity',
    name: 'Fire Affinity',
    class: 'General',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      'Your connection to flame deepens. Fire damage dealt increases by 15% and fire resistance increases by 10.',
    tier: 2,
  },
  {
    id: 'survivalist',
    name: 'Survivalist',
    class: 'General',
    type: 'passive',
    manaCost: 0,
    staminaCost: 0,
    cooldown: 0,
    description:
      "Food and drink effects last 25% longer. Temperature resistance increases by 10 to both cold and heat. You've learned to endure.",
    tier: 1,
  },
];

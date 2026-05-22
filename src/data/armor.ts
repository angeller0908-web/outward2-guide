import type { Armor } from '@/types/game';

export const armor: Armor[] = [
  // ═══════════════════════════════════════════════════════════
  //  TRAVELER'S SET — STARTER
  // ═══════════════════════════════════════════════════════════
  {
    id: 'travelers-hood',
    name: "Traveler's Hood",
    slot: 'head',
    physicalDefense: 3,
    impactResistance: 2,
    weight: 0.5,
    weatherProtection: { cold: 10, heat: 5, rain: 15 },
    damageResistances: { physical: 3, fire: 0, ice: 0, lightning: 0, ethereal: 0, decay: 0 },
    description:
      'A worn linen hood. It keeps the sun out of your eyes and does little else.',
    location: 'Starting equipment or Cierzo general merchant',
    tier: 'starter',
  },
  {
    id: 'travelers-garb',
    name: "Traveler's Garb",
    slot: 'chest',
    physicalDefense: 6,
    impactResistance: 4,
    weight: 3.0,
    weatherProtection: { cold: 15, heat: 10, rain: 20 },
    damageResistances: { physical: 6, fire: 0, ice: 2, lightning: 0, ethereal: 0, decay: 0 },
    description:
      'Sturdy road-wear patched together from whatever was available. Functional, not fashionable.',
    location: 'Starting equipment or Cierzo general merchant',
    tier: 'starter',
  },
  {
    id: 'travelers-pants',
    name: "Traveler's Pants",
    slot: 'legs',
    physicalDefense: 4,
    impactResistance: 3,
    weight: 2.0,
    weatherProtection: { cold: 10, heat: 5, rain: 10 },
    damageResistances: { physical: 4, fire: 0, ice: 0, lightning: 0, ethereal: 0, decay: 0 },
    description:
      "Simple trousers with reinforced knees. You'll need them for all the crawling through ruins.",
    location: 'Starting equipment or Cierzo general merchant',
    tier: 'starter',
  },
  {
    id: 'travelers-boots',
    name: "Traveler's Boots",
    slot: 'boots',
    physicalDefense: 2,
    impactResistance: 1,
    weight: 1.0,
    weatherProtection: { cold: 5, heat: 5, rain: 10 },
    damageResistances: { physical: 2, fire: 0, ice: 0, lightning: 0, ethereal: 0, decay: 0 },
    description:
      "Leather boots with worn soles. They've walked more miles than you can count.",
    location: 'Starting equipment or Cierzo general merchant',
    tier: 'starter',
  },

  // ═══════════════════════════════════════════════════════════
  //  PADDED SET — EARLY (Light armor, cold focus)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'padded-helm',
    name: 'Padded Helm',
    slot: 'head',
    physicalDefense: 5,
    impactResistance: 4,
    weight: 1.0,
    weatherProtection: { cold: 25, heat: 0, rain: 10 },
    damageResistances: { physical: 5, fire: 2, ice: 5, lightning: 0, ethereal: 0, decay: 0 },
    description:
      'Thick quilted padding wrapped around a leather frame. Warm and surprisingly good at softening blows.',
    location: 'Cierzo blacksmith or crafted: Linen Cloth x3 + Leather x1',
    tier: 'early',
  },
  {
    id: 'padded-armor',
    name: 'Padded Armor',
    slot: 'chest',
    physicalDefense: 10,
    impactResistance: 8,
    weight: 5.0,
    weatherProtection: { cold: 35, heat: 0, rain: 15 },
    damageResistances: { physical: 10, fire: 3, ice: 8, lightning: 0, ethereal: 0, decay: 0 },
    description:
      'Layers of quilted linen over boiled leather. Favored by Chersonese hunters who spend weeks in the frozen wilds.',
    location: 'Cierzo blacksmith or crafted: Linen Cloth x5 + Leather x3',
    tier: 'early',
  },

  // ═══════════════════════════════════════════════════════════
  //  IRON SET — EARLY (Heavy armor, general purpose)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'iron-helm',
    name: 'Iron Helm',
    slot: 'head',
    physicalDefense: 8,
    impactResistance: 7,
    weight: 2.0,
    weatherProtection: { cold: 5, heat: -5, rain: 5 },
    damageResistances: { physical: 8, fire: 2, ice: 0, lightning: 3, ethereal: 0, decay: 0 },
    description:
      'A simple iron half-helm. It rattles when you run and fogs your vision in the cold, but your skull stays intact.',
    location: 'Cierzo blacksmith: Iron Ingot x2',
    tier: 'early',
  },
  {
    id: 'iron-chest',
    name: 'Iron Cuirass',
    slot: 'chest',
    physicalDefense: 16,
    impactResistance: 14,
    weight: 8.0,
    weatherProtection: { cold: 5, heat: -10, rain: 5 },
    damageResistances: { physical: 16, fire: 3, ice: 0, lightning: 4, ethereal: 0, decay: 0 },
    description:
      'Hammered iron plates riveted to a leather backing. Heavy and hot, but it turns blades effectively.',
    location: 'Cierzo blacksmith: Iron Ingot x5 + Leather x2',
    tier: 'early',
  },

  // ═══════════════════════════════════════════════════════════
  //  KAZITE SKIRMISHER SET — MID (Light, mobility)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'kazite-mask',
    name: 'Kazite War Mask',
    slot: 'head',
    physicalDefense: 7,
    impactResistance: 5,
    weight: 1.0,
    weatherProtection: { cold: 10, heat: 15, rain: 5 },
    damageResistances: { physical: 7, fire: 5, ice: 0, lightning: 2, ethereal: 3, decay: 0 },
    specialEffect: 'Movement speed +5%',
    description:
      'A lacquered wooden mask adorned with clan markings. Kazite warriors say the mask watches your blind spots for you.',
    location: 'Berg — Blue Chamber quartermaster',
    tier: 'mid',
  },
  {
    id: 'kazite-vest',
    name: 'Kazite Vest',
    slot: 'chest',
    physicalDefense: 14,
    impactResistance: 10,
    weight: 4.5,
    weatherProtection: { cold: 15, heat: 20, rain: 10 },
    damageResistances: { physical: 12, fire: 6, ice: 0, lightning: 3, ethereal: 5, decay: 0 },
    specialEffect: 'Stamina cost reduction -8%',
    description:
      'Hardened leather reinforced with lacquered wooden plates. Light enough to sprint, tough enough to survive.',
    location: 'Berg — Blue Chamber quartermaster',
    tier: 'mid',
  },

  // ═══════════════════════════════════════════════════════════
  //  HOLY MISSION PLATE — MID (Heavy, fire resist)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'holy-helm',
    name: 'Consecrated Helm',
    slot: 'head',
    physicalDefense: 10,
    impactResistance: 9,
    weight: 2.5,
    weatherProtection: { cold: 5, heat: 10, rain: 5 },
    damageResistances: { physical: 10, fire: 12, ice: 0, lightning: 2, ethereal: 5, decay: 3 },
    specialEffect: 'Decay resistance +5 (aura)',
    description:
      'A crusader helm blessed by Elatt\'s flame. The visor is shaped like a sunburst, and the metal feels warm to the touch.',
    location: 'Monsoon — Holy Mission armory (faction members only)',
    tier: 'mid',
  },
  {
    id: 'holy-plate',
    name: 'Plate of the Devoted',
    slot: 'chest',
    physicalDefense: 22,
    impactResistance: 18,
    weight: 10.0,
    weatherProtection: { cold: 10, heat: 10, rain: 10 },
    damageResistances: { physical: 20, fire: 15, ice: 0, lightning: 3, ethereal: 8, decay: 5 },
    specialEffect: 'Health regeneration +0.3/s while burning is active',
    description:
      'Full plate forged in the sacred fires of Monsoon. Each plate bears prayer engravings that glow faintly in the presence of corruption.',
    location: 'Monsoon — Holy Mission armory (faction members only)',
    tier: 'mid',
  },

  // ═══════════════════════════════════════════════════════════
  //  DESERT SILK SET — LATE (Light, heat/mage focused)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'desert-turban',
    name: 'Silken Desert Turban',
    slot: 'head',
    physicalDefense: 5,
    impactResistance: 3,
    weight: 0.5,
    weatherProtection: { cold: 0, heat: 40, rain: 5 },
    damageResistances: { physical: 4, fire: 10, ice: 0, lightning: 8, ethereal: 10, decay: 3 },
    specialEffect: 'Mana cost reduction -10%',
    description:
      'Woven from enchanted Abrassar silk. The fabric shimmers like a heat mirage and keeps your thoughts cool.',
    location: 'Levant — exotic fabrics merchant',
    tier: 'late',
  },
  {
    id: 'desert-robe',
    name: 'Sandwalker Robe',
    slot: 'chest',
    physicalDefense: 10,
    impactResistance: 6,
    weight: 3.0,
    weatherProtection: { cold: 0, heat: 50, rain: 5 },
    damageResistances: { physical: 8, fire: 12, ice: 0, lightning: 10, ethereal: 15, decay: 5 },
    specialEffect: 'Mana regeneration +0.5/s',
    description:
      "A flowing robe favored by Abrassar mages. The silk is infused with ley-line dust, and it billows even when there's no wind.",
    location: 'Levant — exotic fabrics merchant',
    tier: 'late',
  },

  // ═══════════════════════════════════════════════════════════
  //  TSAR SET — ENDGAME (Heavy, all-around defense)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'tsar-helm',
    name: 'Tsar Helm',
    slot: 'head',
    physicalDefense: 14,
    impactResistance: 12,
    weight: 3.0,
    weatherProtection: { cold: 20, heat: 15, rain: 15 },
    damageResistances: { physical: 14, fire: 10, ice: 10, lightning: 10, ethereal: 8, decay: 8 },
    specialEffect: 'All resistances +3',
    description:
      'Forged from Tsar metal — an alloy lost to antiquity and rediscovered in the deepest ruins of Caldera. It weighs less than it should.',
    location: 'Caldera — Tsar Forge (requires Tsar Ingot x3)',
    tier: 'endgame',
  },
  {
    id: 'tsar-plate',
    name: 'Tsar Plate Armor',
    slot: 'chest',
    physicalDefense: 28,
    impactResistance: 24,
    weight: 12.0,
    weatherProtection: { cold: 25, heat: 20, rain: 20 },
    damageResistances: { physical: 26, fire: 14, ice: 14, lightning: 14, ethereal: 12, decay: 12 },
    specialEffect: 'Damage taken reduced by 8%',
    description:
      'The pinnacle of mortal craftsmanship. Every joint is seamless, every plate is mirror-bright. Wearing it feels like being inside a fortress.',
    location: 'Caldera — Tsar Forge (requires Tsar Ingot x8 + Gold Ingot x3)',
    tier: 'endgame',
  },
  {
    id: 'tsar-greaves',
    name: 'Tsar Greaves',
    slot: 'legs',
    physicalDefense: 18,
    impactResistance: 16,
    weight: 7.0,
    weatherProtection: { cold: 20, heat: 15, rain: 15 },
    damageResistances: { physical: 18, fire: 10, ice: 10, lightning: 10, ethereal: 8, decay: 8 },
    specialEffect: 'Stability +15 (knockdown resistance)',
    description:
      "Articulated leg armor that moves like cloth. The Tsar alloy seems to anticipate the wearer's stride.",
    location: 'Caldera — Tsar Forge (requires Tsar Ingot x5 + Gold Ingot x2)',
    tier: 'endgame',
  },
  {
    id: 'tsar-boots',
    name: 'Tsar Sabatons',
    slot: 'boots',
    physicalDefense: 10,
    impactResistance: 8,
    weight: 4.0,
    weatherProtection: { cold: 15, heat: 10, rain: 15 },
    damageResistances: { physical: 10, fire: 8, ice: 8, lightning: 8, ethereal: 6, decay: 6 },
    specialEffect: 'Movement speed penalty from heavy armor reduced by 50%',
    description:
      'Despite the full metal construction, these boots barely whisper on stone. Old magic, old metal.',
    location: 'Caldera — Tsar Forge (requires Tsar Ingot x3 + Gold Ingot x1)',
    tier: 'endgame',
  },
];

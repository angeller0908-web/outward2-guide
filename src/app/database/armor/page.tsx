'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { armor } from '@/data/armor';
import type { Armor } from '@/types/game';
import styles from './page.module.css';

type ArmorSlot = 'head' | 'chest' | 'legs' | 'boots';
type Tier = 'starter' | 'early' | 'mid' | 'late' | 'endgame';

const slotIcons: Record<ArmorSlot, string> = {
  head: '🪖',
  chest: '👕',
  legs: '👖',
  boots: '🥾',
};

const tierOrder: Record<Tier, number> = { starter: 0, early: 1, mid: 2, late: 3, endgame: 4 };

type SortKey = 'name' | 'slot' | 'physicalDefense' | 'impactResistance' | 'weight' | 'cold' | 'heat' | 'tier';

export default function ArmorPage() {
  const [search, setSearch] = useState('');
  const [slotFilter, setSlotFilter] = useState<string>('all');
  const [tierFilter, setTierFilter] = useState<string>('all');
  const [sortKey, setSortKey] = useState<SortKey>('tier');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const filtered = useMemo(() => {
    let result = armor.filter((a) => {
      if (search && !a.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (slotFilter !== 'all' && a.slot !== slotFilter) return false;
      if (tierFilter !== 'all' && a.tier !== tierFilter) return false;
      return true;
    });

    result.sort((a, b) => {
      let comparison = 0;
      switch (sortKey) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'slot':
          comparison = a.slot.localeCompare(b.slot);
          break;
        case 'physicalDefense':
          comparison = a.physicalDefense - b.physicalDefense;
          break;
        case 'impactResistance':
          comparison = a.impactResistance - b.impactResistance;
          break;
        case 'weight':
          comparison = a.weight - b.weight;
          break;
        case 'cold':
          comparison = a.weatherProtection.cold - b.weatherProtection.cold;
          break;
        case 'heat':
          comparison = a.weatherProtection.heat - b.weatherProtection.heat;
          break;
        case 'tier':
          comparison = tierOrder[a.tier] - tierOrder[b.tier];
          break;
      }
      return sortDir === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [search, slotFilter, tierFilter, sortKey, sortDir]);

  const getSortIcon = (key: SortKey) => {
    if (sortKey !== key) return '↕';
    return sortDir === 'asc' ? '↑' : '↓';
  };

  const getBadgeClass = (tier: Tier) => {
    switch (tier) {
      case 'starter':
        return styles.badgeStarter;
      case 'early':
        return styles.badgeEarly;
      case 'mid':
        return styles.badgeMid;
      case 'late':
        return styles.badgeLate;
      case 'endgame':
        return styles.badgeEndgame;
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.titleAccent}>Armor</span> Database
            </h1>
            <p className={styles.subtitle}>
              {armor.length} armor pieces across {new Set(armor.map(a => a.slot)).size} slots — click headers to sort
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search armor..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="armor-search"
            aria-label="Search armor"
          />
        </div>
        <div className={styles.filterGroup}>
          <select
            className={styles.filterSelect}
            value={slotFilter}
            onChange={(e) => setSlotFilter(e.target.value)}
            aria-label="Filter by slot"
          >
            <option value="all">All Slots</option>
            <option value="head">Head</option>
            <option value="chest">Chest</option>
            <option value="legs">Legs</option>
            <option value="boots">Boots</option>
          </select>
          <select
            className={styles.filterSelect}
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            aria-label="Filter by tier"
          >
            <option value="all">All Tiers</option>
            <option value="starter">Starter</option>
            <option value="early">Early</option>
            <option value="mid">Mid-Game</option>
            <option value="late">Late-Game</option>
            <option value="endgame">Endgame</option>
          </select>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>Name {getSortIcon('name')}</th>
              <th onClick={() => handleSort('slot')}>Slot {getSortIcon('slot')}</th>
              <th onClick={() => handleSort('physicalDefense')}>Def {getSortIcon('physicalDefense')}</th>
              <th onClick={() => handleSort('impactResistance')}>Impact {getSortIcon('impactResistance')}</th>
              <th onClick={() => handleSort('weight')}>Wt {getSortIcon('weight')}</th>
              <th onClick={() => handleSort('cold')}>Cold {getSortIcon('cold')}</th>
              <th onClick={() => handleSort('heat')}>Heat {getSortIcon('heat')}</th>
              <th>Special Effects</th>
              <th>Location / Crafting</th>
              <th onClick={() => handleSort('tier')}>Tier {getSortIcon('tier')}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td className={styles.itemName}>{item.name}</td>
                <td>
                  <span className={styles.slotCell}>
                    <span>{slotIcons[item.slot]}</span>
                    <span>{item.slot}</span>
                  </span>
                </td>
                <td className={styles.defenseCell}>+{item.physicalDefense}</td>
                <td className={styles.defenseCell}>+{item.impactResistance}%</td>
                <td>{item.weight} kg</td>
                <td className={styles.coldValue}>+{item.weatherProtection.cold}</td>
                <td className={styles.heatValue}>+{item.weatherProtection.heat}</td>
                <td className={styles.specialEffect}>{item.specialEffect || '—'}</td>
                <td className={styles.locationCell}>{item.location}</td>
                <td>
                  <span className={`${styles.badge} ${getBadgeClass(item.tier)}`}>
                    {item.tier}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={10} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)' }}>
                  No armor pieces matched your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View fallback */}
      <div className={styles.mobileCards}>
        {filtered.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <div className={styles.cardSubtitle}>
                  <span>{slotIcons[item.slot]}</span>
                  <span style={{ textTransform: 'capitalize' }}>{item.slot}</span>
                  <span>•</span>
                  <span className={`${styles.badge} ${getBadgeClass(item.tier)}`} style={{ padding: '1px 5px', fontSize: '9px' }}>
                    {item.tier}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.cardStatsGrid}>
              <div>
                <div className={styles.cardStatLabel}>Def</div>
                <div className={styles.cardStatValue}>+{item.physicalDefense}</div>
              </div>
              <div>
                <div className={styles.cardStatLabel}>Impact</div>
                <div className={styles.cardStatValue}>+{item.impactResistance}%</div>
              </div>
              <div>
                <div className={styles.cardStatLabel}>Weight</div>
                <div className={styles.cardStatValue}>{item.weight}kg</div>
              </div>
            </div>
            <div className={styles.cardStatsGrid} style={{ background: 'transparent', paddingTop: '0' }}>
              <div>
                <div className={styles.cardStatLabel}>Cold Weather</div>
                <div className={styles.cardStatValue} style={{ color: '#58a6ff' }}>+{item.weatherProtection.cold}</div>
              </div>
              <div>
                <div className={styles.cardStatLabel}>Heat Weather</div>
                <div className={styles.cardStatValue} style={{ color: '#ff7b72' }}>+{item.weatherProtection.heat}</div>
              </div>
              <div>
                <div className={styles.cardStatLabel}>Rain Protect</div>
                <div className={styles.cardStatValue}>+{item.weatherProtection.rain}%</div>
              </div>
            </div>
            {item.specialEffect && (
              <div style={{ fontSize: '11px', color: 'var(--accent)', fontStyle: 'italic' }}>
                ⭐ {item.specialEffect}
              </div>
            )}
            <p className={styles.cardDescription}>{item.description}</p>
            <div className={styles.cardDetails}>
              <div><strong style={{ color: 'var(--text-primary)' }}>Source:</strong> {item.location}</div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)' }}>
            No armor pieces matched your criteria.
          </div>
        )}
      </div>
    </div>
  );
}

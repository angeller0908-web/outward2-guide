'use client';

import { useState, useMemo } from 'react';
import { weapons } from '@/data/weapons';
import type { Weapon, WeaponType, DamageType, Tier } from '@/types/game';
import styles from './page.module.css';


const weaponTypeIcons: Record<WeaponType, string> = {
  sword: '🗡️',
  axe: '🪓',
  mace: '🔨',
  spear: '🔱',
  bow: '🏹',
  pistol: '🔫',
  chakram: '💫',
  dagger: '🗡️',
  greataxe: '🪓',
  greatsword: '⚔️',
};

const dmgTypeEmoji: Record<DamageType, string> = {
  physical: '⚪',
  fire: '🔥',
  ice: '❄️',
  lightning: '⚡',
  ethereal: '💜',
  decay: '☠️',
};

const tierOrder: Record<Tier, number> = { starter: 0, early: 1, mid: 2, late: 3, endgame: 4 };

type SortKey = 'name' | 'type' | 'damage' | 'impactDamage' | 'attackSpeed' | 'weight' | 'tier';

export default function WeaponsPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [tierFilter, setTierFilter] = useState<string>('all');
  const [dmgFilter, setDmgFilter] = useState<string>('all');
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
    let result = weapons.filter((w) => {
      if (search && !w.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (typeFilter !== 'all' && w.type !== typeFilter) return false;
      if (tierFilter !== 'all' && w.tier !== tierFilter) return false;
      if (dmgFilter !== 'all' && w.damageType !== dmgFilter) return false;
      return true;
    });

    result.sort((a, b) => {
      let comparison = 0;
      switch (sortKey) {
        case 'name': comparison = a.name.localeCompare(b.name); break;
        case 'type': comparison = a.type.localeCompare(b.type); break;
        case 'damage': comparison = a.damage - b.damage; break;
        case 'impactDamage': comparison = a.impactDamage - b.impactDamage; break;
        case 'attackSpeed': comparison = a.attackSpeed - b.attackSpeed; break;
        case 'weight': comparison = a.weight - b.weight; break;
        case 'tier': comparison = tierOrder[a.tier] - tierOrder[b.tier]; break;
      }
      return sortDir === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [search, typeFilter, tierFilter, dmgFilter, sortKey, sortDir]);

  const getSortIcon = (key: SortKey) => {
    if (sortKey !== key) return '↕';
    return sortDir === 'asc' ? '↑' : '↓';
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.titleAccent}>Weapons</span> Database
            </h1>
            <p className={styles.subtitle}>
              {weapons.length} weapons across {new Set(weapons.map(w => w.type)).size} types — click column headers to sort
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
            placeholder="Search weapons..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="weapons-search"
            aria-label="Search weapons"
          />
        </div>
        <div className={styles.filterGroup}>
          <select
            className={styles.filterSelect}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            aria-label="Filter by weapon type"
          >
            <option value="all">All Types</option>
            <option value="sword">Sword</option>
            <option value="greatsword">Greatsword</option>
            <option value="axe">Axe</option>
            <option value="greataxe">Greataxe</option>
            <option value="mace">Mace</option>
            <option value="spear">Spear</option>
            <option value="bow">Bow</option>
            <option value="pistol">Pistol</option>
            <option value="chakram">Chakram</option>
            <option value="dagger">Dagger</option>
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
            <option value="mid">Mid</option>
            <option value="late">Late</option>
            <option value="endgame">Endgame</option>
          </select>
          <select
            className={styles.filterSelect}
            value={dmgFilter}
            onChange={(e) => setDmgFilter(e.target.value)}
            aria-label="Filter by damage type"
          >
            <option value="all">All Damage</option>
            <option value="physical">Physical</option>
            <option value="fire">Fire</option>
            <option value="ice">Ice</option>
            <option value="lightning">Lightning</option>
            <option value="ethereal">Ethereal</option>
            <option value="decay">Decay</option>
          </select>
        </div>
      </div>

      <div className={styles.resultsCount}>
        Showing <span className={styles.resultsNum}>{filtered.length}</span> of {weapons.length} weapons
      </div>

      {/* Desktop Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>
                Name <span className={styles.sortIcon}>{getSortIcon('name')}</span>
              </th>
              <th onClick={() => handleSort('type')}>
                Type <span className={styles.sortIcon}>{getSortIcon('type')}</span>
              </th>
              <th onClick={() => handleSort('damage')}>
                Damage <span className={styles.sortIcon}>{getSortIcon('damage')}</span>
              </th>
              <th onClick={() => handleSort('impactDamage')}>
                Impact <span className={styles.sortIcon}>{getSortIcon('impactDamage')}</span>
              </th>
              <th onClick={() => handleSort('attackSpeed')}>
                Speed <span className={styles.sortIcon}>{getSortIcon('attackSpeed')}</span>
              </th>
              <th onClick={() => handleSort('weight')}>
                Weight <span className={styles.sortIcon}>{getSortIcon('weight')}</span>
              </th>
              <th>Damage Type</th>
              <th onClick={() => handleSort('tier')}>
                Tier <span className={styles.sortIcon}>{getSortIcon('tier')}</span>
              </th>
              <th>Special</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((weapon) => (
              <tr key={weapon.id}>
                <td>
                  <span className={styles.weaponName}>
                    <span className={styles.weaponIcon}>{weaponTypeIcons[weapon.type]}</span>
                    {weapon.name}
                  </span>
                </td>
                <td style={{ textTransform: 'capitalize' }}>{weapon.type}</td>
                <td>{weapon.damage}</td>
                <td>{weapon.impactDamage}</td>
                <td>
                  <div className={styles.speedBar}>
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`${styles.speedDot} ${dot <= weapon.attackSpeed ? styles.speedDotActive : ''}`}
                      />
                    ))}
                  </div>
                </td>
                <td>{weapon.weight} kg</td>
                <td>
                  <span className={`${styles.dmgType} ${styles[`dmg${weapon.damageType.charAt(0).toUpperCase() + weapon.damageType.slice(1)}`]}`}>
                    {dmgTypeEmoji[weapon.damageType]} {weapon.damageType}
                  </span>
                </td>
                <td>
                  <span className={`${styles.tier} ${styles[`tier${weapon.tier.charAt(0).toUpperCase() + weapon.tier.slice(1)}`]}`}>
                    {weapon.tier}
                  </span>
                </td>
                <td style={{ maxWidth: '200px', fontSize: 'var(--text-xs)' }}>
                  {weapon.specialEffect || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className={styles.cardGrid}>
        {filtered.map((weapon) => (
          <div key={weapon.id} className={styles.mobileCard}>
            <div className={styles.mobileCardHeader}>
              <div>
                <div className={styles.mobileCardName}>
                  {weaponTypeIcons[weapon.type]} {weapon.name}
                </div>
                <div className={styles.mobileCardType}>
                  {weapon.type} · <span className={`${styles.dmgType} ${styles[`dmg${weapon.damageType.charAt(0).toUpperCase() + weapon.damageType.slice(1)}`]}`}>
                    {dmgTypeEmoji[weapon.damageType]} {weapon.damageType}
                  </span>
                </div>
              </div>
              <span className={`${styles.tier} ${styles[`tier${weapon.tier.charAt(0).toUpperCase() + weapon.tier.slice(1)}`]}`}>
                {weapon.tier}
              </span>
            </div>
            {weapon.specialEffect && (
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-fire)', marginBottom: 'var(--space-2)' }}>
                ✦ {weapon.specialEffect}
              </div>
            )}
            <div className={styles.mobileCardStats}>
              <div>
                <div className={styles.mobileStatLabel}>Damage</div>
                <div className={styles.mobileStatValue}>{weapon.damage}</div>
              </div>
              <div>
                <div className={styles.mobileStatLabel}>Impact</div>
                <div className={styles.mobileStatValue}>{weapon.impactDamage}</div>
              </div>
              <div>
                <div className={styles.mobileStatLabel}>Weight</div>
                <div className={styles.mobileStatValue}>{weapon.weight}kg</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

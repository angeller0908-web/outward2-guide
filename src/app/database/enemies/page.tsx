'use client';

import { useState, useMemo } from 'react';
import { enemies } from '@/data/enemies';
import type { Enemy, EnemyType, DamageType } from '@/types/game';
import styles from './page.module.css';

const enemyTypeLabels: Record<EnemyType, string> = {
  common: 'Common Enemy',
  elite: 'Elite Threat',
  boss: 'Legendary Boss',
};

const getEnemyBadgeClass = (type: EnemyType) => {
  switch (type) {
    case 'common':
      return styles.badgeCommon;
    case 'elite':
      return styles.badgeElite;
    case 'boss':
      return styles.badgeBoss;
  }
};

const getElementTagClass = (element: DamageType) => {
  switch (element) {
    case 'physical':
      return styles.elemPhysical;
    case 'fire':
      return styles.elemFire;
    case 'ice':
      return styles.elemIce;
    case 'lightning':
      return styles.elemLightning;
    case 'ethereal':
      return styles.elemEthereal;
    case 'decay':
      return styles.elemDecay;
  }
};

export default function EnemiesPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');

  // Extract unique locations for filtering
  const locations = useMemo(() => {
    const set = new Set<string>();
    enemies.forEach((e) => {
      e.locations.forEach((loc) => set.add(loc));
    });
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return enemies.filter((e) => {
      if (
        search &&
        !e.name.toLowerCase().includes(search.toLowerCase()) &&
        !e.description.toLowerCase().includes(search.toLowerCase()) &&
        !e.strategy.toLowerCase().includes(search.toLowerCase()) &&
        !e.locations.some((l) => l.toLowerCase().includes(search.toLowerCase())) &&
        !e.drops.some((d) => d.item.toLowerCase().includes(search.toLowerCase()))
      ) {
        return false;
      }
      if (typeFilter !== 'all' && e.type !== typeFilter) return false;
      if (locationFilter !== 'all' && !e.locations.includes(locationFilter)) return false;
      return true;
    });
  }, [search, typeFilter, locationFilter]);

  // Render difficulty skull icons
  const renderDifficulty = (difficulty: number) => {
    return Array.from({ length: difficulty })
      .map((_, i) => '💀')
      .join('');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.titleAccent}>Enemies & Bosses</span> Database
            </h1>
            <p className={styles.subtitle}>
              Analyze vulnerabilities, drops, and tactical strategies for all {enemies.length} creatures in Outward 2
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
            placeholder="Search enemies, locations, strategy, loot..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="enemy-search"
            aria-label="Search enemies"
          />
        </div>
        <div className={styles.filterGroup}>
          <select
            className={styles.filterSelect}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            aria-label="Filter by type"
          >
            <option value="all">All Types</option>
            <option value="common">Common Enemies</option>
            <option value="elite">Elite Threats</option>
            <option value="boss">Legendary Bosses</option>
          </select>
          <select
            className={styles.filterSelect}
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            aria-label="Filter by location"
          >
            <option value="all">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Enemies Grid */}
      <div className={styles.enemiesGrid}>
        {filtered.length > 0 ? (
          filtered.map((enemy) => (
            <div
              key={enemy.id}
              className={`${styles.card} ${enemy.type === 'boss' ? styles.cardBoss : ''}`}
            >
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.enemyTitle}>{enemy.name}</h3>
                  <span className={`${styles.enemyTypeBadge} ${getEnemyBadgeClass(enemy.type)}`}>
                    {enemyTypeLabels[enemy.type]}
                  </span>
                </div>
                <div className={styles.difficultyStars} title={`Difficulty: ${enemy.difficulty}/5`}>
                  {renderDifficulty(enemy.difficulty)}
                </div>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span>HP:</span>
                  <span className={styles.statValue}>{enemy.health}</span>
                </div>
              </div>

              <div className={styles.locations}>
                <strong>Locations:</strong>
                <div className={styles.locationTags}>
                  {enemy.locations.map((loc, idx) => (
                    <span key={idx} className={styles.locationTag}>
                      📍 {loc}
                    </span>
                  ))}
                </div>
              </div>

              <p className={styles.description}>&ldquo;{enemy.description}&rdquo;</p>

              <div className={styles.vulnerabilities}>
                <div className={styles.elementGroup}>
                  <span className={styles.elementTitle}>Weaknesses</span>
                  <div className={styles.elementTags}>
                    {enemy.weaknesses.length > 0 ? (
                      enemy.weaknesses.map((elem) => (
                        <span key={elem} className={`${styles.elementTag} ${getElementTagClass(elem)}`}>
                          {elem}
                        </span>
                      ))
                    ) : (
                      <span className={styles.elemNone}>None</span>
                    )}
                  </div>
                </div>
                <div className={styles.elementGroup}>
                  <span className={styles.elementTitle}>Resistances</span>
                  <div className={styles.elementTags}>
                    {enemy.resistances.length > 0 ? (
                      enemy.resistances.map((elem) => (
                        <span key={elem} className={`${styles.elementTag} ${getElementTagClass(elem)}`}>
                          {elem}
                        </span>
                      ))
                    ) : (
                      <span className={styles.elemNone}>None</span>
                    )}
                  </div>
                </div>
              </div>

              {enemy.drops.length > 0 && (
                <div className={styles.dropsBox}>
                  <span className={styles.dropsTitle}>Valuable Loot & Drops</span>
                  <div className={styles.dropsList}>
                    {enemy.drops.map((drop, idx) => (
                      <div key={idx} className={styles.dropItem}>
                        <span>🛡️ {drop.item}</span>
                        <span className={styles.dropChance}>{(drop.chance * 100).toFixed(0)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.strategyBox}>
                <span className={styles.strategyTitle}>Tactical Strategy Guide</span>
                <span className={styles.strategyText}>{enemy.strategy}</span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--space-12) 0', color: 'var(--text-secondary)' }}>
            No enemies matched your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

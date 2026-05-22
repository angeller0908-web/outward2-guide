'use client';

import { useState, useMemo } from 'react';
import { skills } from '@/data/skills';
import type { Skill } from '@/types/game';
import styles from './page.module.css';

const classIcons: Record<string, string> = {
  Warrior: '⚔️',
  Ranger: '🏹',
  Mage: '🔮',
  Rogue: '👤',
  General: '🎒',
};

export default function SkillsPage() {
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    let result = skills.filter((s) => {
      if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (classFilter !== 'all' && s.class !== classFilter) return false;
      if (typeFilter !== 'all' && s.type !== typeFilter) return false;
      return true;
    });

    // Sort by class first, then by tier, then by name
    result.sort((a, b) => {
      if (a.class !== b.class) return a.class.localeCompare(b.class);
      if (a.tier !== b.tier) return a.tier - b.tier;
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [search, classFilter, typeFilter]);

  const getClassDecoration = (className: string) => {
    switch (className) {
      case 'Warrior': return styles.decorWarrior;
      case 'Ranger': return styles.decorRanger;
      case 'Mage': return styles.decorMage;
      case 'Rogue': return styles.decorRogue;
      default: return styles.decorGeneral;
    }
  };

  const getTypeBadgeClass = (type: 'active' | 'passive' | 'combo') => {
    switch (type) {
      case 'active': return styles.badgeActive;
      case 'passive': return styles.badgePassive;
      case 'combo': return styles.badgeCombo;
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.titleAccent}>Skills</span> & Abilities
            </h1>
            <p className={styles.subtitle}>
              {skills.length} skills from professional trainers. Specialize in up to three classes to shape your playstyle.
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
            placeholder="Search skills or descriptions..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="skills-search"
            aria-label="Search skills"
          />
        </div>
        <div className={styles.filterGroup}>
          <select
            className={styles.filterSelect}
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            aria-label="Filter by class/trainer"
          >
            <option value="all">All Trainers</option>
            <option value="Warrior">Warrior Trainer (Burac)</option>
            <option value="Ranger">Ranger Trainer (Oda)</option>
            <option value="Mage">Sage Trainer (Adalbert)</option>
            <option value="Rogue">Shadow Trainer (Rivka)</option>
            <option value="General">General Skills</option>
          </select>
          <select
            className={styles.filterSelect}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            aria-label="Filter by type"
          >
            <option value="all">All Types</option>
            <option value="active">Active</option>
            <option value="passive">Passive</option>
            <option value="combo">Combo</option>
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      <div className={styles.skillsGrid}>
        {filtered.map((skill) => (
          <div className={styles.card} key={skill.id}>
            <div className={`${styles.cardClassDecoration} ${getClassDecoration(skill.class)}`} />
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.skillTitle}>{skill.name}</h3>
                <span className={styles.skillClass}>
                  <span>{classIcons[skill.class] || '🎒'}</span>
                  <span>{skill.class} Class</span>
                </span>
              </div>
              <span className={`${styles.typeBadge} ${getTypeBadgeClass(skill.type)}`}>
                {skill.type}
              </span>
            </div>

            {skill.type === 'active' || skill.type === 'combo' ? (
              <div className={styles.costGrid}>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Mana</span>
                  <span className={`${styles.costValue} ${styles.manaColor}`}>
                    {skill.manaCost > 0 ? `${skill.manaCost}` : '—'}
                  </span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Stamina</span>
                  <span className={`${styles.costValue} ${styles.staminaColor}`}>
                    {skill.staminaCost > 0 ? `${skill.staminaCost}` : '—'}
                  </span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Cooldown</span>
                  <span className={`${styles.costValue} ${styles.cooldownColor}`}>
                    {skill.cooldown > 0 ? `${skill.cooldown}s` : '—'}
                  </span>
                </div>
              </div>
            ) : (
              <div className={styles.costGrid} style={{ display: 'block', padding: 'var(--space-2) 0', background: 'transparent' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em' }}>
                  🧠 Passive Effect
                </div>
              </div>
            )}

            <p className={styles.skillDesc}>{skill.description}</p>

            <div className={styles.cardFooter}>
              <div className={styles.tierText}>
                🎯 Trainer Tier: <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Tier {skill.tier}</span>
              </div>
              {skill.prerequisite && (
                <div className={styles.prereqText}>
                  ⚠️ Prerequisite: {skill.prerequisite}
                </div>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--text-tertiary)' }}>
            No skills matched your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './SearchModal.module.css';
import { guides } from '@/data/guides';
import { weapons } from '@/data/weapons';
import { armor } from '@/data/armor';
import { skills } from '@/data/skills';
import { enemies } from '@/data/enemies';
import { recipes } from '@/data/recipes';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  href: string;
  description?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const recentSearches = [
  'Potato Mode',
  'Exercise System',
  'Iron Sword',
  'Shield Bash',
];

const popularSearches = [
  'Starting Scenarios',
  'Armor',
  'Crafting',
  'Highwayman',
];

// Real search index built from the site's actual guide + database content.
// Database entries have no per-item detail route, so they link to their
// category page (which server-renders the entry name).
const searchIndex: SearchResult[] = [
  ...guides.map((g) => ({
    id: `guide-${g.slug}`,
    title: g.title,
    category: 'Guides',
    href: `/guides/${g.slug}`,
    description: g.description,
  })),
  ...weapons.map((w) => ({
    id: `weapon-${w.id}`,
    title: w.name,
    category: 'Weapons',
    href: '/database/weapons',
    description: w.description,
  })),
  ...armor.map((a) => ({
    id: `armor-${a.id}`,
    title: a.name,
    category: 'Armor',
    href: '/database/armor',
    description: a.description,
  })),
  ...skills.map((s) => ({
    id: `skill-${s.id}`,
    title: s.name,
    category: 'Skills',
    href: '/database/skills',
    description: s.description,
  })),
  ...enemies.map((e) => ({
    id: `enemy-${e.id}`,
    title: e.name,
    category: 'Enemies',
    href: '/database/enemies',
    description: e.description,
  })),
  ...recipes.map((r) => ({
    id: `recipe-${r.id}`,
    title: r.name,
    category: 'Crafting',
    href: '/database/crafting',
    description: r.description,
  })),
];

const categoryIcons: Record<string, string> = {
  Guides: '📖',
  Weapons: '⚔️',
  Armor: '🛡️',
  Skills: '✨',
  Enemies: '👹',
  Crafting: '🧪',
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Filter results based on query (title matches ranked first, capped for sanity)
  const q = query.trim().toLowerCase();
  const filteredResults = q.length > 0
    ? searchIndex
        .filter(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.category.toLowerCase().includes(q) ||
            r.description?.toLowerCase().includes(q)
        )
        .sort(
          (a, b) =>
            (a.title.toLowerCase().includes(q) ? 0 : 1) -
            (b.title.toLowerCase().includes(q) ? 0 : 1)
        )
        .slice(0, 24)
    : [];

  // Group results by category
  const groupedResults = filteredResults.reduce<Record<string, SearchResult[]>>(
    (acc, result) => {
      if (!acc[result.category]) {
        acc[result.category] = [];
      }
      acc[result.category].push(result);
      return acc;
    },
    {}
  );

  // Flat list for keyboard navigation
  const flatResults = Object.values(groupedResults).flat();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Keyboard navigation within modal
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < flatResults.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : flatResults.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && flatResults[selectedIndex]) {
            window.location.href = flatResults[selectedIndex].href;
            onClose();
          }
          break;
      }
    },
    [flatResults, selectedIndex, onClose]
  );

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const items = resultsRef.current.querySelectorAll('[data-result-item]');
      items[selectedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const showInitialState = query.length === 0;

  return (
    <div className={styles.backdrop} onClick={onClose} onKeyDown={handleKeyDown}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        {/* Search Input */}
        <div className={styles.inputWrapper}>
          <svg
            className={styles.searchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="Search guides, items, builds..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(-1);
            }}
            aria-label="Search"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            className={styles.escBtn}
            onClick={onClose}
            type="button"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Content */}
        <div className={styles.content} ref={resultsRef}>
          {showInitialState && (
            <div className={styles.initialState}>
              {/* Recent Searches */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Recent Searches
                </h3>
                <div className={styles.tagList}>
                  {recentSearches.map((term) => (
                    <button
                      key={term}
                      className={styles.searchTag}
                      onClick={() => setQuery(term)}
                      type="button"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Searches */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Popular Searches
                </h3>
                <div className={styles.tagList}>
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      className={styles.searchTag}
                      onClick={() => setQuery(term)}
                      type="button"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hint */}
              <div className={styles.hint}>
                <span className={styles.hintKey}>↑↓</span> navigate
                <span className={styles.hintKey}>↵</span> select
                <span className={styles.hintKey}>esc</span> close
              </div>
            </div>
          )}

          {/* Search Results */}
          {!showInitialState && filteredResults.length > 0 && (
            <div className={styles.results}>
              {Object.entries(groupedResults).map(([category, results]) => (
                <div key={category} className={styles.resultGroup}>
                  <h3 className={styles.groupTitle}>
                    <span className={styles.groupIcon}>
                      {categoryIcons[category] || '📄'}
                    </span>
                    {category}
                    <span className={styles.groupCount}>{results.length}</span>
                  </h3>
                  {results.map((result) => {
                    const globalIndex = flatResults.findIndex(
                      (r) => r.id === result.id
                    );
                    return (
                      <Link
                        key={result.id}
                        href={result.href}
                        className={`${styles.resultItem} ${
                          globalIndex === selectedIndex ? styles.resultItemSelected : ''
                        }`}
                        data-result-item
                        onClick={onClose}
                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                      >
                        <div className={styles.resultInfo}>
                          <span className={styles.resultTitle}>{result.title}</span>
                          {result.description && (
                            <span className={styles.resultDesc}>
                              {result.description}
                            </span>
                          )}
                        </div>
                        <svg
                          className={styles.resultArrow}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!showInitialState && filteredResults.length === 0 && (
            <div className={styles.noResults}>
              <span className={styles.noResultsIcon}>🔍</span>
              <p className={styles.noResultsText}>
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className={styles.noResultsHint}>
                Try different keywords or browse our categories
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.footerBrand}>Outward 2 Guide Search</span>
          <div className={styles.footerKeys}>
            <span className={styles.hintKey}>⌘K</span> to toggle
          </div>
        </div>
      </div>
    </div>
  );
}

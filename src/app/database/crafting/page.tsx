'use client';

import { useState, useMemo } from 'react';
import { recipes } from '@/data/recipes';
import type { CraftingRecipe, RecipeCategory } from '@/types/game';
import styles from './page.module.css';

const categoryLabels: Record<RecipeCategory, string> = {
  cooking: 'Cooking',
  alchemy: 'Alchemy',
  crafting: 'Crafting',
  enchanting: 'Enchanting',
};

const getBadgeClass = (category: RecipeCategory) => {
  switch (category) {
    case 'cooking':
      return styles.badgeCooking;
    case 'alchemy':
      return styles.badgeAlchemy;
    case 'crafting':
      return styles.badgeCrafting;
    case 'enchanting':
      return styles.badgeEnchanting;
  }
};

export default function CraftingPage() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [stationFilter, setStationFilter] = useState<string>('all');

  // Dynamically extract all unique stations for filtering
  const stations = useMemo(() => {
    const list = new Set<string>();
    recipes.forEach((r) => {
      if (r.station) list.add(r.station);
    });
    return Array.from(list).sort();
  }, []);

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      if (
        search &&
        !r.name.toLowerCase().includes(search.toLowerCase()) &&
        !r.result.item.toLowerCase().includes(search.toLowerCase()) &&
        !r.description.toLowerCase().includes(search.toLowerCase()) &&
        !r.ingredients.some((i) => i.item.toLowerCase().includes(search.toLowerCase()))
      ) {
        return false;
      }
      if (categoryFilter !== 'all' && r.category !== categoryFilter) return false;
      if (stationFilter !== 'all' && r.station !== stationFilter) return false;
      return true;
    });
  }, [search, categoryFilter, stationFilter]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>
              <span className={styles.titleAccent}>Crafting & Recipe</span> Database
            </h1>
            <p className={styles.subtitle}>
              Discover all {recipes.length} cooking, alchemy, and forging recipes in Outward 2
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
            placeholder="Search recipes, ingredients, results..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="recipe-search"
            aria-label="Search recipes"
          />
        </div>
        <div className={styles.filterGroup}>
          <select
            className={styles.filterSelect}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            <option value="cooking">Cooking</option>
            <option value="alchemy">Alchemy</option>
            <option value="crafting">Crafting</option>
            <option value="enchanting">Enchanting</option>
          </select>
          <select
            className={styles.filterSelect}
            value={stationFilter}
            onChange={(e) => setStationFilter(e.target.value)}
            aria-label="Filter by station"
          >
            <option value="all">All Stations</option>
            {stations.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className={styles.recipesGrid}>
        {filtered.length > 0 ? (
          filtered.map((recipe) => (
            <div key={recipe.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.recipeTitle}>{recipe.name}</h3>
                  <span className={`${styles.categoryBadge} ${getBadgeClass(recipe.category)}`}>
                    {categoryLabels[recipe.category]}
                  </span>
                </div>
                {recipe.result.quantity > 1 && (
                  <span className={styles.recipeResultQty}>x{recipe.result.quantity} Result</span>
                )}
              </div>

              <div className={styles.ingredientsBox}>
                <span className={styles.ingredientsTitle}>Ingredients Required</span>
                <div className={styles.ingredientsList}>
                  {recipe.ingredients.map((ing, idx) => (
                    <div key={idx} className={styles.ingredientItem}>
                      <span className={styles.ingredientName}>{ing.item}</span>
                      <span className={styles.ingredientQty}>x{ing.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className={styles.recipeDesc}>{recipe.description}</p>

              <div className={styles.cardFooter}>
                <span>Yield: <strong style={{ color: 'var(--text-primary)' }}>{recipe.result.item}</strong></span>
                {recipe.station && (
                  <span>
                    Station: <span className={styles.stationLabel}>{recipe.station}</span>
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--space-12) 0', color: 'var(--text-secondary)' }}>
            No recipes matched your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { guides } from '@/data/guides';
import { getGuideContent } from '@/data/guideContent';
import styles from './page.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Next.js static generation requires generateStaticParams for static exports
export async function generateStaticParams() {
  // Return all database guides
  const databaseSlugs = guides.map((g) => ({ slug: g.slug }));

  // Return all alternative/static slugs to ensure they compile perfectly at build time
  const alternativeSlugs = [
    { slug: 'everything-we-know' },
    { slug: 'starting-scenarios-guide' },
    { slug: 'combat-system-guide' },
    { slug: 'magic-system-explained' },
    { slug: 'survival-essentials' },
    { slug: 'best-starter-builds' },
    { slug: 'outward-1-vs-2' },
    { slug: 'pc-requirements-potato-mode' },
    { slug: 'co-op-guide' },
    { slug: 'cooking-recipes-guide' },
    { slug: 'alchemy-potions-guide' },
    { slug: 'mercenary-faction-guide' },
    { slug: 'historians-faction-guide' },
    { slug: 'humanitarian-faction-guide' },
    { slug: 'backpack-management-tips' },
    { slug: 'class-trainer-locations' },
    // 4 newly discovered UI slugs
    { slug: 'defeat-scenarios-guide' },
    { slug: 'hardcore-mode-guide' },
    { slug: 'dual-wielding-builds' },
    { slug: 'aurai-world-lore' },
  ];

  // Merge lists and deduplicate by slug
  const allSlugs = [...databaseSlugs, ...alternativeSlugs];
  const uniqueSlugs = Array.from(new Set(allSlugs.map((s) => s.slug))).map((slug) => ({
    slug,
  }));

  return uniqueSlugs;
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideContent(slug);

  const breadcrumbItems = [
    { label: 'Guides', href: '/guides' },
    { label: guide.title, href: `/guides/${guide.slug}` },
  ];

  // Banner class maps to category
  const bannerClass =
    guide.category === 'beginner'
      ? styles.bannerBeginner
      : guide.category === 'quests'
      ? styles.bannerQuests
      : guide.category === 'bosses'
      ? styles.bannerBosses
      : guide.category === 'survival'
      ? styles.bannerSurvival
      : guide.category === 'builds'
      ? styles.bannerBuilds
      : styles.bannerBeginner;

  // Tag difficulty class maps to difficulty
  const difficultyClass =
    guide.difficulty === 'beginner'
      ? styles.diffBeginner
      : guide.difficulty === 'intermediate'
      ? styles.diffIntermediate
      : styles.diffAdvanced;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Back Link */}
        <Link href="/guides" className={styles.backBtn}>
          <span>← Back to Guides</span>
        </Link>

        {/* Article content */}
        <article className={styles.article}>
          {/* Header Banner */}
          <header className={`${styles.banner} ${bannerClass}`}>
            <span className={styles.categoryTag}>{guide.category}</span>
            <h1 className={styles.title}>{guide.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span>👤 By {guide.author}</span>
              </div>
              <div className={styles.metaItem}>
                <span>📅 {guide.date}</span>
              </div>
              <div className={styles.metaItem}>
                <span>⏱ {guide.readTime} min read</span>
              </div>
              <div className={styles.metaItem}>
                <span className={`${styles.difficultyTag} ${difficultyClass}`}>
                  {guide.difficulty}
                </span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className={styles.body}>
            <p className={styles.intro}>{guide.introduction}</p>

            {guide.sections.map((sec, idx) => (
              <section key={idx} className={styles.section}>
                <h2 className={styles.sectionTitle}>{sec.title}</h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={styles.paragraph}>
                    {p}
                  </p>
                ))}

                {sec.subList && (
                  <ul className={styles.list}>
                    {sec.subList.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {sec.alertText && (
                  <div
                    className={`${styles.alert} ${
                      sec.alertType === 'danger'
                        ? styles.alertDanger
                        : sec.alertType === 'warning'
                        ? styles.alertWarning
                        : styles.alertInfo
                    }`}
                  >
                    <div className={styles.alertTitle}>
                      {sec.alertType === 'danger'
                        ? '🚨 CRITICAL WARNING'
                        : sec.alertType === 'warning'
                        ? '⚠ TACTICAL NOTE'
                        : '💡 PRO TIP'}
                    </div>
                    <div>{sec.alertText}</div>
                  </div>
                )}
              </section>
            ))}

            {/* Combat Chain Widget if present */}
            {guide.combatChain && (
              <div className={styles.combatChainWidget}>
                <h3 className={styles.widgetTitle}>Recommended Tactical Combat Combo</h3>
                <div className={styles.chainSteps}>
                  {guide.combatChain.map((step, sIdx) => {
                    const isLast = sIdx === (guide.combatChain?.length ?? 0) - 1;
                    return (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <div className={styles.chainStep}>{step}</div>
                        {!isLast && <span className={styles.chainArrow}>➔</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Recommended Gear Widget if present */}
            {guide.recommendedGear && (
              <div className={styles.gearBox}>
                <h3 className={styles.widgetTitle} style={{ marginBottom: 'var(--space-4)' }}>
                  ⚔ Recommended Character Gear & Skills
                </h3>
                <div className={styles.gearGrid}>
                  <div className={styles.gearCol}>
                    <div className={styles.gearColTitle}>Weapons & Offhands</div>
                    {guide.recommendedGear.weapons.map((w, wIdx) => (
                      <div key={wIdx} className={styles.gearItem}>
                        ✦ {w}
                      </div>
                    ))}
                  </div>
                  <div className={styles.gearCol}>
                    <div className={styles.gearColTitle}>Armor Loadout</div>
                    {guide.recommendedGear.armor.map((a, aIdx) => (
                      <div key={aIdx} className={styles.gearItem}>
                        ✦ {a}
                      </div>
                    ))}
                  </div>
                  <div className={styles.gearCol}>
                    <div className={styles.gearColTitle}>Trainer Skills</div>
                    {guide.recommendedGear.skills.map((s, sIdx) => (
                      <div key={sIdx} className={styles.gearItem}>
                        ✦ {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Loot drop table if present */}
            {guide.lootDropTable && (
              <div className={styles.lootBox}>
                <h3 className={styles.widgetTitle}>Guaranteed & Rare Foe Loot Drops</h3>
                <table className={styles.lootTable}>
                  <thead>
                    <tr>
                      <th className={styles.lootTh}>Item Reward Name</th>
                      <th className={styles.lootTh}>Acquisition Probability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guide.lootDropTable.map((loot, lIdx) => (
                      <tr key={lIdx} className={styles.lootTr}>
                        <td className={styles.lootTd}>{loot.item}</td>
                        <td className={styles.lootTd} style={{ color: 'var(--primary)' }}>
                          {loot.chance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Key Takeaways */}
            <div className={styles.takeaways}>
              <h3 className={styles.takeawaysTitle}>
                <span>🛡</span> Key Survival Strategy Takeaways
              </h3>
              <div className={styles.takeawayList}>
                {guide.keyTakeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className={styles.takeawayItem}>
                    {takeaway}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'News', href: '/news' },
  { label: 'Guides', href: '/guides' },
  { label: 'Database', href: '/database' },
];

interface NavbarProps {
  onSearchOpen?: () => void;
}

export default function Navbar({ onSearchOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSearchClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    onSearchOpen?.();
  }, [onSearchOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Outward 2 Guide - Home">
            <span className={styles.logoIcon}>⚔</span>
            <span className={styles.logoText}>
              OUTWARD <span className={styles.logoAccent}>2</span> GUIDE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks} role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                  role="menuitem"
                >
                  {link.label}
                  <span className={styles.linkUnderline} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className={styles.actions}>
            <button
              className={styles.searchBtn}
              onClick={handleSearchClick}
              aria-label="Search (Cmd+K)"
              type="button"
            >
              <svg
                width="18"
                height="18"
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
              <span className={styles.searchShortcut}>⌘K</span>
            </button>

            {/* Hamburger */}
            <button
              className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`${styles.drawer} ${isMobileMenuOpen ? styles.drawerOpen : ''}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerContent}>
          <nav className={styles.drawerNav}>
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.drawerLink} ${isActive(link.href) ? styles.drawerLinkActive : ''}`}
                style={{ animationDelay: `${index * 50 + 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.drawerLinkLabel}>{link.label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </nav>

          <button
            className={styles.drawerSearchBtn}
            onClick={handleSearchClick}
            type="button"
          >
            <svg
              width="18"
              height="18"
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
            Search...
            <span className={styles.searchShortcut}>⌘K</span>
          </button>
        </div>
      </aside>
    </>
  );
}

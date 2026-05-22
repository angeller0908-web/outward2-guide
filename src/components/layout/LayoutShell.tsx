'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import SearchModal from './SearchModal';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  // Global Cmd+K shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Navbar onSearchOpen={openSearch} />
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
      {children}
    </>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import LayoutShell from '@/components/layout/LayoutShell';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Outward 2 Guide | Walkthroughs, Builds, Database & Interactive Map',
  description:
    'The ultimate Outward 2 guide — comprehensive walkthroughs, character builds, weapon & armor database, interactive map, boss strategies, skill trees, crafting recipes, and co-op tips for Nine Dots Studio\'s open-world RPG.',
  keywords: [
    'Outward 2',
    'Outward 2 guide',
    'Outward 2 walkthrough',
    'Outward 2 builds',
    'Outward 2 database',
    'Outward 2 map',
    'Outward 2 weapons',
    'Outward 2 armor',
    'Outward 2 boss guide',
    'Outward 2 skills',
    'Outward 2 recipes',
    'Nine Dots Studio',
  ],
  openGraph: {
    title: 'Outward 2 Guide | Walkthroughs, Builds, Database & Interactive Map',
    description:
      'Your ultimate companion for Outward 2. Comprehensive guides, interactive database, build planner, and interactive map.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Outward 2 Guide',
    url: 'https://outward2guide.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outward 2 Guide | Walkthroughs, Builds, Database & Interactive Map',
    description:
      'Your ultimate companion for Outward 2. Comprehensive guides, interactive database, build planner, and interactive map.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>
          <main
            style={{
              minHeight: '100vh',
              paddingTop: 'var(--navbar-height)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {children}
          </main>
        </LayoutShell>
        <Footer />
      </body>
    </html>
  );
}

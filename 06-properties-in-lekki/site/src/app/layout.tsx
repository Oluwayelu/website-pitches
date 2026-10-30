import type { Metadata, Viewport } from 'next';
import { Libre_Caslon_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const caslon = Libre_Caslon_Display({ subsets: ['latin'], weight: '400', variable: '--font-caslon' });
const source = Source_Sans_3({ subsets: ['latin'], variable: '--font-source' });
export const metadata: Metadata = {
  title: 'Properties in Lekki Lagos | Property guides & listings for Lekki, Lagos',
  description: 'We teach before you pay. Honest guidance, property guides and listings for Lekki & Lagos living. Call or WhatsApp 0803 829 5185.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Properties in Lekki Lagos', description: 'We teach before you pay.', images: ['/img/badge.webp'], type: 'website' },
  icons: { icon: '/img/badge.webp' },
};
export const viewport: Viewport = { themeColor: '#0F5E63', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: BIZ.name, telephone: BIZ.tel,
  areaServed: ['Lekki', 'Ajah', 'Ikoyi', 'Lagos'], address: { '@type': 'PostalAddress', addressLocality: 'Lekki', addressRegion: 'Lagos', addressCountry: 'NG' }, sameAs: [BIZ.facebook],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${caslon.variable} ${source.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

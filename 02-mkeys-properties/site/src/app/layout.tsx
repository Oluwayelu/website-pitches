import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'Mkeys Properties | Houses for sale & rent in Lekki, Lagos',
  description: 'Verified homes for sale and rent across Lekki, Ajah, VGC and Ikate, Lagos. Browse listings and enquire on WhatsApp. CAC registered, RC 3802584.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Mkeys Properties, Lekki, Lagos', description: 'Find your key to Lekki living.', images: ['/img/l1.webp'], type: 'website' },
  icons: { icon: '/img/c2.webp' },
};
export const viewport: Viewport = { themeColor: '#0E1B2C', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: BIZ.name, telephone: BIZ.tel, email: BIZ.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Lekki', addressRegion: 'Lagos', addressCountry: 'NG' },
  sameAs: [BIZ.instagram],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body>
    </html>
  );
}

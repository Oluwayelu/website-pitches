import type { Metadata, Viewport } from 'next';
import { Italiana, Lato } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const italiana = Italiana({ subsets: ['latin'], weight: '400', variable: '--font-italiana' });
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' });
export const metadata: Metadata = {
  title: 'Quicken Events & More | Luxury wedding & event planner in Benin City',
  description: 'Luxury wedding, social and corporate event planning across Benin City, Asaba and Delta. TNNBP23 award nominee. Plan your event on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Quicken Events & More, Benin City', description: 'Exceeding expectations, one celebration at a time.', images: ['/img/hero1.webp'], type: 'website' },
  icons: { icon: '/img/hero1.webp' },
};
export const viewport: Viewport = { themeColor: '#111111', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: BIZ.name, description: 'Luxury event planner: weddings, socials and corporate events.',
  telephone: BIZ.phones[0].tel, email: BIZ.email,
  address: { '@type': 'PostalAddress', streetAddress: 'No 2, Divine Close, off Iwehen Street, Wire Road', addressLocality: 'Benin City', addressRegion: 'Edo', addressCountry: 'NG' },
  areaServed: ['Benin City', 'Asaba', 'Delta'], sameAs: [BIZ.instagram],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${italiana.variable} ${lato.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

import type { Metadata, Viewport } from 'next';
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const dmserif = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-dmserif' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
export const metadata: Metadata = {
  title: 'KL Realtors & Properties | Land & houses in Lekki, Ikate, Ibeju and Epe, Lagos',
  description: 'Realtor Yemisi: award-winning Lekki land & houses expert with 200+ properties sold across Lekki, Ikate, Ibeju and Epe. Book a site inspection on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'KL Realtors & Properties, Lekki, Lagos', description: 'Lekki land & homes, sold with integrity.', images: ['/img/portrait.webp'], type: 'website' },
  icons: { icon: '/img/portrait.webp' },
};
export const viewport: Viewport = { themeColor: '#0F4C3A', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: BIZ.name, telephone: BIZ.phones[0].tel, email: BIZ.email,
  areaServed: BIZ.areas, address: { '@type': 'PostalAddress', addressLocality: 'Lekki', addressRegion: 'Lagos', addressCountry: 'NG' }, sameAs: [BIZ.facebook],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${dmserif.variable} ${jakarta.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

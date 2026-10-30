import type { Metadata, Viewport } from 'next';
import { Marcellus, Outfit } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const marcellus = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-marcellus' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
export const metadata: Metadata = {
  title: 'Eventables | Event styling, planning & rentals in Gwarinpa, Abuja',
  description: 'Making memories, one event at a time. Event styling, planning, rentals and ushering in Abuja. Plan your event on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Eventables, Abuja', description: 'Making memories, one event at a time.', images: ['/img/drape.webp'], type: 'website' },
  icons: { icon: '/img/drape.webp' },
};
export const viewport: Viewport = { themeColor: '#0B0B0B', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: BIZ.name, description: 'Event styling, planning, rentals and ushering', telephone: BIZ.tel, email: BIZ.email,
  address: { '@type': 'PostalAddress', streetAddress: '591a Victoria Ironsi Crescent, Gwarinpa', addressLocality: 'Abuja', postalCode: '900108', addressCountry: 'NG' }, sameAs: [BIZ.instagram, BIZ.rentals],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${marcellus.variable} ${outfit.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

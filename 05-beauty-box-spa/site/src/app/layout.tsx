import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Jost } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const bodoni = Bodoni_Moda({ subsets: ['latin'], variable: '--font-bodoni', style: ['normal', 'italic'] });
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
export const metadata: Metadata = {
  title: 'Beauty Box Spa, Nail & Beauty | Nails, facials & spa in Ajao Estate, Lagos',
  description: '3D nail art, facials, massages and spa treatments by a UK-certified therapist in Ajao Estate, Lagos. Book on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Beauty Box Spa, Nail & Beauty, Ajao Estate, Lagos', description: 'Unbox your beauty.', images: ['/img/logo.webp'], type: 'website' },
  icons: { icon: '/img/logo.webp' },
};
export const viewport: Viewport = { themeColor: '#FFFDFB', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': ['BeautySalon', 'NailSalon'], name: BIZ.name, telephone: BIZ.tel, email: BIZ.email,
  address: { '@type': 'PostalAddress', streetAddress: '11 Agbor Close, off Osolo Way', addressLocality: 'Ajao Estate', addressRegion: 'Lagos', addressCountry: 'NG' },
  sameAs: [BIZ.facebook],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${bodoni.variable} ${jost.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

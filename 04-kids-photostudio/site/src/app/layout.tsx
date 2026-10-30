import type { Metadata, Viewport } from 'next';
import { Baloo_2, Nunito } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const baloo = Baloo_2({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-baloo' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
export const metadata: Metadata = {
  title: 'Kids Photostudio | Kids birthday photoshoots at Ikeja City Mall, Lagos',
  description: 'Themed kids’ birthday shoots, family portraits and more, in our studio at Ikeja City Mall, Ikeja, Lagos. Book a shoot in three taps on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Kids Photostudio, Ikeja City Mall', description: 'Birthday photos your child will treasure forever.', images: ['/img/set-royal.webp'], type: 'website' },
  icons: { icon: '/img/set-royal.webp' },
};
export const viewport: Viewport = { themeColor: '#FFF8EE', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService', name: BIZ.name, telephone: BIZ.tel, email: BIZ.email,
  description: 'Kids birthday photography and videography studio',
  address: { '@type': 'PostalAddress', streetAddress: 'Ikeja City Mall', addressLocality: 'Ikeja', addressRegion: 'Lagos', addressCountry: 'NG' },
  sameAs: [BIZ.facebook],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${baloo.variable} ${nunito.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-cormorant' });
const dm = DM_Sans({ subsets: ['latin'], variable: '--font-dm' });
export const metadata: Metadata = {
  title: 'Lilish Beauty Empire | Salon & spa in Elechi, Port Harcourt',
  description: 'Luxury hair salon, spa, human hair, fragrance diffusers and an event hall in Elechi, Port Harcourt. Open Monday to Saturday, 8am–8pm. Book on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Lilish Beauty Empire, Port Harcourt', description: 'Your hair-ven in Port Harcourt.', images: ['/img/cornrow.webp'], type: 'website' },
  icons: { icon: '/img/logo.webp' },
};
export const viewport: Viewport = { themeColor: '#3E1F33', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': ['BeautySalon', 'DaySpa'], name: BIZ.name, email: BIZ.email, telephone: BIZ.tel,
  address: { '@type': 'PostalAddress', streetAddress: '3 Orogbum Crescent, Elechi', addressLocality: 'Port Harcourt', addressRegion: 'Rivers', postalCode: '500101', addressCountry: 'NG' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '20:00' }],
  sameAs: [BIZ.instagram],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${cormorant.variable} ${dm.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

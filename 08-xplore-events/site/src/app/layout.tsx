import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';
const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-playfair' });
const mont = Montserrat({ subsets: ['latin'], variable: '--font-mont' });
export const metadata: Metadata = {
  title: 'Xplore Events | Proposal & wedding décor in Lagos, Ibadan and Abuja',
  description: 'Proposal, wedding and celebration décor by Xplore Events in Lagos, Ibadan and Abuja. Plan your proposal on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Xplore Events: say it beautifully', description: 'Proposal, wedding and celebration décor in Lagos, Ibadan and Abuja.', images: ['/img/hero.webp'], type: 'website' },
  icons: { icon: '/img/heart.webp' },
};
export const viewport: Viewport = { themeColor: '#14121A', width: 'device-width', initialScale: 1 };
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: BIZ.name, description: 'Proposal decorator and event planner', telephone: BIZ.tel, email: BIZ.email,
  areaServed: ['Lagos', 'Ibadan', 'Abuja'], sameAs: [BIZ.instagram],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${playfair.variable} ${mont.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>);
}

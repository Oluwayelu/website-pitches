import type { Metadata, Viewport } from 'next';
import { Fraunces, Figtree } from 'next/font/google';
import './globals.css';
import { BIZ } from '@/content';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', axes: ['SOFT', 'opsz'] });
const inter = Figtree({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Vaith Furniture | Sofas, chairs & office furniture in Ikeja, Lagos',
  description: 'Home and office furniture built from scratch and delivered from Ikeja, Lagos. Browse sofas, royal chairs and custom pieces, then order on WhatsApp.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Vaith Furniture, Ikeja, Lagos', description: 'Furniture that makes your home feel finished.', images: ['/img/sofa.webp'], type: 'website' },
  icons: { icon: '/img/sofa.webp' },
};
export const viewport: Viewport = { themeColor: '#F6F1EA', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'FurnitureStore', name: BIZ.name,
  telephone: '+2347084510703', email: BIZ.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Ikeja', addressRegion: 'Lagos', addressCountry: 'NG' },
  sameAs: [BIZ.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

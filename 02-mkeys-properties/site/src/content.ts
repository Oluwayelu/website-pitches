// All business facts + copy live here. Edit this file only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: '09053156229', email: 'oluwayeluifeoluwa@gmail.com' };

export const BIZ = {
  name: 'Mkeys Properties Limited',
  short: 'Mkeys Properties',
  rc: 'RC 3802584',
  city: 'Lekki, Lagos',
  agent: 'Amaka',
  whatsapp: '2348165525524',
  phoneLabel: '0816 552 5524',
  tel: '+2348165525524',
  email: 'mkeysproperties@gmail.com',
  instagram: 'https://www.instagram.com/mkeysproperties/',
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;

export type Listing = {
  id: string; title: string; area: string; type: 'Terrace duplex' | 'Semi-detached' | 'Detached';
  beds: string; bedsMin: number; bedsMax: number; priceLabel: string; priceM: number | null;
  extras?: string; img: string; pos?: string; post: string; listed: string; reel?: boolean;
};

// Verified from their Instagram posts (30 Oct 2026). No other listing facts invented.
export const LISTINGS: Listing[] = [
  { id: 'ajah-3bed', title: 'Contemporary 3-bedroom terrace duplex', area: 'Ajah, Lekki', type: 'Terrace duplex', beds: '3', bedsMin: 3, bedsMax: 3, priceLabel: '₦115M', priceM: 115, img: '/img/l1.webp', post: 'https://www.instagram.com/p/DfE2YGGDoec/', listed: 'Listed Oct 2026' },
  { id: 'vgc-4bed-semi', title: 'Contemporary 4-bedroom semi-detached duplex with BQ', area: 'VGC, Lekki', type: 'Semi-detached', beds: '4', bedsMin: 4, bedsMax: 4, priceLabel: '₦250M', priceM: 250, img: '/img/l2.webp', pos: 'center 20%', post: 'https://www.instagram.com/reel/DfCbW07Ovd2/', listed: 'Listed Oct 2026', reel: true },
  { id: 'vgc-terrace', title: 'Contemporary 2/4-bedroom terrace duplex with swimming pool, gym & BQ', area: 'VGC, Lekki', type: 'Terrace duplex', beds: '2 / 4', bedsMin: 2, bedsMax: 4, priceLabel: '₦160M / ₦200M', priceM: 160, img: '/img/l3.webp', post: 'https://www.instagram.com/p/DfCNx0nDlB4/', listed: 'Listed Oct 2026' },
  // Price omitted on purpose: brief says ₦630M, the post image itself reads "N620m". Confirm with Mkeys.
  { id: 'county-5bed', title: 'Contemporary 5-bedroom fully detached duplex with swimming pool, cinema & open terrace', area: 'Lekki County', type: 'Detached', beds: '5', bedsMin: 5, bedsMax: 5, priceLabel: 'Price on enquiry', priceM: null, img: '/img/l4.webp', pos: 'center 12%', post: 'https://www.instagram.com/reel/DVFtKdQjMS7/', listed: 'Listed Feb 2026', reel: true },
];

export const AREAS = ['Ajah', 'VGC', 'Lekki County'];
export const TYPES = ['Terrace duplex', 'Semi-detached', 'Detached'];
export const PRICE_CAPS = [150, 200, 300, 700];

export const AMENITIES = ['Fitted kitchen with accessories', 'Modern POP ceiling', 'Detailed / luxury finishing', 'Wardrobes', 'CCTV', 'Automated light', 'Water heater', 'Heat extractor', 'Ample parking'];

export const SOLD = { title: '5-bedroom terrace duplex', area: 'Ikate, Lekki', client: 'Mr B', when: 'Apr 2024', img: '/img/sold.webp', post: 'https://www.instagram.com/reel/C6QbfIzsgyT/' };

export const SERVICES = [
  { t: 'Buy', d: 'Homes across Lekki, Ajah, VGC and Ikate, with a broker beside you.' },
  { t: 'Sell', d: 'Your property in front of serious buyers.' },
  { t: 'Rent & lease', d: 'Rentals and leases across Lekki.' },
  { t: 'Property management', d: 'Looked after while you are away.' },
];

export const STEPS = [
  { t: 'Tell us your budget & area', d: 'A quick WhatsApp chat is all it takes.' },
  { t: 'Inspect verified properties', d: 'See the homes that fit, in person.' },
  { t: 'Close safely', d: 'Documents checked before you commit.' },
];

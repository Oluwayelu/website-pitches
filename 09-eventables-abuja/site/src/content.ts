// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: '09053156229', email: 'oluwayeluifeoluwa@gmail.com' };
export const BIZ = {
  name: 'Eventables Limited', short: 'Eventables',
  phoneLabel: '+234 703 864 2085', tel: '+2347038642085', whatsapp: '2347038642085', // ConnectCiti; confirm
  email: 'eventablesenquiries@gmail.com',
  address: '591a Victoria Ironsi Crescent, Gwarinpa, Abuja 900108', // ConnectCiti; confirm
  instagram: 'https://www.instagram.com/eventables/', rentals: 'https://www.instagram.com/eventables_rentals_page/',
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;
export const SERVICES = [
  { t: 'Styling & décor', d: 'Event styling that turns a space into the occasion.' },
  { t: 'Full planning', d: 'Event planning from first idea to final guest.' },
  { t: 'Rentals', d: 'Rent the pieces you need, with a dedicated rentals page.' },
  { t: 'Ushering', d: 'Ushers to welcome and guide your guests.' },
];
export const OCCASIONS = ['Reception', 'Kamu ceremony', 'Naming ceremony', 'Prom', 'Retirement lunch', 'Bridal shower', 'Birthday party', 'Brand pop-ups'];
export const WORK = [
  { img: '/img/naming.webp', cap: 'Naming ceremony décor', alt: 'Blue and white balloon arch backdrop for a naming ceremony', w: 480, h: 640 },
  { img: '/img/drape.webp', cap: 'Crimson draping', alt: 'Crimson and gold fabric draping with round medallions', w: 640, h: 640 },
  { img: '/img/gold.webp', cap: 'Gold-draped pavilion', alt: 'Open-air pavilion with gold fabric draping', w: 361, h: 640 },
  { img: '/img/candle.webp', cap: 'Art-themed intimate date set-up', alt: 'Candle-lit intimate dinner table with flowers', w: 480, h: 640 },
  { img: '/img/purple.webp', cap: 'Balloon wall', alt: 'Purple and pink balloon wall on matching purple grass', w: 480, h: 640 },
  { img: '/img/carpet.webp', cap: 'Red-carpet floor seating', alt: 'Canopy with red carpet and traditional floor seating', w: 360, h: 640 },
];
export const RENTAL_SLOTS = ['Rental item 01', 'Rental item 02', 'Rental item 03', 'Rental item 04', 'Rental item 05', 'Rental item 06'];
export const STEPS = [
  { t: 'Share your date & vision', d: 'Tell us what you’re celebrating.' },
  { t: 'We design & quote', d: 'A concept and a clear quote.' },
  { t: 'We set up, you celebrate', d: 'Arrive to a space that’s ready.' },
];

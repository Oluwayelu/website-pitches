// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: '09053156229', email: 'oluwayeluifeoluwa@gmail.com' };
export const BIZ = {
  name: 'Xplore Events', whatsapp: '2348179653965', whatsappLabel: '+234 817 965 3965',
  phoneLabel: '0805 169 9660', tel: '+2348051699660', email: 'xploreeventsng@gmail.com',
  areas: 'Lagos · Ibadan · Abuja', instagram: 'https://www.instagram.com/xploreeventslagos/',
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;
export const TIERS = ['Intimate', 'Signature', 'Grand'];
// Inclusions come from their own Nairaland ad.
export const INCLUDES = ['Candles', 'Flowers', 'Lights', 'Balloons', 'Personalised messages', 'Live music', 'Proposal video coverage', 'Venue sourcing'];
export const CELEBRATIONS = [
  { t: 'Weddings', img: '/img/stage.webp', alt: 'White wedding stage with arches and florals' },
  { t: 'Bridal showers', img: '/img/wings.webp', alt: 'Angel-wing backdrop with neon sign for a bridal shower' },
  { t: 'Birthdays', img: '/img/b20.webp', alt: 'Gold and black balloon wall with a lit number 20' },
  { t: 'Naming ceremonies', img: '/img/naming.webp', alt: 'Pink balloon and butterfly backdrop for a naming ceremony' },
  { t: 'Corporate', img: '/img/banquet.webp', alt: 'Round banquet tables with gold chairs and floral centrepieces' },
];
export const MOMENTS = [
  { img: '/img/heart.webp', cap: 'A heart arch of florals, candles and a neon “Will you marry me?”', alt: 'Heart-shaped floral proposal arch with candles at dusk', w: 554, h: 554 },
  { img: '/img/nonye.webp', cap: 'Nonye and Ebuka, traditional wedding', alt: 'Garden set for the Nonye and Ebuka traditional wedding', w: 509, h: 510 },
  { img: '/img/naming.webp', cap: 'Baby Nusaybah’s naming ceremony · 14 June 2026', alt: 'Pink balloons and butterflies for Baby Nusaybah’s naming ceremony', w: 640, h: 640 },
  { img: '/img/hug.webp', cap: 'Damilola and Tobiloba, a proposal to remember', alt: 'Couple embracing with a bouquet of roses', w: 510, h: 510 },
  { img: '/img/aisle.webp', cap: 'A red-rose aisle for a candle-lit proposal', alt: 'Red rose aisle with heart arch', w: 800, h: 796 },
  { img: '/img/floral.webp', cap: 'Wedding décor in blush and green', alt: 'Pink floral stage with a sofa', w: 736, h: 414 },
];
// Real testimonials, verbatim from their website.
export const TESTIMONIALS = [
  { q: 'Xplore Events transformed our wedding into a fairytale. Every detail was flawless, and the decor was breathtaking!', by: 'Ada & Chuka' },
  { q: 'My birthday setup was perfect! The colors, balloons, and attention to detail were everything I wanted and more.', by: 'Okeowo E' },
  { q: 'They handled our corporate dinner like pros. Classy, timely, and very professional. Highly recommended.', by: 'WEMABOD real estate' },
];
export const STEPS = [
  { t: 'Tell us the story & date', d: 'Who is she, how did you meet, when is the moment?' },
  { t: 'We design the setup', d: 'Candles, flowers, lights and more, shaped around you.' },
  { t: 'You say it, we handle the rest', d: 'Focus on the question. We take care of everything else.' },
];

// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: 'TODO', email: 'TODO' };

export const BIZ = {
  name: 'Lilish Beauty Empire',
  city: 'Elechi, Port Harcourt',
  // Verified bio link. Cannot carry prefilled text.
  waLink: 'https://wa.me/message/PE5A6L2MV6MCD1',
  // Medium-confidence number (ConnectCiti). Set to '2349018646655' once Lilish confirms it is their WhatsApp, to enable prefilled messages.
  waPrefillNumber: null as string | null,
  phone: '+234 901 864 6655', tel: '+2349018646655',
  email: 'lilish_beautyempire@yahoo.com',
  address: '3 Orogbum Crescent, Elechi, Port Harcourt 500101, Rivers',
  instagram: 'https://www.instagram.com/lilish_beauty_empire/',
  hours: 'Mon–Sat 8am–8pm',
};
export const waHref = (text: string) => BIZ.waPrefillNumber ? `https://wa.me/${BIZ.waPrefillNumber}?text=${encodeURIComponent(text)}` : BIZ.waLink;
export const igPost = (c: string) => `https://www.instagram.com/p/${c}/`;

export const WORLDS = [
  { id: 'salon', t: 'Hair Salon', d: 'Braids, koboko braids and styling.', img: '/img/cornrow.webp' },
  { id: 'spa', t: 'Spa & Massage', d: 'Spa and massage services.' },
  { id: 'hair', t: 'Human Hair', d: 'Human hair sales.' },
  { id: 'decor', t: 'Decor & Fragrance', d: 'Decors and diffusers.', img: '/img/diffuser.webp' },
  { id: 'hall', t: 'Event Hall', d: 'A venue for your event.' },
];

export const MENU = [
  { g: 'Hair salon', items: ['Braids', 'Koboko braids', 'Styling', 'Henna art'] },
  { g: 'Spa', items: ['Spa services', 'Massage'] },
  { g: 'Shop', items: ['Human hair', 'Decors & fragrance diffusers'] },
  { g: 'Venue', items: ['Event hall'] },
];
export const SERVICE_OPTIONS = ['Braids', 'Koboko braids', 'Styling', 'Henna art', 'Spa / massage', 'Human hair', 'Diffuser / decor', 'Event hall enquiry'];

export const LOOKS = [
  { img: '/img/cornrow.webp', alt: 'Cornrow braids in a box pattern', post: 'DdRp7-iI_9p', w: 322, h: 575 },
  { img: '/img/koboko.webp', alt: 'Koboko twist braids', post: 'DdW2DX9oEUm', w: 284, h: 507 },
  { img: '/img/henna.webp', alt: 'Henna art on a hand', post: 'DezmJPGoWpm', w: 339, h: 540 },
  { img: '/img/box.webp', alt: 'Long blonde and brown box braids', post: 'DdUOEQHROEY', w: 298, h: 385 },
  { img: '/img/braid-close.webp', alt: 'Braiding in progress', post: 'DduEd5-ozqB', w: 290, h: 516 },
  { img: '/img/green.webp', alt: 'Neat cornrows in the salon', post: 'Dc9QlgLIALD', w: 286, h: 506 },
  { img: '/img/diffuser.webp', alt: 'Fragrance diffusers on the shop shelf', post: 'DeNAD55IYyo', w: 336, h: 560 },
  { img: '/img/stylist.webp', alt: 'Stylist at work in the salon', post: 'Dc6pdnzIYe0', w: 269, h: 475 },
];

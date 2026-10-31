// Single source of truth for all business facts + copy. Edit here.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: '09053156229', email: 'oluwayeluifeoluwa@gmail.com' };

export const BIZ = {
  name: 'Vaith Furniture',
  city: 'Ikeja, Lagos',
  whatsapp: '2347084510703', // verified: "Interested buyer DM via WhatsApp: 07084510703"
  phones: [
    { label: '0813 579 1049', tel: '+2348135791049' },
    { label: '0708 451 0703', tel: '+2347084510703' },
  ],
  email: 'nonifaithoooo@gmail.com',
  facebook: 'https://www.facebook.com/Vaithfurniture/',
  intro: 'We help beautify your Home and offices with any style of your choice. 100% quality product.',
};

export const wa = (text: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`;

export const PROOF = [
  { big: '6.7K', small: 'followers on Facebook' },
  { big: '100%', small: 'recommend · 11 reviews' },
  { big: 'Delivery', small: 'available' },
  { big: 'Ikeja', small: 'in-store pickup & shopping' },
];

export const CATEGORIES = [
  { name: 'Sofas & sectionals', note: 'L-shape fabric, channel-tufted, made to sit in', img: '/img/sofa.webp' },
  { name: 'Accent & royal chairs', note: 'Statement seats, constructed from scratch' },
  { name: 'Office furniture', note: 'Desks and seating for work that looks the part' },
  { name: 'Custom orders', note: 'Send a picture and your space size' },
];

// Only item types named in the brief. Prices are NOT verified, so "Price on request".
export const PIECES = [
  { id: 'l-shape-sofa', name: 'L-shape fabric sofa', tag: 'Available as seen', img: '/img/sofa.webp' },
  { id: 'royal-chair', name: 'Royal chair', tag: 'Built from scratch' },
  { id: 'accent-chair', name: 'Accent chair', tag: 'Home & office' },
  { id: 'office-furniture', name: 'Office furniture', tag: 'Immediate pickup' },
  { id: 'sofa-2', name: 'Fabric sofa', tag: 'Available as seen' },
  { id: 'custom', name: 'Your custom piece', tag: 'Send us your idea' },
];

export const CRAFT = [
  { t: 'Frame', d: 'Built from scratch by our own craftsmen.' },
  { t: 'Upholstery', d: 'Fabric and finish in the style of your choice.' },
  { t: 'Finished', d: 'Delivered to you, or collect in Ikeja.' },
];

export const STEPS = [
  { t: 'Pick a piece or send your idea', d: 'Browse here, or send us a picture and your space size.' },
  { t: 'Confirm on WhatsApp', d: 'Details, price and delivery agreed in one chat.' },
  { t: 'Delivered, or collect in Ikeja', d: 'Delivery available, or pick up in-store.' },
];

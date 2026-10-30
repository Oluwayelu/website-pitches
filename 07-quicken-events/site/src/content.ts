// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: 'TODO', email: 'TODO' };
export const BIZ = {
  name: 'Quicken Events & More Ltd', short: 'Quicken Events', rc: 'RC 2016004',
  phones: [{ label: '+234 816 028 5283', tel: '+2348160285283' }, { label: '+234 906 389 1400', tel: '+2349063891400' }],
  whatsapp: '2348160285283', email: 'quickenevent@gmail.com',
  address: 'No 2, Divine Close, off Iwehen Street, Wire Road, Benin City',
  instagram: 'https://www.instagram.com/quickenevents/', palmwine: 'https://www.instagram.com/quickeneventspalmwine/',
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;
export const AWARD = 'TNNBP23 Award Nominee · Top Event Planning & Management Company of the Year, Edo State';
export const SERVICES = [
  { t: 'Wedding planning', d: 'Your wedding day is a day you wait for your entire life.' },
  { t: 'Event styling & décor', d: 'Event styling and management, tailored to you.' },
  { t: 'Social events', d: 'Celebrations that leave a lasting impression.' },
  { t: 'Corporate events', d: 'Polished, well-run events for your brand.' },
  { t: 'Palm wine service', d: 'Fresh palm wine served at weddings, by Quicken Events Palm Wine.', link: true },
];
export const GALLERY = [
  { img: '/img/close.webp', alt: 'Bride and groom embracing at their wedding', w: 360, h: 640 },
  { img: '/img/cake.webp', alt: 'Bride beside a tiered cake with cold sparks', w: 360, h: 640 },
  { img: '/img/couple.webp', alt: 'Couple under hanging white florals', w: 360, h: 640 },
  { img: '/img/dancers.webp', alt: 'Young guests dancing on a styled stage', w: 360, h: 640 },
  { img: '/img/gele.webp', alt: 'Guest in orange gele holding a sparkler', w: 361, h: 640 },
];
export const PORTFOLIO = [
  { img: '/img/hero1.webp', alt: 'Couple in Benin coral-bead wedding attire', w: 720, h: 738 },
  { img: '/img/cake.webp', alt: 'Bride beside a tiered cake with cold sparks', w: 360, h: 640 },
  { img: '/img/hero2.webp', alt: 'Bridal make-up with pearl headpiece', w: 700, h: 874 },
  { img: '/img/crowd.webp', alt: 'Reception crowd cheering beside a wedding cake', w: 1100, h: 619 },
  { img: '/img/couple.webp', alt: 'Couple under hanging white florals', w: 360, h: 640 },
  { img: '/img/dancers.webp', alt: 'Young guests dancing on a styled stage', w: 360, h: 640 },
  { img: '/img/gele.webp', alt: 'Guest in orange gele holding a sparkler', w: 361, h: 640 },
  { img: '/img/close.webp', alt: 'Bride and groom embracing at their wedding', w: 360, h: 640 },
];
export const PROCESS = [
  { t: 'Consultation', d: 'We listen to every detail.' },
  { t: 'Design & planning', d: 'A distinctive plan tailored to your needs and desires.' },
  { t: 'Flawless execution', d: 'We deliver on the day.' },
];
export const EVENT_TYPES = ['Wedding', 'Social event', 'Corporate event', 'Event styling & décor', 'Palm wine service'];

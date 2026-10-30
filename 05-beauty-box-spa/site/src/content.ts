// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: 'TODO', email: 'TODO' };
export const BIZ = {
  name: 'Beauty Box Spa, Nail & Beauty', short: 'Beauty Box',
  tagline: 'Unbox Your Beauty.',
  address: '11 Agbor Close, off Osolo Way, Ajao Estate, Lagos',
  phoneLabel: '0903 638 4295', tel: '+2349036384295', whatsapp: '2349036384295',
  email: 'beautyboxsalon.ng@gmail.com',
  facebook: 'https://www.facebook.com/beautyboxsalon.ng',
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;
export const MENU: Record<string, string[]> = {
  Nails: ['3D nail designs', 'UV gel', 'Gel extensions', 'Nail art', 'Manicure', 'Pedicure (butterfly set)'],
  Face: ['Facials'],
  'Body & Massage': ['Massages', 'Body wraps'],
  'Waxing & Tinting': ['Waxing', 'Tinting'],
  Makeup: ['Makeup'],
  Kids: ['Kids’ pampering for little princes & princesses'],
};
export const PROOF = ['UK-certified therapist', '3D nail art specialists', 'Kids’ pampering', 'Beauty training'];
export const GALLERY = ['3D nail design', 'Butterfly set', 'Nail art', 'Gel extensions', 'UV gel', 'Manicure & pedicure'];

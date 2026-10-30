// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: 'TODO', email: 'TODO' };
export const BIZ = {
  name: 'KL Realtors & Properties', short: 'KL Realtors', agent: 'Yemisi', rc: 'RC 9080991',
  phones: [{ label: '+234 812 927 9543', tel: '+2348129279543' }, { label: '+234 803 929 1889', tel: '+2348039291889' }],
  whatsapp: '2348129279543', email: 'askrealtoryemisi@gmail.com',
  facebook: 'https://www.facebook.com/klrealtorsandproperties/', areas: ['Lekki', 'Ikate', 'Ibeju', 'Epe', 'Lagos'],
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;
export const PROOF = [
  { big: '200+', small: 'properties sold' }, { big: 'Award-winning', small: 'Metro & Castle, 2024 sales effort' },
  { big: BIZ.rc, small: 'registered company' }, { big: 'Certified', small: 'real estate professional' },
];
export const ESTATES = [
  { id: 'oak-ville', name: 'Oak Ville', where: 'Mowe-Ofada', blurb: 'A new estate Yemisi has been introducing to buyers.' },
  { id: 'celebration', name: 'Celebration Parkland Estate', where: 'Ask for the location', blurb: 'A parkland estate currently promoted on the KL Realtors page.' },
];
export const SERVICES = [
  { t: 'Land banking', d: 'Land in growth corridors across Lekki, Ibeju and Epe.' },
  { t: 'Houses for sale', d: 'Homes in Lekki, Ikate and beyond.' },
  { t: 'Investment advisory', d: 'Straight talk on where to put your money.' },
  { t: 'Site inspections', d: 'See the property in person before you decide.' },
];
export const WHY = [
  { t: 'Ask about title documents', d: 'Let’s talk through the documents for any property before you pay.' },
  { t: 'Inspection support', d: 'Yemisi can arrange a site inspection so you see it first.' },
  { t: 'Payment options', d: 'Ask what payment arrangements are available for each estate.' },
];

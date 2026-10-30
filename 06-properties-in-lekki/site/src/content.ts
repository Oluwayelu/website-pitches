// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: 'TODO', email: 'TODO' };
export const BIZ = {
  name: 'Properties in Lekki Lagos', realtor: 'Realtor Comfort',
  phoneLabel: '0803 829 5185', tel: '+2348038295185', whatsapp: '2348038295185',
  area: 'Serving Lekki, Ajah, Ikoyi and environs',
  facebook: 'https://www.facebook.com/propertiesinLekki/',
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;

// Episode titles are quoted from their Facebook posts.
export const EPISODES = [
  { t: 'The rent was cheap… until they gave us the bill', tag: 'Renting' },
  { t: 'The house was perfect… until night fell', tag: 'Inspection' },
  { t: 'The neighbour knew everything… but nobody asked', tag: 'Due diligence' },
];
export const LISTINGS = [
  { id: 'duplex', t: 'Luxury fully detached duplex', status: 'For sale', real: true, img: '', alt: '' },
  { id: 'wealthland', t: 'Wealthland Green Estate', status: 'From the 2021 blog', real: true, img: '/img/wealthland.webp', alt: 'Artist render of Wealthland Green Estate: terraced homes along a palm-lined street' },
  { id: 'selfcon', t: 'Self-contain for rent, Ilasan, Lekki', status: 'From the 2021 blog', real: true, img: '/img/selfcon.webp', alt: 'Inside a self-contained apartment in Ilasan, Lekki' },
];
// Generic educational tips (not claims about the business).
export const CHECKLIST = [
  { t: 'Inspect at night', d: 'Lighting, noise and security look different after dark.' },
  { t: 'Ask about service charge & bills', d: 'Get every recurring cost in writing before you pay.' },
  { t: 'Verify title documents', d: 'Confirm who owns the property and that the papers are genuine.' },
  { t: 'Meet the landlord’s lawyer', d: 'Know who prepares the agreement and what it says.' },
  { t: 'Check drainage in the rainy season', d: 'Flooding is easier to spot when it has just rained.' },
  { t: 'Ask the neighbours', d: 'They know the street, the landlord and the real story.' },
];

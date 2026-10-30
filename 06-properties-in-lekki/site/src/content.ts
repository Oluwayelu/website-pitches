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
  { n: '01', t: 'The rent was cheap… until they gave us the bill', tag: 'Renting' },
  { n: '02', t: 'The house was perfect… until night fell', tag: 'Inspection' },
  { n: '03', t: 'The neighbour knew everything… but nobody asked', tag: 'Due diligence' },
];
export const LISTINGS = [
  { id: 'duplex', t: 'Luxury fully detached duplex', status: 'For sale', real: true },
  { id: 'l2', t: 'Your next listing', status: '', real: false },
  { id: 'l3', t: 'Your next listing', status: '', real: false },
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

// All business facts + copy. Edit here only.
export const PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: 'TODO', email: 'TODO' };
export const BIZ = {
  name: 'Kids Photostudio', where: 'Ikeja City Mall, Ikeja, Lagos',
  phoneLabel: '0913 120 2299', tel: '+2349131202299', whatsapp: '2349131202299',
  email: 'birthdayphotoshotprops@gmail.com',
  facebook: 'https://www.facebook.com/birthdayphotostudio/',
  form: 'https://forms.gle/cLWCrJQ9RkRv6UtC7',
};
export const wa = (t: string) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(t)}`;

export const SHOOTS = [
  { t: 'Kids birthday shoots', d: 'Colourful themed sets that turn ordinary spaces into something magical.', star: true },
  { t: 'Family & adult portraits', d: 'Portraits for the whole family.' },
  { t: 'Maternity & newborn', d: 'Early moments, beautifully kept.' },
  { t: 'Pre-wedding', d: 'Pre-wedding shoots.' },
  { t: 'Model & product', d: 'Model and product photography.' },
  { t: 'Events & video', d: 'Event coverage, videography and editing.' },
];
export const SETS = [
  { id: 'royal', t: 'Royal blue & gold “ONE”', img: '/img/set-royal.webp' },
  { id: 's2', t: 'Your next set' }, { id: 's3', t: 'Your next set' }, { id: 's4', t: 'Your next set' }, { id: 's5', t: 'Your next set' },
];
export const PACKAGES = ['Starter', 'Signature', 'Party + Video'];
export const STEPS = [
  { t: 'Pick a date & shoot type', d: 'Tell us what you have in mind.' },
  { t: 'Confirm on WhatsApp or call', d: 'We agree the details with you.' },
  { t: 'Come to the studio and smile!', d: 'Inside Ikeja City Mall.' },
];

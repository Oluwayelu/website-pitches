'use client';
import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, ImagePlus, Mail, MapPin, Phone, X } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';
import ReelModal from './ReelModal';
const CODES: Record<string, string> = { '/img/naming.webp': 'DdOTR2JiFFs', '/img/drape.webp': 'DcmIkWERl1s', '/img/gold.webp': 'DU8_mPxiOzk', '/img/candle.webp': 'DcmKj_VEZfU', '/img/purple.webp': 'DPV0_f2iDeM', '/img/carpet.webp': 'DUGuZhRiFmn' };
import { BIZ, OCCASIONS, PITCH_CONTACT, RENTAL_SLOTS, SERVICES, STEPS, WORK, wa } from '@/content';

const ease = [0.77, 0, 0.175, 1] as const;
function Wipe({ children, d = 0, className = '' }: { children: ReactNode; d?: number; className?: string }) {
 return <motion.div className={className} initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0% 0)' }} viewport={{ once: true, margin: '0px 0px -6% 0px' }} transition={{ duration: 1.1, delay: d, ease }}>{children}</motion.div>;
}
function Up({ children, d = 0, className = '' }: { children: ReactNode; d?: number; className?: string }) {
 return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
function Logo({ light = true }: { light?: boolean }) {
 return (<a href="#top" className={`inline-flex flex-col leading-none ${light ? 'text-bone' : 'text-ink'}`}><span className="font-display text-xl sm:text-2xl">EVENT<span className="relative">A<span className="absolute left-1/2 top-[58%] h-[5px] w-[5px] -translate-x-1/2 rotate-45 bg-gold" aria-hidden /></span>BLES</span><span className="mt-1.5 hidden whitespace-nowrap text-sm font-medium text-gold sm:block">Styling · Planning · Rentals</span></a>);
}
function Banner() {
 const [o, setO] = useState(true);
 if (!o) return null;
 return (<div className="relative bg-gold px-10 py-2 text-center text-sm font-medium leading-snug text-ink sm:text-sm">Concept preview designed for {BIZ.short} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
 <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-ink/10"><X size={14} /></button></div>);
}
function Header() {
 const [s, setS] = useState(false);
 useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
 return (<header className={`sticky top-0 z-40 transition duration-300 ${s ? 'bg-ink/90 py-2.5 ' : 'border-transparent bg-ink py-5'}`}>
 <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
 <nav aria-label="Primary" className="hidden gap-9 text-sm font-medium text-bone/75 lg:flex">{[['Services', '#services'], ['Occasions', '#occasions'], ['Rentals', '#rentals'], ['Work', '#work'], ['Contact', '#contact']].map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}</nav>
 <a href="#contact" className="whitespace-nowrap px-3 py-2.5 text-sm font-medium text-gold sm:px-4 sm:text-sm transition hover:bg-gold hover:text-ink bg-current/10">Plan an event</a></div></header>);
}

function Hero() {
 const cols = [{ img: '/img/drape.webp', alt: 'Crimson and gold fabric draping with round medallions', mt: 'mt-0', h: 'aspect-[1/2.1]', d: 0.2 }, { img: '/img/gold.webp', alt: 'Open-air pavilion with gold fabric draping', mt: 'mt-10 lg:mt-16', h: 'aspect-[1/2.1]', d: 0.4 }, { img: '/img/purple.webp', alt: 'Purple and pink balloon wall', mt: 'mt-4 lg:mt-6', h: 'aspect-[1/2.1]', d: 0.6 }];
 return (
 <section id="top" className="relative overflow-hidden bg-ink text-bone">
 
 <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pb-28 lg:pt-36">
 <div>
 
 <h1 className="font-display text-[2.3rem] leading-[1.06] sm:text-5xl lg:text-[3.8rem]">
 {['Making memories,', 'one event at a time.'].map((l, i) => <span key={l} className="block overflow-hidden"><motion.span className={`block ${''}`} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}>{l}</motion.span></span>)}
 </h1>
 <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-7 max-w-sm text-lg font-light text-bone/75">Event styling, planning and rentals in Gwarinpa, Abuja.</motion.p>
 <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
 <a href={wa('Hello Eventables, I would like to plan an event.')} className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-medium text-ink transition hover:bg-bone"><WhatsAppIcon size={16} /> Plan an event</a>
 <a href="#rentals" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium transition hover:text-gold bg-current/10">Browse rentals <ArrowUpRight size={16} /></a></motion.div>
 </div>
 <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-3 lg:max-w-none lg:gap-4">
 {cols.map((c, i) => (<div key={i} className={c.mt}><motion.div initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.3, delay: c.d, ease }} className={`relative ${c.h} overflow-hidden`}><Image src={c.img} alt={c.alt} fill priority={i === 0} sizes="(min-width:1024px) 15vw, 30vw" className="object-cover" /></motion.div></div>))}
 </div>
 </div>
 </section>
 );
}

function Proof() {
 const items = [['770+', 'posts shared'], ['5K', 'followers on Instagram'], ['Styling · Planning', 'Rentals · Ushers']];
 return (<section aria-label="Highlights" className="bg-ink text-bone"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
 {items.map(([a, b]) => <div key={a} className="sm:pl-6 sm:first:border-0 sm:first:pl-0"><p className="font-display text-3xl text-gold max-w-prose">{a}</p><p className="mt-1 text-base text-grey-l max-w-prose">{b}</p></div>)}</div></section>);
}

function Services() {
 return (
 <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
 <Up><h2 className="mt-4 max-w-2xl font-display text-[1.9rem] leading-tight sm:text-5xl">Four ways we make your event <span className="">unforgettable.</span></h2></Up>
 <div className="mt-14 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
 {SERVICES.map((s, i) => (<Up key={s.t} d={i * 0.08} className="bg-bone p-8 transition hover:bg-white"><h3 className="mt-10 font-display text-2xl">{s.t}</h3><p className="mt-3 text-base leading-relaxed text-ink/70 max-w-prose">{s.d}</p></Up>))}
 </div>
 </section>
 );
}

function Occasions() {
 return (
 <section id="occasions" className="bg-ink py-24 text-bone lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
 <Up><h2 className="mt-4 font-display text-[1.9rem] sm:text-5xl">Whatever you’re celebrating.</h2></Up>
 <ul className="mt-12 grid sm:grid-cols-2">
 {OCCASIONS.map((o, i) => (<li key={o} className="group sm:odd:pr-8 sm:even:pl-8"><a href={wa(`Hello Eventables, I'd like to ask about styling a ${o.toLowerCase()}.`)} className="flex items-center justify-between py-6"><span className="flex items-baseline gap-5"><span className="font-display text-3xl transition group-hover:translate-x-2 group-hover:text-gold">{o}</span></span><ArrowUpRight className="text-bone/30 transition group-hover:text-gold" /></a></li>))}
 </ul></div></section>
 );
}

function Rentals() {
 return (
 <section id="rentals" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
 <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><Up><h2 className="mt-4 font-display text-[1.9rem] sm:text-5xl">Rent the look.</h2></Up>
 <a href={BIZ.rentals} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"><InstagramIcon size={16} /> @eventables_rentals_page</a></div>
 <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
 {RENTAL_SLOTS.map((r, i) => (<Up key={r} d={(i % 3) * 0.07}><div className="group"><div className="ph flex aspect-[4/5] flex-col items-center justify-center gap-2 text-gold-d"><span className="px-3 text-center text-sm font-medium">Photo from the rentals page</span></div>
 <div className="mt-3 flex flex-col items-start gap-2 xl:flex-row xl:items-center xl:justify-between"><p className="font-display text-lg max-w-prose">{r}</p><a href={wa(`Hello Eventables, is the ${r.toLowerCase()} available on my date?`)} className="inline-flex shrink-0 items-center gap-1.5 px-3 py-2 text-sm font-medium transition hover:bg-ink hover:text-bone bg-current/10"><WhatsAppIcon size={13} /> Check availability</a></div></div></Up>))}
 </div>
 </section>
 );
}

function Work() {
  const [reel, setReel] = useState<string | null>(null);
 const [sel, setSel] = useState<number | null>(null);
 useEffect(() => { if (sel === null) return; const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [sel]);
 return (
 <section id="work" className="bg-ink-2 py-24 text-bone lg:py-32" style={{ background: '#151515' }}><div className="mx-auto max-w-7xl px-5 sm:px-8">
 <Up><h2 className="mt-4 font-display text-[1.9rem] sm:text-5xl">Set up, <span className="">styled, celebrated.</span></h2></Up>
 <div className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3">
 {WORK.map((w, i) => (<Wipe key={w.img} d={(i % 3) * 0.08} className="mb-3 break-inside-avoid sm:mb-5"><figure><button onClick={() => setSel(i)} aria-label={`Enlarge: ${w.cap}`} className="group block w-full overflow-hidden"><Image src={w.img} alt={w.alt} width={w.w} height={w.h} loading="lazy" className="h-auto w-full transition duration-700 group-hover:scale-105" /></button><figcaption className="mt-2 text-sm text-grey-l">{w.cap}</figcaption></figure></Wipe>))}
 </div>
 {sel !== null && (<div role="dialog" aria-modal="true" aria-label="Work image" onClick={() => setSel(null)} className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4"><button aria-label="Close" onClick={() => setSel(null)} className="absolute right-4 top-4 rounded-full bg-bone/10 p-2"><X /></button><div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}><Image src={WORK[sel].img} alt={WORK[sel].alt} width={WORK[sel].w} height={WORK[sel].h} className="max-h-[88vh] w-auto" /><button onClick={() => setReel(CODES[WORK[sel].img])} className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-ink"><InstagramIcon size={16} /> Watch the video</button></div><ReelModal code={reel} onClose={() => setReel(null)} /></div>)}
 </div></section>
 );
}

function Process() {
 return (
 <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><Up><h2 className="font-display text-[1.9rem] sm:text-5xl">From idea to <span className="">celebration.</span></h2></Up>
 <ol className="mt-12 grid gap-8 md:grid-cols-3">{STEPS.map((s, i) => (<li key={s.t} className="pt-6"><h3 className="mt-3 font-display text-2xl">{s.t}</h3><p className="mt-2 text-ink/70 max-w-prose">{s.d}</p></li>))}</ol>
 <div className="ph mt-16 px-6 py-12 text-center text-gold-d"><p className="font-display text-2xl max-w-prose">Client testimonials go here</p><p className="mx-auto mt-1 max-w-sm text-base">Real words from your clients, with their permission.</p></div></section>
 );
}

function Contact() {
 const [f, setF] = useState({ occ: OCCASIONS[0], date: '', guests: '', note: '' });
 const msg = `Hello Eventables, I'd like to plan an event.\nOccasion: ${f.occ}\nDate: ${f.date || '-'}\nGuests: ${f.guests || '-'}\nNotes: ${f.note || '-'}`;
 const inp = 'mt-1 w-full bg-transparent py-3 outline-none transition focus:border-gold [color-scheme:dark]';
 const lab = 'block text-sm font-medium text-gold';
 return (
 <section id="contact" className="bg-ink py-24 text-bone lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
 <div><h2 className="mt-4 font-display text-[1.9rem] leading-tight sm:text-5xl">Tell us what you’re <span className="">celebrating.</span></h2>
 <form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); }} className="mt-10 space-y-6">
 <label className={lab}>Occasion<select className={`${inp} [&>option]:text-ink`} value={f.occ} onChange={(e) => setF({ ...f, occ: e.target.value })}>{OCCASIONS.map((o) => <option key={o}>{o}</option>)}</select></label>
 <div className="grid gap-6 sm:grid-cols-2"><label className={lab}>Date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label><label className={lab}>Guests<input inputMode="numeric" className={inp} value={f.guests} onChange={(e) => setF({ ...f, guests: e.target.value })} /></label></div>
 <label className={lab}>Your vision<input className={inp} placeholder="Colours, theme, anything" value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} /></label>
 <button className="inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-medium text-ink transition hover:bg-bone sm:w-auto"><WhatsAppIcon size={16} /> Send on WhatsApp</button></form></div>
 <div className="space-y-8"><ul className="space-y-5 text-lg">
 <li><a href={`tel:${BIZ.tel}`} className="flex gap-4 hover:text-gold"><Phone className="shrink-0 text-gold" size={20} /> {BIZ.phoneLabel}</a></li>
 <li><a href={`mailto:${BIZ.email}`} className="flex gap-4 break-all hover:text-gold"><Mail className="shrink-0 text-gold" size={20} /> {BIZ.email}</a></li>
 <li className="flex gap-4"><MapPin className="mt-1 shrink-0 text-gold" size={20} /> <span>{BIZ.address}<br /><span className="text-sm text-grey-l">Please confirm the address with Eventables.</span></span></li>
 <li><a href={BIZ.instagram} className="flex gap-4 hover:text-gold"><InstagramIcon className="shrink-0 text-gold" size={20} /> @eventables</a></li></ul>
 <div className="overflow-hidden bg-current/10"><iframe title="Map: Victoria Ironsi Crescent, Gwarinpa, Abuja" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full grayscale" src="https://www.google.com/maps?q=591a+Victoria+Ironsi+Crescent,+Gwarinpa,+Abuja&output=embed" /></div></div>
 </div></section>
 );
}

export default function Site() {
 return (<MotionConfig reducedMotion="user"><Banner /><Header /><main><Hero /><Proof /><Services /><Occasions /><Rentals /><Work /><Process /><Contact /></main>
 <footer className="bg-black px-5 py-10 text-bone/65 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center"><Logo /><p className="text-base max-w-prose">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
 <a href={wa('Hello Eventables!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><WhatsAppIcon size={26} /></a></MotionConfig>);
}

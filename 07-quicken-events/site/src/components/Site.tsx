'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Award, Mail, MapPin, Phone, X, Users } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';
import ReelModal from './ReelModal';
const CODES: Record<string, string> = { '/img/close.webp': 'DdgS5-XMSGu', '/img/cake.webp': 'DdgV7xRsCPd', '/img/couple.webp': 'DdgUfRKsVSi', '/img/dancers.webp': 'DdgT9GjM1eD', '/img/gele.webp': 'DcYneZ7IYC_' };
import { AWARD, BIZ, EVENT_TYPES, GALLERY, PITCH_CONTACT, PORTFOLIO, PROCESS, SERVICES, wa } from '@/content';

const ease = [0.22, 1, 0.36, 1] as const;
const gold = 'text-gold';
function R({ children, d = 0, className = '' }: { children: React.ReactNode; d?: number; className?: string }) {
 return <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 1, delay: d, ease }}>{children}</motion.div>;
}
function RL({ children, d = 0, className = '' }: { children: React.ReactNode; d?: number; className?: string }) {
 return <motion.li className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 1, delay: d, ease }}>{children}</motion.li>;
}
function Logo({ light = true }: { light?: boolean }) {
 return (<a href="#top" className={`inline-flex flex-col items-start leading-none ${light ? 'text-ivory' : 'text-onyx'}`}><span className="font-display text-[1.7rem]">QUICKEN</span><span className="mt-1 text-sm font-bold text-gold">Events &amp; More</span></a>);
}
function Banner() {
 const [o, setO] = useState(true);
 if (!o) return null;
 return (<div className="relative bg-gold px-10 py-2 text-center text-sm font-bold leading-snug text-onyx sm:text-sm">Concept preview designed for {BIZ.short} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
 <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-onyx/10"><X size={14} /></button></div>);
}
function Header() {
 const [s, setS] = useState(false);
 useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
 return (<header className={`sticky top-0 z-40 transition duration-500 ${s ? 'bg-onyx/90 py-2.5 ' : 'bg-onyx py-5'}`}>
 <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
 <nav aria-label="Primary" className="hidden gap-9 text-sm font-bold text-ivory/80 lg:flex">{[['Services', '#services'], ['Celebration', '#story'], ['Portfolio', '#portfolio'], ['Process', '#process'], ['Enquire', '#contact']].map(([l, h]) => <a key={h} href={h} className="transition hover:text-gold">{l}</a>)}</nav>
 <a href="#contact" className="px-4 py-2.5 text-sm font-bold text-gold transition hover:bg-gold hover:text-onyx bg-current/10">Plan my event</a></div></header>);
}

function Hero() {
 const ref = useRef<HTMLElement>(null);
 const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
 const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]); const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
 return (
 <section id="top" ref={ref} className="relative overflow-hidden bg-onyx text-ivory">
 <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pb-28 lg:pt-14">
 <div>
 
 <h1 className="font-display text-[2.4rem] leading-[1.05] sm:text-6xl lg:text-[3.6rem]">
 {['Exceeding expectations,'].map((l, i) => <span key={l} className="block overflow-hidden"><motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease }}>{l}</motion.span></span>)}
 <span className="block overflow-hidden"><motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.36, ease }}>one celebration at a time.</motion.span></span>
 </h1>
 <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9 }} className="mt-7 max-w-md text-lg font-light leading-relaxed text-ivory/75">Luxury wedding, social &amp; corporate event planning across Benin City, Asaba and Delta.</motion.p>
 <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.9 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
 <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-bold text-onyx transition hover:bg-ivory">Plan my event</a>
 <a href="#portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold transition hover:text-gold bg-current/10">View portfolio <ArrowUpRight size={16} /></a>
 </motion.div>
 </div>
 <div className="relative mx-auto w-full max-w-md lg:max-w-none">
 <motion.div style={{ y: y1 }} className="relative ml-auto w-[82%]"><div className="relative aspect-[4/5] overflow-hidden"><Image src="/img/hero1.webp" alt="Couple in Benin coral-bead wedding attire" fill priority sizes="(min-width:1024px) 35vw, 70vw" className="object-cover" /></div><div className="absolute -inset-3 -z-10 bg-current/10" /></motion.div>
 <motion.div style={{ y: y2 }} className="absolute -bottom-10 left-0 w-[42%] border-4"><div className="relative aspect-[4/5]"><Image src="/img/hero2.webp" alt="Bridal make-up with pearl headpiece" fill sizes="(min-width:1024px) 15vw, 35vw" className="object-cover" /></div></motion.div>
 </div>
 </div>
 </section>
 );
}

function AwardBand() {
 return (<section aria-label="Recognition" className="bg-gold text-onyx"><div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
 <p className="flex items-start gap-3 text-base font-bold lg:items-center max-w-prose"><Award className="mt-0.5 shrink-0 lg:mt-0" size={22} /> {AWARD}</p>
 </div></section>);
}

function Services() {
 return (
 <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
 <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
 <R><h2 className="mt-4 font-display text-[2.1rem] leading-[1.05] sm:text-5xl">Moments that leave a <span>lasting impression.</span></h2>
 <p className="mt-6 text-onyx/75 max-w-prose">We really listen to our clients’ details, crafting distinctive events tailored to their specific needs and desires.</p></R>
 <ul>{SERVICES.map((s, i) => (
 <RL key={s.t} d={i * 0.05} className="group flex items-start justify-between gap-6 py-7">
 <div className="flex gap-6"><div><h3 className="font-display text-3xl transition group-hover:text-gold-d sm:text-4xl">{s.t}</h3><p className="mt-2 max-w-md text-base text-onyx/70">{s.d}</p></div></div>
 {s.link ? <a href={BIZ.palmwine} target="_blank" rel="noopener noreferrer" aria-label="Quicken Events Palm Wine on Instagram" className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-gold bg-current/10"><InstagramIcon size={17} /></a> : <ArrowUpRight className="mt-2 shrink-0 text-onyx/30 transition group-hover:text-gold-d" />}
 </RL>))}</ul>
 </div>
 </section>
 );
}

function Story() {
  const [reel, setReel] = useState<string | null>(null);
 return (
 <section id="story" className="bg-onyx py-24 text-ivory lg:py-32">
 <div className="mx-auto max-w-7xl px-5 sm:px-8">
 <R className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-14">
 <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full bg-ivory sm:h-44 sm:w-44"><Image src="/img/monogram.webp" alt="Jose and Whitney wedding monogram" fill sizes="176px" className="object-cover" /></div>
 <div><h2 className="mt-3 font-display text-[2.1rem] sm:text-5xl">Jose <span>&amp;</span> Whitney <span className="">2026</span></h2><p className="mt-3 text-ivory/70 max-w-prose">Wedding highlights, planned and produced by Quicken Events &amp; More.</p></div>
 </R>
 </div>
 <div className="hscroll snap mt-14 flex gap-4 overflow-x-auto px-5 pb-6 sm:px-8 lg:gap-6" tabIndex={0} aria-label="Wedding highlights gallery, scroll sideways">
 {GALLERY.map((g) => (<button key={g.img} onClick={() => setReel(CODES[g.img])} aria-label={`Play video: ${g.alt}`} className="relative aspect-[9/16] w-[68vw] max-w-[22rem] shrink-0 overflow-hidden sm:w-72"><Image src={g.img} alt={g.alt} fill loading="lazy" sizes="(min-width:640px) 288px, 68vw" className="object-cover" /></button>))}<ReelModal code={reel} onClose={() => setReel(null)} />
 </div>
 <p className="mx-auto mt-4 max-w-7xl px-5 text-base text-ivory/55 sm:px-8">Moments from our weddings. Swipe or scroll sideways.</p>
 </section>
 );
}

function Portfolio() {
 const [sel, setSel] = useState<number | null>(null);
 useEffect(() => { if (sel === null) return; const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [sel]);
 return (
 <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
 <R><h2 className="mt-4 font-display text-[2.1rem] sm:text-5xl">Our work, <span>in frames.</span></h2></R>
 <div className="mt-12 columns-2 gap-3 md:columns-3 lg:gap-5">
 {PORTFOLIO.map((p, i) => (<R key={i} d={(i % 3) * 0.06} className="mb-3 break-inside-avoid lg:mb-5"><button onClick={() => setSel(i)} aria-label={`Enlarge: ${p.alt}`} className="group relative block w-full overflow-hidden"><Image src={p.img} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="h-auto w-full transition duration-700 group-hover:scale-105" /></button></R>))}
 </div>
 {sel !== null && (<div role="dialog" aria-modal="true" aria-label="Portfolio image" onClick={() => setSel(null)} className="fixed inset-0 z-[60] grid place-items-center bg-onyx/95 p-4">
 <button aria-label="Close" onClick={() => setSel(null)} className="absolute right-4 top-4 rounded-full bg-ivory/10 p-2 text-ivory"><X /></button>
 <Image src={PORTFOLIO[sel].img} alt={PORTFOLIO[sel].alt} width={PORTFOLIO[sel].w} height={PORTFOLIO[sel].h} className="max-h-[88vh] w-auto max-w-full" /></div>)}
 </section>
 );
}

function Process() {
 return (
 <section id="process" className="bg-blush/60 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
 <R><h2 className="mt-4 font-display text-[2.1rem] sm:text-5xl">From first call to final dance.</h2></R>
 <ol className="mt-14 grid gap-10 md:grid-cols-3">{PROCESS.map((p, i) => (<RL key={p.t} d={i * 0.1} className="pt-6"><h3 className="mt-3 font-display text-3xl">{p.t}</h3><p className="mt-2 text-onyx/70 max-w-prose">{p.d}</p></RL>))}</ol>
 <div className="ph mt-20 px-6 py-14 text-center text-gold-d"><p className="font-display text-3xl max-w-prose">Client testimonials go here</p><p className="mx-auto mt-2 max-w-md text-base">Quoted word for word from your Reviews highlight, with their permission.</p></div>
 </div></section>
 );
}

function Contact() {
 const [f, setF] = useState({ type: EVENT_TYPES[0], date: '', guests: '', city: '' });
 const msg = `Hello Quicken Events, I'd like to plan an event.\nEvent type: ${f.type}\nDate: ${f.date || '-'}\nGuests: ${f.guests || '-'}\nCity: ${f.city || '-'}`;
 const inp = 'mt-1 w-full border-ivory/30 bg-transparent py-3 text-ivory outline-none transition focus:border-gold [color-scheme:dark]';
 return (
 <section id="contact" className="bg-onyx py-24 text-ivory lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
 <div><h2 className="mt-4 font-display text-[2.1rem] leading-[1.05] sm:text-5xl">Let’s create something <span>unforgettable.</span></h2>
 <form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); }} className="mt-10 space-y-6">
 <label className="block text-sm font-bold text-gold">Event type<select className={`${inp} [&>option]:text-onyx`} value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })}>{EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}</select></label>
 <div className="grid gap-6 sm:grid-cols-2"><label className="block text-sm font-bold text-gold">Date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
 <label className="block text-sm font-bold text-gold">Guest count<input inputMode="numeric" className={inp} value={f.guests} onChange={(e) => setF({ ...f, guests: e.target.value })} /></label></div>
 <label className="block text-sm font-bold text-gold">City<input className={inp} placeholder="Benin City, Asaba, Delta…" value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} /></label>
 <button className="inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-bold text-onyx transition hover:bg-ivory sm:w-auto"><WhatsAppIcon size={17} /> Send on WhatsApp</button>
 </form></div>
 <div className="space-y-8">
 <ul className="space-y-5 text-lg">
 {BIZ.phones.map((p) => <li key={p.tel}><a href={`tel:${p.tel}`} className="flex gap-4 hover:text-gold"><Phone className="shrink-0 text-gold" size={20} /> {p.label}</a></li>)}
 <li><a href={`mailto:${BIZ.email}`} className="flex gap-4 break-all hover:text-gold"><Mail className="shrink-0 text-gold" size={20} /> {BIZ.email}</a></li>
 <li className="flex gap-4"><MapPin className="mt-1 shrink-0 text-gold" size={20} /> {BIZ.address}</li>
 <li><a href={BIZ.instagram} className="flex gap-4 hover:text-gold"><InstagramIcon className="shrink-0 text-gold" size={20} /> @quickenevents</a></li>
 </ul>
 <div className="overflow-hidden bg-current/10"><iframe title="Map: Divine Close, off Iwehen Street, Wire Road, Benin City" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full grayscale" src="https://www.google.com/maps?q=Divine+Close,+off+Iwehen+Street,+Wire+Road,+Benin+City&output=embed" /></div>
 <div className="flex items-center justify-between p-5 bg-current/10"><div className="flex items-center gap-3"><Users className="text-gold" /><div><p className="font-display text-xl max-w-prose">Become part of the team</p><p className="text-base text-ivory/60 max-w-prose">Talented and passionate? Say hello.</p></div></div>
 <a href={wa('Hello Quicken Events, I would like to join the team.')} className="text-sm font-bold text-gold underline underline-offset-4">Apply</a></div>
 </div>
 </div></section>
 );
}

export default function Site() {
 return (<MotionConfig reducedMotion="user"><Banner /><Header />
 <main><Hero /><AwardBand /><Services /><Story /><Portfolio /><Process /><Contact /></main>
 <footer className="bg-black px-5 py-10 text-ivory/65 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><Image src="/img/logo.webp" alt="Quicken Event's & More logo" width={110} height={75} loading="lazy" className="rounded" />
 <p className="text-base max-w-prose">{BIZ.name} · {BIZ.rc}</p><p className="text-base max-w-prose">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
 <a href={wa('Hello Quicken Events!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><WhatsAppIcon size={26} /></a>
 </MotionConfig>);
}

'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MotionConfig, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Award, Mail, MapPin, MessageCircle, Phone, X, Users, Instagram } from 'lucide-react';
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
  return (<a href="#top" className={`inline-flex flex-col items-start leading-none ${light ? 'text-ivory' : 'text-onyx'}`}><span className="font-display text-[1.7rem] tracking-[0.3em]">QUICKEN</span><span className="mt-1 text-[8px] font-bold uppercase tracking-[0.5em] text-gold">Events &amp; More</span></a>);
}
function Banner() {
  const [o, setO] = useState(true);
  if (!o) return null;
  return (<div className="relative bg-gold px-10 py-2 text-center text-[11px] font-bold leading-snug text-onyx sm:text-xs">Concept preview designed for {BIZ.short} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
    <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-onyx/10"><X size={14} /></button></div>);
}
function Header() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (<header className={`sticky top-0 z-40 transition-all duration-500 ${s ? 'bg-onyx/90 py-2.5 backdrop-blur-md' : 'bg-onyx py-5'}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
      <nav aria-label="Primary" className="hidden gap-9 text-xs font-bold uppercase tracking-[0.2em] text-ivory/80 lg:flex">{[['Services', '#services'], ['Celebration', '#story'], ['Portfolio', '#portfolio'], ['Process', '#process'], ['Enquire', '#contact']].map(([l, h]) => <a key={h} href={h} className="transition hover:text-gold">{l}</a>)}</nav>
      <a href="#contact" className="border border-gold px-4 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-onyx">Plan my event</a></div></header>);
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]); const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-onyx text-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pb-28 lg:pt-14">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-gold">Benin City · Asaba · Delta</motion.p>
          <h1 className="font-display text-[3.1rem] leading-[1.02] sm:text-7xl lg:text-[5.6rem]">
            {['Exceeding', 'expectations,'].map((l, i) => <span key={l} className="block overflow-hidden"><motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease }}>{l}</motion.span></span>)}
            <span className="block overflow-hidden"><motion.span className="block italic text-gold" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.36, ease }}>one celebration at a time.</motion.span></span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9 }} className="mt-7 max-w-md text-lg font-light leading-relaxed text-ivory/75">Luxury wedding, social &amp; corporate event planning across Benin City, Asaba and Delta.</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.9 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-onyx transition hover:bg-ivory">Plan my event</a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 border border-ivory/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:border-gold hover:text-gold">View portfolio <ArrowUpRight size={16} /></a>
          </motion.div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div style={{ y: y1 }} className="relative ml-auto w-[82%]"><div className="relative aspect-[4/5] overflow-hidden"><Image src="/img/hero1.webp" alt="Couple in Benin coral-bead wedding attire" fill priority sizes="(min-width:1024px) 35vw, 70vw" className="object-cover" /></div><div className="absolute -inset-3 -z-10 border border-gold/60" /></motion.div>
          <motion.div style={{ y: y2 }} className="absolute -bottom-10 left-0 w-[42%] border-4 border-onyx"><div className="relative aspect-[4/5]"><Image src="/img/hero2.webp" alt="Bridal make-up with pearl headpiece" fill sizes="(min-width:1024px) 15vw, 35vw" className="object-cover" /></div></motion.div>
        </div>
      </div>
    </section>
  );
}

function AwardBand() {
  return (<section aria-label="Recognition" className="bg-gold text-onyx"><div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
    <p className="flex items-start gap-3 text-sm font-bold lg:items-center"><Award className="mt-0.5 shrink-0 lg:mt-0" size={22} /> {AWARD}</p>
    <p className="flex gap-6 text-xs font-bold uppercase tracking-[0.2em]"><span>Since 2023</span><span>{BIZ.rc}</span></p></div></section>);
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <R><p className="text-xs font-bold uppercase tracking-[0.4em] text-gold-d">Services</p><h2 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">Moments that leave a <em className="text-gold-d">lasting impression.</em></h2>
          <p className="mt-6 text-onyx/75">We really listen to our clients’ details, crafting distinctive events tailored to their specific needs and desires.</p></R>
        <ul>{SERVICES.map((s, i) => (
          <RL key={s.t} d={i * 0.05} className="group flex items-start justify-between gap-6 border-t border-onyx/15 py-7 last:border-b">
            <div className="flex gap-6"><span className="font-display text-xl text-gold-d">0{i + 1}</span><div><h3 className="font-display text-3xl transition group-hover:text-gold-d sm:text-4xl">{s.t}</h3><p className="mt-2 max-w-md text-sm text-onyx/70">{s.d}</p></div></div>
            {s.link ? <a href={BIZ.palmwine} target="_blank" rel="noopener noreferrer" aria-label="Quicken Events Palm Wine on Instagram" className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-onyx/30 hover:border-gold hover:bg-gold"><Instagram size={17} /></a> : <ArrowUpRight className="mt-2 shrink-0 text-onyx/30 transition group-hover:text-gold-d" />}
          </RL>))}</ul>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-onyx py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <R className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-14">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full bg-ivory sm:h-44 sm:w-44"><Image src="/img/monogram.webp" alt="Jose and Whitney wedding monogram" fill sizes="176px" className="object-cover" /></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.4em] text-gold">Featured celebration</p><h2 className="mt-3 font-display text-5xl sm:text-7xl">Jose <em className="text-gold">&amp;</em> Whitney <span className="text-ivory/50">2026</span></h2><p className="mt-3 text-ivory/70">Wedding highlights, planned and produced by Quicken Events &amp; More.</p></div>
        </R>
      </div>
      <div className="hscroll snap mt-14 flex gap-4 overflow-x-auto px-5 pb-6 sm:px-8 lg:gap-6" tabIndex={0} aria-label="Wedding highlights gallery, scroll sideways">
        {GALLERY.map((g) => (<div key={g.img} className="relative aspect-[9/16] w-[68vw] max-w-[22rem] shrink-0 overflow-hidden sm:w-72"><Image src={g.img} alt={g.alt} fill loading="lazy" sizes="(min-width:640px) 288px, 68vw" className="object-cover" /></div>))}
      </div>
      <p className="mx-auto mt-4 max-w-7xl px-5 text-sm text-ivory/55 sm:px-8">Moments from our weddings. Swipe or scroll sideways.</p>
    </section>
  );
}

function Portfolio() {
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => { if (sel === null) return; const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [sel]);
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <R><p className="text-xs font-bold uppercase tracking-[0.4em] text-gold-d">Portfolio</p><h2 className="mt-4 font-display text-5xl sm:text-7xl">Our work, <em className="text-gold-d">in frames.</em></h2></R>
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
      <R><p className="text-xs font-bold uppercase tracking-[0.4em] text-gold-d">Our process</p><h2 className="mt-4 font-display text-5xl sm:text-6xl">From first call to final dance.</h2></R>
      <ol className="mt-14 grid gap-10 md:grid-cols-3">{PROCESS.map((p, i) => (<RL key={p.t} d={i * 0.1} className="border-t border-onyx pt-6"><span className="font-display text-6xl text-gold-d/60">0{i + 1}</span><h3 className="mt-3 font-display text-3xl">{p.t}</h3><p className="mt-2 text-onyx/70">{p.d}</p></RL>))}</ol>
      <div className="ph mt-20 px-6 py-14 text-center text-gold-d"><p className="font-display text-3xl">Client testimonials go here</p><p className="mx-auto mt-2 max-w-md text-sm">Quoted word for word from your Reviews highlight, with their permission.</p></div>
    </div></section>
  );
}

function Contact() {
  const [f, setF] = useState({ type: EVENT_TYPES[0], date: '', guests: '', city: '' });
  const msg = `Hello Quicken Events, I'd like to plan an event.\nEvent type: ${f.type}\nDate: ${f.date || '-'}\nGuests: ${f.guests || '-'}\nCity: ${f.city || '-'}`;
  const inp = 'mt-1 w-full border-b border-ivory/30 bg-transparent py-3 text-ivory outline-none transition focus:border-gold [color-scheme:dark]';
  return (
    <section id="contact" className="bg-onyx py-24 text-ivory lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
      <div><p className="text-xs font-bold uppercase tracking-[0.4em] text-gold">Plan my event</p><h2 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">Let’s create something <em className="text-gold">unforgettable.</em></h2>
        <form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); }} className="mt-10 space-y-6">
          <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gold">Event type<select className={`${inp} [&>option]:text-onyx`} value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })}>{EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}</select></label>
          <div className="grid gap-6 sm:grid-cols-2"><label className="block text-xs font-bold uppercase tracking-[0.2em] text-gold">Date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
            <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gold">Guest count<input inputMode="numeric" className={inp} value={f.guests} onChange={(e) => setF({ ...f, guests: e.target.value })} /></label></div>
          <label className="block text-xs font-bold uppercase tracking-[0.2em] text-gold">City<input className={inp} placeholder="Benin City, Asaba, Delta…" value={f.city} onChange={(e) => setF({ ...f, city: e.target.value })} /></label>
          <button className="inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-onyx transition hover:bg-ivory sm:w-auto"><MessageCircle size={17} /> Send on WhatsApp</button>
        </form></div>
      <div className="space-y-8">
        <ul className="space-y-5 text-lg">
          {BIZ.phones.map((p) => <li key={p.tel}><a href={`tel:${p.tel}`} className="flex gap-4 hover:text-gold"><Phone className="shrink-0 text-gold" size={20} /> {p.label}</a></li>)}
          <li><a href={`mailto:${BIZ.email}`} className="flex gap-4 break-all hover:text-gold"><Mail className="shrink-0 text-gold" size={20} /> {BIZ.email}</a></li>
          <li className="flex gap-4"><MapPin className="mt-1 shrink-0 text-gold" size={20} /> {BIZ.address}</li>
          <li><a href={BIZ.instagram} className="flex gap-4 hover:text-gold"><Instagram className="shrink-0 text-gold" size={20} /> @quickenevents</a></li>
        </ul>
        <div className="overflow-hidden border border-gold/40"><iframe title="Map: Divine Close, off Iwehen Street, Wire Road, Benin City" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full grayscale" src="https://www.google.com/maps?q=Divine+Close,+off+Iwehen+Street,+Wire+Road,+Benin+City&output=embed" /></div>
        <div className="flex items-center justify-between border border-ivory/20 p-5"><div className="flex items-center gap-3"><Users className="text-gold" /><div><p className="font-display text-xl">Become part of the team</p><p className="text-sm text-ivory/60">Talented and passionate? Say hello.</p></div></div>
          <a href={wa('Hello Quicken Events, I would like to join the team.')} className="text-xs font-bold uppercase tracking-[0.2em] text-gold underline underline-offset-4">Apply</a></div>
      </div>
    </div></section>
  );
}

export default function Site() {
  return (<MotionConfig reducedMotion="user"><Banner /><Header />
    <main><Hero /><AwardBand /><Services /><Story /><Portfolio /><Process /><Contact /></main>
    <footer className="border-t border-ivory/10 bg-black px-5 py-10 text-ivory/65 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><Image src="/img/logo.webp" alt="Quicken Event's & More logo" width={110} height={75} loading="lazy" className="rounded" />
      <p className="text-sm">{BIZ.name} · {BIZ.rc}</p><p className="text-xs">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
    <a href={wa('Hello Quicken Events!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1c7a4a] text-white shadow-2xl transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><MessageCircle size={26} /></a>
  </MotionConfig>);
}

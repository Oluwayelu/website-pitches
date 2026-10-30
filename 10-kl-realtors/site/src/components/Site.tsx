'use client';
import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, Award, BadgeCheck, Compass, FileCheck2, Home, ImagePlus, Mail, MapPin, MessageCircle, Phone, Quote, Trees, TrendingUp, X, Facebook, Landmark } from 'lucide-react';
import { BIZ, ESTATES, PITCH_CONTACT, PROOF, SERVICES, WHY, wa } from '@/content';

const ease = [0.22, 1, 0.36, 1] as const;
function R({ children, d = 0, className = '' }: { children: ReactNode; d?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.8, delay: d, ease }}>{children}</motion.div>;
}
const btnG = 'inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-4 text-sm font-bold text-em-2 transition hover:bg-cream';
const btnE = 'inline-flex items-center justify-center gap-2 rounded-xl bg-em px-7 py-4 text-sm font-bold text-cream transition hover:bg-em-3';

function Seal({ size = 44, dark = false }: { size?: number; dark?: boolean }) {
  return (<span className={`grid shrink-0 place-items-center rounded-2xl font-display ${dark ? 'bg-em text-gold' : 'bg-gold text-em-2'}`} style={{ width: size, height: size, fontSize: size * 0.5 }} aria-hidden>KL</span>);
}
function Logo({ light = false }: { light?: boolean }) {
  return (<a href="#top" className="inline-flex items-center gap-3"><Seal dark={!light} /><span className={`flex flex-col leading-none ${light ? 'text-cream' : 'text-ink'}`}><span className="text-[13px] font-extrabold tracking-[0.14em]">KL REALTORS</span><span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-d" style={light ? { color: '#D4AF6A' } : undefined}>&amp; Properties</span></span></a>);
}
function Banner() {
  const [o, setO] = useState(true);
  if (!o) return null;
  return (<div className="relative bg-gold px-10 py-2 text-center text-[11px] font-semibold leading-snug text-em-2 sm:text-xs">Concept preview designed for {BIZ.short} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
    <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-em-2/10"><X size={14} /></button></div>);
}
function Header() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (<header className={`sticky top-0 z-40 transition-all duration-300 ${s ? 'bg-cream/90 py-2 shadow-sm backdrop-blur' : 'bg-cream py-4'}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
      <nav aria-label="Primary" className="hidden gap-8 text-sm font-semibold lg:flex">{[['Estates', '#estates'], ['Services', '#services'], ['Why Yemisi', '#why'], ['Inspection', '#inspect'], ['Contact', '#contact']].map(([l, h]) => <a key={h} href={h} className="text-ink/75 hover:text-em">{l}</a>)}</nav>
      <a href={wa('Hi Yemisi, I found you on your website and would like to talk.')} className="inline-flex items-center gap-2 rounded-xl bg-em px-4 py-2.5 text-xs font-bold text-cream sm:text-sm"><MessageCircle size={16} /> Chat<span className="hidden sm:inline"> with Yemisi</span></a></div></header>);
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-em text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#D4AF6A 1px, transparent 1px)', backgroundSize: '22px 22px' }} aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pb-32 lg:pt-16">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold"><Award size={14} /> Award-winning realtor</motion.p>
          <h1 className="font-display text-[2.9rem] leading-[1.04] sm:text-6xl lg:text-[4.1rem] xl:text-[4.3rem]">
            {['Lekki land & homes,', 'sold with '].map((l, i) => <span key={l} className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.1 + i * 0.12, ease }}>{l}{i === 1 && <em className="text-gold">integrity.</em>}</motion.span></span>)}
          </h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">I’m Yemisi, an award-winning realtor with 200+ properties sold across Lekki, Ikate, Ibeju and Epe.</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.8 }} className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={wa('Hi Yemisi, I would like to talk about land or a house in Lekki.')} className={btnG}><MessageCircle size={18} /> Chat with Yemisi</a><a href="#estates" className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream/40 px-7 py-4 text-sm font-bold transition hover:border-gold hover:text-gold">View estates <ArrowUpRight size={17} /></a></motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15, ease }} className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-gold" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-em-2"><Image src="/img/portrait.webp" alt="Portrait of the KL Realtors realtor, smiling, in an orange satin shirt" fill priority sizes="(min-width:1024px) 38vw, 85vw" className="object-cover object-top" /></div>
          <div className="spin-slow absolute -bottom-8 -left-6 h-28 w-28 sm:-left-10 sm:h-32 sm:w-32" aria-hidden><svg viewBox="0 0 120 120" className="h-full w-full"><defs><path id="c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs><circle cx="60" cy="60" r="58" fill="#FAF6EE" /><text fontSize="10.500" fontWeight="800" letterSpacing="2.600" fill="#0F4C3A"><textPath href="#c">LEKKI LAND &amp; HOUSES EXPERT · </textPath></text></svg></div>
          <div className="absolute -bottom-8 -left-6 grid h-28 w-28 place-items-center sm:-left-10 sm:h-32 sm:w-32"><Seal size={46} dark /></div>
        </motion.div>
      </div>
    </section>
  );
}

function Proof() {
  return (<section aria-label="Track record" className="bg-cream-2"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-5 py-9 sm:px-8 lg:grid-cols-4">
    {PROOF.map((p, i) => <R key={p.big} d={i * 0.07}><p className="font-display text-3xl text-em sm:text-4xl">{p.big}</p><p className="mt-1 text-xs font-semibold text-ink/70 sm:text-sm">{p.small}</p></R>)}</div></section>);
}

function Estates() {
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => { if (!open) return; const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [open]);
  const est = ESTATES.find((e) => e.id === open);
  return (
    <section id="estates" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <R><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-d">Featured estates</p><h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-6xl">Where would you like to <em className="text-em">plant roots?</em></h2></R>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {ESTATES.map((e, i) => (<R key={e.id} d={i * 0.1}><article className="group overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-34px_rgba(15,76,58,.55)] ring-1 ring-em/10">
          <div className="ph relative flex aspect-[16/10] flex-col items-center justify-center gap-2 text-gold-d"><ImagePlus size={28} strokeWidth={1.3} /><span className="text-[11px] font-bold uppercase tracking-widest">{e.name} flyer / photos go here</span></div>
          <div className="p-7"><p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold-d"><MapPin size={14} /> {e.where}</p><h3 className="mt-2 font-display text-3xl">{e.name}</h3><p className="mt-2 text-ink/70">{e.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3"><button onClick={() => setOpen(e.id)} className={btnE}>Request price &amp; documents</button><a href={wa(`Hi Yemisi, please send me details of ${e.name}.`)} className="inline-flex items-center gap-2 rounded-xl border border-em/30 px-5 py-4 text-sm font-bold text-em hover:bg-em/5"><MessageCircle size={16} /> WhatsApp</a></div></div></article></R>))}
      </div>
      {est && (<div role="dialog" aria-modal="true" aria-label={`${est.name} details`} onClick={() => setOpen(null)} className="fixed inset-0 z-[60] grid place-items-center bg-em-2/90 p-4"><div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md rounded-3xl bg-cream p-7 shadow-2xl">
        <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-4 top-4 rounded-full bg-em/10 p-2"><X size={16} /></button>
        <p className="text-xs font-bold uppercase tracking-widest text-gold-d">{est.where}</p><h3 className="mt-1 font-display text-3xl">{est.name}</h3>
        <p className="mt-4 text-ink/75">Price, plot sizes, title and documents are shared directly by Yemisi. Tap below and she’ll send everything over on WhatsApp.</p>
        <a href={wa(`Hi Yemisi, please send me the price and documents for ${est.name}.`)} className={`${btnG} mt-6 w-full`}><MessageCircle size={18} /> Request on WhatsApp</a></div></div>)}
    </section>
  );
}

function Services() {
  const icons = [Trees, Home, TrendingUp, Compass];
  return (
    <section id="services" className="bg-cream-2 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <R><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-d">Services</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">How I can help.</h2></R>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => { const I = icons[i]; return (<R key={s.t} d={i * 0.08}><div className="h-full rounded-3xl bg-cream p-7 transition hover:-translate-y-1 hover:shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-em text-gold"><I size={22} /></span><h3 className="mt-6 font-display text-2xl">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-ink/70">{s.d}</p></div></R>); })}
      </div>
      <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-em"><MapPin size={16} /> {BIZ.areas.join(' · ')}</p></div></section>
  );
}

function Why() {
  const icons = [FileCheck2, BadgeCheck, Landmark];
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <R><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-d">Why buy with Yemisi</p><h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">Buy with <em className="text-em">confidence.</em></h2><p className="mt-5 max-w-md text-ink/70">Questions worth asking before any purchase. Yemisi is happy to walk you through each one.</p></R>
        <ul className="space-y-4">{WHY.map((w, i) => { const I = icons[i]; return (<li key={w.t}><R d={i * 0.08}><div className="flex gap-5 rounded-3xl border border-em/15 p-6"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-em-2"><I size={22} /></span><div><h3 className="font-display text-2xl">{w.t}</h3><p className="mt-1 text-ink/70">{w.d}</p></div></div></R></li>); })}</ul>
      </div>
      <R className="mt-16"><div className="ph rounded-3xl px-6 py-12 text-center text-gold-d"><Quote className="mx-auto" size={26} /><p className="mt-2 font-display text-2xl">Client testimonials go here</p><p className="mx-auto mt-1 max-w-sm text-sm">Real words from buyers, quoted with their permission.</p></div></R>
    </section>
  );
}

function Inspect() {
  const [f, setF] = useState({ name: '', estate: ESTATES[0].name, date: '', phone: '' });
  const msg = `Hi Yemisi, I'd like to book a free site inspection.\nName: ${f.name || '-'}\nEstate: ${f.estate}\nPreferred date: ${f.date || '-'}\nMy phone: ${f.phone || '-'}`;
  const inp = 'mt-1 w-full rounded-xl border border-em/20 bg-white px-4 py-3 text-sm outline-none focus:border-em';
  return (
    <section id="inspect" className="bg-em py-24 text-cream lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
      <R><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Free site inspection</p><h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">See it for yourself <em className="text-gold">before you decide.</em></h2><p className="mt-5 max-w-md text-cream/75">Pick an estate and a date. Your details open in WhatsApp, ready to send to Yemisi.</p></R>
      <R d={0.1}><form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); }} className="space-y-3 rounded-3xl bg-cream p-6 text-ink shadow-2xl sm:p-8">
        <label className="block text-xs font-bold">Your name<input className={inp} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
        <label className="block text-xs font-bold">Estate<select className={inp} value={f.estate} onChange={(e) => setF({ ...f, estate: e.target.value })}>{[...ESTATES.map((e) => e.name), 'Not sure yet'].map((o) => <option key={o}>{o}</option>)}</select></label>
        <div className="grid gap-3 sm:grid-cols-2"><label className="block text-xs font-bold">Preferred date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label><label className="block text-xs font-bold">Your phone<input type="tel" className={inp} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} autoComplete="tel" /></label></div>
        <button className={`${btnE} w-full`}><MessageCircle size={18} /> Book on WhatsApp</button></form></R>
    </div></section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <R><h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Let’s find your <em className="text-em">place in Lekki.</em></h2></R>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <a href={wa('Hi Yemisi, I would like to talk about a property.')} className="rounded-3xl bg-em p-7 text-cream transition hover:-translate-y-1"><MessageCircle className="text-gold" size={28} /><p className="mt-8 text-sm text-cream/70">WhatsApp</p><p className="font-display text-2xl">{BIZ.phones[0].label}</p></a>
        <div className="rounded-3xl border border-em/20 p-7"><Phone className="text-em" size={28} /><p className="mt-8 text-sm text-ink/75">Call</p>{BIZ.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="block font-display text-2xl hover:text-em">{p.label}</a>)}</div>
        <a href={`mailto:${BIZ.email}`} className="rounded-3xl border border-em/20 p-7 transition hover:border-em"><Mail className="text-em" size={28} /><p className="mt-8 text-sm text-ink/75">Email</p><p className="break-all font-display text-xl sm:text-2xl">{BIZ.email}</p></a>
      </div>
      <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-ink/75"><span className="flex items-center gap-2"><MapPin size={17} className="text-em" /> {BIZ.areas.join(' · ')}</span><a href={BIZ.facebook} className="flex items-center gap-2 underline underline-offset-4 hover:text-em"><Facebook size={17} className="text-em" /> Facebook</a></p>
    </section>
  );
}

export default function Site() {
  return (<MotionConfig reducedMotion="user"><Banner /><Header /><main><Hero /><Proof /><Estates /><Services /><Why /><Inspect /><Contact /></main>
    <footer className="bg-em-2 px-5 py-10 text-cream/70 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center"><Logo light /><p className="text-sm font-semibold text-gold">{BIZ.name} · {BIZ.rc}</p><p className="text-xs">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
    <a href={wa('Hi Yemisi!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1c7a4a] text-white shadow-2xl ring-2 ring-cream transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><MessageCircle size={26} /></a></MotionConfig>);
}

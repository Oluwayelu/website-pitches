'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Gift, GraduationCap, ImagePlus, Mail, MapPin, MessageCircle, Phone, Sparkles, X, Check, Baby, Clock, Facebook } from 'lucide-react';
import { BIZ, GALLERY, MENU, PITCH_CONTACT, PROOF, wa } from '@/content';

gsap.registerPlugin(useGSAP);
const btnP = 'inline-flex items-center justify-center gap-2 rounded-full bg-cocoa px-7 py-3.5 text-sm font-medium tracking-wide text-snow transition hover:bg-cocoa-2';
const btnO = 'inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/40 px-7 py-3.5 text-sm font-medium tracking-wide transition hover:border-cocoa hover:bg-blush';

function BoxMark({ size = 34 }: { size?: number }) {
  return (<svg viewBox="0 0 40 40" width={size} height={size} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="6" y="16" width="28" height="19" rx="2" /><rect x="4" y="11" width="32" height="6" rx="1.5" /><path d="M20 11v24" stroke="#C6A15B" />
    <path d="M20 11c-3-7-10-6-8-2 1.5 3 8 2 8 2zM20 11c3-7 10-6 8-2-1.5 3-8 2-8 2z" stroke="#C6A15B" />
  </svg>);
}
function Logo({ light }: { light?: boolean }) {
  return (<a href="#top" className={`inline-flex items-center gap-3 ${light ? 'text-snow' : 'text-cocoa'}`}>
    <BoxMark /><span className="flex flex-col leading-none"><span className="font-display text-xl font-semibold tracking-[0.22em]">BEAUTY BOX</span><span className={`mt-1 text-[8.5px] font-medium tracking-[0.34em] ${light ? "text-gold" : "text-gold-d"}`}>SPA · NAIL · BEAUTY</span></span></a>);
}
function Banner() {
  const [o, setO] = useState(true);
  if (!o) return null;
  return (<div className="relative bg-mint px-10 py-2 text-center text-[11px] font-medium leading-snug text-cocoa sm:text-xs">
    Concept preview designed for {BIZ.name} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
    <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-cocoa/10"><X size={14} /></button></div>);
}
function Header() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (<header className={`sticky top-0 z-40 transition-all duration-300 ${s ? 'bg-snow/90 py-2 shadow-[0_1px_0_rgba(46,30,26,.1)] backdrop-blur' : 'bg-snow py-4'}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
      <nav aria-label="Primary" className="hidden gap-8 text-sm lg:flex">{[['Treatments', '#menu'], ['Nail art', '#nails'], ['Kids', '#kids'], ['Academy', '#academy'], ['Visit', '#visit']].map(([l, h]) => <a key={h} href={h} className="text-cocoa-2 hover:text-cocoa">{l}</a>)}</nav>
      <a href={wa('Hi Beauty Box, I would like to book.')} className="inline-flex items-center gap-2 rounded-full bg-cocoa px-4 py-2.5 text-xs font-medium text-snow sm:text-sm"><MessageCircle size={16} /> Book<span className="hidden sm:inline"> on WhatsApp</span></a>
    </div></header>);
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.lid', { y: 0, duration: 0.01 })
        .to('.lid', { yPercent: -75, rotate: -9, x: -30, duration: 0.7, ease: 'power3.inOut' })
        .from('.unbox', { y: 50, opacity: 0, duration: 0.7, stagger: 0.09 }, '-=0.35')
        .from('.spark', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.07, transformOrigin: 'center' }, '-=0.5');
    });
  }, { scope: ref });
  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-blush/60">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-2 lg:pb-28 lg:pt-14">
        <div>
          <p className="unbox mb-5 text-xs font-medium uppercase tracking-[0.35em] text-rose-d">Ajao Estate, Lagos</p>
          <h1 className="unbox font-display text-[3.4rem] font-medium leading-[0.95] sm:text-7xl lg:text-[6.2rem]">Unbox <em className="font-normal text-rose-d">your</em> beauty.</h1>
          <p className="unbox mt-6 max-w-md text-lg leading-relaxed text-cocoa-2">Nails, facials and spa treatments by a UK-certified therapist, in Ajao Estate, Lagos.</p>
          <div className="unbox mt-9 flex flex-col gap-3 sm:flex-row"><a href={wa('Hi Beauty Box, I would like to book a treatment.')} className={btnP}><MessageCircle size={18} /> Book on WhatsApp</a><a href="#menu" className={btnO}>View treatments <ArrowUpRight size={18} /></a></div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md" aria-hidden>
          <div className="absolute inset-6 rounded-full" style={{ background: "radial-gradient(circle, rgba(191,227,214,.8), rgba(191,227,214,0) 70%)" }} />
          <svg viewBox="0 0 400 400" className="relative h-full w-full">
            <defs><linearGradient id="bx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E3BDB6" /><stop offset="1" stopColor="#D8A7A0" /></linearGradient><linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E2C78D" /><stop offset="1" stopColor="#C6A15B" /></linearGradient></defs>
            <ellipse cx="200" cy="372" rx="130" ry="14" fill="#2E1E1A" opacity=".12" />
            <g className="float"><rect x="70" y="170" width="260" height="190" rx="10" fill="url(#bx)" /><rect x="70" y="170" width="260" height="26" fill="#000" opacity=".06" />
              <rect x="184" y="170" width="32" height="190" fill="url(#gd)" />
              <text x="200" y="285" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="30" fill="#2E1E1A">Beauty Box</text></g>
            <g className="lid float" style={{ transformOrigin: '200px 150px' }}><rect x="58" y="120" width="284" height="56" rx="10" fill="url(#bx)" /><rect x="184" y="120" width="32" height="56" fill="url(#gd)" />
              <path d="M200 120c-14-44-62-40-52-14 8 20 52 14 52 14zM200 120c14-44 62-40 52-14-8 20-52 14-52 14z" fill="url(#gd)" /><circle cx="200" cy="120" r="9" fill="#B08A43" /></g>
            {[[90, 110, 12], [320, 90, 9], [340, 220, 7], [60, 240, 8]].map(([x, y, r], i) => <path key={i} className="spark" d={`M${x} ${y - r}l${r * 0.3} ${r * 0.7} ${r * 0.7} ${r * 0.3}-${r * 0.7} ${r * 0.3}-${r * 0.3} ${r * 0.7}-${r * 0.3}-${r * 0.7}-${r * 0.7}-${r * 0.3} ${r * 0.7}-${r * 0.3}z`} fill="#C6A15B" />)}
          </svg>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (<section aria-label="Highlights" className="border-y border-cocoa/10 bg-snow"><ul className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-6 text-sm font-medium sm:px-8 lg:grid-cols-4 lg:text-base">
    {PROOF.map((p) => <li key={p} className="flex items-center gap-2.5"><Sparkles size={16} className="shrink-0 text-gold-d" /> {p}</li>)}</ul></section>);
}

function Menu() {
  const tabs = Object.keys(MENU); const [t, setT] = useState(tabs[0]);
  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-d">Treatment menu</p>
      <h2 className="mt-3 font-display text-4xl sm:text-6xl">Choose your <em className="text-rose-d">treat.</em></h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div role="tablist" aria-label="Treatment categories" className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          {tabs.map((k) => (<button key={k} role="tab" id={`t-${k}`} aria-selected={t === k} aria-controls="panel" onClick={() => setT(k)}
            className={`rounded-full px-5 py-2.5 text-left font-display text-lg transition lg:rounded-none lg:border-b lg:border-cocoa/15 lg:bg-transparent lg:px-0 lg:py-4 lg:text-3xl ${t === k ? 'bg-cocoa text-snow lg:text-rose-d' : 'bg-blush hover:bg-mint/60 lg:bg-transparent'}`}>{k}</button>))}
        </div>
        <div id="panel" role="tabpanel" aria-labelledby={`t-${t}`} className="rounded-3xl bg-blush/70 p-7 sm:p-10">
          <ul>{MENU[t].map((it) => (<li key={it} className="flex flex-wrap items-center justify-between gap-3 border-b border-cocoa/10 py-4 last:border-0"><span className="font-display text-2xl">{it}</span><span className="rounded-full border border-gold-d/60 px-3 py-1 text-xs font-medium text-gold-d">Prices on request</span></li>))}</ul>
          <a href={wa(`Hi Beauty Box, I'd like to book: ${t}.`)} className={`${btnP} mt-7`}><MessageCircle size={17} /> Book {t.toLowerCase()}</a>
        </div>
      </div>
    </section>
  );
}

function Nails() {
  const tint = ['from-blush to-rose/60', 'from-mint to-blush', 'from-rose/50 to-mint/80', 'from-blush to-mint', 'from-mint/80 to-rose/50', 'from-rose/60 to-blush'];
  return (
    <section id="nails" className="bg-snow pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-d">Nail-art gallery</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">Tiny canvases, <em className="text-rose-d">big art.</em></h2></div>
          <p className="max-w-xs text-sm text-cocoa-2">3D designs, UV gel, gel extensions and the butterfly set. Your photos drop right in here.</p></div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((g, i) => (<div key={g} className={`ph flex flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-br text-gold-d ${tint[i]} ${i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}><ImagePlus size={24} strokeWidth={1.3} /><span className="px-2 text-center text-[11px] font-medium uppercase tracking-widest">{g}</span></div>))}
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl bg-cocoa p-7 text-snow sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div><p className="font-display text-3xl">Ask about <em className="text-gold">current offers</em></p><p className="mt-1 text-snow/75">Recent promos included “20% off your next spa experience”.</p></div>
          <a href={wa('Hi Beauty Box, what offers are running now?')} className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-cocoa hover:bg-snow"><MessageCircle size={17} /> Ask on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Kids() {
  return (
    <section id="kids" className="bg-mint/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto grid aspect-[5/4] w-full max-w-lg place-items-center overflow-hidden rounded-[3rem] bg-gradient-to-br from-blush to-mint"><Baby size={90} strokeWidth={0.8} className="text-rose-d/70" aria-hidden /><span className="absolute bottom-4 text-[11px] font-medium uppercase tracking-widest text-gold-d">Your kids’ spa photo goes here</span></div>
        <div><p className="text-xs font-medium uppercase tracking-[0.35em] text-mint-d">Little princes &amp; princesses</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">Little ones deserve <em className="text-rose-d">pampering too.</em></h2>
          <p className="mt-5 max-w-md text-lg text-cocoa-2">Kids’ pampering sessions for little princes and princesses.</p>
          <a href={wa('Hi Beauty Box, I would like to ask about kids’ pampering.')} className={`${btnP} mt-7`}><MessageCircle size={17} /> Ask about kids’ pampering</a></div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-8 rounded-[2rem] border border-cocoa/15 p-8 sm:p-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div><GraduationCap className="text-gold-d" size={34} strokeWidth={1.3} /><p className="mt-5 text-xs font-medium uppercase tracking-[0.35em] text-rose-d">Beauty training</p>
          <h2 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">Ready to launch a <em className="text-rose-d">high-income</em> beauty career?</h2></div>
        <div><p className="text-cocoa-2">Learn from a UK-certified beauty therapist and nail technician. Course details and fees are shared on enquiry.</p>
          <a href={wa('Hi Beauty Box, I would like to enquire about beauty training.')} className={`${btnP} mt-6`}><MessageCircle size={17} /> Enquire about training</a></div>
      </div>
    </section>
  );
}

function Visit() {
  const [f, setF] = useState({ name: '', treat: Object.values(MENU).flat()[0], date: '' });
  const msg = `Hi Beauty Box, I'd like to book.\nName: ${f.name || '-'}\nTreatment: ${f.treat}\nPreferred date: ${f.date || '-'}`;
  const inp = 'mt-1 w-full rounded-xl border border-cocoa/20 bg-snow px-4 py-3 text-sm outline-none focus:border-cocoa';
  return (
    <section id="visit" className="bg-blush/70 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-d">Book &amp; visit</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">Your appointment <em className="text-rose-d">awaits.</em></h2>
          <form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); }} className="mt-8 space-y-3 rounded-3xl bg-snow p-6 shadow-xl">
            <label className="block text-xs font-medium">Your name<input className={inp} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
            <label className="block text-xs font-medium">Treatment<select className={inp} value={f.treat} onChange={(e) => setF({ ...f, treat: e.target.value })}>{Object.entries(MENU).map(([g, items]) => <optgroup key={g} label={g}>{items.map((i) => <option key={i}>{i}</option>)}</optgroup>)}</select></label>
            <label className="block text-xs font-medium">Preferred date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
            <button className={`${btnP} w-full`}><MessageCircle size={17} /> Book on WhatsApp</button>
            <a href={wa('Hi Beauty Box, I would like to enquire about a gift voucher.')} className="flex items-center justify-center gap-2 pt-1 text-sm font-medium underline underline-offset-4"><Gift size={16} /> Gift voucher enquiry</a>
          </form>
        </div>
        <div className="space-y-5">
          <div className="overflow-hidden rounded-3xl bg-snow">
            <iframe title="Map: 11 Agbor Close, Ajao Estate, Lagos" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full" src="https://www.google.com/maps?q=11+Agbor+Close,+Ajao+Estate,+Lagos&output=embed" />
            <ul className="space-y-3.5 p-6 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-gold-d" size={18} /> {BIZ.address}</li>
              <li className="flex gap-3"><Clock className="shrink-0 text-gold-d" size={18} /> By appointment</li>
              <li><a href={`tel:${BIZ.tel}`} className="flex gap-3 hover:underline"><Phone className="shrink-0 text-gold-d" size={18} /> {BIZ.phoneLabel}</a></li>
              <li><a href={`mailto:${BIZ.email}`} className="flex gap-3 break-all hover:underline"><Mail className="shrink-0 text-gold-d" size={18} /> {BIZ.email}</a></li>
            </ul>
          </div>
          <div className="ph rounded-3xl px-6 py-9 text-center text-gold-d"><p className="font-display text-2xl">Your 2 Facebook reviews go here</p><p className="mt-1 text-sm">Quoted word for word once you share them.</p></div>
          <div className="flex items-center gap-4 rounded-3xl bg-snow p-4"><Image src="/img/logo.webp" alt="Beauty Box Spa, Nail & Beauty logo" width={72} height={72} className="rounded-2xl" loading="lazy" /><p className="text-sm text-cocoa-2">Our logo: <em className="font-display text-base text-cocoa">…a place of beauty.</em></p></div>
        </div>
      </div>
    </section>
  );
}

export default function Site() {
  return (<>
    <Banner /><Header />
    <main><Hero /><Proof /><Menu /><Nails /><Kids /><Academy /><Visit /></main>
    <footer className="bg-cocoa px-5 py-10 text-snow/75 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center"><Logo light /><a href={BIZ.facebook} className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-gold"><Facebook size={16} /> Facebook</a><p className="text-xs">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
    <a href={wa('Hi Beauty Box!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1c7a4a] text-white shadow-2xl transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><MessageCircle size={26} /></a>
  </>);
}

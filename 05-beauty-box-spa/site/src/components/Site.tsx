'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Gift, GraduationCap, ImagePlus, Mail, MapPin, Phone, Sparkles, X, Check, Baby, Clock } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon } from './BrandIcons';
import { BIZ, GALLERY, MENU, PITCH_CONTACT, PROOF, wa } from '@/content';

gsap.registerPlugin(useGSAP);
const btnP = 'inline-flex items-center justify-center gap-2 rounded-full bg-cocoa px-7 py-3.5 text-sm font-medium text-snow transition hover:bg-cocoa-2';
const btnO = 'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition hover:bg-blush bg-current/10';

function BoxMark({ size = 34 }: { size?: number }) {
 return (<svg viewBox="0 0 40 40" width={size} height={size} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
 <rect x="6" y="16" width="28" height="19" rx="2" /><rect x="4" y="11" width="32" height="6" rx="1.5" /><path d="M20 11v24" stroke="#C6A15B" />
 <path d="M20 11c-3-7-10-6-8-2 1.5 3 8 2 8 2zM20 11c3-7 10-6 8-2-1.5 3-8 2-8 2z" stroke="#C6A15B" />
 </svg>);
}
function Logo({ light }: { light?: boolean }) {
 return (<a href="#top" className={`inline-flex items-center gap-3 ${light ? 'text-snow' : 'text-cocoa'}`}>
 <BoxMark /><span className="flex flex-col leading-none"><span className="font-display text-xl font-semibold">BEAUTY BOX</span><span className={`mt-1 text-sm font-medium ${light ? "text-gold" : "text-gold-d"}`}>SPA · NAIL · BEAUTY</span></span></a>);
}
function Banner() {
 const [o, setO] = useState(true);
 if (!o) return null;
 return (<div className="relative bg-mint px-10 py-2 text-center text-sm font-medium leading-snug text-cocoa sm:text-sm">
 Concept preview designed for {BIZ.name} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
 <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-cocoa/10"><X size={14} /></button></div>);
}
function Header() {
 const [s, setS] = useState(false);
 useEffect(() => { const f = () => setS(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
 return (<header className={`sticky top-0 z-40 transition duration-300 ${s ? 'bg-snow/90 py-2 ' : 'bg-snow py-4'}`}>
 <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
 <nav aria-label="Primary" className="hidden gap-8 text-sm lg:flex">{[['Treatments', '#menu'], ['Nail art', '#nails'], ['Kids', '#kids'], ['Academy', '#academy'], ['Visit', '#visit']].map(([l, h]) => <a key={h} href={h} className="text-cocoa-2 hover:text-cocoa">{l}</a>)}</nav>
 <a href={wa('Hi Beauty Box, I would like to book.')} className="inline-flex items-center gap-2 rounded-full bg-cocoa px-4 py-2.5 text-sm font-medium text-snow sm:text-sm"><WhatsAppIcon size={16} /> Book<span className="hidden sm:inline"> on WhatsApp</span></a>
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
 .from('.unbox', { y: 50, duration: 0.7, stagger: 0.09 }, '-=0.35')
 .from('.spark', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.07, transformOrigin: 'center' }, '-=0.5');
 });
 }, { scope: ref });
 return (
 <section id="top" ref={ref} className="relative overflow-hidden bg-blush/60">
 <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-2 lg:pb-28 lg:pt-14">
 <div>
 
 <h1 className="unbox font-display text-[3.4rem] font-medium leading-[0.95] sm:text-7xl lg:text-[6.2rem]">Unbox <span>your</span> beauty.</h1>
 <p className="unbox mt-6 max-w-md text-lg leading-relaxed text-cocoa-2">Nails, facials and spa treatments by a UK-certified therapist, in Ajao Estate, Lagos.</p>
 <div className="unbox mt-9 flex flex-col gap-3 sm:flex-row"><a href={wa('Hi Beauty Box, I would like to book a treatment.')} className={btnP}><WhatsAppIcon size={18} /> Book on WhatsApp</a><a href="#menu" className={btnO}>View treatments <ArrowUpRight size={18} /></a></div>
 </div>
 <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md" aria-hidden>
 
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
 return (<section aria-label="Highlights" className="bg-snow"><ul className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-6 text-sm font-medium sm:px-8 lg:grid-cols-4 lg:text-base">
 {PROOF.map((p) => <li key={p} className="flex items-center gap-2.5"> {p}</li>)}</ul></section>);
}

function Menu() {
 const tabs = Object.keys(MENU); const [t, setT] = useState(tabs[0]);
 return (
 <section id="menu" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
 
 <h2 className="mt-3 font-display text-[1.9rem] sm:text-5xl">Choose your <span>treat.</span></h2>
 <div className="mt-10 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
 <div role="tablist" aria-label="Treatment categories" className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
 {tabs.map((k) => (<button key={k} role="tab" id={`t-${k}`} aria-selected={t === k} aria-controls="panel" onClick={() => setT(k)}
 className={`rounded-full px-5 py-2.5 text-left font-display text-lg transition lg:rounded-none lg:bg-transparent lg:px-0 lg:py-4 lg:text-3xl ${t === k ? 'bg-cocoa text-snow lg:text-rose-d' : 'bg-blush hover:bg-mint/60 lg:bg-transparent'}`}>{k}</button>))}
 </div>
 <div id="panel" role="tabpanel" aria-labelledby={`t-${t}`} className="rounded-3xl bg-blush/70 p-7 sm:p-10">
 <ul>{MENU[t].map((it) => (<li key={it} className="flex flex-wrap items-center justify-between gap-3 py-4 last:border-0"><span className="font-display text-2xl">{it}</span><span className="rounded-full px-3 py-1 text-sm font-medium text-gold-d bg-current/10">Prices on request</span></li>))}</ul>
 <a href={wa(`Hi Beauty Box, I'd like to book: ${t}.`)} className={`${btnP} mt-7`}><WhatsAppIcon size={17} /> Book {t.toLowerCase()}</a>
 </div>
 </div>
 </section>
 );
}

function Nails() {
 const tint = [' to-rose/60', ' to-blush', ' to-mint/80', ' to-mint', ' to-rose/50', ' to-blush'];
 return (
 <section id="nails" className="bg-snow pb-20 lg:pb-28">
 <div className="mx-auto max-w-7xl px-5 sm:px-8">
 <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h2 className="mt-3 font-display text-[1.9rem] sm:text-5xl">Tiny canvases, <span>big art.</span></h2></div>
 <p className="max-w-xs text-base text-cocoa-2">3D designs, UV gel, gel extensions and the butterfly set. Your photos drop right in here.</p></div>
 <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
 {GALLERY.map((g, i) => (<div key={g} className={`ph flex flex-col items-center justify-center gap-2 rounded-3xl text-gold-d ${tint[i]} ${i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}><span className="px-2 text-center text-sm font-medium">{g}</span></div>))}
 </div>
 <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl bg-cocoa p-7 text-snow sm:flex-row sm:items-center sm:justify-between sm:p-9">
 <div><p className="font-display text-3xl max-w-prose">Ask about <em className="text-gold">current offers</em></p><p className="mt-1 text-snow/75 max-w-prose">Recent promos included “20% off your next spa experience”.</p></div>
 <a href={wa('Hi Beauty Box, what offers are running now?')} className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-cocoa hover:bg-snow"><WhatsAppIcon size={17} /> Ask on WhatsApp</a>
 </div>
 </div>
 </section>
 );
}

function Kids() {
 return (
 <section id="kids" className="bg-mint/50 py-20 lg:py-28">
 <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
 <div className="relative mx-auto grid aspect-[5/4] w-full max-w-lg place-items-center overflow-hidden rounded-[3rem]"><Baby size={90} strokeWidth={0.8} className="text-rose-d/70" aria-hidden /></div>
 <div>
 <h2 className="mt-3 font-display text-[1.9rem] leading-tight sm:text-5xl">Little ones deserve <span>pampering too.</span></h2>
 <p className="mt-5 max-w-md text-lg text-cocoa-2">Kids’ pampering sessions for little princes and princesses.</p>
 <a href={wa('Hi Beauty Box, I would like to ask about kids’ pampering.')} className={`${btnP} mt-7`}><WhatsAppIcon size={17} /> Ask about kids’ pampering</a></div>
 </div>
 </section>
 );
}

function Academy() {
 return (
 <section id="academy" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
 <div className="grid gap-8 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center bg-current/10">
 <div><GraduationCap className="text-gold-d" size={34} strokeWidth={1.3} />
 <h2 className="mt-2 font-display text-[1.9rem] leading-tight sm:text-5xl">Ready to launch a <span>high-income</span> beauty career?</h2></div>
 <div><p className="text-cocoa-2 max-w-prose">Learn from a UK-certified beauty therapist and nail technician. Course details and fees are shared on enquiry.</p>
 <a href={wa('Hi Beauty Box, I would like to enquire about beauty training.')} className={`${btnP} mt-6`}><WhatsAppIcon size={17} /> Enquire about training</a></div>
 </div>
 </section>
 );
}

function Visit() {
 const [f, setF] = useState({ name: '', treat: Object.values(MENU).flat()[0], date: '' });
 const msg = `Hi Beauty Box, I'd like to book.\nName: ${f.name || '-'}\nTreatment: ${f.treat}\nPreferred date: ${f.date || '-'}`;
 const inp = 'mt-1 w-full rounded-xl border bg-snow px-4 py-3 text-sm outline-none focus:border-cocoa';
 return (
 <section id="visit" className="bg-blush/70 py-20 lg:py-28">
 <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
 <div>
 <h2 className="mt-3 font-display text-[1.9rem] sm:text-5xl">Your appointment <span>awaits.</span></h2>
 <form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); }} className="mt-8 space-y-3 rounded-3xl bg-snow p-6">
 <label className="block text-sm font-medium">Your name<input className={inp} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
 <label className="block text-sm font-medium">Treatment<select className={inp} value={f.treat} onChange={(e) => setF({ ...f, treat: e.target.value })}>{Object.entries(MENU).map(([g, items]) => <optgroup key={g} label={g}>{items.map((i) => <option key={i}>{i}</option>)}</optgroup>)}</select></label>
 <label className="block text-sm font-medium">Preferred date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
 <button className={`${btnP} w-full`}><WhatsAppIcon size={17} /> Book on WhatsApp</button>
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
 <div className="ph rounded-3xl px-6 py-9 text-center text-gold-d"><p className="font-display text-2xl max-w-prose">Your 2 Facebook reviews go here</p><p className="mt-1 text-base max-w-prose">Quoted word for word once you share them.</p></div>
 <div className="flex items-center gap-4 rounded-3xl bg-snow p-4"><Image src="/img/logo.webp" alt="Beauty Box Spa, Nail & Beauty logo" width={72} height={72} className="rounded-2xl" loading="lazy" /><p className="text-base text-cocoa-2 max-w-prose">Our logo: <em className="font-display text-base text-cocoa">…a place of beauty.</em></p></div>
 </div>
 </div>
 </section>
 );
}

export default function Site() {
 return (<>
 <Banner /><Header />
 <main><Hero /><Proof /><Menu /><Nails /><Kids /><Academy /><Visit /></main>
 <footer className="bg-cocoa px-5 py-10 text-snow/75 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center"><Logo light /><a href={BIZ.facebook} className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-gold"><FacebookIcon size={16} /> Facebook</a><p className="text-base max-w-prose">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
 <a href={wa('Hi Beauty Box!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><WhatsAppIcon size={26} /></a>
 </>);
}

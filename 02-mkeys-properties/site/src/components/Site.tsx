'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, BedDouble, Camera, ChefHat, MapPin, Phone, Mail, Search, ShieldCheck, Sparkles, Waves, X, Car, Flame, Check, KeyRound, Quote } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';
import ReelModal from './ReelModal';
const igCode = (u: string) => u.match(/\/(?:p|reel)\/([^/]+)/)?.[1] ?? null;
import { AMENITIES, AREAS, BIZ, LISTINGS, PITCH_CONTACT, PRICE_CAPS, SERVICES, SOLD, STEPS, TYPES, wa, type Listing } from '@/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Logo({ light = true }: { light?: boolean }) {
 const c = light ? '#F7F5F0' : '#0E1B2C';
 return (
 <a href="#top" className="inline-flex flex-col leading-none">
 <span className="flex items-center gap-2 font-display text-[1.65rem] font-semibold" style={{ color: c }}>
 <KeyRound size={20} className="text-gold" strokeWidth={2.2} aria-hidden /><span>M<span className="text-gold">K</span>EYS</span>
 </span>
 <span className="mt-1 text-sm font-semibold text-gold">Properties Limited</span>
 <span className="sr-only">Mkeys Properties Limited</span>
 </a>
 );
}

function Banner() {
 const [open, setOpen] = useState(true);
 if (!open) return null;
 return (
 <div className="relative bg-gold px-10 py-2 text-center text-sm font-medium leading-snug text-navy sm:text-sm">
 Concept preview designed for {BIZ.short} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
 <button onClick={() => setOpen(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-navy/10"><X size={14} /></button>
 </div>
 );
}

function Header() {
 const [s, setS] = useState(false);
 useEffect(() => { const f = () => setS(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
 return (
 <header className={`sticky top-0 z-40 transition duration-300 ${s ? 'bg-navy/95 py-2 ' : 'bg-navy py-4'}`}>
 <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
 <Logo />
 <nav aria-label="Primary" className="hidden gap-8 text-sm font-semibold text-paper/80 lg:flex">
 {[['Listings', '#listings'], ['Sold', '#sold'], ['Services', '#services'], ['Process', '#process'], ['Contact', '#contact']].map(([l, h]) => <a key={h} href={h} className="transition hover:text-gold">{l}</a>)}
 </nav>
 <a href={wa(`Hi ${BIZ.agent}, I found Mkeys Properties on your website and would like to enquire.`)} className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-paper sm:text-sm">
 <WhatsAppIcon size={16} /> Enquire<span className="hidden sm:inline"> with {BIZ.agent}</span>
 </a>
 </div>
 </header>
 );
}

type Filters = { area: string; type: string; beds: string; max: string };
const sel = 'w-full appearance-none rounded-lg border bg-navy-2 px-3.5 py-3 text-sm font-medium text-paper outline-none transition focus:border-gold';

function Hero({ f, setF }: { f: Filters; setF: (f: Filters) => void }) {
 const ref = useRef<HTMLElement>(null);
 useGSAP(() => {
 const mm = gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)', () => {
 gsap.from('.h-line', { yPercent: 110, duration: 1, stagger: 0.12, ease: 'power4.out' });
 gsap.from('.h-fade', { y: 18, duration: 0.8, delay: 0.5, stagger: 0.1, ease: 'power2.out' });
 gsap.from('.h-img', { scale: 0.92, duration: 1.2, stagger: 0.15, ease: 'power3.out' });
 gsap.to('.h-par-a', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } });
 gsap.to('.h-par-b', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } });
 });
 }, { scope: ref });
 const go = (e: React.FormEvent) => { e.preventDefault(); document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' }); };
 return (
 <section id="top" ref={ref} className="relative bg-navy text-paper">
 <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden><div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-navy-3/60 blur-3xl" /></div>
 <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-28 pt-10 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-32 lg:pt-10">
 <div>
 
 <h1 className="font-display text-[2.8rem] font-medium leading-[1.04] sm:text-6xl lg:text-[4.6rem]">
 <span className="block overflow-hidden"><span className="h-line block">Find your key</span></span>
 <span className="block overflow-hidden"><span className="h-line block">to <span>Lekki</span> living.</span></span>
 </h1>
 <p className="h-fade mt-6 max-w-lg text-base leading-relaxed text-paper/75 sm:text-lg">Verified homes for sale and rent across Lekki, Ajah, VGC and Ikate, with a broker who stays with you until you’re handed the keys.</p>
 <div className="h-fade mt-8 flex flex-col gap-3 sm:flex-row">
 <a href="#listings" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-paper">View listings <ArrowUpRight size={18} /></a>
 <a href={wa(`Hi ${BIZ.agent}, I'd like help finding a property in Lekki.`)} className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition hover:text-gold bg-current/10"><WhatsAppIcon size={18} /> Chat on WhatsApp</a>
 </div>
 </div>
 <div className="relative mx-auto grid w-full max-w-lg grid-cols-5 gap-3 sm:gap-4" aria-hidden={false}>
 <div className="h-par-a col-span-3 space-y-3 sm:space-y-4">
 <div className="h-img relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[5/4]"><Image src="/img/l1.webp" alt="White contemporary terrace duplexes under a blue sky in Ajah, Lekki" fill priority sizes="(min-width:1024px) 22vw, 55vw" className="object-cover" /></div>
 <div className="h-img relative aspect-square overflow-hidden rounded-2xl lg:aspect-[5/3]"><Image src="/img/c1.webp" alt="Modern house facade with gold accent and glass balcony" fill sizes="(min-width:1024px) 22vw, 55vw" className="object-cover" /></div>
 </div>
 <div className="h-par-b col-span-2 mt-10 space-y-3 sm:mt-14 sm:space-y-4">
 <div className="h-img relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src="/img/c2.webp" alt="Angular modern villa with glass balcony" fill sizes="(min-width:1024px) 16vw, 38vw" className="object-cover" /></div>
 <div className="rounded-2xl bg-navy-2 p-4 text-center">
 <p className="font-display text-3xl text-gold max-w-prose">4+</p><p className="text-base text-paper/70 max-w-prose">years guiding buyers</p>
 </div>
 </div>
 </div>
 </div>
 <form onSubmit={go} className="relative z-10 mx-auto -mb-16 max-w-5xl px-5 sm:px-8 lg:-mt-10" aria-label="Search listings">
 <div className="grid gap-3 rounded-2xl bg-navy-2/95 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
 {[
 ['Location', 'area', ['All areas', ...AREAS]],
 ['Type', 'type', ['Any type', ...TYPES]],
 ['Bedrooms', 'beds', ['Any', '2', '3', '4', '5']],
 ['Max price', 'max', ['Any price', ...PRICE_CAPS.map(String)]],
 ].map(([label, key, opts]) => (
 <label key={key as string} className="block text-sm font-bold text-gold">{label as string}
 <select className={`${sel} mt-1.5 normal-case tracking-normal`} value={f[key as keyof Filters]} onChange={(e) => setF({ ...f, [key as string]: e.target.value })}>
 {(opts as string[]).map((o, i) => <option key={o} value={i === 0 ? '' : o}>{key === 'max' && i > 0 ? `Up to ₦${o}M` : key === 'beds' && i > 0 ? `${o} bedrooms` : o}</option>)}
 </select>
 </label>
 ))}
 <button className="flex items-center justify-center gap-2 self-end rounded-lg bg-gold px-6 py-3.5 text-sm font-bold text-navy transition hover:bg-paper sm:col-span-2 lg:col-span-1"><Search size={17} /> Search</button>
 </div>
 </form>
 </section>
 );
}

function Counter({ to, suffix = '', fmt = false }: { to: number; suffix?: string; fmt?: boolean }) {
 const r = useRef<HTMLSpanElement>(null);
 const out = (n: number) => (fmt ? Math.round(n).toLocaleString('en-NG') : String(Math.round(n))) + suffix;
 useGSAP(() => {
 const mm = gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)', () => {
 const o = { v: 0 };
 gsap.to(o, { v: to, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: r.current, start: 'top 90%', once: true }, onUpdate: () => { if (r.current) r.current.textContent = out(o.v); } });
 });
 }, { scope: r });
 return <span ref={r}>{out(to)}</span>;
}

function Proof() {
 const items = [
 { big: <Counter to={4} suffix="+" />, small: 'years guiding buyers', I: KeyRound },
 { big: 'RC 3802584', small: 'CAC registered', I: ShieldCheck },
 { big: <Counter to={2800} suffix="+" fmt />, small: 'Instagram followers', I: InstagramIcon },
 { big: 'Sold & rented', small: 'a track record you can see', I: Check },
 ];
 return (
 <section aria-label="Highlights" className="bg-paper pt-24 sm:pt-28">
 <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 lg:grid-cols-4">
 {items.map((p, i) => (
 <div key={i} className="flex items-center gap-4">
 <div><p className="font-display text-xl leading-tight sm:text-2xl max-w-prose">{p.big}</p><p className="mt-1 text-base text-slate sm:text-sm max-w-prose">{p.small}</p></div></div>
 ))}
 </div>
 
 </section>
 );
}

const AMEN_ICONS = [ChefHat, Sparkles, ShieldCheck, Waves, Flame, Car];
function Card({ l }: { l: Listing }) {
  const [play, setPlay] = useState(false);
 const msg = `Hi ${BIZ.agent}, I'm interested in the ${l.title} in ${l.area}${l.priceM ? ` (${l.priceLabel})` : ''}.`;
 return (
 <article className="lcard group flex flex-col overflow-hidden rounded-2xl bg-white">
 <div className="relative aspect-[4/3] overflow-hidden bg-navy-2">
 <Image src={l.img} alt={`${l.title}, ${l.area}`} fill loading="lazy" sizes="(min-width:1280px) 25vw, (min-width:768px) 45vw, 90vw" className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: l.pos }} />
 <div className="absolute inset-0 bg-black/45" />
 <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-sm font-bold text-gold">{l.type}</span>
 <p className="absolute bottom-3 left-4 font-display text-2xl text-paper max-w-prose">{l.priceLabel}</p>
 </div>
 <div className="flex flex-1 flex-col p-5">
 
 <h3 className="mt-2 font-display text-lg leading-snug">{l.title}</h3>
 <p className="mt-3 flex items-center gap-2 text-base text-slate max-w-prose"><BedDouble size={16} /> {l.beds} bedrooms</p>
 <ul className="mt-4 flex gap-2.5 text-gold-d" aria-label="Standard amenities">
 {AMEN_ICONS.map((I, i) => <li key={i} title={AMENITIES[[0, 1, 4, 6, 7, 8][i]]} className="grid h-8 w-8 place-items-center rounded-full bg-paper"><I size={15} /></li>)}
 </ul>
 <p className="mt-4 text-base text-slate max-w-prose">{l.listed} · confirm availability</p>
 <div className="mt-auto flex flex-wrap gap-2 pt-4">
 <a href={wa(msg)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-bold text-paper transition hover:bg-navy-3"><WhatsAppIcon size={16} /> Enquire with {BIZ.agent}</a>
 <button onClick={() => setPlay(true)} aria-label={`Play video: ${l.title}`} className="grid h-11 w-11 place-items-center rounded-full text-navy transition hover:text-gold-d bg-current/10"><InstagramIcon size={17} /></button><ReelModal code={play ? igCode(l.post) : null} onClose={() => setPlay(false)} />
 </div>
 </div>
 </article>
 );
}

function Listings({ f, setF }: { f: Filters; setF: (f: Filters) => void }) {
 const ref = useRef<HTMLElement>(null);
 const list = LISTINGS.filter((l) =>
 (!f.area || l.area.startsWith(f.area)) && (!f.type || l.type === f.type) &&
 (!f.beds || (+f.beds >= l.bedsMin && +f.beds <= l.bedsMax)) && (!f.max || (l.priceM !== null && l.priceM <= +f.max)));
 useGSAP(() => {
 const mm = gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)', () => {
 ScrollTrigger.batch('.lcard', { start: 'top 90%', once: true, onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', overwrite: true }) });
 });
 }, { scope: ref, dependencies: [list.length] });
 const any = f.area || f.type || f.beds || f.max;
 return (
 <section id="listings" ref={ref} className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
 <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
 <div>
 <h2 className="mt-3 font-display text-[1.9rem] sm:text-5xl">Homes on the market now.</h2></div>
 <p className="text-base text-slate max-w-prose">{list.length} of {LISTINGS.length} shown{any ? <> · <button onClick={() => setF({ area: '', type: '', beds: '', max: '' })} className="font-bold text-navy underline underline-offset-4">Clear filters</button></> : null}</p>
 </div>
 {list.length ? (
 <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{list.map((l) => <Card key={l.id} l={l} />)}</div>
 ) : (
 <div className="ph mt-12 rounded-2xl p-12 text-center"><p className="font-display text-2xl max-w-prose">No match in these launch listings</p><p className="mt-2 text-base text-slate max-w-prose">Tell Amaka what you’re after and she’ll find it.</p>
 <a href={wa('Hi Amaka, I did not see what I want on your website. Can you help me find a property?')} className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-paper"><WhatsAppIcon size={16} /> Ask on WhatsApp</a></div>
 )}
 <div className="mt-14 rounded-2xl bg-navy p-6 text-paper sm:p-8">
 
 <ul className="mt-4 grid gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2 lg:grid-cols-3">
 {AMENITIES.map((a) => <li key={a} className="flex items-center gap-2.5 text-paper/85"><Check size={15} className="shrink-0 text-gold" /> {a}</li>)}
 </ul>
 </div>
 </section>
 );
}

function Sold() {
  const [play, setPlay] = useState(false);
 return (
 <section id="sold" className="bg-navy py-20 text-paper lg:py-28">
 <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr] lg:gap-20">
 <div className="relative mx-auto aspect-[9/14] w-full max-w-xs overflow-hidden rounded-2xl md:max-w-sm">
 <Image src={SOLD.img} alt="Ikate terrace duplex with a SOLD stamp" fill loading="lazy" sizes="(min-width:768px) 30vw, 80vw" className="object-cover" />
 </div>
 <div>
 
 <h2 className="mt-3 font-display text-[1.9rem] leading-tight sm:text-5xl">“It’s key time.” <span>Sold.</span></h2>
 <p className="mt-6 max-w-md text-lg text-paper/75">{SOLD.title} in {SOLD.area}, handed over to client {SOLD.client}.</p>
 <p className="mt-2 text-base text-paper/55 max-w-prose">{SOLD.when} · from the Mkeys Instagram</p>
 <button onClick={() => setPlay(true)} className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-gold transition hover:bg-gold hover:text-navy bg-current/10"><InstagramIcon size={16} /> Watch the handover</button><ReelModal code={play ? igCode(SOLD.post) : null} onClose={() => setPlay(false)} />
 </div>
 </div>
 </section>
 );
}

function Services() {
 return (
 <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
 
 <h2 className="mt-3 font-display text-[1.9rem] sm:text-5xl">Real estate broker &amp; property management.</h2>
 <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
 {SERVICES.map((s, i) => (
 <div key={s.t} className="bg-paper p-7 transition hover:bg-white lg:p-8">
 
 <h3 className="mt-6 font-display text-2xl">{s.t}</h3><p className="mt-2 text-base leading-relaxed text-slate max-w-prose">{s.d}</p>
 </div>))}
 </div>
 <figure className="mx-auto mt-20 max-w-3xl text-center">
 
 <blockquote className="mt-4 font-display text-2xl leading-snug sm:text-3xl">“There’s a difference between selling property and guiding people home… property decisions should feel confident, not complicated.”</blockquote>
 <figcaption className="mt-4 text-sm text-slate">From the Mkeys Properties Instagram, Feb 2026</figcaption>
 </figure>
 </section>
 );
}

function Process() {
 return (
 <section id="process" className="bg-paper pb-20 lg:pb-28">
 <div className="mx-auto max-w-7xl px-5 sm:px-8">
 <h2 className="font-display text-[1.9rem] sm:text-5xl">Buying, in three steps.</h2>
 <ol className="mt-12 grid gap-8 md:grid-cols-3">
 {STEPS.map((s, i) => (
 <li key={s.t} className="relative pt-6">
 <h3 className="mt-3 font-display text-xl">{s.t}</h3><p className="mt-2 text-slate max-w-prose">{s.d}</p></li>))}
 </ol>
 <div className="ph mt-16 rounded-2xl px-6 py-12 text-center text-gold-d"><p className="font-display text-2xl max-w-prose">Client testimonials go here</p><p className="mx-auto mt-2 max-w-md text-base">We’ll add real words from your buyers and renters, with their permission.</p></div>
 </div>
 </section>
 );
}

function Contact() {
 return (
 <section id="contact" className="bg-navy py-20 text-paper lg:py-28">
 <div className="mx-auto max-w-7xl px-5 sm:px-8">
 <div className="max-w-2xl">
 <h2 className="mt-3 font-display text-[1.9rem] leading-tight sm:text-5xl">Ready when you are, <span>{BIZ.agent}</span> is one tap away.</h2></div>
 <div className="mt-12 grid gap-4 md:grid-cols-3">
 <a href={wa(`Hi ${BIZ.agent}, I'd like to enquire about a property.`)} className="group rounded-2xl bg-gold p-7 text-navy transition hover:-translate-y-1"><p className="mt-8 text-base font-semibold max-w-prose">WhatsApp {BIZ.agent}</p><p className="font-display text-2xl max-w-prose">{BIZ.phoneLabel}</p></a>
 <a href={`tel:${BIZ.tel}`} className="rounded-2xl p-7 transition bg-current/10"><p className="mt-8 text-base text-paper/60 max-w-prose">Call</p><p className="font-display text-2xl max-w-prose">{BIZ.phoneLabel}</p></a>
 <a href={`mailto:${BIZ.email}`} className="rounded-2xl p-7 transition bg-current/10"><p className="mt-8 text-base text-paper/60 max-w-prose">Email</p><p className="break-all font-display text-xl sm:text-2xl max-w-prose">{BIZ.email}</p></a>
 </div>
 <p className="mt-8 flex items-center gap-2 text-paper/70 max-w-prose"><MapPin size={17} className="text-gold" /> {BIZ.city} · Instagram <a className="underline underline-offset-4 hover:text-gold" href={BIZ.instagram}>@mkeysproperties</a></p>
 </div>
 </section>
 );
}

function Footer() {
 return (
 <footer className="bg-[#091422] px-5 py-10 text-paper/70 sm:px-8">
 <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
 <Logo /><p className="text-base font-semibold text-gold max-w-prose">{BIZ.name} · {BIZ.rc}</p>
 <p className="text-base max-w-prose">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p>
 </div>
 </footer>
 );
}

export default function Site() {
 const [f, setF] = useState<Filters>({ area: '', type: '', beds: '', max: '' });
 return (
 <>
 <Banner /><Header />
 <main><Hero f={f} setF={setF} /><Proof /><Listings f={f} setF={setF} /><Sold /><Services /><Process /><Contact /></main>
 <Footer />
 <a href={wa('Hi Amaka, I found Mkeys on your website.')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><WhatsAppIcon size={26} /></a>
 </>
 );
}

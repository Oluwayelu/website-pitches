'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, BookOpen, Check, ImagePlus, MapPin, Phone, X, Home as HomeIcon, UserRound } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon } from './BrandIcons';
import { BIZ, CHECKLIST, EPISODES, LISTINGS, PITCH_CONTACT, wa } from '@/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Mark({ light }: { light?: boolean }) {
 return (<svg viewBox="0 0 36 36" width="34" height="34" aria-hidden fill="none" stroke={light ? '#fff' : '#0F5E63'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
 <path d="M18 3c-5 0-9 3.800-9 8.700C9 18 18 26 18 26s9-8 9-14.300C27 6.800 23 3 18 3z" /><circle cx="18" cy="11.500" r="2.800" /><path d="M4 30c4-2.500 8-2.500 14 0 6-2.500 10-2.500 14 0M4 33.500c4-2.500 8-2.500 14 0 6-2.500 10-2.500 14 0" stroke="#E8735A" />
 </svg>);
}
function Logo({ light }: { light?: boolean }) {
 return (<a href="#top" className="inline-flex items-center gap-3"><Mark light={light} />
 <span className={`flex flex-col leading-none ${light ? 'text-white' : 'text-char'}`}><span className="font-display text-xl">Properties in Lekki</span><span className={`mt-1 text-sm font-semibold ${light ? 'text-coral' : 'text-coral-d'}`}>We teach before you pay</span></span></a>);
}
function Banner() {
 const [o, setO] = useState(true);
 if (!o) return null;
 return (<div className="relative bg-coral px-10 py-2 text-center text-sm font-semibold leading-snug text-char sm:text-sm">
 Concept preview designed for {BIZ.name} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
 <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-char/10"><X size={14} /></button></div>);
}
function Header() {
 const [s, setS] = useState(false);
 useEffect(() => { const f = () => setS(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
 return (<header className={`sticky top-0 z-40 transition duration-300 ${s ? 'bg-white/90 py-2 ' : 'border-transparent bg-sand py-4'}`}>
 <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
 <nav aria-label="Primary" className="hidden gap-8 text-[15px] font-semibold lg:flex">{[['Episodes', '#episodes'], ['Listings', '#listings'], ['Checklist', '#checklist'], ['Meet Comfort', '#meet'], ['Contact', '#contact']].map(([l, h]) => <a key={h} href={h} className="hover:text-teal">{l}</a>)}</nav>
 <a href={wa('Hi, I found you on your website and would like to enquire.')} className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-bold text-white sm:text-sm"><WhatsAppIcon size={16} /> WhatsApp</a>
 </div></header>);
}

function Hero() {
 const ref = useRef<HTMLElement>(null);
 useGSAP(() => {
 const mm = gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)', () => {
 gsap.from('.hw', { yPercent: 100, duration: 0.9, stagger: 0.09, ease: 'power4.out' });
 gsap.from('.hf', { y: 16, opacity: 0, duration: 0.8, delay: 0.5, stagger: 0.1 });
 gsap.from('.wave path', { strokeDashoffset: 400, strokeDasharray: 400, duration: 2, stagger: 0.2, ease: 'power2.out' });
 });
 }, { scope: ref });
 const words = ['We', 'teach', 'before', 'you', 'pay.'];
 return (
 <section id="top" ref={ref} className="relative overflow-hidden bg-sand">
 <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:pb-32 lg:pt-20">
 
 <h1 className="max-w-4xl font-display text-[3.6rem] leading-[0.95] sm:text-8xl lg:text-[8.5rem]">
 {words.map((w, i) => <span key={w}><span className="mr-[0.22em] inline-block overflow-hidden align-bottom"><span className={`hw inline-block `}>{w}</span></span>{i === 1 && <br />}</span>)}
 </h1>
 <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
 <p className="hf max-w-xl text-xl leading-relaxed text-char/80">Honest guidance and verified homes for Lekki &amp; Lagos living.</p>
 <div className="hf flex flex-col gap-3 sm:flex-row"><a href="#listings" className="inline-flex items-center justify-center gap-2 rounded-md bg-teal px-7 py-4 text-base font-bold text-white hover:bg-teal-2">Browse properties <ArrowUpRight size={18} /></a>
 <a href="#episodes" className="inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 text-base font-bold hover:bg-char hover:text-white bg-current/10">Read the guides</a></div>
 </div>
 </div>
 <svg className="wave pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-teal/40" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden fill="none" stroke="currentColor" strokeWidth="2"><path d="M0 40c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0" /><path d="M0 54c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0" stroke="#E8735A" /></svg>
 </section>
 );
}

function Proof() {
 const items = [['100%', 'recommend · 18 reviews'], ['1,100+', 'followers'], ['Education · Listings · Insights', 'education, listings and insights together']];
 return (<section aria-label="Highlights" className="bg-teal text-white"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
 {items.map(([a, b]) => <div key={a} className="pl-4"><p className="font-display text-3xl leading-tight max-w-prose">{a}</p><p className="mt-1 text-base text-white/75 max-w-prose">{b}</p></div>)}</div></section>);
}

function Episodes() {
 const ref = useRef<HTMLElement>(null);
 useGSAP(() => {
 gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
 ScrollTrigger.batch('.ep', { start: 'top 90%', once: true, onEnter: (els) => gsap.fromTo(els, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.14, ease: 'power3.out' }) });
 });
 }, { scope: ref });
 const bg = ['bg-teal text-white', 'bg-char text-white', 'bg-coral text-char'];
 return (
 <section id="episodes" ref={ref} className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
 <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h2 className="mt-3 font-display text-[2.1rem] sm:text-5xl">Latest episodes.</h2></div>
 <p className="max-w-sm text-char/70">Short stories that teach you what to check before you pay. Full guides move here from Facebook.</p></div>
 <div className="mt-12 grid gap-6 lg:grid-cols-3">
 {EPISODES.map((e, i) => (
 <article key={e.t} className="ep group">
 <div className={`relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-sm p-6 ${bg[i]}`}>
 <svg className="absolute -right-6 -top-6 h-40 w-40 opacity-15" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="50" cy="50" r="48" /><circle cx="50" cy="50" r="34" /><circle cx="50" cy="50" r="20" /></svg>
 
 <h3 className="relative font-display text-3xl leading-[1.08]">{e.t}</h3>
 </div>
 <div className="mt-4 flex items-center justify-between"><span />
 <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-4 hover:text-coral-d">Read on Facebook <ArrowUpRight size={15} /></a></div>
 </article>))}
 </div>
 </section>
 );
}

function Listings() {
 return (
 <section id="listings" className="bg-sand py-20 lg:py-28">
 <div className="mx-auto max-w-7xl px-5 sm:px-8">
 <h2 className="mt-3 font-display text-[2.1rem] sm:text-5xl">Verified homes, one tap away.</h2>
 <div className="mt-12 grid gap-6 lg:grid-cols-3">
 {LISTINGS.map((l) => (
 <article key={l.id} className="flex flex-col overflow-hidden rounded-sm bg-white">
 {l.img ? <div className="relative aspect-[4/3] overflow-hidden"><Image src={l.img} alt={l.alt} fill loading="lazy" sizes="(min-width:768px) 33vw, 90vw" className="object-cover" /></div> : <div className="ph flex aspect-[4/3] items-center justify-center text-teal"><span className="text-sm font-bold">Listing photos go here</span></div>}
 <div className="flex flex-1 flex-col p-6">
 {l.status && <span className="self-start rounded-sm bg-coral px-2.5 py-1 text-sm font-bold text-char">{l.status}</span>}
 <h3 className={`mt-3 font-display text-2xl ${l.real ? '' : 'text-char/50'}`}>{l.t}</h3>
 <p className="mt-1 text-base text-char/70 max-w-prose">{l.img ? 'Price on request. Posted on the earlier blog in Feb 2021, so please confirm it is still available.' : 'Price on request'}</p>
 {l.real && <a href={wa(`Hi, I'm interested in the ${l.t.toLowerCase()} I saw on your website.`)} className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-teal px-4 py-3 text-sm font-bold text-white hover:bg-teal-2" style={{ marginTop: '1.25rem' }}><WhatsAppIcon size={16} /> Enquire on WhatsApp</a>}
 </div>
 </article>))}
 </div>
 <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-sm bg-teal p-7 text-white sm:flex-row sm:items-center">
 <p className="font-display text-2xl max-w-prose">Get new listings on WhatsApp.</p>
 <a href={wa('Hi, please add me to your new listings updates on WhatsApp.')} className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-teal hover:bg-sand"><WhatsAppIcon size={16} /> Send me listings</a></div>
 </div>
 </section>
 );
}

function Checklist() {
 const ref = useRef<HTMLElement>(null);
 useGSAP(() => {
 gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
 gsap.utils.toArray<HTMLElement>('.ck').forEach((el) => {
 const box = el.querySelector('.tick');
 gsap.from(el, { x: -24, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
 gsap.fromTo(box, { scale: 0.4, backgroundColor: '#fff' }, { scale: 1, backgroundColor: '#0F5E63', duration: 0.4, ease: 'back.out(2)', scrollTrigger: { trigger: el, start: 'top 70%', once: true } });
 });
 });
 }, { scope: ref });
 return (
 <section id="checklist" ref={ref} className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
 <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
 <div className="lg:sticky lg:top-28 lg:self-start">
 <h2 className="mt-3 font-display text-[2.1rem] leading-[1.02] sm:text-5xl">Six checks that can save you millions.</h2>
 <p className="mt-5 text-base text-char/75 max-w-prose">General tips for anyone renting or buying. Not advice on any specific property.</p></div>
 <ol className="space-y-4">
 {CHECKLIST.map((c, i) => (
 <li key={c.t} className="ck flex gap-5 pb-5"><span className="tick grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal text-white"><Check size={18} strokeWidth={3} /></span>
 <div><h3 className="font-display text-2xl"><span className="mr-2 text-coral-d">{i + 1}.</span>{c.t}</h3><p className="mt-1 text-char/70 max-w-prose">{c.d}</p></div></li>))}
 </ol>
 </div>
 </section>
 );
}

function Meet() {
 return (
 <section id="meet" className="bg-char py-20 text-white lg:py-28">
 <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[.7fr_1.3fr] lg:gap-20">
 <div className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm"><div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white/5 text-white/70"><UserRound size={56} strokeWidth={1} /><span className="px-4 text-center text-sm font-bold">Realtor Comfort’s photo goes here</span></div></div>
 <div><h2 className="mt-3 font-display text-[2.1rem] sm:text-5xl">Realtor Comfort</h2>
 <div className="mt-6 max-w-lg rounded-sm p-5 text-white/75 bg-current/10">Short bio goes here once Comfort shares it.</div>
 <a href={wa('Hi Comfort, I would like to talk about a property.')} className="mt-7 inline-flex items-center gap-2 rounded-md bg-coral px-7 py-4 text-base font-bold text-char hover:bg-white"><WhatsAppIcon size={18} /> Talk to Comfort</a></div>
 </div>
 <div className="mx-auto mt-16 max-w-3xl px-5 text-center sm:px-8"><div className="ph rounded-sm px-6 py-10 !!bg-white/5 text-white"><p className="font-display text-2xl max-w-prose">Your 18 Facebook reviews go here</p><p className="mt-1 text-base text-white/70 max-w-prose">100% recommend. Quoted word for word once shared.</p></div></div>
 </section>
 );
}

function Contact() {
 return (
 <section id="contact" className="bg-teal py-20 text-white lg:py-28">
 <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
 <div><h2 className="font-display text-[2.1rem] leading-[1.02] sm:text-5xl">Let’s find <span>your place</span> in Lekki.</h2>
 <p className="mt-5 flex items-center gap-2 text-lg text-white/80 max-w-prose"><MapPin size={18} className="text-coral" /> {BIZ.area}</p></div>
 <div className="space-y-3">
 <a href={wa('Hi, I would like to enquire about a property.')} className="flex items-center justify-between rounded-sm bg-coral px-6 py-5 text-char"><span className="flex items-center gap-3 font-bold"><WhatsAppIcon /> WhatsApp</span><span className="font-display text-2xl">{BIZ.phoneLabel}</span></a>
 <a href={`tel:${BIZ.tel}`} className="flex items-center justify-between rounded-sm px-6 py-5 hover:bg-white/10 bg-current/10"><span className="flex items-center gap-3 font-bold"><Phone /> Call</span><span className="font-display text-2xl">{BIZ.phoneLabel}</span></a>
 <a href={BIZ.facebook} className="flex items-center gap-3 rounded-sm px-6 py-5 font-bold hover:bg-white/10 bg-current/10"><FacebookIcon /> Facebook</a>
 </div>
 </div>
 </section>
 );
}

export default function Site() {
 return (<>
 <Banner /><Header />
 <main><Hero /><Proof /><Episodes /><Listings /><Checklist /><Meet /><Contact /></main>
 <footer className="bg-[#171b1e] px-5 py-10 text-white/70 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><Logo light />
 <Image src="/img/badge.webp" alt="Properties in Lekki, Lagos official badge: Live. Invest. Thrive." width={56} height={56} className="rounded-full" loading="lazy" />
 <p className="text-base max-w-prose">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
 <a href={wa('Hi, I found you on your website.')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><WhatsAppIcon size={26} /></a>
 </>);
}

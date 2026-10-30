'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Flame, Heart, Instagram, Mail, MapPin, MessageCircle, Phone, Quote, X } from 'lucide-react';
import { BIZ, CELEBRATIONS, INCLUDES, MOMENTS, PITCH_CONTACT, STEPS, TESTIMONIALS, TIERS, wa } from '@/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const btnG = 'inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-mid transition hover:bg-warm';
const btnO = 'inline-flex items-center justify-center gap-2 rounded-full border border-warm/40 px-8 py-4 text-sm font-semibold transition hover:border-gold hover:text-gold';

function Logo() {
  return (<a href="#top" className="inline-flex flex-col leading-none"><span className="relative font-display text-[1.8rem] italic">Xpl<span className="relative">o<svg viewBox="0 0 12 12" width="10" height="10" className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-gold" fill="currentColor" aria-hidden><path d="M6 0l1.2 4.200L12 6 7.200 7.800 6 12 4.800 7.800 0 6l4.800-1.800z" /></svg></span>re</span><span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.5em] text-gold">Events</span></a>);
}
function Banner() {
  const [o, setO] = useState(true);
  if (!o) return null;
  return (<div className="relative bg-gold px-10 py-2 text-center text-[11px] font-semibold leading-snug text-mid sm:text-xs">Concept preview designed for {BIZ.name} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
    <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-mid/10"><X size={14} /></button></div>);
}
function Header() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (<header className={`sticky top-0 z-40 transition-all duration-300 ${s ? 'bg-mid/90 py-2 backdrop-blur-md' : 'bg-mid/70 py-4 backdrop-blur'}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
      <nav aria-label="Primary" className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-warm/80 lg:flex">{[['Proposals', '#proposals'], ['Celebrations', '#celebrations'], ['Moments', '#moments'], ['Kind words', '#words'], ['Contact', '#contact']].map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}</nav>
      <a href={wa('Hi Xplore Events, I would like to plan a proposal.')} className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-mid sm:text-sm"><MessageCircle size={16} /> WhatsApp</a></div>
    <div className="grad-line absolute inset-x-0 bottom-0" aria-hidden /></header>);
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hl', { yPercent: 110, duration: 1.2, stagger: 0.15, ease: 'power4.out' });
      gsap.from('.hf', { y: 20, opacity: 0, duration: 1, delay: 0.7, stagger: 0.12, ease: 'power2.out' });
    });
  }, { scope: ref });
  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden">
      <div className="absolute inset-0 -z-20 overflow-hidden"><div className="kb absolute inset-0"><Image src="/img/hero.webp" alt="Marquee letters spelling MARRY ME with gold and white balloons and candles" fill priority sizes="100vw" className="object-cover object-[35%_center]" /></div></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-mid via-mid/30 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-mid/70 via-mid/10 to-transparent" />
      {[['12%', '30%', 90, 0], ['70%', '20%', 60, 3], ['85%', '60%', 120, 5], ['40%', '10%', 50, 2]].map(([l, t, s, d], i) => <span key={i} aria-hidden className="bokeh -z-10" style={{ left: l as string, top: t as string, width: s as number, height: s as number, animationDelay: `-${d}s` }} />)}
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-8 lg:pb-24">
        <p className="hf mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-gold">Proposal décor · Lagos · Ibadan · Abuja</p>
        <h1 className="font-display text-[3.6rem] [text-shadow:0_2px_30px_rgba(20,18,26,.7)] italic leading-[0.98] sm:text-8xl lg:text-[9rem]"><span className="block overflow-hidden pb-2"><span className="hl block">Say it</span></span><span className="block overflow-hidden pb-3"><span className="hl block text-gold">beautifully.</span></span></h1>
        <p className="hf mt-6 max-w-md text-lg font-light leading-relaxed text-warm/85">Proposal, wedding and celebration décor in Lagos, Ibadan and Abuja.</p>
        <div className="hf mt-9 flex flex-col gap-3 sm:flex-row"><a href={wa('Hi Xplore Events, I would like to plan my proposal.')} className={btnG}><Heart size={17} /> Plan my proposal</a><a href="#moments" className={btnO}>See setups <ArrowUpRight size={17} /></a></div>
      </div>
    </section>
  );
}

function Proposals() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.batch('.tier', { start: 'top 88%', once: true, onEnter: (e) => gsap.fromTo(e, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' }) });
    });
  }, { scope: ref });
  return (
    <section id="proposals" ref={ref} className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Proposal packages</p><h2 className="mt-4 font-display text-5xl italic leading-[1.05] sm:text-6xl">She’ll remember <span className="text-gold">every detail.</span></h2></div>
        <div><p className="mb-3 text-sm text-warm/70">A proposal setup can include:</p><ul className="flex flex-wrap gap-2">{INCLUDES.map((i) => <li key={i} className="rounded-full border border-gold/50 px-4 py-1.5 text-sm text-gold">{i}</li>)}</ul></div></div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {TIERS.map((t, i) => (
          <div key={t} className={`tier ph flex flex-col rounded-3xl p-8 ${i === 1 ? 'md:-mt-4 md:mb-4 !bg-gold/10' : ''}`}>
            <Flame className="text-gold" size={26} strokeWidth={1.3} /><h3 className="mt-6 font-display text-4xl italic">{t}</h3>
            <p className="mt-2 inline-block self-start rounded-full bg-gold px-3 py-1 text-xs font-bold text-mid">Ask for prices</p>
            <p className="mt-5 flex-1 text-sm text-warm/70">What’s included in each tier goes here once Xplore Events shares their proposal package.</p>
            <a href={wa(`Hi Xplore Events, please tell me about the ${t} proposal package.`)} className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-mid"><MessageCircle size={16} /> Ask about {t}</a>
          </div>))}
      </div>
    </section>
  );
}

function Celebrations() {
  return (
    <section id="celebrations" className="bg-warm py-24 text-mid lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-d">Every celebration</p><h2 className="mt-4 font-display text-5xl italic sm:text-6xl">Beyond the proposal.</h2>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">
        {CELEBRATIONS.map((c, i) => (<a key={c.t} href={wa(`Hi Xplore Events, I'd like to ask about ${c.t.toLowerCase()}.`)} className={`group relative block aspect-[3/4] overflow-hidden rounded-2xl ${i === 4 ? 'col-span-2 aspect-[2/1] lg:col-span-1 lg:aspect-[3/4]' : ''}`}>
          <Image src={c.img} alt={c.alt} fill loading="lazy" sizes="(min-width:1024px) 20vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-mid/85 via-transparent to-transparent" /><p className="absolute bottom-4 left-4 right-4 font-display text-2xl italic text-warm">{c.t}</p></a>))}
      </div></div></section>
  );
}

function Moments() {
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => { if (sel === null) return; const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [sel]);
  return (
    <section id="moments" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Moments</p><h2 className="mt-4 font-display text-5xl italic sm:text-6xl">Real setups, <span className="text-gold">real love stories.</span></h2>
      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {MOMENTS.map((m, i) => (<figure key={m.img} className="mb-5 break-inside-avoid"><button onClick={() => setSel(i)} aria-label={`Enlarge: ${m.cap}`} className="group block w-full overflow-hidden rounded-2xl"><Image src={m.img} alt={m.alt} width={m.w} height={m.h} loading="lazy" className="h-auto w-full transition duration-700 group-hover:scale-105" /></button>
          <figcaption className="mt-3 text-sm text-warm/75">{m.cap}</figcaption></figure>))}
      </div>
      <a href={BIZ.instagram} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold underline underline-offset-4"><Instagram size={16} /> More on @xploreeventslagos</a>
      {sel !== null && (<div role="dialog" aria-modal="true" aria-label="Moment" onClick={() => setSel(null)} className="fixed inset-0 z-[60] grid place-items-center bg-mid/95 p-4"><button aria-label="Close" onClick={() => setSel(null)} className="absolute right-4 top-4 rounded-full bg-warm/10 p-2"><X /></button>
        <figure className="max-h-full text-center"><Image src={MOMENTS[sel].img} alt={MOMENTS[sel].alt} width={MOMENTS[sel].w} height={MOMENTS[sel].h} className="mx-auto max-h-[80vh] w-auto rounded-xl" /><figcaption className="mt-3 text-sm">{MOMENTS[sel].cap}</figcaption></figure></div>)}
    </section>
  );
}

function Words() {
  return (
    <section id="words" className="bg-mid-2 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Kind words</p><h2 className="mt-4 font-display text-5xl italic sm:text-6xl">From our clients.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (<figure key={t.by} className="flex flex-col rounded-3xl border border-gold/30 p-8"><Quote className="text-gold" size={28} /><blockquote className="mt-5 flex-1 font-display text-xl italic leading-relaxed">“{t.q}”</blockquote><figcaption className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold">{t.by}</figcaption></figure>))}
      </div></div></section>
  );
}

function How() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><h2 className="font-display text-5xl italic sm:text-6xl">How it works.</h2>
      <ol className="mt-12 grid gap-8 md:grid-cols-3">{STEPS.map((s, i) => (<li key={s.t} className="border-t border-gold/50 pt-6"><span className="font-display text-6xl italic text-gold/60">{i + 1}</span><h3 className="mt-3 font-display text-2xl">{s.t}</h3><p className="mt-2 text-warm/70">{s.d}</p></li>))}</ol></section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-mid-2 to-mid py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <h2 className="max-w-3xl font-display text-5xl italic leading-[1.02] sm:text-7xl">Ready to ask the <span className="text-gold">big question?</span></h2>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <a href={wa('Hi Xplore Events, I would like to plan a proposal.')} className="rounded-3xl bg-gold p-7 text-mid transition hover:-translate-y-1"><MessageCircle size={28} /><p className="mt-8 text-sm font-semibold">WhatsApp</p><p className="font-display text-2xl italic">{BIZ.whatsappLabel}</p></a>
        <a href={`tel:${BIZ.tel}`} className="rounded-3xl border border-warm/20 p-7 transition hover:border-gold"><Phone size={28} className="text-gold" /><p className="mt-8 text-sm text-warm/60">Call</p><p className="font-display text-2xl italic">{BIZ.phoneLabel}</p></a>
        <a href={`mailto:${BIZ.email}`} className="rounded-3xl border border-warm/20 p-7 transition hover:border-gold"><Mail size={28} className="text-gold" /><p className="mt-8 text-sm text-warm/60">Email</p><p className="break-all font-display text-xl italic sm:text-2xl">{BIZ.email}</p></a>
      </div>
      <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-warm/75"><span className="flex items-center gap-2"><MapPin size={17} className="text-gold" /> {BIZ.areas}</span><a href={BIZ.instagram} className="flex items-center gap-2 underline underline-offset-4 hover:text-gold"><Instagram size={17} className="text-gold" /> @xploreeventslagos</a></p>
    </div></section>
  );
}

export default function Site() {
  return (<><Banner /><Header /><main><Hero /><Proposals /><Celebrations /><Moments /><Words /><How /><Contact /></main>
    <footer className="border-t border-warm/10 bg-black px-5 py-10 text-warm/65 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center"><Logo /><p className="text-xs">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
    <a href={wa('Hi Xplore Events!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1c7a4a] text-white shadow-2xl transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><MessageCircle size={26} /></a></>);
}

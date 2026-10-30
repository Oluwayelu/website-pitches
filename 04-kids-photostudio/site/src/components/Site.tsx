'use client';
import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, Baby, Briefcase, CalendarPlus, Camera, Clapperboard, Heart, ImagePlus, Mail, MapPin, MessageCircle, Phone, Star, Users, X, PartyPopper, Facebook } from 'lucide-react';
import { BIZ, PACKAGES, PITCH_CONTACT, SETS, SHOOTS, STEPS, wa } from '@/content';

function Reveal({ children, d = 0, className = '', rot = 0 }: { children: ReactNode; d?: number; className?: string; rot?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 36, rotate: rot * 2 }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ type: 'spring', stiffness: 90, damping: 16, delay: d }}>{children}</motion.div>;
}
const btnC = 'inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3.5 font-display text-base font-bold text-ink shadow-[0_5px_0_#1F2A44] transition active:translate-y-1 active:shadow-none hover:-translate-y-0.5';
const btnO = 'inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-cream px-7 py-3.5 font-display text-base font-bold text-ink transition hover:bg-sun';

function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2" aria-label="Kids Photostudio home">
      <svg viewBox="0 0 44 36" width="40" height="32" aria-hidden>
        <rect x="2" y="8" width="40" height="26" rx="7" fill="#1F2A44" /><rect x="12" y="3" width="12" height="8" rx="3" fill="#1F2A44" />
        <circle cx="22" cy="21" r="10" fill="#FFC94A" /><ellipse cx="22" cy="19.5" rx="6.5" ry="7.5" fill="#FF6F61" /><path d="M22 27l-2 3h4z" fill="#FF6F61" /><ellipse cx="19.5" cy="16.5" rx="1.8" ry="2.6" fill="#fff" opacity=".7" /><circle cx="36" cy="14" r="1.8" fill="#7CC6FE" />
      </svg>
      <span className="font-display text-xl font-extrabold leading-[0.9] tracking-tight">kids<br /><span className="text-coral-d">photostudio</span></span>
    </a>
  );
}

function Banner() {
  const [o, setO] = useState(true);
  if (!o) return null;
  return (
    <div className="relative bg-ink px-10 py-2 text-center text-[11px] font-semibold leading-snug text-cream sm:text-xs">
      Concept preview designed for {BIZ.name} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
      <button onClick={() => setO(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-white/10"><X size={14} /></button>
    </div>
  );
}
function Header() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all ${s ? 'bg-cream/95 py-2 shadow-[0_2px_0_#1F2A44] backdrop-blur' : 'bg-cream py-4'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden gap-7 font-display text-base font-semibold lg:flex">
          {[['Shoots', '#shoots'], ['Our sets', '#sets'], ['Packages', '#packages'], ['How it works', '#how'], ['Find us', '#find']].map(([l, h]) => <a key={h} href={h} className="hover:text-coral-d">{l}</a>)}
        </nav>
        <a href="#book" className="rounded-full bg-sun px-5 py-2.5 font-display text-sm font-bold ring-2 ring-ink transition hover:bg-coral">Book a shoot</a>
      </div>
    </header>
  );
}

const SHAPES = [
  ['8%', '12%', 'sun', 'rounded-full', 56, 0], ['88%', '8%', 'sky', 'rounded-full', 40, 2], ['78%', '70%', 'coral', 'rounded-full', 64, 1], ['4%', '78%', 'sky', 'rotate-45', 28, 3], ['50%', '4%', 'coral', 'rotate-12', 20, 4], ['92%', '48%', 'sun', 'rotate-45', 26, 5],
] as const;
const bg: Record<string, string> = { sun: 'bg-sun', sky: 'bg-sky', coral: 'bg-coral' };

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {SHAPES.map(([x, y, c, shape, size, i]) => (
        <span key={i} aria-hidden className={`drift absolute ${bg[c]} ${shape} opacity-60`} style={{ left: x, top: y, width: size, height: size * (shape === 'rounded-full' ? 1.2 : 1), animationDelay: `${i * -1.5}s` }} />
      ))}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-16">
        <div>
          <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1.5 font-display text-sm font-bold ring-2 ring-ink"><PartyPopper size={16} /> Inside Ikeja City Mall</motion.span>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 80, delay: 0.15 }} className="mt-5 font-display text-[2.8rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            Birthday photos your child will <span className="relative inline-block text-coral-d">treasure<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden><path d="M2 8c30-8 60 4 98-2s60-4 98 0" stroke="#FFC94A" strokeWidth="5" fill="none" strokeLinecap="round" /></svg></span> forever.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-ink/80">Themed kids’ shoots, family portraits and more, in our studio at Ikeja City Mall.</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#book" className={btnC}><CalendarPlus size={19} /> Book a shoot</a>
            <a href="#sets" className={btnO}>See our sets <ArrowUpRight size={18} /></a>
          </motion.div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="bob relative rounded-md bg-white p-3 pb-14 shadow-[0_24px_50px_-20px_rgba(31,42,68,.55)] ring-1 ring-ink/10" style={{ ['--r' as string]: '3deg', transform: 'rotate(3deg)' }}>
            <div className="relative aspect-square overflow-hidden"><Image src="/img/set-royal.webp" alt="Royal blue and gold 'ONE' first-birthday set with a crowned cake and gold balloons" fill priority sizes="(min-width:1024px) 40vw, 85vw" className="object-cover" /></div>
            <p className="absolute inset-x-0 bottom-3 text-center font-display text-lg font-bold">Royal “ONE” set 👑</p>
          </div>
          <span className="bob absolute -left-3 top-8 grid h-24 w-24 -rotate-12 place-items-center rounded-full bg-coral text-center font-display text-sm font-extrabold leading-tight text-ink ring-2 ring-ink sm:-left-8" style={{ ['--r' as string]: '-12deg' }}>Photo<br />+ video</span>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const items = ['Inside Ikeja City Mall', '830+ families following', 'Photo + video', 'Kids birthdays are our speciality'];
  return (
    <section aria-label="Highlights" className="border-y-2 border-ink bg-sky">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-3 px-5 py-5 font-display text-sm font-bold sm:px-8 sm:text-lg lg:grid-cols-4">
        {items.map((t) => <li key={t} className="flex items-center gap-2"><Star size={16} className="shrink-0 fill-sun text-ink" /> {t}</li>)}
      </ul>
    </section>
  );
}

function Shoots() {
  const icons = [Baby, Users, Heart, Camera, Briefcase, Clapperboard];
  const tint = ['bg-coral', 'bg-sky', 'bg-sun', 'bg-sky', 'bg-coral', 'bg-sun'];
  return (
    <section id="shoots" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal><p className="font-display text-sm font-bold uppercase tracking-widest text-coral-d">Shoot types</p><h2 className="mt-2 font-display text-4xl font-extrabold sm:text-6xl">Every little moment, <span className="text-sky-d">captured.</span></h2></Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SHOOTS.map((s, i) => { const I = icons[i]; return (
          <Reveal key={s.t} d={(i % 3) * 0.08} rot={i % 2 ? 0.8 : -0.8} className={i === 0 ? 'lg:col-span-2' : ''}>
            <a href={wa(`Hi Kids Photostudio, I'd like to ask about ${s.t.toLowerCase()}.`)} className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-ink p-6 transition hover:-translate-y-1 hover:shadow-[0_8px_0_#1F2A44] ${s.star ? 'bg-sun' : 'bg-white'}`}>
              <div className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink ${tint[i]}`}><I size={26} /></div>
              <div className="mt-6"><h3 className="font-display text-2xl font-extrabold">{s.t} {s.star && '⭐'}</h3><p className="mt-1 font-medium text-ink/75">{s.d}</p></div>
              {s.star && <div className="absolute -right-3 -top-3 hidden w-40 rotate-6 rounded bg-white p-1.5 pb-6 shadow-lg ring-1 ring-ink/10 sm:block"><div className="relative aspect-square"><Image src="/img/boy.webp" alt="Toddler birthday boy in a gold crown holding a Birthday Boy sign" fill loading="lazy" sizes="160px" className="object-cover" /></div></div>}
            </a>
          </Reveal>); })}
      </div>
    </section>
  );
}

function Sets() {
  const [sel, setSel] = useState<string | null>(null);
  useEffect(() => { if (!sel) return; const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [sel]);
  const rot = [-2, 1.5, -1, 2, -1.5];
  return (
    <section id="sets" className="bg-ink py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><p className="font-display text-sm font-bold uppercase tracking-widest text-sun">Our sets</p><h2 className="mt-2 font-display text-4xl font-extrabold sm:text-6xl">Colourful worlds, built for your child.</h2></Reveal>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {SETS.map((s, i) => (
            <Reveal key={s.id} d={(i % 3) * 0.08} rot={rot[i]} className={i === 0 ? 'col-span-2 lg:col-span-1 lg:row-span-2' : ''}>
              <figure className="rounded-md bg-white p-2.5 pb-4 text-ink shadow-xl">
                {s.img ? (
                  <button onClick={() => setSel(s.id)} aria-label={`Enlarge: ${s.t}`} className="relative block aspect-square w-full overflow-hidden lg:aspect-[4/5]"><Image src={s.img} alt={`${s.t} birthday set`} fill loading="lazy" sizes="(min-width:1024px) 33vw, 90vw" className="object-cover" /></button>
                ) : (<div className="ph flex aspect-square flex-col items-center justify-center gap-1 text-ink/60"><ImagePlus size={24} /><span className="text-[11px] font-bold uppercase tracking-wider">Your set photo</span></div>)}
                <figcaption className="mt-3 text-center font-display text-lg font-bold">{s.t}</figcaption>
              </figure>
            </Reveal>))}
        </div>
      </div>
      {sel && (
        <div role="dialog" aria-modal="true" aria-label="Set photo" onClick={() => setSel(null)} className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4">
          <button aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-cream" onClick={() => setSel(null)}><X /></button>
          <Image src={SETS.find((s) => s.id === sel)!.img!} alt="Royal blue and gold set, enlarged" width={932} height={917} className="max-h-[88vh] w-auto rounded-lg" />
        </div>)}
    </section>
  );
}

function Packages() {
  const col = ['bg-sky', 'bg-sun', 'bg-coral'];
  return (
    <section id="packages" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal><p className="font-display text-sm font-bold uppercase tracking-widest text-coral-d">Packages</p><h2 className="mt-2 font-display text-4xl font-extrabold sm:text-6xl">Pick your party size.</h2></Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <Reveal key={p} d={i * 0.1} className={i === 1 ? 'md:-mt-4' : ''}>
            <div className={`flex h-full flex-col rounded-3xl border-2 border-dashed border-ink p-7 ${col[i]}/30`} style={{ backgroundColor: ['#E3F2FF', '#FFF0C7', '#FFE0DC'][i] }}>
              <p className="font-display text-3xl font-extrabold">{p}</p>
              <p className="mt-2 inline-block self-start rounded-full bg-ink px-3 py-1 font-display text-sm font-bold text-cream">Prices on request</p>
              <p className="mt-4 flex-1 text-sm font-medium text-ink/70">What’s included goes here once Kids Photostudio shares the details.</p>
              <a href={wa(`Hi Kids Photostudio, please send me details of the ${p} package.`)} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-3 font-display text-sm font-bold hover:bg-sun"><MessageCircle size={16} /> Ask about this package</a>
            </div>
          </Reveal>))}
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="bg-sun py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Booking in three taps.</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="relative rounded-3xl border-2 border-ink bg-cream p-6"><span className="grid h-12 w-12 place-items-center rounded-full bg-coral font-display text-2xl font-extrabold ring-2 ring-ink">{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-extrabold">{s.t}</h3><p className="mt-1 font-medium text-ink/75">{s.d}</p></li>))}
        </ol>
      </div>
    </section>
  );
}

function Book() {
  const [f, setF] = useState({ name: '', age: '', shoot: SHOOTS[0].t, date: '', phone: '' });
  const [done, setDone] = useState(false);
  const msg = `Hi Kids Photostudio, I'd like to book a shoot.\nName: ${f.name || '-'}\nChild's age: ${f.age || '-'}\nShoot type: ${f.shoot}\nPreferred date: ${f.date || '-'}\nMy phone: ${f.phone || '-'}`;
  const ics = f.date ? `data:text/calendar;charset=utf-8,${encodeURIComponent(`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nDTSTART;VALUE=DATE:${f.date.replace(/-/g, '')}\r\nSUMMARY:Shoot at Kids Photostudio (to be confirmed)\r\nLOCATION:Ikeja City Mall\\, Ikeja\\, Lagos\r\nEND:VEVENT\r\nEND:VCALENDAR`)}` : '';
  const inp = 'mt-1 w-full rounded-xl border-2 border-ink bg-white px-4 py-3 font-semibold outline-none focus:bg-sun/20';
  return (
    <section id="book" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
        <Reveal><p className="font-display text-sm font-bold uppercase tracking-widest text-coral-d">Book a shoot</p><h2 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Let’s plan the fun!</h2>
          <p className="mt-4 font-medium text-ink/75">Fill this in and it opens WhatsApp with everything ready to send. We’ll confirm your date.</p>
          <a href={BIZ.form} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-bold underline underline-offset-4">Prefer the old form?</a></Reveal>
        <Reveal d={0.1}>
          <form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); setDone(true); }} className="space-y-3 rounded-3xl border-2 border-ink bg-sky/30 p-6 shadow-[0_8px_0_#1F2A44]" style={{ backgroundColor: '#E3F2FF' }}>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-bold">Your name<input required className={inp} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
              <label className="block text-sm font-bold">Child’s age<input className={inp} inputMode="numeric" value={f.age} onChange={(e) => setF({ ...f, age: e.target.value })} /></label>
            </div>
            <label className="block text-sm font-bold">Shoot type<select className={inp} value={f.shoot} onChange={(e) => setF({ ...f, shoot: e.target.value })}>{SHOOTS.map((s) => <option key={s.t}>{s.t}</option>)}</select></label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-bold">Preferred date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
              <label className="block text-sm font-bold">Your phone<input type="tel" className={inp} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} autoComplete="tel" /></label>
            </div>
            <button className={`${btnC} w-full`}><MessageCircle size={19} /> Send on WhatsApp</button>
            {done && ics && <a download="kids-photostudio.ics" href={ics} className="flex items-center justify-center gap-2 text-sm font-bold underline"><CalendarPlus size={16} /> Add to calendar</a>}
          </form>
        </Reveal>
      </div>
      <div className="ph mt-16 rounded-3xl px-6 py-12 text-center"><p className="font-display text-2xl font-extrabold">Parent reviews go here</p><p className="mx-auto mt-1 max-w-sm text-sm font-medium">We’ll add real words from your happy families.</p></div>
    </section>
  );
}

function Find() {
  return (
    <section id="find" className="bg-ink py-20 text-cream lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-sun">Find us</p><h2 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Inside Ikeja City Mall.</h2>
          <ul className="mt-8 space-y-4 text-lg font-semibold">
            <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-sun" /> Ikeja City Mall, Ikeja, Lagos</li>
            <li><a href={`tel:${BIZ.tel}`} className="flex gap-3 hover:text-sun"><Phone className="shrink-0 text-sun" /> {BIZ.phoneLabel}</a></li>
            <li><a href={wa('Hi Kids Photostudio!')} className="flex gap-3 hover:text-sun"><MessageCircle className="shrink-0 text-sun" /> WhatsApp us</a></li>
            <li><a href={`mailto:${BIZ.email}`} className="flex gap-3 break-all hover:text-sun"><Mail className="shrink-0 text-sun" /> {BIZ.email}</a></li>
            <li><a href={BIZ.facebook} className="flex gap-3 hover:text-sun"><Facebook className="shrink-0 text-sun" /> Facebook</a></li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl border-2 border-sun">
          <iframe title="Map: Ikeja City Mall, Ikeja, Lagos" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full lg:h-full" src="https://www.google.com/maps?q=Ikeja+City+Mall,+Ikeja,+Lagos&output=embed" />
        </div>
      </div>
    </section>
  );
}

export default function Site() {
  return (
    <MotionConfig reducedMotion="user">
      <Banner /><Header />
      <main><Hero /><Proof /><Shoots /><Sets /><Packages /><How /><Book /><Find /></main>
      <footer className="bg-[#161e33] px-5 py-8 text-cream/75 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm sm:flex-row"><span className="font-display text-lg font-bold text-cream">kids photostudio</span><p>© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
      <a href={wa('Hi Kids Photostudio!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1c7a4a] text-white ring-2 ring-ink transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><MessageCircle size={26} /></a>
    </MotionConfig>
  );
}

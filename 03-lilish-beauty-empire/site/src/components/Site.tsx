'use client';
import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, Crown, Flower2, Gem, Home, MapPin, MessageCircle, Phone, Mail, Play, Scissors, Sparkles, X, Clock, Instagram, Check, ImagePlus } from 'lucide-react';
import { BIZ, LOOKS, MENU, PITCH_CONTACT, SERVICE_OPTIONS, WORLDS, igPost, waHref } from '@/content';

const ease = [0.22, 1, 0.36, 1] as const;
function Reveal({ children, d = 0, className = '' }: { children: ReactNode; d?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.8, delay: d, ease }}>{children}</motion.div>;
}
const btnP = 'inline-flex items-center justify-center gap-2 rounded-full bg-champ px-7 py-3.5 text-sm font-semibold text-plum transition hover:bg-blush';
const btnG = 'inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-champ hover:text-champ';

function Wordmark({ light }: { light?: boolean }) {
  return (
    <a href="#top" className="inline-flex flex-col items-start leading-none">
      <span className={`relative font-display text-[2rem] font-medium italic ${light ? 'text-cream' : 'text-plum'}`}>
        L<span className="relative">ı<Crown size={11} className="absolute -top-[5px] left-1/2 -translate-x-1/2 text-champ" aria-hidden /></span>lish
        <span className="sr-only"> Lilish</span>
      </span>
      <span className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.45em] text-champ">Beauty Empire</span>
    </a>
  );
}

function useOpen() {
  const [o, setO] = useState<null | boolean>(null);
  useEffect(() => {
    const calc = () => {
      const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Lagos', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date());
      const wd = p.find((x) => x.type === 'weekday')!.value; const h = +p.find((x) => x.type === 'hour')!.value % 24;
      setO(wd !== 'Sun' && h >= 8 && h < 20);
    };
    calc(); const t = setInterval(calc, 60000); return () => clearInterval(t);
  }, []);
  return o;
}
function OpenBadge({ dark }: { dark?: boolean }) {
  const o = useOpen();
  if (o === null) return <span className="h-7" />;
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold ${dark ? 'bg-plum text-cream' : 'bg-cream/10 text-cream ring-1 ring-cream/25'}`}>
      <span className={`h-2 w-2 rounded-full ${o ? 'bg-emerald-400' : 'bg-rose-400'}`} /> {o ? 'Open now' : 'Closed now'} · {BIZ.hours}
    </span>
  );
}

function Banner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative bg-champ px-10 py-2 text-center text-[11px] font-medium leading-snug text-plum sm:text-xs">
      Concept preview designed for {BIZ.name} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
      <button onClick={() => setOpen(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-plum/10"><X size={14} /></button>
    </div>
  );
}

function Header() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(window.scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${s ? 'bg-plum/95 py-2 backdrop-blur' : 'bg-plum py-4'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Wordmark light />
        <nav aria-label="Primary" className="hidden gap-8 text-sm text-cream/80 lg:flex">
          {[['Worlds', '#worlds'], ['Services', '#services'], ['Lookbook', '#looks'], ['Shop', '#shop'], ['Event hall', '#hall'], ['Visit', '#visit']].map(([l, h]) => <a key={h} href={h} className="transition hover:text-champ">{l}</a>)}
        </nav>
        <a href={waHref('Hi Lilish, I would like to book.')} className="inline-flex items-center gap-2 rounded-full bg-champ px-4 py-2.5 text-xs font-semibold text-plum sm:text-sm"><MessageCircle size={16} /> Book<span className="hidden sm:inline"> on WhatsApp</span></a>
      </div>
    </header>
  );
}

function Hero() {
  const frames = [
    { img: '/img/koboko.webp', alt: 'Koboko twist braids', cls: 'mt-10 -rotate-3', d: 0.2 },
    { img: '/img/cornrow.webp', alt: 'Cornrow braids in a box pattern', cls: '-mt-2 z-10 scale-105', d: 0.05, pri: true },
    { img: '/img/henna.webp', alt: 'Henna art on a hand', cls: 'mt-14 rotate-3', d: 0.3 },
  ];
  return (
    <section id="top" className="relative overflow-hidden bg-plum text-cream">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-plum-2/70 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-16">
        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}><OpenBadge /></motion.div>
          <h1 className="mt-6 font-display text-[3.2rem] font-medium leading-[0.98] sm:text-7xl lg:text-[6rem]">
            {['Your hair-ven', 'in ', ''].map((l, i) => i < 2 ? (
              <span key={i} className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1 + i * 0.12, ease }}>
                {l}{i === 1 && <em className="text-champ">Port Harcourt.</em>}</motion.span></span>) : null)}
          </h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">Luxury hair, spa &amp; self-care in Elechi. Open Monday to Saturday, 8am–8pm.</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.8 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={waHref('Hi Lilish, I would like to book.')} className={btnP}><MessageCircle size={18} /> Book on WhatsApp</a>
            <a href="#services" className={btnG}>See services <ArrowUpRight size={18} /></a>
          </motion.div>
        </div>
        <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-2.5 sm:gap-4 lg:max-w-lg">
          {frames.map((f) => (
            <motion.div key={f.img} className={f.cls} initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 1, delay: f.d, ease }}>
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.4rem] border-[3px] border-champ/70 shadow-2xl">
                <Image src={f.img} alt={f.alt} fill priority={f.pri} sizes="(min-width:1024px) 15vw, 30vw" className="object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['1,200+ looks shared', 'Mon–Sat 8am–8pm', 'Salon', 'Spa', 'Human hair', 'Fragrance', 'Event hall', 'Elechi, Port Harcourt'];
  return (
    <div className="overflow-hidden border-y border-champ/40 bg-blush py-4" aria-label="Highlights">
      <div className="marquee flex gap-10 whitespace-nowrap font-display text-2xl italic text-plum">
        {[...items, ...items].map((t, i) => <span key={i} className="flex items-center gap-10">{t}<Sparkles size={16} className="text-champ-d" aria-hidden /></span>)}
      </div>
    </div>
  );
}

function Ph({ label = 'Photo coming', icon }: { label?: string; icon?: ReactNode }) {
  return <div className="ph flex h-full w-full flex-col items-center justify-center gap-2 text-champ-d">{icon ?? <ImagePlus size={24} strokeWidth={1.3} />}<span className="text-[11px] font-medium uppercase tracking-widest">{label}</span></div>;
}

function Worlds() {
  const icons = [Scissors, Flower2, Gem, Sparkles, Home];
  const span = ['lg:col-span-3 lg:row-span-2', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3'];
  return (
    <section id="worlds" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal><p className="text-xs font-semibold uppercase tracking-[0.3em] text-champ-d">Five worlds, one empire</p>
        <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[1.02] sm:text-6xl">Lemme be your <em>hair-ven</em> baby.</h2></Reveal>
      <div className="mt-12 grid auto-rows-[15rem] gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {WORLDS.map((w, i) => { const I = icons[i]; return (
          <Reveal key={w.id} d={i * 0.07} className={`${span[i]} ${i === 0 ? 'sm:row-span-2' : ''}`}>
            <a href={waHref(`Hi Lilish, I'd like to know more about ${w.t}.`)} id={w.id} className="group relative block h-full overflow-hidden rounded-3xl bg-blush">
              {w.img ? <Image src={w.img} alt={w.t} fill loading="lazy" sizes="(min-width:1024px) 40vw, 90vw" className="object-cover transition duration-700 group-hover:scale-105" /> : <div className="ph absolute inset-0 border-0" />}
              <div className={`absolute inset-0 ${w.img ? 'bg-gradient-to-t from-plum/90 via-plum/10 to-transparent' : ''}`} />
              <div className={`absolute inset-x-0 bottom-0 flex items-end justify-between p-5 ${w.img ? 'text-cream' : 'text-plum'}`}>
                <div><I size={20} className={w.img ? 'text-champ' : 'text-champ-d'} /><h3 className="mt-2 font-display text-3xl italic">{w.t}</h3><p className="text-sm opacity-85">{w.d}</p></div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-plum transition group-hover:bg-champ"><ArrowUpRight size={18} /></span>
              </div>
            </a>
          </Reveal>); })}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-blush-2 py-20 lg:py-28" style={{ background: '#FBEBE7' }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champ-d">Services menu</p>
          <h2 className="mt-3 font-display text-5xl leading-[1.02] sm:text-6xl">Everything, <em>in one place.</em></h2>
          <p className="mt-5 max-w-sm text-plum-2">Your price list, catalogue and FAQs, no longer buried in Instagram stories.</p>
          <a href={waHref('Hi Lilish, please send me your price list.')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3.5 text-sm font-semibold text-cream"><MessageCircle size={17} /> Ask for the price list</a>
        </Reveal>
        <div className="space-y-9">
          {MENU.map((m, i) => (
            <Reveal key={m.g} d={i * 0.06}>
              <h3 className="border-b border-plum/20 pb-2 font-display text-2xl italic text-champ-d">{m.g}</h3>
              <ul>{m.items.map((it) => (
                <li key={it} className="flex items-center justify-between gap-4 border-b border-plum/10 py-3.5"><span className="font-display text-2xl">{it}</span>
                  <span className="shrink-0 rounded-full border border-champ-d/60 px-3 py-1 text-xs font-medium text-champ-d">Price list on request</span></li>))}</ul>
            </Reveal>))}
        </div>
      </div>
    </section>
  );
}

function Looks() {
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => { if (sel === null) return; const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setSel(null); }; addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [sel]);
  return (
    <section id="looks" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-champ-d">Lookbook</p><h2 className="mt-3 font-display text-5xl sm:text-6xl">From our <em>reels.</em></h2></div>
        <a href={BIZ.instagram} className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"><Instagram size={16} /> @lilish_beauty_empire</a>
      </Reveal>
      <div className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-4">
        {LOOKS.map((l, i) => (
          <Reveal key={l.img} d={(i % 4) * 0.06} className="mb-3 break-inside-avoid sm:mb-4">
            <button onClick={() => setSel(i)} aria-label={`Open: ${l.alt}`} className="group relative block w-full overflow-hidden rounded-2xl">
              <Image src={l.img} alt={l.alt} width={l.w} height={l.h} loading="lazy" className="h-auto w-full transition duration-700 group-hover:scale-105" />
            </button>
          </Reveal>))}
      </div>
      {sel !== null && (
        <div role="dialog" aria-modal="true" aria-label="Lookbook image" className="fixed inset-0 z-[60] grid place-items-center bg-plum/95 p-4" onClick={() => setSel(null)}>
          <button className="absolute right-4 top-4 rounded-full bg-cream/10 p-2 text-cream" aria-label="Close" onClick={() => setSel(null)}><X /></button>
          <div className="flex max-h-full flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <Image src={LOOKS[sel].img} alt={LOOKS[sel].alt} width={LOOKS[sel].w} height={LOOKS[sel].h} className="max-h-[78vh] w-auto rounded-2xl" />
            <a href={igPost(LOOKS[sel].post)} target="_blank" rel="noopener noreferrer" className={btnP}><Play size={16} /> Watch the reel on Instagram</a>
          </div>
        </div>)}
    </section>
  );
}

function Shop() {
  const cards = [{ t: 'Human hair', d: 'Human hair sales, enquire for what’s in stock.' }, { t: 'Fragrance diffusers', d: 'What’s your favourite diffuser?', img: '/img/diffuser.webp' }];
  return (
    <section id="shop" className="bg-plum py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[0.3em] text-champ">Shop</p><h2 className="mt-3 font-display text-5xl sm:text-6xl">Take a little <em className="text-champ">Lilish</em> home.</h2></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.t} d={i * 0.1}>
              <div className="grid overflow-hidden rounded-3xl bg-plum-2 sm:grid-cols-2">
                <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[18rem]">{c.img ? <Image src={c.img} alt="Fragrance diffusers on the shop shelf" fill loading="lazy" sizes="(min-width:768px) 20vw, 90vw" className="object-cover" /> : <Ph label="Product photo" />}</div>
                <div className="flex flex-col justify-between p-6"><div><h3 className="font-display text-3xl italic">{c.t}</h3><p className="mt-2 text-sm text-cream/70">{c.d}</p></div>
                  <a href={waHref(`Hi Lilish, I'd like to enquire about ${c.t.toLowerCase()}.`)} className={`${btnP} mt-6`}><MessageCircle size={16} /> Enquire on WhatsApp</a></div>
              </div>
            </Reveal>))}
        </div>
      </div>
    </section>
  );
}

function Hall() {
  return (
    <section id="hall" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/3] overflow-hidden rounded-3xl"><Ph label="Event hall photos go here" icon={<Home size={28} strokeWidth={1.3} />} /></div>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champ-d">Event hall</p>
          <h2 className="mt-3 font-display text-5xl leading-[1.02] sm:text-6xl">Celebrate at <em>Lilish.</em></h2>
          <p className="mt-5 max-w-md text-lg text-plum-2">Planning an event in Port Harcourt? Ask about our hall, dates and what’s included.</p>
          <a href={waHref('Hi Lilish, I would like to enquire about the event hall.')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-plum px-7 py-3.5 text-sm font-semibold text-cream"><MessageCircle size={17} /> Enquire about the hall</a>
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 text-center sm:px-8 lg:pb-28">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champ-d">Reviews</p>
      <div className="ph mt-6 rounded-3xl px-6 py-14 text-champ-d"><p className="font-display text-3xl italic">Your reviews from Instagram go here</p><p className="mx-auto mt-2 max-w-sm text-sm">Quoted word for word once you share them from your REVIEWS highlight.</p></div>
    </section>
  );
}

function Visit() {
  const [f, setF] = useState({ name: '', service: SERVICE_OPTIONS[0], date: '', time: '' });
  const [copied, setCopied] = useState(false);
  const msg = `Hello Lilish, I'd like to book.\nName: ${f.name || '-'}\nService: ${f.service}\nDate: ${f.date || '-'}\nTime: ${f.time || '-'}`;
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!BIZ.waPrefillNumber) { try { await navigator.clipboard.writeText(msg); setCopied(true); } catch {} }
    window.open(waHref(msg), '_blank');
  };
  const inp = 'mt-1 w-full rounded-xl border border-plum/20 bg-cream px-4 py-3 text-sm outline-none focus:border-plum';
  return (
    <section id="visit" className="bg-blush py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champ-d">Book &amp; visit</p>
          <h2 className="mt-3 font-display text-5xl leading-[1.02] sm:text-6xl">Come get your <em>hair done.</em></h2>
          <form onSubmit={submit} className="mt-8 space-y-3 rounded-3xl bg-cream p-6 shadow-xl">
            <label className="block text-xs font-semibold">Your name<input className={inp} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
            <label className="block text-xs font-semibold">Service<select className={inp} value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })}>{SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select></label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs font-semibold">Date<input type="date" className={inp} value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
              <label className="block text-xs font-semibold">Time<input type="time" min="08:00" max="20:00" className={inp} value={f.time} onChange={(e) => setF({ ...f, time: e.target.value })} /></label>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-plum px-6 py-3.5 text-sm font-semibold text-cream"><MessageCircle size={17} /> Book on WhatsApp</button>
            <p className="text-center text-xs text-plum-2" aria-live="polite">{copied ? <span className="inline-flex items-center gap-1"><Check size={13} /> Details copied. Paste them into the chat.</span> : <>or <a className="underline" href={`mailto:${BIZ.email}?subject=Booking&body=${encodeURIComponent(msg)}`}>email your request</a></>}</p>
          </form>
        </Reveal>
        <Reveal d={0.1} className="space-y-6">
          <div className="overflow-hidden rounded-3xl bg-plum text-cream">
            <div className="relative aspect-[16/10]"><Image src="/img/team.webp" alt="Lilish team member in a red Lilish shirt at the salon entrance" fill loading="lazy" sizes="(min-width:1024px) 40vw, 90vw" className="object-cover object-top" /></div>
            <ul className="space-y-4 p-6 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-champ" size={18} /><span>{BIZ.address}<br /><span className="text-xs text-cream/60">Please confirm the address with Lilish.</span></span></li>
              <li className="flex gap-3"><Clock className="shrink-0 text-champ" size={18} /> {BIZ.hours}</li>
              <li><a href={`tel:${BIZ.tel}`} className="flex gap-3 hover:text-champ"><Phone className="shrink-0 text-champ" size={18} /> {BIZ.phone}</a></li>
              <li><a href={`mailto:${BIZ.email}`} className="flex gap-3 break-all hover:text-champ"><Mail className="shrink-0 text-champ" size={18} /> {BIZ.email}</a></li>
            </ul>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BIZ.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-t border-cream/15 px-6 py-4 text-sm font-semibold text-champ hover:bg-plum-2">Open in Google Maps <ArrowUpRight size={17} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-plum px-5 py-10 text-cream/70 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
      <Wordmark light /><a href={BIZ.instagram} className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-champ"><Instagram size={16} /> Instagram</a>
      <p className="text-xs">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p></div></footer>
  );
}

export default function Site() {
  return (
    <MotionConfig reducedMotion="user">
      <Banner /><Header />
      <main><Hero /><Marquee /><Worlds /><Services /><Looks /><Shop /><Hall /><Reviews /><Visit /></main>
      <Footer />
      <a href={waHref('Hi Lilish!')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1c7a4a] text-white shadow-2xl transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}><MessageCircle size={26} /></a>
    </MotionConfig>
  );
}

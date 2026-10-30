'use client';
import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, Hammer, MessageCircle, Phone, Mail, X, Truck, Store, ThumbsUp, Users, ImagePlus } from 'lucide-react';
import { BIZ, CATEGORIES, CRAFT, PIECES, PITCH_CONTACT, PROOF, STEPS, wa } from '@/content';

function Reveal({ children, d = 0, className = '' }: { children: ReactNode; d?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Wordmark({ light = false, small = false }: { light?: boolean; small?: boolean }) {
  return (
    <a href="#top" className="inline-flex flex-col leading-none">
      <span className={`font-display font-semibold tracking-[0.28em] ${small ? 'text-xl' : 'text-2xl'} ${light ? 'text-ivory' : 'text-walnut'}`}>VAITH</span>
      <span className={`mt-1 text-[9px] font-medium uppercase tracking-[0.32em] ${light ? 'text-brass' : 'text-brass-d'}`}>Furniture · Ikeja</span>
    </a>
  );
}

const btnPrimary = 'inline-flex items-center justify-center gap-2 rounded-full bg-walnut px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-walnut-2 active:scale-[.98]';
const btnGhost = 'inline-flex items-center justify-center gap-2 rounded-full border border-walnut/30 px-6 py-3.5 text-sm font-semibold text-walnut transition hover:border-walnut hover:bg-walnut/5';

function Banner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative bg-walnut px-10 py-2 text-center text-[11px] leading-snug text-ivory/90 sm:text-xs">
      Concept preview designed for {BIZ.name} by {PITCH_CONTACT.name} · Like it? Reply to my email or WhatsApp {PITCH_CONTACT.whatsapp}.
      <button onClick={() => setOpen(false)} aria-label="Dismiss preview banner" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 hover:bg-white/10"><X size={14} /></button>
    </div>
  );
}

function Header() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(window.scrollY > 24); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${s ? 'bg-ivory/90 py-2.5 shadow-[0_1px_0_rgba(59,42,32,.12)] backdrop-blur-md' : 'bg-ivory py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Wordmark small={s} />
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {[['Shop', '#shop'], ['Pieces', '#pieces'], ['Craft', '#craft'], ['Order', '#how'], ['Contact', '#contact']].map(([l, h]) => (
            <a key={h} href={h} className="text-walnut-2 transition hover:text-walnut">{l}</a>
          ))}
        </nav>
        <a href={wa('Hi Vaith Furniture, I found your website and would like to order.')} className="inline-flex items-center gap-2 rounded-full bg-walnut px-4 py-2.5 text-xs font-semibold text-ivory sm:text-sm">
          <MessageCircle size={16} /> <span className="hidden sm:inline">Shop on</span> WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:pb-24 lg:pt-12">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brass-d">
            <span className="h-px w-8 bg-brass" /> Home & office furniture · Ikeja, Lagos
          </motion.p>
          <h1 className="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]">
            {['Furniture that', 'makes your home', 'feel '].map((l, i) => (
              <span key={l} className="block overflow-hidden"><motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                {l}{i === 2 && <em className="font-normal italic text-brass-d">finished.</em>}
              </motion.span></span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="mt-7 max-w-md text-base leading-relaxed text-walnut-2 sm:text-lg">
            Sofas, accent chairs and office pieces, built and delivered from Ikeja, Lagos.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={wa('Hi Vaith Furniture, I found your website and would like to order.')} className={btnPrimary}><MessageCircle size={18} /> Shop on WhatsApp</a>
            <a href="#pieces" className={btnGhost}>Browse the catalogue <ArrowUpRight size={18} /></a>
          </motion.div>
        </div>
        <motion.div initial={{ scale: 0.97 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-brass/50" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] bg-ivory-2 shadow-[0_40px_80px_-30px_rgba(59,42,32,.5)]">
            <Image src="/img/sofa.webp" alt="Teal channel-tufted sofa with mustard cushions and brass legs" fill priority sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -left-2 bottom-10 rounded-2xl bg-ivory px-4 py-3 shadow-xl sm:-left-8">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-sage-d">Available as seen</p>
            <p className="font-display text-lg">L-shape fabric sofa</p>
            <p className="text-xs text-walnut-2">Price on request</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Proof() {
  const icons = [Users, ThumbsUp, Truck, Store];
  return (
    <section aria-label="Highlights" className="bg-walnut text-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-8 sm:px-8 lg:grid-cols-4">
        {PROOF.map((p, i) => { const I = icons[i]; return (
          <Reveal key={p.big} d={i * 0.08} className="flex items-center gap-4 py-3 lg:px-6 lg:first:pl-0">
            <I className="hidden shrink-0 text-brass sm:block" size={26} strokeWidth={1.5} />
            <div><p className="font-display text-2xl leading-none sm:text-3xl">{p.big}</p><p className="mt-1.5 text-xs text-ivory/70 sm:text-sm">{p.small}</p></div>
          </Reveal>); })}
      </div>
    </section>
  );
}

function Placeholder({ label = 'Your photo goes here' }: { label?: string }) {
  return <div className="ph flex h-full w-full flex-col items-center justify-center gap-2 text-brass-d"><ImagePlus size={26} strokeWidth={1.4} /><span className="text-[11px] font-medium uppercase tracking-widest">{label}</span></div>;
}

function Shop() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal><p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-d">Shop by category</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Find the piece that fits your space.</h2></Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.name} d={i * 0.08}>
            <a href={wa(`Hi, I'm looking for ${c.name.toLowerCase()}.`)} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ivory-2">
                {c.img ? <Image src={c.img} alt={c.name} fill sizes="(min-width:1024px) 25vw, 90vw" className="object-cover transition duration-700 group-hover:scale-105" /> : <Placeholder />}
                <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-ivory text-walnut transition group-hover:bg-brass"><ArrowUpRight size={18} /></span>
              </div>
              <h3 className="mt-4 font-display text-xl">{c.name}</h3>
              <p className="mt-1 text-sm text-walnut-2">{c.note}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pieces() {
  const [flt, setFlt] = useState('All');
  const chips = ['All', 'Sofas', 'Chairs', 'Office'];
  const group = (id: string) => (id.includes('sofa') ? 'Sofas' : id.includes('chair') ? 'Chairs' : id.includes('office') ? 'Office' : 'Other');
  const list = PIECES.filter((p) => flt === 'All' || group(p.id) === flt);
  return (
    <section id="pieces" className="bg-ivory-2/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-d">Featured pieces</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Available now, ordered in one tap.</h2></div>
          <div role="tablist" aria-label="Filter pieces" className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <button key={c} role="tab" aria-selected={flt === c} onClick={() => setFlt(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${flt === c ? 'bg-walnut text-ivory' : 'border border-walnut/25 hover:border-walnut'}`}>{c}</button>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article key={p.id} layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -5% 0px' }} transition={{ duration: 0.6, delay: (i % 3) * 0.08 }} className="group" id={p.id}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-ivory shadow-[0_18px_40px_-24px_rgba(59,42,32,.45)] transition duration-500 group-hover:-translate-y-1.5">
                {p.img ? <Image src={p.img} alt={p.name} fill loading="lazy" sizes="(min-width:1024px) 33vw, 90vw" className="object-cover" /> : <Placeholder />}
                <span className="absolute left-3 top-3 rounded-full bg-sage/90 px-3 py-1 text-[11px] font-semibold text-white" style={{ background: '#4F6049' }}>{p.tag}</span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div><h3 className="font-display text-xl">{p.name}</h3><span className="mt-1.5 inline-block rounded-full border border-brass px-3 py-0.5 text-xs font-medium text-brass-d">Price on request</span></div>
                <a href={wa(`Hi, I'm interested in the ${p.name} I saw on your website.`)} className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-walnut px-4 py-2.5 text-xs font-semibold text-ivory transition hover:bg-walnut-2">
                  <MessageCircle size={14} /> Order on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-10 text-sm text-walnut-2">More pieces are added all the time. Follow on <a className="underline underline-offset-4" href={BIZ.facebook}>Facebook</a> or ask on WhatsApp for what’s available.</p>
      </div>
    </section>
  );
}

function Craft() {
  return (
    <section id="craft" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brass-d"><Hammer size={15} /> Made in Lagos</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Built from scratch, <em className="font-normal text-brass-d">frame to finish.</em></h2>
          <p className="mt-6 text-lg leading-relaxed text-walnut-2">Every piece is built by our own craftsmen, from frame to finish. Want something custom? Send us a picture and your space size.</p>
          <a href={wa('Hi, I would like a custom piece built. Here is a picture and my space size:')} className={`${btnPrimary} mt-8`}>Request a custom piece <ArrowUpRight size={18} /></a>
        </Reveal>
        <ol className="grid gap-5 sm:grid-cols-3">
          {CRAFT.map((s, i) => (
            <motion.li key={s.n} className="relative list-none" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.7, delay: i * 0.12 }}>
              <div>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl"><Placeholder label={`${s.t} photo`} /></div>
                <p className="mt-4 font-display text-3xl text-brass">{s.n}</p>
                <h3 className="font-display text-xl">{s.t}</h3>
                <p className="mt-1 text-sm text-walnut-2">{s.d}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="bg-walnut py-20 text-ivory lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">How ordering works</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Three steps, one chat.</h2></Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ivory/15 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} d={i * 0.1} className="bg-walnut p-8 lg:p-10">
              <span className="font-display text-6xl text-brass/70">{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl">{s.t}</h3><p className="mt-2 text-ivory/70">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-d">Reviews</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">100% of reviewers recommend us.</h2>
        <div className="ph mt-10 rounded-3xl px-6 py-14 text-brass-d"><p className="font-display text-2xl">Your 11 Facebook reviews go here</p><p className="mx-auto mt-2 max-w-sm text-sm">We’ll quote them word-for-word, with their names, once you share them.</p></div>
      </Reveal>
    </section>
  );
}

function CustomForm() {
  const [f, setF] = useState({ type: '', size: '', colour: '', budget: '' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });
  const msg = `Hi Vaith Furniture, I'd like a custom piece.\nItem type: ${f.type || '-'}\nSpace size: ${f.size || '-'}\nColour: ${f.colour || '-'}\nBudget range: ${f.budget || '-'}`;
  const inp = 'w-full rounded-xl border border-walnut/25 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-walnut';
  return (
    <form onSubmit={(e) => { e.preventDefault(); window.open(wa(msg), '_blank'); }} className="space-y-3 rounded-3xl bg-ivory p-6 text-walnut shadow-xl sm:p-8">
      <h3 className="font-display text-2xl">Request a custom piece</h3>
      <label className="block text-xs font-semibold">Item type<select className={`${inp} mt-1`} value={f.type} onChange={set('type')}><option value="">Choose…</option><option>Sofa</option><option>Royal / accent chair</option><option>Office furniture</option><option>Something else</option></select></label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs font-semibold">Space size<input className={`${inp} mt-1`} placeholder="e.g. 3m x 4m living room" value={f.size} onChange={set('size')} /></label>
        <label className="block text-xs font-semibold">Colour<input className={`${inp} mt-1`} placeholder="e.g. teal velvet" value={f.colour} onChange={set('colour')} /></label>
      </div>
      <label className="block text-xs font-semibold">Budget range<input className={`${inp} mt-1`} placeholder="Your budget" value={f.budget} onChange={set('budget')} /></label>
      <button className={`${btnPrimary} w-full`}><MessageCircle size={18} /> Send on WhatsApp</button>
      <p className="text-center text-xs text-walnut-2">or <a className="underline" href={`mailto:${BIZ.email}?subject=Custom%20piece&body=${encodeURIComponent(msg)}`}>email us instead</a></p>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#2A1D15] py-20 text-ivory lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">Visit or message us</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Let’s furnish your space.</h2>
          <p className="mt-5 max-w-md text-lg text-ivory/75">{BIZ.intro}</p>
          <ul className="mt-9 space-y-4 text-base">
            <li><a href={wa('Hi Vaith Furniture!')} className="inline-flex items-center gap-3 hover:text-brass"><MessageCircle className="text-brass" size={20} /> WhatsApp 0708 451 0703</a></li>
            {BIZ.phones.map((p) => (<li key={p.tel}><a href={`tel:${p.tel}`} className="inline-flex items-center gap-3 hover:text-brass"><Phone className="text-brass" size={20} /> {p.label}</a></li>))}
            <li><a href={`mailto:${BIZ.email}`} className="inline-flex items-center gap-3 break-all hover:text-brass"><Mail className="text-brass" size={20} /> {BIZ.email}</a></li>
            <li className="flex items-center gap-3 text-ivory/80"><Store className="text-brass" size={20} /> Ikeja, Lagos · Delivery &amp; in-store shopping</li>
          </ul>
        </Reveal>
        <Reveal d={0.1}><CustomForm /></Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1F1510] px-5 py-10 text-ivory/70 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Wordmark light />
        <div className="text-sm"><a href={BIZ.facebook} className="underline underline-offset-4 hover:text-ivory">Facebook</a></div>
        <p className="text-xs">© 2026 {BIZ.name}. Website concept by Ife Oluwayelu.</p>
      </div>
    </footer>
  );
}

function Float() {
  return (
    <a href={wa('Hi Vaith Furniture, I found your website.')} aria-label="Chat on WhatsApp" className="fixed right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1c7a4a] text-white shadow-2xl transition hover:scale-105" style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
      <MessageCircle size={26} />
    </a>
  );
}

export default function Site() {
  return (
    <MotionConfig reducedMotion="user">
      <Banner /><Header />
      <main><Hero /><Proof /><Shop /><Pieces /><Craft /><How /><Reviews /><Contact /></main>
      <Footer /><Float />
    </MotionConfig>
  );
}

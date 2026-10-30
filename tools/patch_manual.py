#!/usr/bin/env python3
"""Per-site fixes the generic passes can't do. Run once after deslop 1-3."""
import re, pathlib
def load(n):
    d = next(pathlib.Path('.').glob(n + '-*')); return d, (d / 'site/src/components/Site.tsx').read_text()
def save(d, s): (d / 'site/src/components/Site.tsx').write_text(s)
def rep(s, old, new, label=''):
    if old not in s: print('  MISSING', label or old[:60]); return s
    return s.replace(old, new, 1)
ALL = [f'{i:02d}' for i in range(1, 11)]
for n in ALL:
    d, s = load(n)
    # numbering + icon cards, everywhere
    s = re.sub(r'<span className="[^"]*">0\{i \+ 1\}</span>', '', s)
    s = re.sub(r'<ImagePlus[^>]*/>', '', s)
    s = re.sub(r'<(?:WhatsAppIcon|Phone|Mail)\s+(?:size=\{28\}[^>]*|className="[^"]*"\s+size=\{28\})\s*/>', '', s)
    s = re.sub(r'<span className="grid h-1[24] w-1[24][^"]*"><I size=\{\d+\} /></span>', '', s)
    save(d, s)
# 01
d, s = load('01')
s = re.sub(r'<p className="mt-4 font-display text-3xl text-brass[^"]*">\{s\.n\}</p>', '', s)
s = rep(s, "text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]", "text-[2.4rem] font-medium leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.3rem]", '01 h1')
s = rep(s, "['Furniture that', 'makes your home', 'feel ']", "['Furniture that makes', 'your home feel ']", '01 lines')
s = re.sub(r'\{i === 2 && ', '{i === 1 && ', s)
# proof icons
s = re.sub(r'<I className="hidden shrink-0 text-brass sm:block" size=\{26\} strokeWidth=\{1.5\} />', '', s)
save(d, s)
# 02: proof icons
d, s = load('02')
s = re.sub(r'<p\.I className="[^"]*" size=\{28\} strokeWidth=\{1\.4\} />', '', s)
s = re.sub(r'<p\.I [^>]*/>', '', s)
save(d, s)
# 03: pill out of hero, into visit
d, s = load('03')
s = rep(s, '<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}><OpenBadge /></motion.div>', '', '03 pill')
s = rep(s, '<li className="flex gap-3"><Clock className="shrink-0 text-champ" size={18} /> {BIZ.hours}</li>', '<li className="flex gap-3"><Clock className="shrink-0 text-champ" size={18} /> {BIZ.hours}</li><li><OpenBadge /></li>', '03 visit')
s = rep(s, "text-[3.2rem] font-medium leading-[0.98] sm:text-7xl lg:text-[6rem]", "text-[2.8rem] font-medium leading-[1] sm:text-6xl lg:text-[4.6rem]", '03 h1')
s = rep(s, "mt-6 font-display text-[2.8rem]", "font-display text-[2.8rem]", '03 mt')
save(d, s)
# 04: pill + h1
d, s = load('04')
s = re.sub(r'<motion\.span initial=\{\{ scale: 0\.6[^>]*>.*?</motion\.span>', '', s, flags=re.S)
s = re.sub(r'(<motion\.h1[^>]*className="[^"]*?)text-\[2\.8rem\][^"]*"', r'\1text-[2.3rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.6rem]"', s)
s = s.replace("mt-5 font-display", "font-display") if False else s
save(d, s)
# 05: glow, hero opacity
d, s = load('05')
s = re.sub(r'<div className="absolute inset-6 rounded-full" style=\{\{ background[^}]*\}\} />', '', s)
s = rep(s, ".from('.unbox', { y: 50, opacity: 0, duration: 0.7, stagger: 0.09 }, '-=0.35')", ".from('.unbox', { y: 50, duration: 0.7, stagger: 0.09 }, '-=0.35')", '05 unbox')
s = re.sub(r'<Sparkles size=\{16\} className="shrink-0[^"]*" />', '', s)
save(d, s)
# 06
d, s = load('06')
s = re.sub(r'<span className="relative[^"]*">Episode \{e\.n\}</span>', '', s)
s = s.replace('mt-12 grid gap-6 md:grid-cols-3', 'mt-12 grid gap-6 lg:grid-cols-3')
save(d, s)
# 07
d, s = load('07')
s = rep(s, "text-[3.1rem] leading-[1.02] sm:text-7xl lg:text-[5.6rem]", "text-[2.4rem] leading-[1.05] sm:text-6xl lg:text-[3.6rem]", '07 h1')
s = s.replace("sm:text-6xl\">Moments that leave", "sm:text-5xl\">Moments that leave")
save(d, s)
# 08: flame icons
d, s = load('08')
s = re.sub(r'<Flame[^>]*/>', '', s)
save(d, s)
# 09
d, s = load('09')
s = rep(s, "text-[2.9rem] leading-[1.04] sm:text-6xl lg:text-[4.8rem]", "text-[2.3rem] leading-[1.06] sm:text-5xl lg:text-[3.8rem]", '09 h1')
s = rep(s, "['Making memories,', 'one event', 'at a time.']", "['Making memories,', 'one event at a time.']", '09 lines')
s = s.replace("i === 2 ? 'text-gold' : ''", "''")
save(d, s)
# 10: glow dots, h1
d, s = load('10')
s = re.sub(r'<div className="pointer-events-none absolute inset-0 opacity-\[0\.07\]" style=\{\{[^}]*\}\}[^>]*aria-hidden />', '', s)
s = rep(s, "text-[2.9rem] leading-[1.04] sm:text-6xl lg:text-[4.1rem] xl:text-[4.3rem]", "text-[2.3rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]", '10 h1')
save(d, s)
print('manual patches done')

#!/usr/bin/env python3
"""Pass 4: ring-shadows, tiny text everywhere, quote icons, reduced-motion reveal fix. usage: deslop4.py NN-slug"""
import re, sys, pathlib
base = pathlib.Path(sys.argv[1]) / 'site/src'
site = base / 'components/Site.tsx'; css = base / 'app/globals.css'
s = site.read_text()
s = re.sub(r'(?<![\w:-])ring-\d(?![\w-]) ?', '', s)
s = re.sub(r'(?<![\w:-])ring-(?:ink|onyx|cocoa|char|walnut|plum|navy|em|gold|rose|white|cream|bone|warm|mint|sand|paper|snow|ivory|coral|sun|sky|gold-d)(?:/\d+)?(?![\w-]) ?', '', s)
s = re.sub(r'<Quote\b[^>]*/>', '', s)
s = re.sub(r'text-\[(?:[0-9]|1[0-2])(?:\.\d+)?px\]', 'text-sm', s)
s = re.sub(r'(?<![\w:-])text-xs(?![\w-])', 'text-sm', s)
s = s.replace('sm:text-[13px]', 'sm:text-sm')
s = re.sub(r'(?<![\w:-])text-\[13px\](?![\w-])', 'text-sm', s)
# h2 sizes one step down at sm
s = re.sub(r'(<h2\b[^>]*className=")([^"]*)(")', lambda m: m.group(1) + m.group(2).replace('sm:text-7xl', 'sm:text-6xl').replace('sm:text-6xl', 'sm:text-5xl') + m.group(3), s)
site.write_text(s)
c = css.read_text()
if 'translateY(10' not in c:
    c += '\n@media (prefers-reduced-motion: reduce) {\n  [style*="translateY(10"], [style*="translateY(11"] { transform: none !important; }\n}\n'
css.write_text(c)
print('pass4', sys.argv[1])

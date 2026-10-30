#!/usr/bin/env python3
"""Pass 3: readable running text, measure, flat placeholders, no text-shadow. usage: deslop3.py NN-slug"""
import re, sys, pathlib
base = pathlib.Path(sys.argv[1]) / 'site/src'
site = base / 'components/Site.tsx'; css = base / 'app/globals.css'
s = site.read_text()
def fix_p(m):
    cls = m.group(2)
    cls = re.sub(r'(?<![\w:-])text-\[13px\]', 'text-sm', cls)
    cls = re.sub(r'(?<![\w:-])text-sm\b', 'text-base', cls)
    if 'max-w-' not in cls and 'mx-auto' not in cls:
        cls += ' max-w-prose'
    elif 'text-center' in cls and 'max-w-' not in cls:
        cls += ' max-w-prose'
    return m.group(1) + cls.strip() + m.group(3)
s = re.sub(r'(<(?:motion\.)?p\b[^>]*className=")([^"]*)(")', fix_p, s)
s = re.sub(r'\[text-shadow:[^\]]*\] ?', '', s)
site.write_text(s)
c = css.read_text()
c = re.sub(r'\.ph \{[^}]*\}', '.ph { background: color-mix(in srgb, currentColor 11%, transparent); }', c)
css.write_text(c)
print('pass3', sys.argv[1])

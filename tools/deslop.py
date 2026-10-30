#!/usr/bin/env python3
"""Mechanical slop removal for a site's Site.tsx + globals.css. usage: deslop.py NN-slug"""
import re, sys, pathlib
TOK = '[^\\s"\'`]+'
_sub = re.sub
re.sub = lambda p, *a, **k: _sub(p.replace('@T@', TOK) if isinstance(p, str) else p, *a, **k)
root = pathlib.Path(sys.argv[1]) / 'site' / 'src'
site = root / 'components' / 'Site.tsx'
css = root / 'app' / 'globals.css'
s = site.read_text()

# 0. brand icons
shared = pathlib.Path(__file__).parent / 'shared' / 'BrandIcons.tsx'
(root / 'components' / 'BrandIcons.tsx').write_text(shared.read_text())
s = re.sub(r'<MessageCircle\b', '<WhatsAppIcon', s)
s = re.sub(r'<Instagram\b', '<InstagramIcon', s)
s = re.sub(r'<Facebook\b', '<FacebookIcon', s)
def fix_import(m):
    names = [n.strip() for n in m.group(1).split(',') if n.strip()]
    names = [n for n in names if n not in ('MessageCircle', 'Instagram', 'Facebook')]
    return "import { " + ', '.join(names) + " } from 'lucide-react';"
s = re.sub(r"import \{([^}]*)\} from 'lucide-react';", fix_import, s, count=1)
used = [n for n in ('WhatsAppIcon', 'InstagramIcon', 'FacebookIcon') if '<' + n in s]
s = s.replace("from 'lucide-react';", "from 'lucide-react';\nimport { " + ', '.join(used) + " } from './BrandIcons';", 1)

# 1. eyebrows: any <p>/<motion.p> that is an uppercase+tracking label
eyebrow = re.compile(r'<(motion\.)?p\b[^>]*className="[^"]*\buppercase\b[^"]*"[^>]*>(?:(?!</(?:motion\.)?p>).)*</(?:motion\.)?p>', re.S)
s = eyebrow.sub('', s)
# 2. remaining uppercase / tracking on small things -> sentence case
s = re.sub(r'\buppercase\b ?', '', s)
s = re.sub(r'\btracking-(?:\[[^\]]+\]|widest|wider|wide) ?', '', s)
# 3. shadows (keep none at rest)
s = re.sub(r'\bhover:shadow-@T@ ?', '', s)
s = re.sub(r'\bshadow-(?:\[[^\]]+\]|xl|2xl|lg|md|sm|sm|inner) ?', '', s)
s = re.sub(r'\bshadow ?(?=[\s"])', '', s)
# 4. glass + transition-all
s = re.sub(r'\bbackdrop-blur(?:-\w+)? ?', '', s)
s = s.replace('transition-all', 'transition')
# 5. gradients: photo scrims become flat translucent overlays; other gradients flat
s = re.sub(r'bg-gradient-to-\w+ from-@T@ (?:via-@T@ )?to-transparent', 'bg-black/45', s)
s = re.sub(r'bg-gradient-to-\w+ from-@T@ (?:via-@T@ )?to-@T@', '', s)
s = re.sub(r'bg-gradient-to-\w+ ?', '', s)
s = re.sub(r'\b(?:from|via|to)-[a-z]+(?:-\d)?(?:/\d+)? ?(?=[\s"])', '', s)
# 6. hairlines: directional borders removed; outlined boxes become tone fills
s = re.sub(r'\b(?:sm:|md:|lg:)?(?:first:|last:|odd:|even:)*border-(?:[xytblr]|[xytblr]-2)(?:\s|(?=")) ?', '', s)
s = re.sub(r'\b(?:sm:|md:|lg:)?(?:first:|last:|odd:|even:)*(?:border-(?:ink|onyx|cocoa|char|walnut|plum|navy|em|gold|rose|white|cream|bone|warm|mint|sand)(?:-\w+)?/\d+) ?', '', s)
s = re.sub(r'\bborder-(?:ink|onyx|cocoa|char|walnut|plum|navy|em|gold|rose|white|cream|bone|warm|mint|sand)(?:-\w+)?/\d+ ?', '', s)
s = re.sub(r'\bring-1 ring-@T@ ?', '', s)
# 7. emoji
s = re.sub(r'[\U0001F300-\U0001FAFF⭐✨]', '', s)
# 8. accent-styled words inside headings
def clean_heading(m):
    open_tag, inner, close = m.group(1), m.group(2), m.group(3)
    inner = re.sub(r'<em\b[^>]*>', '<span>', inner); inner = inner.replace('</em>', '</span>')
    inner = re.sub(r'(<(?:span|motion\.span)\b[^>]*className=")([^"]*)(")', lambda k: k.group(1) + re.sub(r'\b(?:italic|text-(?!\[|xs|sm|base|lg|\d?xl|left|center|balance)[a-z]+(?:-[a-z0-9]+)?(?:/\d+)?)\b ?', '', k.group(2)) + k.group(3), inner)
    return open_tag + inner + close
s = re.sub(r'(<h[12]\b[^>]*>)(.*?)(</h[12]>)', clean_heading, s, flags=re.S)
s = re.sub(r'  +', ' ', s)
site.write_text(s)

# css: flat placeholders, no gradients
c = css.read_text()
c = re.sub(r'(background:)[^;]*gradient\([^;]*;', lambda m: m.group(1) + ' var(--ph-bg, rgba(127,127,127,.12));', c)
c = re.sub(r'\.grad-line[^}]*}', '', c)
c = re.sub(r'\.bokeh[^}]*}', '', c)
css.write_text(c)
print('deslopped', sys.argv[1])

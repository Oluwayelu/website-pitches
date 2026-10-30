#!/usr/bin/env python3
"""Pass 2: outlines -> tone fills, minimum text size, mobile heading size. usage: deslop2.py NN-slug"""
import re, sys, pathlib
site = pathlib.Path(sys.argv[1]) / 'site/src/components/Site.tsx'
s = site.read_text()
COLORS = r'(?:ink|onyx|cocoa|char|walnut|plum|navy|em|gold|rose|white|cream|bone|warm|mint|sand|paper|snow|ivory|coral|sun|sky|slate|grey|black|teal)'
def fix_cls(cls: str) -> str:
    has_border = re.search(r'(?<![\w-])border(?:-2)?(?![\w-])', cls) is not None
    cls = re.sub(r'(?<![\w:-])(?:(?:sm|md|lg|xl):)?(?:hover:|focus:)?border(?:-2)?(?![\w\[-])\s*', '', cls)
    cls = re.sub(r'(?<![\w-])(?:(?:sm|md|lg|xl):)?(?:hover:|focus:)?border-' + COLORS + r'(?:-[a-z0-9]+)?(?:/\d+)?(?![\w\[])\s*', lambda m: '' if m.group(0).startswith('hover:') else '', cls)
    cls = re.sub(r'\bborder-dashed\s*', '', cls)
    if has_border and not re.search(r'(?<![\w:-])bg-', cls) and 'ph ' not in cls + ' ':
        cls = cls.strip() + ' bg-current/10'
    # text sizes under 13px
    cls = re.sub(r'\btext-\[(?:[0-9]|1[0-2])(?:\.\d+)?px\]', 'text-[13px]', cls)
    cls = re.sub(r'\bsm:text-xs\b', 'sm:text-[13px]', cls)
    cls = re.sub(r'(?<![\w:-])text-xs\b', 'text-[13px]', cls)
    return cls.strip()
def on_attr(m): return m.group(1) + fix_cls(m.group(2)) + m.group(3)
s = re.sub(r'(className=")([^"]*)(")', on_attr, s)
def on_const(m):
    return m.group(1) + fix_cls(m.group(2)) + m.group(3)
s = re.sub(r"(const btn\w+ = ')([^']*)(')", on_const, s)
# mobile heading sizes
s = re.sub(r'(<h2\b[^>]*className=")([^"]*)(")', lambda m: m.group(1) + re.sub(r'(?<![\w:-])text-4xl\b', 'text-[1.9rem]', m.group(2)) + m.group(3), s)
s = re.sub(r'(<h2\b[^>]*className=")([^"]*)(")', lambda m: m.group(1) + re.sub(r'(?<![\w:-])text-5xl\b', 'text-[2.1rem]', m.group(2)) + m.group(3), s)
site.write_text(s)
print('pass2', sys.argv[1])

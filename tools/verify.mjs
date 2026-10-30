// usage: node tools/verify.mjs <NN-slug>   (serves NN-slug/site/out, screenshots, checks)
import puppeteer from 'puppeteer-core'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const slug = process.argv[2]; const root = path.resolve(slug, 'site/out'); const shots = path.resolve(slug, 'screens'); fs.mkdirSync(shots, { recursive: true });
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.txt': 'text/plain', '.json': 'application/json', '.ico': 'image/x-icon' };
const srv = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html'; const f = path.join(root, p); if (!f.startsWith(root) || !fs.existsSync(f)) { r.statusCode = 404; return r.end('nf'); } r.setHeader('content-type', types[path.extname(f)] || 'application/octet-stream'); fs.createReadStream(f).pipe(r); }).listen(0);
const port = srv.address().port; const url = `http://localhost:${port}/`;
const b = await puppeteer.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
async function scrollAll(page) { await page.evaluate(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += 350) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 140)); } window.scrollTo(0, h); await new Promise(r => setTimeout(r, 1500)); window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 600)); }); }
const report = {};
for (const [name, vp, mobile] of [['mobile', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }, true], ['desktop', { width: 1440, height: 900 }, false]]) {
  const page = await b.newPage(); await page.setViewport(vp);
  const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => m.type() === 'error' && errs.push(m.text())); page.on('requestfailed', r => errs.push('reqfail ' + r.url()));
  await page.goto(url, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1800));
  await page.screenshot({ path: `${shots}/${name}-hero.png` });
  await scrollAll(page); await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: `${shots}/${name}-full.png`, fullPage: true });
  const info = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const over = document.documentElement.scrollWidth > vw + 1;
    const hidden = [...document.querySelectorAll('main *, footer *')].filter(e => { const s = getComputedStyle(e); return parseFloat(s.opacity) < 0.05 && e.textContent.trim().length > 2 && s.visibility !== 'hidden' && !e.closest('[aria-hidden=true]'); }).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 40) + ':' + e.textContent.trim().slice(0, 30));
    const broken = [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src);
    const links = [...document.querySelectorAll('a[href^="https://wa.me"],a[href^="tel:"],a[href^="mailto:"]')].map(a => a.getAttribute('href').split('?')[0]);
    const noAlt = [...document.images].filter(i => !i.hasAttribute('alt')).length;
    return { over, hidden, broken, links: [...new Set(links)], noAlt, h: document.documentElement.scrollHeight, robots: document.querySelector('meta[name=robots]')?.content, title: document.title };
  });
  report[name] = { ...info, errs: [...new Set(errs)].slice(0, 5) }; await page.close();
}
// reduced motion
{ const page = await b.newPage(); await page.setViewport({ width: 390, height: 844 }); await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]); await page.goto(url, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1000)); await scrollAll(page);
  report.reduced = await page.evaluate(() => [...document.querySelectorAll('main *, footer *')].filter(e => { const s = getComputedStyle(e); return parseFloat(s.opacity) < 0.05 && e.textContent.trim().length > 2 && !e.closest('[aria-hidden=true]'); }).slice(0, 8).map(e => e.tagName + ':' + e.textContent.trim().slice(0, 30))); await page.close(); }
console.log(JSON.stringify(report, null, 1)); await b.close(); srv.close();

// Downloads each business's own photos + profile picture into NN-slug/assets/.
// Usage:  node fetch-assets.mjs            (all)
//         node fetch-assets.mjs 03-lilish-beauty-empire
// Needs:  npm i -D playwright@1.48.2 && npx playwright install chromium
import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const manifest = JSON.parse(await fs.readFile(new URL('./assets-manifest.json', import.meta.url), 'utf8'));
const only = process.argv[2];
const slugs = Object.keys(manifest).filter(k => !k.startsWith('_') && (!only || k === only));

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const browser = await puppeteer.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage();
await page.setUserAgent(UA);
await page.setViewport({ width: 1280, height: 900 });

async function ogImage(url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));
    return await page.evaluate(() =>
      document.querySelector('meta[property="og:image"]')?.content || null);
  } catch { return null; }
}

async function save(url, file) {
  try {
    const res = await fetch(url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(30000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 3000) return false;
    await fs.writeFile(file, buf);
    return true;
  } catch { return false; }
}

for (const slug of slugs) {
  const m = manifest[slug];
  const dir = path.join(slug, 'assets');
  await fs.mkdir(dir, { recursive: true });
  const log = [];
  let n = 0;
  const next = (ext = 'jpg') => path.join(dir, `photo-${String(++n).padStart(2, '0')}.${ext}`);

  // Profile picture → logo-avatar.jpg
  if (m.profile) {
    const img = await ogImage(m.profile);
    const ok = img && await save(img, path.join(dir, 'logo-avatar.jpg'));
    log.push(`${ok ? '✓' : '✗'} profile picture  ← ${m.profile}`);
  }
  // Instagram posts (instagram.com/p/CODE/ → og:image is the full post image)
  for (const code of m.instagram_posts || []) {
    const src = `https://www.instagram.com/p/${code}/`;
    let img = await ogImage(src);
    let file = next();
    let ok = img && await save(img, file);
    if (!ok) ok = await save(`https://www.instagram.com/p/${code}/media/?size=l`, file);
    log.push(`${ok ? '✓' : '✗'} ${path.basename(file)}  ← ${src}`);
    if (!ok) n--;
  }
  // Facebook photos (facebook.com/photo/?fbid=ID → og:image)
  for (const id of m.facebook_photo_ids || []) {
    const src = `https://www.facebook.com/photo/?fbid=${id}`;
    const img = await ogImage(src);
    const file = next();
    const ok = img && await save(img, file);
    log.push(`${ok ? '✓' : '✗'} ${path.basename(file)}  ← ${src}`);
    if (!ok) n--;
  }
  // Direct files from their current website / directory listings
  for (const url of m.direct || []) {
    const ext = (url.split('?')[0].split('.').pop() || 'jpg').toLowerCase().replace('jpeg', 'jpg');
    const file = next(['jpg', 'png', 'webp'].includes(ext) ? ext : 'jpg');
    const ok = await save(url, file);
    log.push(`${ok ? '✓' : '✗'} ${path.basename(file)}  ← ${url}`);
    if (!ok) n--;
  }
  await fs.writeFile(path.join(dir, 'SOURCES.md'),
    `# Image sources for ${slug}\nDownloaded ${new Date().toISOString()}\nAll images belong to the business; used only for a private pitch concept.\n\n${log.map(l => '- ' + l).join('\n')}\n`);
  console.log(`\n${slug}: ${n} photos\n  ${log.join('\n  ')}`);
}

await browser.close();
console.log('\nDone. Review each assets/ folder, pick a hero, and delete any off-brand images (e.g. flyers with heavy text).');

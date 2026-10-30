// usage: node tools/prep.mjs <assetsDir> <outDir> name=file[:width] ...
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const [src, out, ...pairs] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
for (const p of pairs) {
  const [name, rest] = p.split('='); const [file, w] = rest.split(':');
  const width = +(w || 1400);
  let q = 78, buf;
  do { buf = await sharp(path.join(src, file)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: q }).toBuffer(); q -= 8; } while (buf.length > 250_000 && q > 30);
  fs.writeFileSync(path.join(out, name + '.webp'), buf);
  const m = await sharp(buf).metadata();
  console.log(name, m.width + 'x' + m.height, Math.round(buf.length / 1024) + 'KB');
}

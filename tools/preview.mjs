// usage: node tools/preview.mjs NN-slug "Business Name" "lighthouse summary" "placeholders note"
import fs from 'node:fs';
const [slug, name, lh = 'not run', ph = 'see src/content.ts'] = process.argv.slice(2);
const brief = fs.readFileSync(`${slug}/BRIEF.md`, 'utf8');
const i = brief.search(/^## Pitch email/m);
const email = i >= 0 ? brief.slice(i).replace(/^## .*\n/, '').trim() : '(see BRIEF.md)';
fs.writeFileSync(`${slug}/site/PREVIEW.md`, `# ${name}: preview & deploy

## Before you send
- Fill \`PITCH_CONTACT\` (WhatsApp + email) in \`src/content.ts\` (currently \`TODO\`), then rebuild.
- Placeholders still waiting on real info: ${ph}
- The site is \`noindex\` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
\`\`\`bash
cd ${slug}/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
\`\`\`
Suggested preview URL: \`https://${slug.replace(/^\d+-/, '')}-preview.vercel.app\`

## Screenshots (for the email)
- Mobile hero: \`${slug}/screens/mobile-hero.png\`
- Desktop hero: \`${slug}/screens/desktop-hero.png\`
- Full pages: \`${slug}/screens/mobile-full.png\`, \`${slug}/screens/desktop-full.png\`

## Lighthouse (mobile)
${lh}

## Pitch email (swap in the link)
${email}
`);

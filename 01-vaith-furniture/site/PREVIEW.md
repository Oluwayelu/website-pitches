# Vaith Furniture: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (set to 09053156229 and oluwayeluifeoluwa@gmail.com), then rebuild.
- Placeholders still waiting on real info: only 1 real photo (Facebook downloads were blocked), so product/craft tiles are dashed 'photo goes here' blocks; product prices (all 'Price on request'), 11 Facebook review texts, showroom address
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 01-vaith-furniture/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://vaith-furniture-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `01-vaith-furniture/screens/mobile-hero.png`
- Desktop hero: `01-vaith-furniture/screens/desktop-hero.png`
- Full pages: `01-vaith-furniture/screens/mobile-full.png`, `01-vaith-furniture/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 88 · Accessibility 100 · Best Practices 100 · SEO 66. SEO is capped by the mandatory noindex tag (is-crawlable fails by design); Performance is limited by simulated-4G LCP (~3.2 s) from Framer Motion hydration.

## Pitch email (swap in the link)
**Subject:** I built a showroom website for your furniture page (take a look)

Hi Faith / Vaith Furniture team,

I've been following your page (the L-shape fabric sofa you posted this week is lovely). With 6,700 followers and 100% recommendations, you clearly have the customers, but anyone who searches "furniture store Ikeja" on Google can't find you, and your pieces disappear down the Facebook feed.

So I designed a concept of what your own website could look like: an online showroom where buyers browse by category and order any piece on WhatsApp in one tap.

👉 Preview: [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a Lagos-based software engineer (6+ years). I can make this live on your own domain within a week, at a price that makes sense for a growing business. Can I send you the details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. If you'd rather I didn't follow up, just reply "no thanks".

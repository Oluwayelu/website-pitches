# Properties in Lekki Lagos: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (currently `TODO`), then rebuild.
- Placeholders still waiting on real info: no listing photos (Facebook blocked; only their badge landed): listing cards and Realtor Comfort photo are placeholders; listing prices ('Price on request'), bio for Comfort, 18 review texts, episode full text (cards link to their Facebook page). Email deliberately not shown on the site (medium confidence).
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 06-properties-in-lekki/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://properties-in-lekki-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `06-properties-in-lekki/screens/mobile-hero.png`
- Desktop hero: `06-properties-in-lekki/screens/desktop-hero.png`
- Full pages: `06-properties-in-lekki/screens/mobile-full.png`, `06-properties-in-lekki/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 99 · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** Your blog still shows 2021, here's a 2026 version

Hello Comfort,

I've been reading your "Episode" posts on Facebook. "We teach before you pay" is a brilliant position, and 18 five-star recommendations show it works. But the website on your page is a Blogspot whose newest post is from February 2021, which undersells the brand you've built.

I designed a concept: your episodes as a proper guides hub (great for Google), next to a clean listings section and one-tap WhatsApp enquiries.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a Lagos software engineer. I can make this live within a week, affordably. Want the details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" and I won't follow up.

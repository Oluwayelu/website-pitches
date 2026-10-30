# Xplore Events: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (currently `TODO`), then rebuild.
- Placeholders still waiting on real info: proposal package tiers and prices ('Ask for prices'; their Proposal Package highlight has the real ones), inclusions per tier. Testimonials are the 3 real ones from their site. Confirm spelling 'Damilola' vs 'Damolola' on their site. Fixes their dead phone link: call goes to 0805 169 9660, WhatsApp +234 817 965 3965.
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 08-xplore-events/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://xplore-events-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `08-xplore-events/screens/mobile-hero.png`
- Desktop hero: `08-xplore-events/screens/desktop-hero.png`
- Full pages: `08-xplore-events/screens/mobile-full.png`, `08-xplore-events/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 83–92 (varies) · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** Quick fix: your website's call button dials a fake number

Hi Xplore Events team,

I visited xploreevents.netlify.app. Lovely setups! But the "call" link dials +234 800 000 0000 and the email link goes to info@xploreevents.com, so some couples who try to reach you never get through.

I designed an upgraded concept: proposal-first, your real testimonials, packages front and centre, and every button going to your actual WhatsApp.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a Lagos software engineer. I can move you to your own domain and launch this within a week, affordably. Interested?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" and I won't follow up.

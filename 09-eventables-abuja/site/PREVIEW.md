# Eventables Limited: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (currently `TODO`), then rebuild.
- Placeholders still waiting on real info: rental item names/photos (placeholders until pulled from @eventables_rentals_page), testimonials, prices. Phone/address/email are from ConnectCiti (medium confidence): confirm that +234 703 864 2085 is on WhatsApp. Profile picture failed to download.
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 09-eventables-abuja/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://eventables-abuja-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `09-eventables-abuja/screens/mobile-hero.png`
- Desktop hero: `09-eventables-abuja/screens/desktop-hero.png`
- Full pages: `09-eventables-abuja/screens/mobile-full.png`, `09-eventables-abuja/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 79–97 (varies run to run) · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** The website in your Instagram bio isn't loading

Hello Eventables team,

I was admiring your naming-ceremony setups and noticed the link in your Instagram bio, www.eventables.com.ng, doesn't load. Anyone who taps it gets an error instead of your work.

I designed a concept to replace it: your styling and planning portfolio, plus a browsable rentals catalogue where clients check availability on WhatsApp.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a software engineer based in Lagos, working remotely with businesses nationwide. I can have this live on your domain within a week. May I send details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" and I won't follow up.

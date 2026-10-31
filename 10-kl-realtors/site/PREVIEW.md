# KL Realtors & Properties: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (set to 09053156229 and oluwayeluifeoluwa@gmail.com), then rebuild.
- Placeholders still waiting on real info: estate photos/flyers, prices, sizes, titles (modal says 'shared on request'), testimonials, office address. CONFIRM the hero portrait is Realtor Yemisi (it is the page's profile picture). Confirm which of +234 812 927 9543 / +234 803 929 1889 is on WhatsApp (the first is used).
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 10-kl-realtors/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://kl-realtors-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `10-kl-realtors/screens/mobile-hero.png`
- Desktop hero: `10-kl-realtors/screens/desktop-hero.png`
- Full pages: `10-kl-realtors/screens/mobile-full.png`, `10-kl-realtors/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 96–97 · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** klrealtors.ng is down. Here's a site built around you, Yemisi

Hello Yemisi,

Congratulations on the 200+ properties sold and the Metro & Castle award. I tried to visit klrealtors.ng and it isn't loading, so buyers who look you up after seeing your Oak Ville and Celebration Parkland posts have nowhere to land.

I designed a concept with you at the centre: your track record, featured estates, and one-tap "Book a site inspection" on WhatsApp.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a Lagos software engineer. I can have this live on your domain within a week, affordably. May I send details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" and I won't follow up.

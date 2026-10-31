# Kids Photostudio: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (set to 09053156229 and oluwayeluifeoluwa@gmail.com), then rebuild.
- Placeholders still waiting on real info: only 2 real photos (Facebook blocked), so most 'set' tiles are placeholders; package contents and prices ('Prices on request'), parent reviews, shop/unit number in the mall, opening hours. Confirm 0913 120 2299 is on WhatsApp (booking form opens it)
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 04-kids-photostudio/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://kids-photostudio-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `04-kids-photostudio/screens/mobile-hero.png`
- Desktop hero: `04-kids-photostudio/screens/desktop-hero.png`
- Full pages: `04-kids-photostudio/screens/mobile-full.png`, `04-kids-photostudio/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 91 · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** A booking website for Kids Photostudio (preview inside)

Hello Kids Photostudio team,

Your birthday sets are beautiful, and parents deserve to see them the moment they find you. Right now bookings go through a Google Form, and there's no website for anyone searching "kids photoshoot Ikeja".

I designed a concept: your sets and finished shots up front, clear shoot types, and booking in three taps (straight to your WhatsApp).

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a Lagos software engineer. I can make this live on your own domain within a week, affordably. Shall I send details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" and I won't contact you again.

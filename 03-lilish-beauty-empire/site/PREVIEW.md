# Lilish Beauty Empire: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (set to 09053156229 and oluwayeluifeoluwa@gmail.com), then rebuild.
- Placeholders still waiting on real info: price list (all 'Price list on request'), reviews, event hall photos and capacity, spa/human-hair product photos, WhatsApp number for prefilled booking (BIZ.waPrefillNumber in src/content.ts; the verified bio link can't carry text, so the booking form copies the message to the clipboard), address needs confirming (ConnectCiti)
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 03-lilish-beauty-empire/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://lilish-beauty-empire-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `03-lilish-beauty-empire/screens/mobile-hero.png`
- Desktop hero: `03-lilish-beauty-empire/screens/desktop-hero.png`
- Full pages: `03-lilish-beauty-empire/screens/mobile-full.png`, `03-lilish-beauty-empire/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 95 · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** Lilish Beauty Empire, all five businesses on one website (preview)

Hello Lilish team,

I love what you're doing in Elechi: hair, spa, human hair, diffusers *and* an event hall! Right now your price list, catalogue and FAQs live in Instagram highlights, so anyone searching "salon in Port Harcourt" on Google never finds you.

I designed a concept website that puts all five sides of Lilish in one place, with WhatsApp booking, your hours, and a live "open now" badge.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a software engineer in Lagos who builds affordable, fast websites for businesses across Nigeria (fully remote). Can I send you the details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" anytime and I won't follow up.

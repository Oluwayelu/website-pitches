# Beauty Box Spa, Nail & Beauty: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (currently `TODO`), then rebuild.
- Placeholders still waiting on real info: no real photos landed (Facebook blocked), so nail gallery, kids' and treatment imagery are 'photo goes here' tiles; prices ('Prices on request'), hours ('By appointment'), 2 Facebook review texts, course details/fees, therapist name. Verify @beautybox.ng before linking Instagram
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 05-beauty-box-spa/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://beauty-box-spa-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `05-beauty-box-spa/screens/mobile-hero.png`
- Desktop hero: `05-beauty-box-spa/screens/desktop-hero.png`
- Full pages: `05-beauty-box-spa/screens/mobile-full.png`, `05-beauty-box-spa/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 95 (varies 80–95 between runs) · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** The website link on your Facebook page is broken

Hello Beauty Box team,

Quick heads-up: the website on your Facebook page (beauty-box-spa-nail-and-beauty.business.site) now shows a "404 error". Google shut those free sites down, so anyone who taps it hits a dead end.

I designed a replacement concept for you: your treatment menu, nail-art gallery, kids' pampering and training, with booking straight to your WhatsApp.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a Lagos-based software engineer. I can have this live on your own domain within a week, at a friendly price. Want the details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" and I won't follow up.

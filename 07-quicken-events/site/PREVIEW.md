# Quicken Events & More Ltd: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (set to 09053156229 and oluwayeluifeoluwa@gmail.com), then rebuild.
- Placeholders still waiting on real info: testimonials (Reviews highlight text), packages/prices (none shown), team (none shown). Confirm which gallery frames are from the Jose & Whitney wedding (captioned generically for now). Confirm +234 816 028 5283 is on WhatsApp (form opens it).
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 07-quicken-events/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://quicken-events-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `07-quicken-events/screens/mobile-hero.png`
- Desktop hero: `07-quicken-events/screens/desktop-hero.png`
- Full pages: `07-quicken-events/screens/mobile-full.png`, `07-quicken-events/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 89–98 (varies run to run) · Accessibility 100 · Best Practices 100 · SEO 66 (capped by the mandatory noindex tag).

## Pitch email (swap in the link)
**Subject:** A website that matches your luxury weddings

Hello Quicken Events team,

Congratulations on the TNNBP23 nomination, and the Jose & Whitney wedding highlights are stunning. One thing is holding the brand back: your website still lives on wixsite.com with the "This website was built on Wix – Create yours today" banner across the top. For a luxury planner, that's the first impression couples get.

I designed a concept that matches the events you produce: editorial portfolio, your award front and centre, and enquiries straight to WhatsApp.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a software engineer in Lagos. I work remotely with businesses across Nigeria and can have this live on your own domain within a week. May I send the details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Reply "no thanks" and I won't follow up.

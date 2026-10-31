# Mkeys Properties Limited: preview & deploy

## Before you send
- Fill `PITCH_CONTACT` (WhatsApp + email) in `src/content.ts` (set to 09053156229 and oluwayeluifeoluwa@gmail.com), then rebuild.
- Placeholders still waiting on real info: the 5-bed Lekki County price (brief says ₦630M, the post image reads N620m, so it shows 'Price on enquiry' until confirmed), client testimonials, agent bio, office address
- The site is `noindex` with a dismissible "Concept preview" banner. Keep it that way.

## Build & deploy
```bash
cd 02-mkeys-properties/site
npm install
npm run build          # static export → out/
npx vercel --prod      # or drag the out/ folder onto https://app.netlify.com/drop
```
Suggested preview URL: `https://mkeys-properties-preview.vercel.app`

## Screenshots (for the email)
- Mobile hero: `02-mkeys-properties/screens/mobile-hero.png`
- Desktop hero: `02-mkeys-properties/screens/desktop-hero.png`
- Full pages: `02-mkeys-properties/screens/mobile-full.png`, `02-mkeys-properties/screens/desktop-full.png`

## Lighthouse (mobile)
Performance 94 · Accessibility 100 · Best Practices 100 · SEO 66. SEO is capped by the mandatory noindex tag (is-crawlable fails by design).

## Pitch email (swap in the link)
**Subject:** Your Lekki listings, searchable (concept site inside)

Hi Amaka,

I came across Mkeys on Instagram. 2,000+ posts and fresh listings almost every day, like the 3-bed terrace in Ajah you posted yesterday. The problem is a buyer can't search that feed by area, budget or bedrooms, and diaspora clients usually want a website before they trust a broker.

So I built a concept: your current listings in a searchable portal, each with a one-tap "Enquire with Amaka" WhatsApp button, plus your RC number and sold track record up front.

👉 [PREVIEW LINK]
[mobile screenshot]

I'm Ife, a Lagos software engineer. I can put this live on your own domain within a week, with an easy way for you to add listings yourself. Can I share the details?

Ife Oluwayelu · [WhatsApp] · [email]
P.S. Not interested? Reply "no thanks" and I won't follow up.

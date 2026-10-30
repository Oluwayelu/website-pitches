# Shared build spec (applies to every site)

## 1. The goal
Each concept site has to look like something a Lagos agency would charge **$10k (≈₦15M+)** for. The owner should open it on their phone and think "that's *my* business, and it looks better than any competitor's." It is a **sales tool**, so the first screen matters more than the tenth.

## 2. Stack
- **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**, `output: 'export'` (static, so it deploys anywhere free).
- **Framer Motion** for restrained motion: fade/slide-in on scroll, image reveal, hover lift. No gimmicks, and respect `prefers-reduced-motion`.
- **next/font** with Google Fonts (each brief suggests a pairing). No system-font fallback look.
- `next/image` with `unoptimized: true` (static export). Convert assets to WebP during build, or ship the JPGs compressed to ≤250 KB each.
- Icons: `lucide-react`. No icon fonts.
- No backend. Forms open **WhatsApp with a prefilled message** (`https://wa.me/234XXXXXXXXXX?text=...`) and offer a `mailto:` fallback.

## 3. Quality bar (what makes it look "10k")
- **Mobile-first.** Most of their customers arrive from Instagram/Facebook on a phone. Design at 390px first, then scale up to 1440px.
- **One strong hero:** a full-bleed real photo (or a 3-image collage), a confident headline in their language, two CTAs (primary: WhatsApp / Book; secondary: View work / Listings).
- **Real photos everywhere.** Use their own images from `assets/`. Never use stock photos of people. Neutral stock textures are OK if needed.
- **Typographic discipline:** at most 2 font families, a clear type scale, generous whitespace, 8-pt spacing.
- **A distinct look per business.** Follow each brief's design direction. Never ship ten copies of one template.
- **Micro-details:** a sticky header that shrinks on scroll, a floating WhatsApp button (bottom-right, safe-area aware), smooth anchor scroll, image lightbox in galleries, `tel:` links that dial, and a Google Maps embed where an address is verified.
- **Performance:** Lighthouse ≥ 95 on mobile for Performance, Accessibility, Best Practices and SEO. Lazy-load below-the-fold images.
- **Accessibility:** alt text on every image, 4.5:1 contrast, visible focus states, semantic landmarks.
- **SEO/local:** `<title>` and meta description with the city name ("… in Ikeja, Lagos"), Open Graph image = hero, and `LocalBusiness` (or the more specific subtype) JSON-LD with only verified fields.
- Naira formatting: `₦115,000,000` or `₦115M`, as each brief says.

## 4. Pitch-preview rules (non-negotiable)
1. Add `<meta name="robots" content="noindex, nofollow">` plus a `robots.txt` disallowing everything. The site uses the business's name and photos without their sign-off, so it must not show up in search.
2. Add a slim, dismissible top banner: **"Concept preview designed for [Business] by Ife Oluwayelu · Like it? Reply to my email or WhatsApp [Ife's number]."** Put Ife's contact in one config constant: `PITCH_CONTACT = { name: 'Ife Oluwayelu', whatsapp: 'TODO', email: 'TODO' }`. Ife fills it in.
3. **Never fabricate** testimonials, prices, awards, team members, years in business or addresses. Use what the brief marks ✅ verified. For anything missing, render a tasteful placeholder block with a dashed outline and a small label like `Your reviews go here`. That reads as an invitation, not a fake.
4. Real reviews/testimonials can be quoted **only** where the brief gives the exact text and source.
5. Every page footer: "© 2026 [Business name]. Website concept by Ife Oluwayelu."

## 5. Standard page structure (single page, anchor-linked; adapt per brief)
1. Hero
2. Proof strip (follower count, reviews, years, award: whatever is verified)
3. Services / Offerings (cards with real images)
4. Featured work / Listings / Gallery (masonry or carousel + lightbox)
5. About / Why us (short, from their own words)
6. How it works / Booking steps (3 steps)
7. Testimonials (real only) or placeholder
8. FAQ (only if the brief provides answers; otherwise skip)
9. Contact: WhatsApp CTA, phone, email, address and map (if verified), hours
10. Footer: socials, credits

## 6. Asset fallback
If `fetch-assets.mjs` can't get an image (Instagram/Facebook sometimes block automated access):
- Ife opens the business's Instagram/Facebook link in a browser, saves 8–12 of the best photos plus the profile picture, and drops them into `NN-slug/assets/` as `hero.jpg`, `gallery-01.jpg` … `gallery-12.jpg`, `logo.jpg`.
- Until then, build with neutral placeholders (blurred gradient blocks in the brand palette), so the layout is finished and real images just slot in.
- **Logo:** most of these businesses have no real vector logo, only a social profile picture. Build a clean **typographic wordmark in SVG** using the brief's fonts and colours. Show their profile picture only where a small round avatar is appropriate. A good wordmark is part of the "wow".

## 7. Deliverables per business
- `NN-slug/site/` (Next.js project) that builds with `npm run build` into `out/`.
- `NN-slug/site/PREVIEW.md` covering how to deploy (`npx vercel --prod`, or drag `out/` into Netlify Drop), the preview URL once deployed, and 2 screenshots (mobile hero, desktop hero) saved to `NN-slug/screens/` with Playwright, for use in the pitch email.
- Suggested free preview domain: `https://<slug>-preview.vercel.app`.

## 8. Using it in the pitch email
The email shows a **screenshot of the mobile hero** (inline image) with a link to the live preview. Each brief has a draft email whose first line says exactly what's wrong with their current setup. Swap the bracketed bits for the preview link once deployed.

# Website Pitches: Top 10 leads (researched 30 Oct 2026)

Ten businesses chosen from the 97-lead list as **most likely to reply**. Every one of them:
- **posted on Instagram or Facebook in the last ~2 months** (they're alive and marketing),
- shows a **verified email or WhatsApp on its own social page**, and
- has a **specific, checkable website problem** you can name in the first line of the email.

Dormant leads I checked and dropped: The Healthy Bakery (last post 2020), ShuGarden (2019), Cheapest Interior Decor (2017), Lekki Event Planners & BB Salon (2023), Events by Eki (2022), Giocee Foods & The Lagos Realtor (pages deleted), Lekki REAL Estate (Instagram gone).

## The ten

| # | Business | City | Audience | Website problem (your hook) | Send to |
|---|---|---|---|---|---|
| 01 | Vaith Furniture | Ikeja, Lagos | 6.7K FB, 100% rec (11) | No website; 6.7K followers can't browse products | nonifaithoooo@gmail.com |
| 02 | Mkeys Properties Ltd | Lekki, Lagos | 2.8K IG, 2,253 posts | No website; listings unsearchable | mkeysproperties@gmail.com |
| 03 | Lilish Beauty Empire | Port Harcourt | 1.8K IG, 1,215 posts | No website; price list stuck in IG highlights | lilish_beautyempire@yahoo.com |
| 04 | Kids Photostudio | Ikeja City Mall | 831 FB | Bookings via a **Google Form** | birthdayphotoshotprops@gmail.com |
| 05 | Beauty Box Spa | Ajao Estate, Lagos | 506 FB | Facebook website link is a **404** (dead business.site) | beautyboxsalon.ng@gmail.com |
| 06 | Properties in Lekki | Lekki, Lagos | 1.1K FB, 100% rec (18) | "Website" is a **Blogspot last updated 2021** | beethoven.samuel@gmail.com (or WhatsApp 0803 829 5185) |
| 07 | Quicken Events & More | Benin City | 5.3K IG, award nominee | Free Wix with **"built on Wix" banner** | quickenevent@gmail.com |
| 08 | Xplore Events | Lagos | 141 IG, 221 posts | Netlify site's **call button dials a fake number** | xploreeventsng@gmail.com |
| 09 | Eventables Ltd | Gwarinpa, Abuja | 5K IG, 772 posts | **eventables.com.ng (bio link) doesn't load** | eventablesenquiries@gmail.com |
| 10 | KL Realtors & Properties | Lekki, Lagos | 962 FB, award-winning | **klrealtors.ng doesn't load** | askrealtoryemisi@gmail.com |

## How to use this folder with Claude Code
1. Open this folder in Claude Code (`cd ~/Projects/website-pitches && claude`). It reads `CLAUDE.md` automatically.
2. First run: *"Install Playwright and run fetch-assets.mjs."* This downloads each business's real photos and profile picture into `NN-slug/assets/`. **Do it in the next few days**, because social media image links rotate. The script re-resolves them from post IDs, but posts can get deleted.
3. Then, one at a time: *"Build 01 following its BRIEF.md and the shared spec."*
4. Deploy each: `cd 01-vaith-furniture/site && npx vercel --prod`, or drag `out/` onto https://app.netlify.com/drop.
5. Paste the preview link and the mobile screenshot into the email draft at the bottom of each brief, then send.

## Before you send
- Fill in `PITCH_CONTACT` (your WhatsApp + email) in each site's config.
- Each preview is set to **noindex** and carries a "Concept preview by Ife" banner. Keep it that way: it uses their photos without permission, so it's for their eyes only.
- Send from your own domain email if you can, one by one, and follow up once on day 4.
- Have a price ready. For "very affordable" in this market, a simple anchor works: one-page site + domain + first year hosting as a fixed package, with a monthly care plan optional.

## What's verified vs. not
Every fact in the briefs is marked ✅ (seen on the business's own page/site on 29–30 Oct 2026) or labelled *medium* (from a directory listing). Briefs list what **not** to invent for each business. Prices, addresses and reviews are only used where verified.

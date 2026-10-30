# Website Pitches: instructions for Claude Code

This folder holds **10 build briefs**. Each one describes a real Nigerian small business that Ife (Ifeoluwa Oluwayelu, a full-stack engineer in Lagos) is pitching a website to. You build a **premium concept website** for each business. Ife deploys it to a private preview link and sends it in a cold email: "here's what your new site could look like."

## How to work

1. Read `SHARED-BUILD-SPEC.md` first. It sets the stack, the quality bar, and the rules every site follows.
2. Run the asset downloader once, from this folder:
   ```bash
   npm i -D playwright@1.48.2 && npx playwright install chromium
   node fetch-assets.mjs            # all businesses
   node fetch-assets.mjs 01-vaith-furniture   # or one
   ```
   It fills each `NN-slug/assets/` folder with the business's own photos and profile image, taken from their Instagram, Facebook and current website. See `assets-manifest.json`. **Instagram and Facebook image links expire, so the script resolves fresh ones from permanent post IDs.** If anything fails, see "Asset fallback" in the spec.
3. Build **one business at a time** when Ife asks, e.g. "build 03". Read `NN-slug/BRIEF.md` and create the site in `NN-slug/site/`.
4. Don't invent facts. Use only what the brief marks as verified. Where something is unknown (a price, a review, an address), use the clearly marked placeholder style from the spec. These sites go to the real business owner, and a made-up review or price will lose the deal.

## Folder map

```
website-pitches/
  CLAUDE.md               ← you are here
  README.md               ← Ife's overview: ranking, how to pitch
  SHARED-BUILD-SPEC.md    ← stack, design bar, rules (read first)
  fetch-assets.mjs        ← downloads real photos/logos
  assets-manifest.json    ← where every image comes from
  01-vaith-furniture/BRIEF.md
  02-mkeys-properties/BRIEF.md
  03-lilish-beauty-empire/BRIEF.md
  04-kids-photostudio/BRIEF.md
  05-beauty-box-spa/BRIEF.md
  06-properties-in-lekki/BRIEF.md
  07-quicken-events/BRIEF.md
  08-xplore-events/BRIEF.md
  09-eventables-abuja/BRIEF.md
  10-kl-realtors/BRIEF.md
```

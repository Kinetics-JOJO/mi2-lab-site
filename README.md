# MI² Lab — Official Website

Molecular Imaging & Intelligence Laboratory (MI² Lab), Department of Health Technology and Informatics, The Hong Kong Polytechnic University, Hong Kong SAR, China.

Stack: React + TypeScript + Vite + Tailwind CSS. Single-page app with English / Traditional Chinese / Korean language switcher.

---

## Repository layout (all content edits happen here)

```
mi2-lab-site/
├── public/assets/          # All images
│   ├── hero/               # Homepage hero slideshow
│   ├── news-recent/        # Recent News images (one folder per event)
│   ├── news/               # Previous News (archive) images
│   ├── people/             # Member portraits
│   ├── selected/           # Selected Publications framework figures
│   ├── resources/          # Resources card images
│   ├── facilities/         # Lab facilities photos
│   └── bottom.jpg          # Footer banner background
└── src/data/               # All text content
    ├── news-recent.json    # Recent News entries
    ├── news-archive.json   # Previous News entries (with images)
    ├── news-more.json      # More News entries (text-only)
    ├── content.ts          # People, publications, patents, resources, hero, footer
    └── i18n.ts             # UI strings in en / zh / ko
```

---

## Common maintenance tasks

### 1. Add a news item

1. Put images in `public/assets/news-recent/<event-name>/` as `img-01.jpg`, `img-02.jpg`, …
   - JPEG, width ≤ 1400 px recommended.
2. Add an entry to `src/data/news-recent.json` (entries are ordered newest first):

```json
{
  "id": "my-event",
  "date": "2026-10",
  "title": { "en": "…", "zh": "…", "ko": "…" },
  "text":  { "en": "…", "zh": "…", "ko": "…" },
  "images": [
    { "src": "assets/news-recent/my-event/img-01.jpg", "portrait": false, "w": 1400, "h": 1050, "contain": false }
  ]
}
```

- `portrait`: `true` for portrait photos (shown with white side margins);
- `contain`: `true` for wide banners / logos / white-background figures (prevents cropping and upscaling);
- `w` / `h`: actual pixel dimensions of the image.

To archive an old news item: move its entry from `news-recent.json` to `news-archive.json` (if it has images) or `news-more.json` (text-only). Keep the image folder in place.

### 2. Edit members

Edit the `PEOPLE` array in `src/data/content.ts`. Portraits go in `public/assets/people/`. The PI card supports an optional `profileUrl` (whole card links to the official profile page).

### 3. Add a publication / patent

- Full list: `ALL_PUBLICATIONS` in `content.ts` — `{ year: 2026, text: 'Authors. Title.', venue: 'Venue' }`, newest first, plain text (no bold).
- Selected cards: `SELECTED_PUBLICATIONS` + figure in `public/assets/selected/` (PNG ≤ 1400 px wide), `href` → arXiv or publisher link.
- Patents: `PATENTS` array, one `{ text: { en, zh, ko } }` per entry, newest first.

### 4. Edit UI text (buttons, headings)

`src/data/i18n.ts` — each key follows `tr('English', '繁體中文', '한국어')`.

---

## Local development

```bash
npm install      # first time
npm run dev      # local preview at http://localhost:5173
npm run build    # build to dist/ — must pass before committing
```

Requires Node.js ≥ 18.

## Deployment

The repo is connected to a static host (Cloudflare Pages or GitHub Pages):

- Build command: `npm run build`
- Output directory: `dist`
- Every push to `main` redeploys the site automatically.

## Collaboration guidelines

- One designated maintainer reviews and merges changes;
- Other members can edit via the GitHub web UI (edit JSON, upload images) — no local setup required;
- Keep original high-resolution photos in the lab's shared drive; commit only compressed web versions.

See [MAINTENANCE-SOP.md](MAINTENANCE-SOP.md) for the step-by-step operating procedure.

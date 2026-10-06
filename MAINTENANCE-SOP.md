# MI² Lab Website — Maintenance SOP

> For designated lab maintainers. **No programming experience required.**
> Stack: React + Vite, hosted on GitHub with automatic deployment — every push to the `main` branch rebuilds and publishes the site within ~1–2 minutes.
> All routine content updates can be done entirely on the **github.com web interface**. Nothing needs to be installed locally.

---

## 0. One-time setup

1. Create a GitHub account (https://github.com → Sign up);
2. Ask the repository owner to add you as a collaborator (repo → Settings → Collaborators);
3. Bookmark the repository and this document.

---

## SOP-1 Publish a news item (most common)

**Step 1 — Prepare images**
- One folder per event; name images `img-01.jpg`, `img-02.jpg`, …
- Requirements: JPEG, width ≤ 1400 px, preferably < 500 KB each (compress phone photos first).

**Step 2 — Upload images**
1. Open the repo → `public/assets/news-recent/` → **Add file → Upload files**;
2. To create a new folder, use **Add file → Create new file** and type `event-name/img-01.jpg` (typing `/` creates the folder; use lowercase English with hyphens, e.g. `miccai-2027`), then upload the real images into that folder via **Upload files**.

**Step 3 — Add the text entry**
1. Open `src/data/news-recent.json` → click the pencil icon (Edit);
2. Insert a new entry at the correct position (entries are ordered by date, newest first):

```json
{
  "id": "miccai-2027",
  "date": "2026-10",
  "title": { "en": "English title", "zh": "繁體標題", "ko": "한국어 제목" },
  "text": { "en": "One-line English summary", "zh": "繁體一句簡介", "ko": "한국어 한 줄 소개" },
  "images": [
    { "src": "assets/news-recent/miccai-2027/img-01.jpg", "portrait": false, "w": 1400, "h": 1050, "contain": false }
  ]
},
```

- `date` format: `YYYY-MM`;
- `portrait: true` for portrait photos; `contain: true` for wide banners / logos / white-background figures;
- `w` / `h`: actual pixel dimensions (on Mac: right-click image → Get Info).

**Step 4 — Commit**
Scroll down → **Commit changes** → **Commit directly to the main branch**. The site updates automatically in ~1–2 minutes.

**Step 5 — Verify**
Open the website and check the card renders correctly. If nothing changes after 5 minutes, see SOP-7 (troubleshooting).

---

## SOP-2 Archive old news (Recent → Previous / More)

- Entry **with** images: cut it from `news-recent.json` into `news-archive.json` (keep newest-first order);
- Entry **without** images: move it into `news-more.json` (text-only list);
- Do NOT delete the image folders in `public/assets/`.

## SOP-3 Edit members

1. Open `src/data/content.ts` → find the `PEOPLE` array;
2. Edit name, role, and `degrees` (one school per line);
3. New portrait: upload to `public/assets/people/` (square crop, ≤ 500 KB) and update the `photo` path;
4. Graduated / departed members: move the entry into the alumni group (position in the array controls grouping — confirm with the maintainer if unsure).

## SOP-4 Add a publication / patent

- All publications: `ALL_PUBLICATIONS` in `content.ts` — `{ year: 2026, text: 'Authors. Title.', venue: 'Journal/Conference' }`, newest first, plain text;
- Selected cards: `SELECTED_PUBLICATIONS` + upload the framework figure to `public/assets/selected/` (PNG, ≤ 1400 px wide); set `href` to the arXiv link;
- Patents: `PATENTS` array — one `{ text: { en, zh, ko } }` per entry, newest first.

## SOP-5 Edit UI text (buttons, headings)

Open `src/data/i18n.ts`, find the key, edit the quoted text following the order `tr('English', '繁體中文', '한국어')`. **Only change the text inside the quotes — never touch key names or commas.**

## SOP-6 Local preview (optional, for technical members)

```bash
git clone <repo-url>
cd mi2-lab-site
npm install
npm run dev      # preview at http://localhost:5173
npm run build    # must pass before committing
```

## SOP-7 Troubleshooting

| Symptom | Action |
|---|---|
| Site unchanged after commit | Wait 2 minutes; check the repo's Actions/Pages deployment status is green |
| Deployment failed (red cross) | Almost always a JSON syntax error: check the last edit for a missing comma/quote; paste the file into jsonlint.com to validate |
| Something broke, want to undo | File page → **History** → find the bad commit → ask the maintainer to Revert it |
| Image not showing | Check the `src` path matches the folder exactly (case-sensitive) and the upload completed |

**When in doubt, ask the maintainer before making changes.**

---

*Last updated: 2026-10-07*

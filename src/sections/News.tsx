import { useEffect, useState } from 'react'
import { MARK } from '../data/content'
import { useLanguage } from '../i18n'
import type { Lang } from '../data/i18n'
import archive from '../data/news-archive.json'
import more from '../data/news-more.json'
import recent from '../data/news-recent.json'
import SectionHeading from '../components/SectionHeading'

interface ArchiveTr {
  title: string
  text: string
}

interface NewsImage {
  src: string
  /** true = portrait shot → letterbox with object-contain on white */
  portrait: boolean
  w?: number
  h?: number
  /** present in news-recent.json; display rule below is derived from portrait + w/h instead */
  contain?: boolean
}

/**
 * How an image fills a window:
 * - portrait: letterbox the whole shot on white (object-contain)
 * - banner (contain flag, or aspect ≥ 1.9 — often small logos): center at
 *   natural pixel size, never upscale (plain object-contain would blow a
 *   300px logo up to the full window and look blurry)
 * - cover: cover-crop from the top
 */
type Fit = 'portrait' | 'banner' | 'cover'

function fitOf(img: NewsImage): Fit {
  if (img.portrait) return 'portrait'
  if (img.contain === true || (!!img.w && !!img.h && img.w / img.h >= 1.9)) return 'banner'
  return 'cover'
}

interface ArchiveEntry {
  date: string
  title: string
  text: string
  images: NewsImage[]
  tr?: Partial<Record<Lang, ArchiveTr>>
}

interface RecentEntry {
  id: string
  /** year-month string (e.g. "2026-09") — rendered via formatYearMonth */
  date: string
  title: Record<Lang, string>
  text: Record<Lang, string>
  images: NewsImage[]
}

const ARCHIVE = archive as ArchiveEntry[]
/** Owner-specified order — rendered exactly as listed, no re-sorting */
const RECENT = recent as RecentEntry[]
/** Image-less legacy items (2015–2020) shown as a plain text list, no modal */
const MORE = more as ArchiveEntry[]

const MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  if (lang === 'zh') return `${y}年${m}月${d}日`
  if (lang === 'ko') return `${y}년 ${m}월 ${d}일`
  return `${MONTHS_EN[m - 1]} ${d}, ${y}`
}

/** "YYYY-MM" → localized year-month; falls back to the raw string if unparseable */
function formatYearMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-').map(Number)
  if (!y || !m || m < 1 || m > 12) return ym
  if (lang === 'zh') return `${y}年${m}月`
  if (lang === 'ko') return `${y}년 ${m}월`
  return `${MONTHS_EN[m - 1]} ${y}`
}

function imgSrc(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`
}

/** portrait / banner → full image letterboxed on white; cover → cover-cropped */
function tileClass(img: NewsImage, extra = ''): string {
  const fit = fitOf(img) === 'cover' ? 'object-cover' : 'object-contain bg-white'
  return `aspect-[4/3] w-full rounded-xl ${fit} ${extra}`
}

/**
 * Banner/logo panel: centers the image on padded white at its natural pixel
 * size — never upscaled beyond img.w, never taller/wider than the window.
 */
function NaturalFitImage({
  img,
  alt,
  className = '',
}: {
  img: NewsImage
  alt: string
  className?: string
}) {
  return (
    <div className={`flex items-center justify-center bg-white ${className}`}>
      <img
        src={imgSrc(img.src)}
        alt={alt}
        loading="lazy"
        style={{
          maxWidth: img.w ? `min(${img.w}px, 100%)` : '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  )
}

/** Brand-gradient panel with a faint orbit mark — used when a news item has no photo. */
function BrandImagePanel({ label }: { label: string }) {
  return (
    <div
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-t-xl bg-brand-gradient"
      role="img"
      aria-label={label}
    >
      <img
        src={MARK}
        alt=""
        aria-hidden="true"
        className="w-1/3 select-none object-contain opacity-25"
        draggable={false}
      />
    </div>
  )
}

/** Unified card view-model after localization */
interface LocalizedCard {
  key: string
  dateLabel: string
  title: string
  body: string
  images: NewsImage[]
}

function localizeArchive(entry: ArchiveEntry, lang: Lang): LocalizedCard {
  const l10n = entry.tr?.[lang] ?? { title: entry.title, text: entry.text }
  return {
    key: `${entry.date}-${entry.title}`,
    dateLabel: formatDate(entry.date, lang),
    title: l10n.title,
    body: l10n.text,
    images: entry.images,
  }
}

function localizeRecent(entry: RecentEntry, lang: Lang): LocalizedCard {
  return {
    key: entry.id,
    dateLabel: formatYearMonth(entry.date, lang),
    title: entry.title[lang] ?? entry.title.en,
    body: entry.text[lang] ?? entry.text.en,
    images: entry.images,
  }
}

const chevronBtn =
  'absolute top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white transition-colors hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white'

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Card image window. Multi-image items get a manual loop carousel
 * (no autoplay); arrows stopPropagation so they don't open the modal.
 */
function CardImage({ images, title }: { images: NewsImage[]; title: string }) {
  const [index, setIndex] = useState(0)
  if (images.length === 0) return <BrandImagePanel label={title} />

  const count = images.length
  const img = images[Math.min(index, count - 1)]

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
      {fitOf(img) === 'banner' ? (
        <NaturalFitImage img={img} alt={title} className="h-full w-full p-4 sm:p-6" />
      ) : (
        <img
          src={imgSrc(img.src)}
          alt={title}
          loading="lazy"
          className={`h-full w-full ${
            fitOf(img) === 'portrait' ? 'bg-white object-contain' : 'object-cover object-top'
          }`}
        />
      )}
      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i - 1 + count) % count)
            }}
            className={`${chevronBtn} left-2`}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i + 1) % count)
            }}
            className={`${chevronBtn} right-2`}
          >
            <Chevron direction="right" />
          </button>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5"
          >
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

function NewsCard({ card, tag, onOpen }: { card: LocalizedCard; tag: string; onOpen: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
    >
      <CardImage images={card.images} title={card.title} />
      <div className="flex flex-1 flex-col p-4">
        <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-brand-navy">
          {card.title}
        </h4>
        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-brand-muted">
          {card.body}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-[11px] font-medium text-brand-blue">{card.dateLabel}</span>
          <span className="rounded-full border border-brand-line px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
            {tag}
          </span>
        </div>
      </div>
      <span aria-hidden="true" className="h-[2px] w-full bg-brand-teal/60" />
    </div>
  )
}

function NewsModal({ card, onClose }: { card: LocalizedCard; onClose: () => void }) {
  const { t } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const [first, ...rest] = card.images

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-hero/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={card.title}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t('news.close')}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg leading-none text-brand-navy shadow-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          ×
        </button>

        {first ? (
          fitOf(first) === 'banner' ? (
            <NaturalFitImage
              img={first}
              alt={card.title}
              className="aspect-[4/3] max-h-[70vh] w-full p-4 sm:aspect-[16/9] sm:p-6"
            />
          ) : (
            <img
              src={imgSrc(first.src)}
              alt={card.title}
              className={
                fitOf(first) === 'portrait'
                  ? 'aspect-[4/3] max-h-[70vh] w-full bg-white object-contain sm:aspect-[16/9]'
                  : 'aspect-[4/3] w-full object-cover object-top sm:aspect-[16/9]'
              }
            />
          )
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-brand-gradient">
            <img
              src={MARK}
              alt=""
              aria-hidden="true"
              className="w-1/4 select-none object-contain opacity-25"
              draggable={false}
            />
          </div>
        )}

        <div className="p-5 sm:p-7">
          <p className="text-xs font-semibold tracking-wide text-brand-blue">{card.dateLabel}</p>
          <h3 className="mt-1.5 text-lg font-bold leading-snug text-brand-navy">{card.title}</h3>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-muted">
            {card.body}
          </p>
          {rest.length > 0 ? (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {rest.map((img, i) =>
                fitOf(img) === 'banner' ? (
                  <NaturalFitImage
                    key={img.src}
                    img={img}
                    alt={`${card.title} — photo ${i + 2}`}
                    className="aspect-[4/3] w-full rounded-xl p-3"
                  />
                ) : (
                  <img
                    key={img.src}
                    src={imgSrc(img.src)}
                    alt={`${card.title} — photo ${i + 2}`}
                    loading="lazy"
                    className={tileClass(img)}
                  />
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function News() {
  const { lang, t } = useLanguage()
  const [selected, setSelected] = useState<LocalizedCard | null>(null)

  const recentCards = RECENT.map((e) => localizeRecent(e, lang))
  const previousCards = ARCHIVE.map((e) => localizeArchive(e, lang))
  const moreItems = MORE.map((e) => {
    const c = localizeArchive(e, lang)
    return { key: c.key, date: e.date, dateLabel: c.dateLabel, title: c.title, body: c.body }
  })

  return (
    <div>
      <SectionHeading title={t('news.title')} />

      {/* Recent news — card grid */}
      <section aria-labelledby="news-recent">
        <h3
          id="news-recent"
          className="border-b border-brand-line pb-3 text-lg font-semibold text-brand-navy"
        >
          {t('news.recent')}
        </h3>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentCards.map((card) => (
            <NewsCard
              key={card.key}
              card={card}
              tag={t('news.tag')}
              onOpen={() => setSelected(card)}
            />
          ))}
        </div>
      </section>

      {/* Previous news — card grid */}
      <section aria-labelledby="news-previous" className="mt-14">
        <h3
          id="news-previous"
          className="border-b border-brand-line pb-3 text-lg font-semibold text-brand-navy"
        >
          {t('news.previous')}
        </h3>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previousCards.map((card) => (
            <NewsCard
              key={card.key}
              card={card}
              tag={t('news.tag')}
              onOpen={() => setSelected(card)}
            />
          ))}
        </div>
      </section>

      {/* More news — plain text list, static (no cards, no modal) */}
      <section aria-labelledby="news-more" className="mt-14">
        <h3
          id="news-more"
          className="border-b border-brand-line pb-3 text-lg font-semibold text-brand-navy"
        >
          {t('news.more')}
        </h3>
        <ul className="mt-4 divide-y divide-brand-line">
          {moreItems.map((item) => (
            <li
              key={item.key}
              className="rounded-md px-2 py-3.5 transition-colors hover:bg-slate-50"
            >
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                <time
                  dateTime={item.date}
                  className="shrink-0 text-[11px] font-medium text-brand-muted sm:w-32"
                >
                  {item.dateLabel}
                </time>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug text-brand-navy">{item.title}</p>
                  <p className="mt-0.5 line-clamp-1 text-xs leading-relaxed text-brand-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {selected ? <NewsModal card={selected} onClose={() => setSelected(null)} /> : null}
    </div>
  )
}

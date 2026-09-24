import { BOTTOM, type TabId } from '../data/content'
import type { UiKey } from '../data/i18n'
import { useLanguage } from '../i18n'

interface BottomBannerProps {
  onSelect: (tab: TabId) => void
}

/** Nav pills overlaid at the banner's center (order = owner-specified) */
const NAV: { tab: TabId; key: UiKey }[] = [
  { tab: 'about', key: 'bottom.about' },
  { tab: 'people', key: 'bottom.people' },
  { tab: 'research', key: 'bottom.research' },
  { tab: 'join', key: 'bottom.join' },
]

/**
 * Bottom of the page, above the footer: a "Back to News" button, then a
 * full-width campus photo banner with a dark gradient veil and centered
 * translucent nav pills (mirrors the sysneuro.org bottom section).
 * All pills reuse the site's tab switching, so scrolling stays consistent.
 */
export default function BottomBanner({ onSelect }: BottomBannerProps) {
  const { t } = useLanguage()

  return (
    <div>
      {/* Back to News — sits right after the tab panel, above the banner */}
      <div className="flex justify-center py-10">
        <button
          type="button"
          onClick={() => onSelect('news')}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          {t('bottom.backToNews')}
          <span aria-hidden="true">›</span>
        </button>
      </div>

      {/* full-width campus aerial with centered nav pills */}
      <section
        aria-label="Quick links"
        className="relative h-64 w-full bg-cover bg-center md:h-80"
        style={{ backgroundImage: `url(${BOTTOM})` }}
      >
        {/* dark veil — lighter at top, deepest at the bottom to meet the navy footer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/75"
        />
        <nav className="relative mx-auto flex h-full w-full max-w-[1152px] flex-wrap content-center items-center justify-center gap-3 px-4 sm:gap-4">
          {NAV.map((item) => (
            <button
              key={item.tab}
              type="button"
              onClick={() => onSelect(item.tab)}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy/55 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-brand-navy/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {t(item.key)}
              <span aria-hidden="true">›</span>
            </button>
          ))}
        </nav>
      </section>
    </div>
  )
}

import { FOOTER_CONTACT, MARK, SCHOOL_LOGOS, TABS, type TabId } from '../data/content'
import { useLanguage } from '../i18n'

interface FooterProps {
  onSelect: (tab: TabId) => void
}

export default function Footer({ onSelect }: FooterProps) {
  const { t } = useLanguage()
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[1152px] px-4 py-12 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
            <img
              src={MARK}
              alt="MI² Lab orbit mark"
              className="h-full w-full object-contain"
              draggable={false}
            />
          </span>
          <p className="text-sm font-semibold">
            MI<sup className="text-[0.65em]">2</sup> Lab · Molecular Imaging &amp; Intelligence
            Laboratory
          </p>
        </div>

        {/* school / faculty / department logos — directly on the navy footer */}
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          {SCHOOL_LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-6 w-auto select-none object-contain opacity-85 transition-opacity hover:opacity-100"
              draggable={false}
            />
          ))}
        </div>

        <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelect(tab.id)}
              className="text-sm text-white/75 transition-colors hover:text-brand-tealSoft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              {t(`tabs.${tab.id}`)}
            </button>
          ))}
        </nav>

        <div className="mt-6 space-y-1.5 border-t border-white/15 pt-6 text-sm text-white/70">
          <p className="max-w-3xl leading-relaxed">{FOOTER_CONTACT}</p>
          <p className="pt-2 text-white/50">© 2026 MI² Lab</p>
        </div>
      </div>
    </footer>
  )
}

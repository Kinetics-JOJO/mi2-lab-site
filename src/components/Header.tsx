import { MARK, SCHOOL_LOGOS } from '../data/content'
import { LANG_LABELS } from '../data/i18n'
import { useLanguage } from '../i18n'

export default function Header() {
  const polyu = SCHOOL_LOGOS[0]
  const { lang, setLang } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] bg-brand-navy text-white shadow-md">
      <div className="mx-auto flex h-full max-w-[1152px] items-center gap-3 px-4 sm:gap-4 sm:px-6">
        {/* PolyU logo directly on the navy header — hidden on very small screens */}
        <img
          src={polyu.src}
          alt={polyu.alt}
          className="hidden h-[26px] w-auto select-none object-contain sm:block"
          draggable={false}
        />
        <span
          aria-hidden="true"
          className="hidden h-8 w-px bg-white/25 sm:block"
        />
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
          <img
            src={MARK}
            alt="MI² Lab orbit mark"
            className="h-full w-full object-contain"
            draggable={false}
          />
        </span>
        <div className="leading-tight">
          <p className="text-lg font-bold tracking-tight">
            MI<sup className="text-[0.65em] font-semibold">2</sup> Lab
          </p>
          <p className="hidden text-[11px] font-medium text-white/70 sm:block">
            Molecular Imaging &amp; Intelligence Laboratory
          </p>
        </div>

        {/* language switcher */}
        <div
          role="group"
          aria-label="Language"
          className="ml-auto flex items-center rounded-full border border-white/25 p-0.5"
        >
          {LANG_LABELS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLang(l.id)}
              aria-pressed={lang === l.id}
              aria-label={l.name}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
                lang === l.id
                  ? 'bg-white text-brand-navy'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {l.short}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

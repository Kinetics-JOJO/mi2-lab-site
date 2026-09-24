import OrbitIcon from '../components/OrbitIcon'
import SectionHeading from '../components/SectionHeading'
import { FACILITIES, FACILITIES_INTRO, INTRO, VALUES } from '../data/content'
import type { Tr } from '../data/i18n'
import { useLanguage } from '../i18n'

const PILLAR_CHIPS: Tr[] = [
  { en: 'AI', zh: 'AI', ko: 'AI' },
  { en: 'Molecular Probes', zh: '分子探針', ko: '분자 프로브' },
  { en: 'Molecular Imaging', zh: '分子影像', ko: '분자 영상' },
]

/** institutional address — kept in English across languages */
const LOCATION_TEXT =
  'Y1101 & Y1104, Lee Shau Kee Building, Department of Health Technology and Informatics, The Hong Kong Polytechnic University, Hung Hom, Kowloon, Hong Kong SAR, China. Tel +852 3400 8654 · Fax +852 2362 4365.'

interface AboutProps {
  onExploreResearch: () => void
}

export default function About({ onExploreResearch }: AboutProps) {
  const { t, tr } = useLanguage()

  return (
    <div>
      <SectionHeading title={t('about.title')} />

      <p className="max-w-3xl text-lg leading-relaxed text-brand-ink">
        {tr(INTRO)} {t('about.lead2')}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {PILLAR_CHIPS.map((chip) => (
          <span
            key={chip.en}
            className="rounded-full border border-brand-teal/40 bg-brand-teal/10 px-4 py-1.5 text-sm font-semibold text-brand-navy"
          >
            {tr(chip)}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={onExploreResearch}
          className="rounded-xl bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          {t('about.learnMore')}
        </button>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        <section aria-labelledby="about-values">
          <h3 id="about-values" className="text-lg font-semibold text-brand-navy">
            {t('about.values')}
          </h3>
          <ul className="mt-4 space-y-4">
            {VALUES.map((v) => (
              <li key={v.title.en} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <OrbitIcon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{tr(v.title)}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-brand-muted">{tr(v.text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="about-location">
          <h3 id="about-location" className="text-lg font-semibold text-brand-navy">
            {t('about.location')}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">{LOCATION_TEXT}</p>
        </section>

        <section aria-labelledby="about-history">
          <h3 id="about-history" className="text-lg font-semibold text-brand-navy">
            {t('about.history')}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            {t('about.historyText')}
          </p>
        </section>
      </div>

      <section aria-labelledby="about-facilities" className="mt-14">
        <h3 id="about-facilities" className="text-lg font-semibold text-brand-navy">
          {t('about.facilities')}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-muted">
          {tr(FACILITIES_INTRO)}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <article
              key={f.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <img
                src={f.photo}
                alt={f.name}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="text-sm font-bold leading-snug text-brand-navy">{f.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                  {tr(f.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

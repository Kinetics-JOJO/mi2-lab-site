import OrbitIcon from '../components/OrbitIcon'
import SectionHeading from '../components/SectionHeading'
import {
  ALL_PUBLICATIONS,
  APPLICATION_AREAS,
  HERITAGE_IMAGES,
  HERITAGE_INTRO,
  HERITAGE_ITEMS,
  INTRO,
  PILLARS,
  SELECTED_PUBLICATIONS,
  TECHNIQUES,
} from '../data/content'
import { useLanguage } from '../i18n'

export default function Research() {
  const { t, tr } = useLanguage()

  return (
    <div>
      <SectionHeading title={t('research.title')} />

      <p className="max-w-3xl text-lg leading-relaxed text-brand-ink">
        {tr(INTRO)} {t('research.spansNote')}
      </p>

      {/* Pillars */}
      <h3 className="mt-12 text-xl font-semibold text-brand-navy">
        {t('research.pillarsHeading')}
      </h3>
      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article key={pillar.index} className="rounded-2xl bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <OrbitIcon size={30} />
              <span className="text-sm font-bold tracking-widest text-brand-teal">
                {pillar.index}
              </span>
            </div>
            <h4 className="mt-4 text-base font-bold text-brand-navy">{tr(pillar.title)}</h4>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              {tr(pillar.description)}
            </p>
          </article>
        ))}
      </div>

      {/* Selected publications */}
      <h3 className="mt-14 text-xl font-semibold text-brand-navy">
        {t('research.selectedHeading')}
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SELECTED_PUBLICATIONS.map((pub) => {
          const cardInner = (
            <>
              <div className="flex h-[180px] w-full items-center justify-center border-b border-brand-line bg-white p-3">
                <img
                  src={pub.image}
                  alt={`Framework diagram — ${pub.title}`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h4 className="text-sm font-semibold leading-snug text-brand-ink">
                  {pub.title}
                </h4>
                <p className="mt-2 text-xs uppercase tracking-wider text-brand-muted">
                  {pub.venueLine}
                </p>
              </div>
            </>
          )
          return pub.href ? (
            <a
              key={pub.title}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              {cardInner}
            </a>
          ) : (
            <article
              key={pub.title}
              className="overflow-hidden rounded-2xl bg-white shadow-card"
            >
              {cardInner}
            </article>
          )
        })}
      </div>

      {/* All publications — one continuous list, newest first (titles/venues stay in English) */}
      <h3 className="mt-14 text-xl font-semibold text-brand-navy">{t('research.allHeading')}</h3>
      <ol className="mt-5 space-y-3">
        {ALL_PUBLICATIONS.map((pub, i) => (
          <li key={pub.text} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-0.5 shrink-0 text-xs font-medium text-brand-muted">
              {i + 1}.
            </span>
            <p className="text-brand-ink">
              {pub.text}{' '}
              <em className="text-brand-muted">
                {pub.venue}, {pub.year}.
              </em>
            </p>
          </li>
        ))}
      </ol>

      {/* Techniques & application areas */}
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <section aria-labelledby="techniques">
          <h3 id="techniques" className="text-xl font-semibold text-brand-navy">
            {t('research.techniques')}
          </h3>
          <ul className="mt-4 space-y-3">
            {TECHNIQUES.map((item) => (
              <li key={item.en} className="flex items-start gap-3">
                <OrbitIcon size={18} className="mt-0.5" />
                <span className="text-sm leading-relaxed text-brand-ink">{tr(item)}</span>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="application-areas">
          <h3 id="application-areas" className="text-xl font-semibold text-brand-navy">
            {t('research.applications')}
          </h3>
          <ul className="mt-4 space-y-3">
            {APPLICATION_AREAS.map((item) => (
              <li key={item.en} className="flex items-start gap-3">
                <OrbitIcon size={18} className="mt-0.5" />
                <span className="text-sm leading-relaxed text-brand-ink">{tr(item)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Research heritage (OIGTM) */}
      <section aria-labelledby="research-heritage" className="mt-16">
        <h3 id="research-heritage" className="text-xl font-semibold text-brand-navy">
          {t('research.heritageHeading')}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-muted">
          {tr(HERITAGE_INTRO)}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {HERITAGE_IMAGES.map((img) => (
            <figure
              key={img.photo}
              className="overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <img
                src={img.photo}
                alt={tr(img.caption)}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-xs text-brand-muted">
                {tr(img.caption)}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {HERITAGE_ITEMS.map((item) => (
            <article
              key={item.title.en}
              className="rounded-2xl border border-brand-line bg-white p-5"
            >
              <h4 className="text-sm font-bold text-brand-navy">{tr(item.title)}</h4>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{tr(item.summary)}</p>
              {item.collaborators ? (
                <p className="mt-3 text-xs leading-relaxed text-brand-muted">
                  {t('research.collaborators')} {item.collaborators}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

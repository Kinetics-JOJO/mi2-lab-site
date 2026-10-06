import SectionHeading from '../components/SectionHeading'
import { FACILITIES, FACILITIES_INTRO, RESOURCES } from '../data/content'
import { useLanguage } from '../i18n'

export default function Resources() {
  const { t, tr } = useLanguage()

  return (
    <div>
      <SectionHeading title={t('resources.title')} subtitle={t('resources.subtitle')} />

      {/* Software — clickable cards */}
      <section aria-labelledby="resources-software">
        <h3 id="resources-software" className="text-lg font-semibold text-brand-navy">
          {t('resources.software')}
        </h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {RESOURCES.map((res) => (
            <a
              key={res.name}
              href={res.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              <img
                src={res.image}
                alt={res.name}
                loading="lazy"
                className="aspect-video w-full object-cover object-top"
              />
              <div className="p-5">
                <h4 className="text-base font-bold text-brand-navy">{res.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {tr(res.description)}
                </p>
                <p className="mt-2 text-xs font-semibold text-brand-blue">
                  {t('resources.visitSite')}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Facilities — lab spaces and instruments (from the legacy lab-facilities page) */}
      <section aria-labelledby="resources-facilities" className="mt-14">
        <h3 id="resources-facilities" className="text-lg font-semibold text-brand-navy">
          {t('resources.facilities')}
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
              {f.tbd ? (
                <div
                  className="flex aspect-[4/3] w-full items-center justify-center bg-slate-100"
                  role="img"
                  aria-label={f.name}
                >
                  <span className="rounded-full bg-slate-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {t('resources.tbd')}
                  </span>
                </div>
              ) : (
                <img
                  src={f.photo}
                  alt={f.name}
                  loading="lazy"
                  className={`aspect-[4/3] w-full ${
                    f.portrait ? 'bg-white object-contain' : 'object-cover'
                  }`}
                />
              )}
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

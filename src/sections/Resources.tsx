import SectionHeading from '../components/SectionHeading'
import { RESOURCES } from '../data/content'
import { useLanguage } from '../i18n'

export default function Resources() {
  const { t, tr } = useLanguage()

  return (
    <div>
      <SectionHeading title={t('resources.title')} subtitle={t('resources.subtitle')} />

      <div className="grid gap-6 md:grid-cols-2">
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
              <h3 className="text-base font-bold text-brand-navy">{res.name}</h3>
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
    </div>
  )
}

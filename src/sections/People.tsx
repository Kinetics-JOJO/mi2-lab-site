import SectionHeading from '../components/SectionHeading'
import {
  ALUMNI_GROUPS,
  DHSC_STUDENTS,
  PHD_STUDENTS,
  POSTDOCS,
  PRINCIPAL_INVESTIGATOR,
  type Person,
} from '../data/content'
import type { UiKey } from '../data/i18n'
import { useLanguage } from '../i18n'

function PersonCard({ person }: { person: Person }) {
  const { t, tr } = useLanguage()
  const linked = !!person.profileUrl
  return (
    <article
      className={`relative flex w-full max-w-[220px] flex-col overflow-hidden rounded-xl bg-white shadow-card ${
        linked ? 'transition-all hover:-translate-y-0.5 hover:shadow-lg' : ''
      }`}
    >
      {/* uniform photo box — same aspect/size for every person */}
      <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-brand-surface">
        <img
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h4 className="text-[13px] font-bold leading-snug text-brand-navy">{person.name}</h4>
        <p className="mt-0.5 text-[11px] leading-relaxed text-brand-muted">{tr(person.role)}</p>
        {person.degrees?.map((d) => (
          <p key={d} className="mt-0.5 text-[11px] leading-relaxed text-brand-muted">
            {d}
          </p>
        ))}

        {linked ? (
          <p className="mt-2 text-[11px] font-semibold text-brand-blue">
            {t('people.viewProfile')}
          </p>
        ) : null}
      </div>

      {/* stretched-link overlay — the whole PI card opens the official profile */}
      {linked ? (
        <a
          href={person.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('people.viewProfile')}
          className="absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        />
      ) : null}
    </article>
  )
}

function PeopleGroup({
  id,
  titleKey,
  people,
}: {
  id: string
  titleKey: UiKey
  people: Person[]
}) {
  const { t } = useLanguage()
  return (
    <section aria-labelledby={id} className="mt-10 first:mt-0">
      <h3 id={id} className="text-lg font-semibold text-brand-navy">
        {t(titleKey)}
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {people.map((p) => (
          <PersonCard key={p.name} person={p} />
        ))}
      </div>
    </section>
  )
}

export default function People() {
  const { t, tr } = useLanguage()

  return (
    <div>
      <SectionHeading title={t('people.title')} />

      <PeopleGroup id="people-pi" titleKey="people.pi" people={PRINCIPAL_INVESTIGATOR} />
      <PeopleGroup id="people-postdoc" titleKey="people.postdoc" people={POSTDOCS} />
      <PeopleGroup id="people-phd" titleKey="people.phd" people={PHD_STUDENTS} />
      <PeopleGroup id="people-dhsc" titleKey="people.dhsc" people={DHSC_STUDENTS} />

      <section aria-labelledby="people-collaborators" className="mt-10">
        <h3 id="people-collaborators" className="text-lg font-semibold text-brand-navy">
          {t('people.collaborators')}
        </h3>
        <p className="mt-2 text-sm text-brand-muted">{t('common.tbc')}</p>
      </section>

      {ALUMNI_GROUPS.map((group) => (
        <section
          key={group.labelKey}
          aria-labelledby={`alumni-${group.labelKey}`}
          className="mt-10"
        >
          <h3 id={`alumni-${group.labelKey}`} className="text-lg font-semibold text-brand-navy">
            {t(group.labelKey)}
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-brand-muted">
            {group.entries.map((e) => (
              <li key={e.name}>
                <span className="font-medium text-brand-ink">{e.name}</span>
                {e.note ? <span> — {e.note}</span> : null}
              </li>
            ))}
          </ul>
          {group.footnote ? (
            <p className="mt-3 text-xs leading-relaxed text-brand-muted">{tr(group.footnote)}</p>
          ) : null}
        </section>
      ))}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { EMAIL, JOIN_SECTIONS } from '../data/content'
import { useLanguage } from '../i18n'

/** Centered contact card: shows the email, copy-to-clipboard. */
function ContactModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (timer.current) clearTimeout(timer.current)
    }
  }, [onClose])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard API unavailable (insecure context) — leave the button as-is */
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t('join.contact')}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t('news.close')}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none text-brand-muted transition-colors hover:bg-brand-surface hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          ×
        </button>

        <h3 className="text-lg font-bold text-brand-navy">{t('join.contact')}</h3>

        <p className="mt-4 select-all break-all rounded-lg bg-brand-surface px-3 py-2.5 text-center font-mono text-sm font-semibold text-brand-navy">
          {EMAIL}
        </p>

        <button
          type="button"
          onClick={copyEmail}
          className={`mt-4 w-full rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
            copied ? 'bg-brand-teal' : 'bg-brand-navy hover:bg-brand-blue'
          }`}
        >
          {copied ? t('join.copied') : t('join.copyEmail')}
        </button>
      </div>
    </div>
  )
}

export default function Join() {
  const { t, tr } = useLanguage()
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div>
      <SectionHeading title={t('join.title')} subtitle={t('join.subtitle')} />

      <div className="grid gap-6 md:grid-cols-3">
        {JOIN_SECTIONS.map((s) => (
          <section
            key={s.title.en}
            aria-labelledby={`join-${s.title.en}`}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-card"
          >
            <h3 id={`join-${s.title.en}`} className="text-base font-bold text-brand-navy">
              {tr(s.title)}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
              {tr(s.text)}
            </p>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="mt-5 inline-block self-start rounded-xl border border-brand-navy px-5 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              {t('join.contact')}
            </button>
          </section>
        ))}
      </div>

      {contactOpen ? <ContactModal onClose={() => setContactOpen(false)} /> : null}
    </div>
  )
}

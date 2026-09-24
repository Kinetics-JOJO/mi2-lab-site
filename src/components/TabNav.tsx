import { TABS, type TabId } from '../data/content'
import { useLanguage } from '../i18n'

interface TabNavProps {
  active: TabId
  onSelect: (tab: TabId) => void
}

export default function TabNav({ active, onSelect }: TabNavProps) {
  const { t } = useLanguage()

  return (
    <nav
      className="sticky top-[72px] z-40 border-b border-brand-line bg-white"
      aria-label="Site sections"
    >
      <div
        role="tablist"
        className="mx-auto flex max-w-[1152px] gap-1 overflow-x-auto px-2 sm:px-6"
      >
        {TABS.map((tab) => {
          const selected = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onSelect(tab.id)}
              className={`relative whitespace-nowrap px-4 py-3.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
                selected
                  ? 'font-semibold text-brand-navy'
                  : 'font-medium text-brand-navy/70 hover:text-brand-blue'
              }`}
            >
              {t(`tabs.${tab.id}`)}
              <span
                aria-hidden="true"
                className={`absolute inset-x-3 bottom-0 h-[3px] rounded-t-full transition-opacity ${
                  selected ? 'bg-brand-teal opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}

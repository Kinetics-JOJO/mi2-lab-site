import { useCallback, useEffect, useState } from 'react'
import BottomBanner from './components/BottomBanner'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import TabNav from './components/TabNav'
import { TAB_IDS, type TabId } from './data/content'
import { LanguageProvider, useLanguage } from './i18n'
import About from './sections/About'
import Join from './sections/Join'
import News from './sections/News'
import People from './sections/People'
import Research from './sections/Research'
import Resources from './sections/Resources'

function tabFromHash(): TabId {
  const hash = window.location.hash.replace('#', '').toLowerCase()
  return (TAB_IDS as string[]).includes(hash) ? (hash as TabId) : 'news'
}

function Site() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabId>(() => tabFromHash())

  // hashchange → tab
  useEffect(() => {
    const onHashChange = () => setActiveTab(tabFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // tab → hash + document title (localized)
  useEffect(() => {
    document.title = `${t(`tabs.${activeTab}`)} · MI² Lab — Molecular Imaging & Intelligence Laboratory`
    if (window.location.hash !== `#${activeTab}`) {
      window.history.replaceState(null, '', `#${activeTab}`)
    }
  }, [activeTab, t])

  const selectTab = useCallback((tab: TabId) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0 })
  }, [])

  const goResearch = useCallback(() => selectTab('research'), [selectTab])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="pt-[72px]">
        <Hero />
        <TabNav active={activeTab} onSelect={selectTab} />

        <main className="mx-auto w-full max-w-[1152px] flex-1 px-4 py-12 sm:px-6 sm:py-16">
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            key={activeTab}
          >
            {activeTab === 'news' && <News />}
            {activeTab === 'about' && <About onExploreResearch={goResearch} />}
            {activeTab === 'people' && <People />}
            {activeTab === 'research' && <Research />}
            {activeTab === 'resources' && <Resources />}
            {activeTab === 'join' && <Join />}
          </div>
        </main>
      </div>

      <BottomBanner onSelect={selectTab} />
      <Footer onSelect={selectTab} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}

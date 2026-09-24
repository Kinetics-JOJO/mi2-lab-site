import { useEffect, useRef, useState } from 'react'
import { HERO_SLIDES, INTRO } from '../data/content'
import { useLanguage } from '../i18n'

const INTERVAL_MS = 5000

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 sm:h-5 sm:w-5"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
    </svg>
  )
}

export default function Hero() {
  const { tr } = useLanguage()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  /** bump to reset the autoplay timer after any manual navigation */
  const [navTick, setNavTick] = useState(0)
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const count = HERO_SLIDES.length

  // autoplay — resets whenever navTick (manual nav) or pause state changes
  useEffect(() => {
    if (paused || reducedMotion.current) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, navTick, count])

  const goTo = (index: number) => {
    setActive(((index % count) + count) % count)
    setNavTick((t) => t + 1)
  }

  return (
    <section className="w-full bg-brand-hero text-white" aria-label="Lab highlights">
      <div
        className="relative mx-auto aspect-[3/1] max-h-[480px] w-full max-w-[1440px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.image}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={tr(slide.title)}
              className="h-full w-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
            {/* bottom gradient scrim for caption readability */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
            />
            {/* caption — bottom-left */}
            <div className="absolute inset-x-0 bottom-0">
              <div className="mx-auto max-w-[1152px] px-4 pb-8 sm:px-6 sm:pb-10">
                <p className="max-w-2xl text-base font-semibold leading-snug text-white drop-shadow-md sm:text-xl lg:text-2xl">
                  {tr(slide.title)}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* prev / next arrows — vertically centered, clear of the caption */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(active - 1)}
          className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-5 sm:h-10 sm:w-10"
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(active + 1)}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:h-10 sm:w-10"
        >
          <Chevron direction="right" />
        </button>

        {/* dot indicators — bottom-right, white for photo backgrounds */}
        <div className="absolute bottom-3.5 right-4 flex gap-2 sm:bottom-4 sm:right-6">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show slide ${i + 1}: ${tr(slide.title)}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                i === active ? 'w-7 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* one-sentence intro below the slideshow, inside the hero band */}
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1152px] px-4 py-6 text-center text-base leading-relaxed text-white/85 sm:px-6 sm:text-lg">
          {tr(INTRO)}
        </p>
      </div>
    </section>
  )
}

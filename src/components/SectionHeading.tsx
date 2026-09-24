import OrbitIcon from './OrbitIcon'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <OrbitIcon size={28} />
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy">{title}</h2>
      </div>
      {subtitle ? <p className="mt-3 max-w-3xl text-brand-muted">{subtitle}</p> : null}
      <div className="mt-4 h-[3px] w-16 rounded-full bg-brand-teal" aria-hidden="true" />
    </div>
  )
}

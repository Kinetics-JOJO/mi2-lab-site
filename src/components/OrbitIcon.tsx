import { MARK } from '../data/content'

interface OrbitIconProps {
  size?: number
  className?: string
  opacity?: number
}

/**
 * The lab's orbit mark — the ONLY icon glyph used anywhere on the site.
 */
export default function OrbitIcon({ size = 20, className = '', opacity }: OrbitIconProps) {
  return (
    <img
      src={MARK}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`inline-block shrink-0 select-none object-contain ${className}`}
      style={{ width: size, height: 'auto', opacity }}
      draggable={false}
    />
  )
}

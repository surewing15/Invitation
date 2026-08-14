import { useMemo, type CSSProperties } from 'react'
import './FallingPetals.css'

type Props = {
  density?: number
}

export function FallingPetals({ density = 16 }: Props) {
  const petals = useMemo(
    () =>
      Array.from({ length: density }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        delay: `${(i % 10) * 0.45}s`,
        duration: `${9 + (i % 7)}s`,
        size: `${10 + (i % 5) * 3}px`,
        drift: `${-30 + (i % 6) * 12}px`,
        opacity: 0.35 + (i % 5) * 0.1,
      })),
    [density]
  )

  return (
    <div className="petals" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={
            {
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              '--drift': p.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

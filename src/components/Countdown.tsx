import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { invitation } from '../data/invitation'
import './Countdown.css'

type Parts = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getParts(target: Date): Parts {
  const diff = Math.max(0, target.getTime() - Date.now())
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

export function Countdown() {
  const [parts, setParts] = useState<Parts>(() => getParts(invitation.date))
  const arrived =
    parts.days + parts.hours + parts.minutes + parts.seconds === 0 &&
    Date.now() >= invitation.date.getTime()

  useEffect(() => {
    const id = window.setInterval(() => setParts(getParts(invitation.date)), 1000)
    return () => window.clearInterval(id)
  }, [])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: parts.days },
    { label: 'Hours', value: parts.hours },
    { label: 'Minutes', value: parts.minutes },
    { label: 'Seconds', value: parts.seconds },
  ]

  return (
    <section className="countdown section">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">{arrived ? 'The day' : 'Counting down'}</span>
          <h2>{arrived ? 'We said I do' : 'Until we say I do'}</h2>
          <p>
            {arrived
              ? 'Thank you for celebrating this day with us.'
              : 'Save the date — we cannot wait to celebrate with you.'}
          </p>
        </div>

        {!arrived && (
          <div className="countdown__grid">
            {units.map((u, i) => (
              <motion.div
                key={u.label}
                className="countdown__cell"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <strong>{String(u.value).padStart(2, '0')}</strong>
                <span>{u.label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

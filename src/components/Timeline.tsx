import { motion } from 'framer-motion'
import { invitation } from '../data/invitation'
import './Timeline.css'

export function Timeline() {
  return (
    <section className="timeline section" id="timeline">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Order of the day</span>
          <h2>The celebration</h2>
          <p>From vows in Tagoloan to dinner at Marco Hotel.</p>
        </div>

        <ol className="timeline__list">
          {invitation.timeline.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <span className="timeline__time">{item.time}</span>
              <div>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

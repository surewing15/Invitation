import { motion } from 'framer-motion'
import { calendarUrl, invitation } from '../data/invitation'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${invitation.heroImage})` }}
        role="img"
        aria-label="Portrait of Shairra and Gregory"
      />
      <div className="hero__veil" />
      <div className="hero__grain" />

      <div className="hero__content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          The wedding of
        </motion.p>

        <motion.h1
          className="hero__brand script"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {invitation.couple}
        </motion.h1>

        <motion.p
          className="hero__full"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.55 }}
        >
          {invitation.brideFull}
          <br />
          {invitation.groomFull}
        </motion.p>

        <motion.p
          className="hero__line"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
        >
          {invitation.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a className="btn btn-primary" href="#rsvp">
            RSVP
          </a>
          <a className="btn btn-ghost" href={calendarUrl()} target="_blank" rel="noreferrer">
            Add to calendar
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Hero } from './Hero'
import { Countdown } from './Countdown'
import { Details } from './Details'
import { Timeline } from './Timeline'
import { Rsvp } from './Rsvp'
import { Footer } from './Footer'
import './Invitation.css'

export function Invitation() {
  return (
    <motion.main
      className="invite"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <Countdown />
      <Details />
      <Timeline />
      <Rsvp />
      <Footer />
    </motion.main>
  )
}

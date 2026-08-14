import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { invitation } from '../data/invitation'
import { FallingPetals } from './FallingPetals'
import { getWeddingAudio, playWeddingMusic } from '../audio'
import './EnvelopeGate.css'

type Props = {
  onFinished: () => void
  onMusicStart?: () => void
}

type Phase = 'closed' | 'open' | 'letter'

export function EnvelopeGate({ onFinished, onMusicStart }: Props) {
  const [phase, setPhase] = useState<Phase>('closed')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    getWeddingAudio()
  }, [])

  function handleClick() {
    if (busy) return

    if (phase === 'closed') {
      setBusy(true)
      setPhase('open')
      playWeddingMusic()
        .then(() => onMusicStart?.())
        .catch(() => {})
      window.setTimeout(() => setBusy(false), 1300)
      return
    }

    if (phase === 'open') {
      setBusy(true)
      setPhase('letter')
      window.setTimeout(() => setBusy(false), 1000)
      return
    }

    onFinished()
  }

  return (
    <motion.section
      className={`gate gate--${phase}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick()
      }}
      aria-label={
        phase === 'closed'
          ? 'Open the invitation'
          : phase === 'open'
            ? 'Reveal invitation card'
            : 'Continue to invitation'
      }
    >
      <div className="gate__linen" aria-hidden />
      {phase !== 'closed' && <FallingPetals density={phase === 'letter' ? 18 : 14} />}

      <div className="gate__scene">
        <div
          className={[
            'envelope',
            phase === 'open' || phase === 'letter' ? 'is-open' : '',
            phase === 'letter' ? 'is-letter' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="envelope__behind" aria-hidden>
            <div className="envelope__shadow" />
            <div className="envelope__flap envelope__flap--open" />
            <div className="envelope__back" />
          </div>

          <div className="envelope__letter">
            <span className="ornament ornament--tl" aria-hidden />
            <span className="ornament ornament--tr" aria-hidden />
            <span className="ornament ornament--bl" aria-hidden />
            <span className="ornament ornament--br" aria-hidden />
            <p className="envelope__invite serif">You are warmly invited</p>
            <p className="envelope__sub serif">to the wedding of</p>
            <h2 className="envelope__names script">{invitation.couple}</h2>
            <p className="envelope__date">{invitation.dateShort}</p>
          </div>

          <div className="envelope__ahead" aria-hidden>
            <div className="envelope__front">
              <span className="envelope__wing envelope__wing--left" />
              <span className="envelope__wing envelope__wing--right" />
              <span className="envelope__base" />
            </div>
            <div className="envelope__flap envelope__flap--closed" />
          </div>
        </div>
      </div>

      <motion.p
        className="gate__hint"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {phase === 'letter' ? 'Click anywhere to proceed' : 'Click anywhere to open'}
      </motion.p>
    </motion.section>
  )
}

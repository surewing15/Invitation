import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { EnvelopeGate } from './components/EnvelopeGate'
import { Invitation } from './components/Invitation'
import { FallingPetals } from './components/FallingPetals'
import { MusicToggle } from './components/MusicToggle'

type Stage = 'envelope' | 'main'

export default function App() {
  const [stage, setStage] = useState<Stage>('envelope')
  const [musicReady, setMusicReady] = useState(false)

  return (
    <>
      {(stage === 'main' || musicReady) && (
        <>
          {stage === 'main' && <FallingPetals density={12} />}
          <MusicToggle />
        </>
      )}

      <AnimatePresence mode="wait">
        {stage === 'envelope' && (
          <EnvelopeGate
            key="envelope"
            onMusicStart={() => setMusicReady(true)}
            onFinished={() => setStage('main')}
          />
        )}
        {stage === 'main' && <Invitation key="main" />}
      </AnimatePresence>
    </>
  )
}

import { useEffect, useState } from 'react'
import { getWeddingAudio } from '../audio'
import './MusicToggle.css'

export function MusicToggle() {
  const [on, setOn] = useState(() => {
    const audio = getWeddingAudio()
    return !audio.paused
  })
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    const audio = getWeddingAudio()
    setOn(!audio.paused)

    const onPlay = () => setOn(true)
    const onPause = () => setOn(false)
    const fail = () => setSupported(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('error', fail)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('error', fail)
    }
  }, [])

  if (!supported) return null

  async function toggle() {
    const audio = getWeddingAudio()
    if (!audio.paused) {
      audio.pause()
      return
    }
    try {
      await audio.play()
    } catch {
      setSupported(false)
    }
  }

  return (
    <button
      type="button"
      className={`music-toggle ${on ? 'is-on' : ''}`}
      onClick={toggle}
      aria-label={on ? 'Pause music' : 'Play music'}
    >
      <span className="music-toggle__bars" aria-hidden>
        <i />
        <i />
        <i />
      </span>
      {on ? 'Pause' : 'Music'}
    </button>
  )
}

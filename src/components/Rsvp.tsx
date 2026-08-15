import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { invitation } from '../data/invitation'
import { submitRsvpToGoogle } from '../data/googleForm'
import './Rsvp.css'

type FormState = {
  name: string
  email: string
  attendance: string
  note: string
}

const initial: FormState = {
  name: '',
  email: '',
  attendance: 'joyfully attending',
  note: '',
}

export function Rsvp() {
  const [form, setForm] = useState<FormState>(initial)
  const [sent, setSent] = useState(() => localStorage.getItem('rsvp-shairra-gregory') === '1')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || submitting) return

    setSubmitting(true)
    setError('')

    try {
      await submitRsvpToGoogle(form)
      localStorage.setItem('rsvp-shairra-gregory', '1')
      localStorage.setItem('rsvp-shairra-gregory-data', JSON.stringify(form))
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again in a moment.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="rsvp section" id="rsvp">
      <div className="section-inner rsvp__inner">
        <div className="section-head">
          <span className="eyebrow">RSVP</span>
          <h2>Will you be there?</h2>
          <p>
            Kindly confirm your attendance by {invitation.rsvpDeadline}.
          </p>
        </div>

        {sent ? (
          <motion.div
            className="rsvp__thanks"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="script">Thank you</p>
            <h3 className="serif">Your response is saved</h3>
            <p>
              We’ll see you on our wedding day — or keep you in our hearts if you can’t make it.
            </p>
          </motion.div>
        ) : (
          <motion.form
            className="rsvp__form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="you@email.com"
              />
            </div>
            <div className="field">
              <label htmlFor="attendance">Attendance</label>
              <select
                id="attendance"
                value={form.attendance}
                onChange={(e) => setForm({ ...form, attendance: e.target.value })}
              >
                <option>joyfully attending</option>
                <option>regretfully decline</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="note">Note (optional)</label>
              <textarea
                id="note"
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Dietary needs, song requests, well wishes…"
              />
            </div>
            {error && <p className="rsvp__error">{error}</p>}
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send RSVP'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { invitation } from '../data/invitation'
import dressCodePalette from '../../Revise/dress code.jpg'
import './Details.css'

export function Details() {
  const venues = [invitation.ceremony, invitation.reception]

  return (
    <section className="details section" id="details">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">When & where</span>
          <h2>Join us in celebration</h2>
          <p>
            Saturday, October 17, 2026 — ceremony in Tagoloan, then reception at
            Marco Hotel.
          </p>
        </div>

        <div className="details__layout">
          {venues.map((v, i) => (
            <motion.article
              key={v.title}
              className="venue"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <p className="venue__kicker">{v.title}</p>
              <h3 className="serif">{v.place}</h3>
              <p className="venue__time">{v.time}</p>
              <p className="venue__address">{v.address}</p>
              {v.image && (
                <div className="venue__photo-wrap">
                  <img className="venue__photo" src={v.image} alt={v.place} />
                </div>
              )}
              <div className="venue__map-wrap">
                <iframe
                  className="venue__map"
                  title={`Map of ${v.place}`}
                  src={v.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a className="btn btn-soft" href={v.mapsUrl} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="details__atmosphere"
          style={{ backgroundImage: `url(${invitation.atmosphereImage})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          role="img"
          aria-label="Shairra and Gregory"
        >
          <div>
            <p className="eyebrow">Dress code</p>
            <p className="details__dress">{invitation.dressCode}</p>
            <img
              className="details__palette"
              src={dressCodePalette}
              alt="Suggested brown shades for formal attire"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

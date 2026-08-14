import { invitation } from '../data/invitation'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <p className="script footer__names">{invitation.couple}</p>
      <p className="footer__date">{invitation.dateLabel}</p>
      <p className="footer__note">With love — we hope you’ll celebrate with us.</p>
    </footer>
  )
}

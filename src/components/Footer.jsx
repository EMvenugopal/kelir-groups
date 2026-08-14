import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo.jsx'
import { company, social } from '../data/company.js'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/journey', label: 'Journey' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo width={140} light />
          <p>{company.mission}</p>
          <div className="footer-social">
            <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer-links"
        >
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </motion.div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>{company.location}</span>
      </div>
    </footer>
  )
}

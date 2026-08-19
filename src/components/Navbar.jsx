import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/journey', label: 'Journey' },
  { to: '/about', label: 'About' },
  { to: '/photographs', label: 'Photographs' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="floating-nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="floating-nav-inner">
        <Link to="/" className="floating-nav-logo" onClick={() => setOpen(false)}>
          <span className="floating-nav-logo-mark">K</span>
          <span className="floating-nav-logo-text">Kelir</span>
        </Link>

        <div className={`floating-nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `floating-nav-link${isActive ? ' active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="floating-nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger${open ? ' open' : ''}`}>
            <span />
            <span />
          </span>
        </button>
      </div>
    </motion.nav>
  )
}

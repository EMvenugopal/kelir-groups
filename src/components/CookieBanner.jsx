import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'kelir_cookie_consent'

function getStoredConsent() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null
  } catch {
    return null
  }
}

export default function CookieBanner() {
  const [consent, setConsent] = useState(getStoredConsent)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  if (consent || !visible) return null

  const acceptAll = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }))
    setConsent({ accepted: true })
  }

  return (
    <AnimatePresence>
      {!consent && (
        <motion.div
          className="cookie-banner"
          role="dialog"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="cookie-banner-text">
            <p>
              We use cookies to improve your experience and analyse our traffic. By clicking
              &ldquo;Accept All&rdquo;, you consent to the use of all cookies.
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button className="btn btn-primary btn-sm" onClick={acceptAll}>Accept All</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
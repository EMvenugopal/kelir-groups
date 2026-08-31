import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Journey from './components/Journey.jsx'
import Photographs from './components/Photographs.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import CookieBanner from './components/CookieBanner.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/photographs" element={<Photographs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

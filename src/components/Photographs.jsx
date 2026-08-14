import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import photos, { categories, years } from '../data/photos.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: (i % 6) * 0.06, ease: 'easeOut' }
  })
}

export default function Photographs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeYear, setActiveYear] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = photos.filter((p) => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const yearMatch = activeYear === 'All' || p.year === activeYear
    return catMatch && yearMatch
  })

  const openLightbox = useCallback((photo) => {
    const idx = filtered.findIndex((p) => p.id === photo.id)
    setLightbox(photo)
    setLightboxIndex(idx)
  }, [filtered])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    setLightboxIndex(-1)
  }, [])

  const navigate = useCallback((dir) => {
    const next = lightboxIndex + dir
    if (next >= 0 && next < filtered.length) {
      setLightbox(filtered[next])
      setLightboxIndex(next)
    }
  }, [lightboxIndex, filtered])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, navigate])

  return (
    <section className="container section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Photographs
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        17+ years of moments — from corporate kitchens to global ventures.
        Each image tells a chapter of the journey.
      </motion.p>

      {/* Dual filters */}
      <div className="gallery-controls">
        <div className="gallery-filter-group">
          <span className="gallery-filter-label">Category</span>
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={activeCategory === c ? 'filter active' : 'filter'}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-filter-group">
          <span className="gallery-filter-label">Year</span>
          <div className="filters">
            {years.map((y) => (
              <button
                key={y}
                className={activeYear === y ? 'filter active' : 'filter'}
                onClick={() => setActiveYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count */}
      <p className="gallery-count">
        Showing <strong>{filtered.length}</strong> of {photos.length} photos
      </p>

      {/* Masonry gallery */}
      <div className="gallery-masonry">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.figure
              layout
              key={p.id}
              className="photo"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.8 }}
              variants={fadeUp}
              custom={i}
              onClick={() => openLightbox(p)}
            >
              <img src={`/${p.src}`} alt={p.title} loading="lazy" />
              <div className="photo-overlay">
                <span className="photo-title">{p.title}</span>
                <div className="photo-meta">
                  <span className="photo-tag">{p.category}</span>
                  <span className="photo-year">{p.year}</span>
                </div>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="muted" style={{ textAlign: 'center', padding: '60px 0' }}>
          No photos match the selected filters.
        </p>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img className="lightbox-img" src={`/${lightbox.src}`} alt={lightbox.title} />
              <h3>{lightbox.title}</h3>
              <p>{lightbox.category} · {lightbox.year}</p>
              <div className="lightbox-nav">
                <button onClick={() => navigate(-1)} disabled={lightboxIndex <= 0}>
                  ← Prev
                </button>
                <button onClick={() => navigate(1)} disabled={lightboxIndex >= filtered.length - 1}>
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

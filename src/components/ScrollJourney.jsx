import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import journey from '../data/journey.js'

function EraChapter({ era }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  return (
    <motion.div ref={ref} className="era-card" style={{ opacity, scale }}>
      <div className="era-year-block">
        <span className="era-year-big">{era.year}</span>
        <span className="era-year-range">{era.yearRange}</span>
      </div>
      <div className="era-tags">
        {era.tags.map((tag) => (
          <span key={tag} className="era-tag">{tag}</span>
        ))}
      </div>
      <h2 className="era-title">{era.title}</h2>
      <p className="era-subtitle">{era.subtitle}</p>
      <p className="era-description">{era.description}</p>
      <ul className="era-highlights">
        {era.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function ProgressRail() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="journey-progress-rail">
      <motion.div
        className="journey-progress-fill"
        style={{ scaleY: scrollYProgress }}
      />
      {journey.map((era, i) => (
        <div
          key={era.id}
          className="journey-progress-dot"
          style={{ top: `${((i + 0.5) / journey.length) * 100}%` }}
        >
          <span className="journey-progress-label">{era.year}</span>
        </div>
      ))}
    </div>
  )
}

export default function ScrollJourney() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section className="scroll-journey" ref={containerRef}>
      {/* Journey hero text */}
      <section className="journey-text-hero">
        <div className="container center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Innovating the Future of Functional Foods &amp; Nutrition
          </motion.h1>
          <motion.p
            className="hero-headline"
            style={{ margin: '16px auto 0', maxWidth: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kelir Group of Companies is an Indian food and nutrition enterprise with over 17 years of experience in the food service industry. We are building next-generation manufacturing facilities for functional foods, beverages, collagen, healthy snacks, and nutrition products. We welcome global technology and business partnerships.
          </motion.p>
        </div>
      </section>

      {/* Sticky header */}
      <div className="journey-header">
        <div className="container">
          <h2 className="section-title">17 Years of Building</h2>
          <p className="section-sub">
            From corporate cafeterias in South India to building the next generation
            of food and nutrition businesses — every chapter shaped the next.
          </p>
        </div>
      </div>

      {/* Progress rail */}
      <ProgressRail />

      {/* Era chapters — 2-column card grid */}
      <div className="journey-chapters">
        <div className="era-grid">
          {journey.map((era) => (
            <EraChapter key={era.id} era={era} />
          ))}
        </div>
      </div>

      {/* Closing */}
      <div className="journey-closing">
        <div className="container center">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            And we're just getting started.
          </motion.h2>
          <motion.p
            className="section-sub"
            style={{ margin: '0 auto 28px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build real products. Build strong companies. Create long-term value.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

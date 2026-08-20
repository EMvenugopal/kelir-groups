import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Counter from './Counter.jsx'
import { company, stats, ventures, whatWeDo } from '../data/company.js'

const brandLogos = [
  { src: '/photos/brandlogos/jugojuice.png', alt: 'JUGO' },
  { src: '/photos/brandlogos/pothigai.png', alt: 'POTHIGHAI' },
  { src: '/photos/brandlogos/twisted desi.jpeg', alt: 'THE TWISTED DESI' },
  { src: '/photos/brandlogos/wild roots.png', alt: 'THE TWISTER EXPRESS' },
  { src: '/photos/brandlogos/ayuraar.png', alt: 'AYURAAR' },
  { src: '/photos/brandlogos/borass.jpeg', alt: 'BORASS' },
  { src: '/photos/brandlogos/oilvika.png', alt: 'OILVIKA' },
  { src: '/photos/brandlogos/arimaariva.png', alt: 'ARIMA ARIVA' },
  { src: '/photos/brandlogos/alilai.jpeg', alt: 'ALILAI' },
  { src: '/photos/brandlogos/clove and coast.png', alt: 'GLOVE & COAST' },
  { src: '/photos/brandlogos/kithnkin.jpeg', alt: 'KITH & KIN' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
  })
}

function OrbitRing({ isHovered }) {
  const radius = 320

  return (
    <div className="orbit-ring-container">
      <div className="orbit-ring-circle" style={{
        position: 'absolute',
        top: `${-radius}px`,
        left: `${-radius}px`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: '50%',
        border: '1px dashed rgba(10, 102, 194, 0.1)',
        pointerEvents: 'none',
      }} />
      {ventures.map((v, i) => {
        const total = ventures.length
        const angle = 180 + (i / total) * 360
        const delay = i * 0.07
        const rad = (angle * Math.PI) / 180
        const x = Math.cos(rad) * radius
        const y = Math.sin(rad) * radius
        const isLeft = x < -10
        const isRight = x > 10
        const isNearTop = y < -200
        const isNearBottom = y > 200
        const labelShift = isNearTop || isNearBottom
          ? ((i % 2 === 0) ? -55 : 55)
          : 0
        const labelDrop = isNearTop || isNearBottom
          ? ((i % 2 === 0) ? -15 : 15)
          : 0
        return (
          <motion.div
            key={v.name}
            className={`orbit-satellite ${isLeft ? 'sat-left' : ''} ${isRight ? 'sat-right' : ''}`}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={isHovered
              ? {
                  opacity: 1,
                  scale: 1,
                  x,
                  y,
                  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                }
              : {
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.3 }
                }
            }
          >
            <div className="satellite-stack" style={{ transform: `translate(${labelShift}px, ${labelDrop}px)` }}>
              <div className="satellite-dot" />
              <span className="satellite-label">{v.name}</span>
              <span className="satellite-sub">{v.period}</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Home() {
  const [hovered, setHovered] = useState(false)

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <motion.div className="hero-text" initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} custom={0}>
              We are entering into Food Processing and Advanced Manufacturing.
            </motion.h1>
            <motion.p className="hero-headline" variants={fadeUp} custom={1}>
              {company.intro}
            </motion.p>
          </motion.div>

          {/* Brand logos masonry grid */}
          <motion.div
            className="hero-side"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hero-brand-masonry">
              {brandLogos.map((logo, i) => (
                <motion.div
                  key={i}
                  className="hero-brand-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </motion.div>
              ))}
            </div>
            <div className="hero-under-card">
              <div className="hero-card-cta">
                <Link to="/journey" className="btn btn-primary">Explore Our Journey</Link>
                <Link to="/about" className="btn btn-ghost">About Us</Link>
              </div>
              <div className="hero-card-stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <strong><Counter to={s.to} suffix={s.suffix} /></strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="what-we-do">
        <div className="container center">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <div className="what-we-do-grid">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item}
                className="what-we-do-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ORBIT — Group of Companies */}
      <section className="orbit-section">
        <div className="container center">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A Decade of Building
          </motion.h2>
          <motion.p
            className="section-sub"
            style={{ margin: '0 auto 50px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            10 ventures across 17+ years — tap or hover the circle to explore.
          </motion.p>

          <div
            className="orbit-display"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setHovered((h) => !h)}
          >
            <div className="orbit-center">
              <div className="orbit-core">
                <span>K</span>
              </div>
              <OrbitRing isHovered={hovered} />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="home-closing">
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">Get In Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

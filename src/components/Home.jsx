import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Counter from './Counter.jsx'
import SEO from './SEO.jsx'
import { company, stats, ventures, whatWeDo } from '../data/company.js'
import BrandModal from './BrandModal.jsx'

const brandLogos = [
  { src: '/photos/brandlogos/jugojuice.webp', alt: 'JUGO', key: 'JUGO' },
  { src: '/photos/brandlogos/pothigai.webp', alt: 'POTHIGHAI', key: 'POTHIGHAI' },
  { src: '/photos/brandlogos/twisted desi.webp', alt: 'THE TWISTED DESI', key: 'THE TWISTED DESI' },
  { src: '/photos/brandlogos/wild roots.webp', alt: 'WILDROOTZ', key: 'WILDROOTZ' },
  { src: '/photos/brandlogos/ayuraar.webp', alt: 'AYURAAR', key: 'AYURAAR' },
  { src: '/photos/brandlogos/borass2.webp', alt: 'BORASS', key: 'BORASS' },
  { src: '/photos/brandlogos/oilvika.webp', alt: 'OILVIKA', key: 'OILVIKA' },
  { src: '/photos/brandlogos/arimaariva.webp', alt: 'ARIMA ARIVA', key: 'ARIMA ARIVA' },
  { src: '/photos/brandlogos/alilai.webp', alt: 'ALILAI', key: 'ALILAI' },
  { src: '/photos/brandlogos/clove and coast.webp', alt: 'CLOVE & COAST', key: 'CLOVE & COAST' },
  { src: '/photos/brandlogos/kithnkin.webp', alt: 'KITH & KIN', key: 'KITH & KIN' },
  { src: '/photos/brandlogos/twisted desi express.webp', alt: 'THE TWISTED DESI EXPRESS', key: 'THE TWISTED DESI EXPRESS' },
  { src: '/photos/brandlogos/yescafe.webp', alt: 'YES CAFÉ', key: 'YES_CAFE' },
  { src: '/photos/brandlogos/yovel.webp', alt: 'YOVEL', key: 'YOVEL' },
  { src: '/photos/brandlogos/zilmil.webp', alt: 'ZILMIL', key: 'ZILMIL' },
  { src: '/photos/brandlogos/kelirgroup.webp', alt: 'KELIR GROUP', key: 'KELIR GROUP' },
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [brandKey, setBrandKey] = useState(null)

  return (
    <div>
      <SEO
        title="Functional Foods & Nutrition"
        description="Kelir Group of Companies is an Indian food and nutrition enterprise building next-generation manufacturing for functional foods, beverages, collagen, healthy snacks, and nutrition products. 17+ years in F&B."
        url="/"
        keywords="Kelir Group, functional foods, nutrition, food manufacturing, collagen, functional beverages, healthy snacks, Tamil Nadu, India"
      />
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <motion.div className="hero-text" initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} custom={0}>
              We are entering Food Processing and Advanced Manufacturing.
            </motion.h1>
            <motion.p className="hero-headline" variants={fadeUp} custom={1}>
              {company.intro}
            </motion.p>
          </motion.div>

          {/* Brand logos masonry grid */}
          <motion.div className="hero-side" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="hero-brand-masonry">
              {brandLogos.map((logo) => (
                <motion.div
                  key={logo.key}
                  className="hero-brand-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  onClick={() => {
                    setBrandKey(logo.key)
                    setIsModalOpen(true)
                  }}
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
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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

      {/* ORBIT */}
      <section className="orbit-section">
        <div className="container center">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            A Decade of Building
          </motion.h2>
          <motion.p className="section-sub" style={{ margin: '0 auto 50px' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            10 ventures across 17+ years — tap or hover the circle to explore.
          </motion.p>

          <div className="orbit-display" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => setHovered((h) => !h)}>
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
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            And we're just getting started.
          </motion.h2>
          <motion.p className="section-sub" style={{ margin: '0 auto 28px' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            Build real products. Build strong companies. Create long-term value.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get In Touch</Link>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {isModalOpen && (
          <BrandModal isOpen={isModalOpen} brandKey={brandKey} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
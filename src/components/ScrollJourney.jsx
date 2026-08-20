import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
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

const roadmapItems = [
  { stage: 'TODAY', items: ['Food Processing', 'Beverage Processing', 'R&D', 'Product Development', 'Functional & Wellness Foods'] },
  { stage: 'NEXT', items: ['Advanced Processing', 'Future Manufacturing', 'Technology Integration', 'Retail', 'Institutional Markets'] },
  { stage: 'LONG TERM', items: ['Indian Markets', 'International Distribution', 'Global Partnerships', 'Technology-Enabled Food Systems'] },
]

const techChain = ['Product Identity', 'Traceability', 'Processing', 'Inventory', 'Distribution', 'Consumer Engagement']

const partnerships = [
  { title: 'CORPORATE PARTNERSHIPS', desc: 'For corporate and institutional organizations interested in food products, employee wellness, food-service opportunities and business collaborations.', cta: 'Corporate Partnership', value: 'Corporate Partnership' },
  { title: 'DISTRIBUTION PARTNERSHIPS', desc: 'For distributors, stockists, institutional distributors, regional partners and retail distribution networks.', cta: 'Become a Distribution Partner', value: 'Distribution Partnership' },
  { title: 'INTERNATIONAL PARTNERSHIPS', desc: 'For international distributors, market-entry partners, importers and businesses interested in bringing KELIR products to international markets.', cta: 'International Partnership', value: 'International Partnership' },
  { title: 'MACHINERY & PROCESSING TECHNOLOGY PARTNERSHIPS', desc: 'For food-processing machinery manufacturers, beverage-processing equipment providers, packaging companies, automation providers, laboratory equipment suppliers and processing technology companies.', cta: 'Technology & Machinery Partnership', value: 'Machinery & Processing Technology' },
  { title: 'R&D & TECHNOLOGY PARTNERSHIPS', desc: 'For food scientists, research institutions, universities, food-tech companies, ingredient technology companies, packaging technology providers and product-development partners.', cta: 'R&D Collaboration', value: 'R&D / Technology Collaboration' },
  { title: 'MANUFACTURING & CO-MANUFACTURING PARTNERSHIPS', desc: 'For organisations supporting pilot production, processing, packaging, contract manufacturing, co-manufacturing and future scale-up.', cta: 'Manufacturing Partnership', value: 'Manufacturing / Co-Manufacturing' },
  { title: 'STRATEGIC & INVESTMENT PARTNERSHIPS', desc: 'We are open to conversations with strategic partners and investors who share our long-term vision for food processing, wellness products, R&D and scalable food businesses.', cta: 'Strategic Partnership', value: 'Strategic Investment' },
]

export default function ScrollJourney() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section className="scroll-journey" ref={containerRef}>
      {/* Hero */}
      <section className="journey-text-hero">
        <div className="container center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            17+ YEARS OF BUILDING
          </motion.h1>
          <motion.p
            className="hero-headline"
            style={{ margin: '16px auto 0', maxWidth: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our journey has evolved through multiple stages of food and business experience.
          </motion.p>
        </div>
      </section>

      {/* Progress rail */}
      <ProgressRail />

      {/* Era chapters */}
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
          <motion.p
            className="section-sub"
            style={{ margin: '0 auto 28px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Every chapter of our journey has contributed experience that now shapes the next chapter of KELIR.
          </motion.p>
        </div>
      </div>

      {/* BRANDS WE OPERATED */}
      <section className="brand-logos">
        <div className="container">
          <h2 className="section-title">BRANDS WE OPERATED</h2>
          <p className="section-sub" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            Our food-service journey includes multiple brands and food businesses that we operated over the years.
          </p>

          <div className="brand-cards-grid">
            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/jugojuice.png" alt="JUGO & YES CAFÉ" />
              </div>
              <h3>JUGO &amp; YES CAFÉ</h3>
              <p className="brand-card-cat">Juice &amp; Beverage / Café &amp; Confectionery</p>
              <p className="brand-card-desc">Australian-inspired juice and beverage blends, café, beverage and confectionery operations within cafeteria environments.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/pothigai.png" alt="POTHIGHAI" />
              </div>
              <h3>POTHIGHAI</h3>
              <p className="brand-card-cat">The Mother's Kitchen Biryani</p>
              <p className="brand-card-desc">Biryani and food-service operations.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/twisted desi.jpeg" alt="THE TWISTED DESI" />
              </div>
              <h3>THE TWISTED DESI</h3>
              <p className="brand-card-cat">Vegetarian International Cuisine</p>
              <p className="brand-card-desc">Vegetarian restaurant operations with an international cuisine focus.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/wild roots.png" alt="THE TWISTER EXPRESS" />
              </div>
              <h3>THE TWISTER EXPRESS</h3>
              <p className="brand-card-cat">Quick-Service Indian Vegetarian Restaurant</p>
              <p className="brand-card-desc">Quick-service Indian vegetarian food operations.</p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR UPCOMING BRANDS */}
      <section className="brand-logos">
        <div className="container">
          <h2 className="section-title">OUR UPCOMING BRANDS</h2>
          <p className="section-sub" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            Building the next generation of food and wellness brands.
          </p>

          <div className="brand-cards-grid">
            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/ayuraar.png" alt="AYURAAR" />
              </div>
              <h3>AYURAAR</h3>
              <p className="brand-card-cat">Wild Rice | Millets | Grains | Masalas</p>
              <p className="brand-card-desc">Ayuraar is being developed as a broader food brand around traditional grains, Indian ingredients and everyday food products.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/borass.jpeg" alt="BORASS" />
              </div>
              <h3>BORASS</h3>
              <p className="brand-card-cat">Natural Sweeteners &amp; Food Products</p>
              <p className="brand-card-desc">Borass explores traditional Indian ingredients and natural sweetener-based food products.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/oilvika.png" alt="OILVIKA" />
              </div>
              <h3>OILVIKA</h3>
              <p className="brand-card-cat">Oils &amp; Functional Oils</p>
              <p className="brand-card-desc">Oilvika is being developed around premium cooking oils and future functional oil products.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/arimaariva.png" alt="ARIMA ARIVA" />
              </div>
              <h3>ARIMA ARIVA</h3>
              <p className="brand-card-cat">Heritage | Nature | Wellness</p>
              <p className="brand-card-desc">Arima Ariva is a developing brand inspired by nature, traditional knowledge and modern wellness.</p>
            </div>
          </div>

          <div className="brand-cards-grid brand-cards-grid--3">
            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/alilai.jpeg" alt="ALILAI" />
              </div>
              <h3>ALILAI</h3>
              <p className="brand-card-cat">Traditional Roots. Modern Products.</p>
              <p className="brand-card-desc">Alilai is a developing food and wellness brand rooted in traditional ingredients and modern product development.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/clove and coast.png" alt="GLOVE & COAST" />
              </div>
              <h3>GLOVE &amp; COAST</h3>
              <p className="brand-card-cat">Non-Veg Pickles</p>
              <p className="brand-card-desc">A focused food brand developed around non-vegetarian pickle products and traditional flavours.</p>
            </div>

            <div className="brand-card-item">
              <div className="brand-card-logo">
                <img src="/photos/brandlogos/kithnkin.jpeg" alt="KITH & KIN" />
              </div>
              <h3>KITH &amp; KIN</h3>
              <p className="brand-card-cat">A New Food Brand in Development</p>
              <p className="brand-card-desc">Kith &amp; Kin is an upcoming food brand being developed as part of the next generation of KELIR products.</p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR FUTURE — BUILDING TOWARDS SCALE */}
      <section className="journey-future">
        <div className="container">
          <h2 className="section-title center">OUR FUTURE</h2>
          <h3 className="center" style={{ color: 'var(--blue)', marginBottom: 40, fontSize: 20 }}>BUILDING TOWARDS SCALE</h3>
          <div className="roadmap-grid">
            {roadmapItems.map((col) => (
              <div key={col.stage} className="roadmap-col">
                <h4 className="roadmap-stage">{col.stage}</h4>
                <ul className="roadmap-list">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY — FOOD + TECHNOLOGY */}
      <section className="journey-tech">
        <div className="container">
          <h2 className="section-title center">TECHNOLOGY</h2>
          <h3 className="center" style={{ color: 'var(--blue)', marginBottom: 40, fontSize: 20 }}>FOOD + TECHNOLOGY</h3>
          <p className="section-sub center" style={{ marginBottom: 32 }}>
            Technology will support the next phase of KELIR across the food value chain.
          </p>
          <div className="tech-chain">
            {techChain.map((step, i) => (
              <div key={step} className="tech-step">
                <span>{step}</span>
                {i < techChain.length - 1 && <span className="tech-arrow">→</span>}
              </div>
            ))}
          </div>
          <div className="tech-details">
            <p>Areas of development may include:</p>
            <ul>
              <li>Digital product identity</li>
              <li>QR-based traceability</li>
              <li>Inventory systems</li>
              <li>Distribution systems</li>
              <li>Order management</li>
              <li>Supply-chain visibility</li>
              <li>Consumer engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS — BUILD WITH KELIR */}
      <section className="journey-partnerships">
        <div className="journey-partnerships-header">
          <h2 className="section-title">PARTNERSHIPS</h2>
          <h3 style={{ color: 'var(--blue)', marginBottom: 16, fontSize: 20 }}>BUILD WITH KELIR</h3>
          <p style={{ color: '#8a9199', fontSize: 18, lineHeight: 1.7, maxWidth: 900, margin: '0 auto' }}>
            We believe the next generation of food businesses will be built through strong partnerships across technology, processing, ingredients, distribution, R&D and markets.
          </p>
        </div>
        <div className="container">
          <div className="partnerships-grid">
            {partnerships.map((p) => (
              <div key={p.title} className="partnership-card">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <Link to={`/contact?partnership=${encodeURIComponent(p.value)}`} className="partnership-cta">{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

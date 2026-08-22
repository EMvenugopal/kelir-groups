import { motion } from 'framer-motion'
import Counter from './Counter.jsx'
import { company, founders, vision, divisions, partnerships, values, stats, expertise, ventures } from '../data/company.js'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
  })
}

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <motion.h4
            initial="hidden" animate="show" variants={fadeUp} custom={0}
            className="about-eyebrow"
          >
            WHAT IS KELIR?
          </motion.h4>
          <motion.h1
            initial="hidden" animate="show" variants={fadeUp} custom={1}
            className="about-title"
          >
            BUILT ON EXPERIENCE. MOVING TOWARDS INNOVATION.
          </motion.h1>
          <motion.p
            className="about-lead"
            initial="hidden" animate="show" variants={fadeUp} custom={2}
          >
            KELIR is an Indian food and wellness business built on more than 17 years of hands-on experience in food and beverage operations.
          </motion.p>
          <motion.p
            className="about-lead"
            initial="hidden" animate="show" variants={fadeUp} custom={3}
          >
            Our journey began with operating cafeterias, food courts, cafés, restaurants and specialised food and beverage counters across corporate and institutional environments.
          </motion.p>
          <motion.p
            className="about-lead"
            initial="hidden" animate="show" variants={fadeUp} custom={4}
          >
            Today, we are taking that experience into a new chapter focused on:
          </motion.p>
          <motion.div
            className="about-focus-grid"
            initial="hidden" animate="show" variants={fadeUp} custom={5}
          >
            {['Food Processing', 'Beverage Processing', 'R&D & Innovation', 'Product Development', 'Functional Foods', 'Wellness Products', 'Food Technology'].map((item) => (
              <span key={item} className="about-focus-item">{item}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDERS */}
      {founders.map((f, i) => (
        <section key={f.name} className="about-founder">
          <div className="container">
            <div className={`founder-grid ${i % 2 !== 0 ? 'founder-grid--reverse' : ''}`}>
              {f.photo ? (
                <motion.div
                  className="founder-photo"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={f.photo} alt={f.name} loading="lazy" />
                </motion.div>
              ) : (
                <motion.div
                  className="founder-photo founder-photo--placeholder"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span>{f.name.split(' ').map(n => n[0]).join('')}</span>
                </motion.div>
              )}
              <motion.div
                className="founder-text"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2>{f.name}</h2>
                <p className="founder-role">{f.role}</p>
                <p>{f.bio}</p>
                <div className="founder-expertise">
                  {f.expertise.map((e) => (
                    <span key={e} className="expertise-pill">{e}</span>
                  ))}
                </div>
                <p>{f.closing}</p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* DIVISIONS */}
      <section className="container section">
        <motion.h2
          className="section-title center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        >
          Business Divisions
        </motion.h2>
        <motion.p
          className="section-sub center"
          style={{ margin: '0 auto 40px' }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
        >
          Building next-generation consumer brands across food, wellness, and nutrition.
        </motion.p>
        <div className="divisions-grid">
          {divisions.map((d, i) => (
            <motion.div
              key={d.name}
              className="division-card card"
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp} custom={i}
            >
              <div className="division-category">{d.category}</div>
              <h3>{d.name}</h3>
              <p className="division-tagline">{d.tagline}</p>
              <p>{d.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-vision" style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="container section about-vision-inner">
          <motion.h2
            className="section-title center"
            style={{ color: '#fff' }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          >
            Vision & Mission
          </motion.h2>

          <div className="vision-grid">
            <motion.div className="vision-card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h3>Our Vision</h3>
              <p>{vision.ourVision}</p>
            </motion.div>
            <motion.div className="vision-card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h3>Our Mission</h3>
              <p>{vision.ourMission}</p>
            </motion.div>
            <motion.div className="vision-card vision-card--wide" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={2}>
              <h3>Business Vision</h3>
              <p>{vision.businessVision}</p>
              <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{vision.businessVisionDetail}</p>
            </motion.div>
            <motion.div className="vision-card vision-card--wide" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={3}>
              <h3>Business Mission</h3>
              <p>KELIR will focus on:</p>
              <div className="vision-mission-list">
                {vision.businessMission.map((item) => (
                  <span key={item} className="era-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.h3
            className="section-sub center"
            style={{ color: '#fff', marginTop: 60, marginBottom: 30 }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          >
            Our Vision 2026 — 2029
          </motion.h3>
          <div className="roadmap">
            {vision.roadmap.map((yr, i) => (
              <motion.div
                key={yr.year}
                className="roadmap-year"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <h4>{yr.year}</h4>
                <ul>
                  {yr.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container section">
        <motion.h2
          className="section-title center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        >
          Our Values
        </motion.h2>
        <motion.p
          className="section-sub center"
          style={{ margin: '0 auto 40px' }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
        >
          Six principles that guide every venture.
        </motion.p>
        <div className="values-grid">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="value card"
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              whileHover={{ y: -6 }}
            >
              <div className="value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp} custom={i}
            >
              <strong><Counter to={s.to} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="container section center">
        <motion.h2
          className="section-title"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        >
          Expertise
        </motion.h2>
        <motion.p
          className="section-sub"
          style={{ margin: '0 auto 32px' }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
        >
          17+ years across food operations, manufacturing, and brand building.
        </motion.p>
        <motion.div
          className="expertise-grid"
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp} custom={2}
        >
          {expertise.map((e) => (
            <span key={e} className="expertise-pill">{e}</span>
          ))}
        </motion.div>
      </section>

      {/* PARTNERSHIPS — SUN/PLANET LAYOUT */}
      <section className="partnerships-sun-section">
        <div className="container">
          <div className="partnerships-radial">
            <div className="partnerships-orbit" />
            <div className="partnerships-sun">
              <h2>Global Partnerships</h2>
              <p>We are actively seeking partnerships with:</p>
            </div>
            {partnerships.partners.map((p, i) => (
              <motion.div
                key={p.type}
                className="partnership-planet"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h4>{p.type}</h4>
                <p>{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURES TIMELINE */}
      <section className="container section">
        <motion.h2
          className="section-title center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        >
          Track Record
        </motion.h2>
        <motion.p
          className="section-sub center"
          style={{ margin: '0 auto 40px' }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
        >
          10 ventures built across 17+ years — from corporate cafeterias to consumer brands.
        </motion.p>
        <div className="divisions-grid divisions-grid--2">
          {ventures.map((v, i) => (
            <motion.div
              key={v.name}
              className="division-card card"
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp} custom={i}
            >
              <div className="division-category">{v.type}</div>
              <h3>{v.name}</h3>
              <p className="division-tagline">{v.role} · {v.period}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import Counter from './Counter.jsx'
import { company, vision, divisions, partnerships, values, stats, expertise, ventures } from '../data/company.js'

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
          <motion.span className="pill" initial="hidden" animate="show" variants={fadeUp} custom={0}>
            About {company.name}
          </motion.span>
          <motion.h1
            initial="hidden" animate="show" variants={fadeUp} custom={1}
            className="about-title"
          >
            We are entering food processing and advanced manufacturing.
          </motion.h1>
          <motion.p
            className="about-lead"
            initial="hidden" animate="show" variants={fadeUp} custom={2}
          >
            {company.intro}
          </motion.p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-founder">
        <div className="container">
          <div className="founder-grid">
            <motion.div
              className="founder-photo"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/photos/kr2.png" alt={company.founder} loading="lazy" />
            </motion.div>
            <motion.div
              className="founder-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2>{company.founder}</h2>
              <p className="founder-role">{company.founderRole}</p>
              <p>{company.founderBio}</p>
              <p>
                He believes most real progress is not driven by noise, headlines,
                or short-term trends — but by disciplined execution, strong systems,
                and long-term thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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

      {/* VISION ROADMAP */}
      <section className="scroll-journey" style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="container section" style={{ padding: '80px 32px' }}>
          <motion.h2
            className="section-title"
            style={{ color: '#fff' }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          >
            {vision.title}
          </motion.h2>
          <motion.p
            className="section-sub"
            style={{ color: '#8a9199' }}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            {vision.subtitle}
          </motion.p>
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
          What We Believe
        </motion.h2>
        <motion.p
          className="section-sub center"
          style={{ margin: '0 auto 40px' }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
        >
          Four principles that shape every venture.
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

      {/* PARTNERSHIPS */}
      <section className="container section">
        <motion.h2
          className="section-title center"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        >
          {partnerships.title}
        </motion.h2>
        <motion.p
          className="section-sub center"
          style={{ margin: '0 auto 40px' }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
        >
          {partnerships.subtitle}
        </motion.p>
        <div className="partnerships-grid">
          {partnerships.partners.map((p, i) => (
            <motion.div
              key={p.type}
              className="partnership-card card"
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp} custom={i}
            >
              <h4>{p.type}</h4>
              <p>{p.description}</p>
            </motion.div>
          ))}
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
        <div className="divisions-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
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

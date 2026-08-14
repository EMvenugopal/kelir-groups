import { motion } from 'framer-motion'
import { company, social } from '../data/company.js'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
  })
}

export default function Contact() {
  return (
    <section className="contact-section contact-full">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial="hidden" animate="show"
          >
            <motion.span className="pill" variants={fadeUp} custom={0}>
              Get In Touch
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1}>
              Let's build businesses that last.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2}>
              Whether it's a partnership, a distribution opportunity, or a conversation
              about the future of functional foods — we'd love to hear from you.
            </motion.p>
            <motion.div className="contact-details" variants={fadeUp} custom={3}>
              <div className="contact-detail">
                <div className="contact-detail-icon">✉</div>
                <span>{social.email || 'email@kelirgroup.com'}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">◎</div>
                <span>{company.location}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">in</div>
                <a href={social.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial="hidden" animate="show"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div className="form-group" variants={fadeUp} custom={0}>
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={1}>
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={2}>
              <label>Company</label>
              <input type="text" placeholder="Your company" />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={3}>
              <label>Message</label>
              <textarea placeholder="Tell us about your inquiry..." />
            </motion.div>
            <motion.div variants={fadeUp} custom={4}>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

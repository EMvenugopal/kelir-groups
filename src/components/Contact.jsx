import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
  })
}

const partnershipTypes = [
  'Corporate Partnership',
  'Distribution Partnership',
  'International Partnership',
  'Machinery & Processing Technology',
  'R&D / Technology Collaboration',
  'Manufacturing / Co-Manufacturing',
  'Strategic Investment',
  'Product Development',
  'General Enquiry',
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [partnershipType, setPartnershipType] = useState('')

  useEffect(() => {
    const p = searchParams.get('partnership')
    if (p) setPartnershipType(p)
  }, [searchParams])

  return (
    <section className="contact-section contact-full">
      <div className="container">
        <div className="contact-grid">

          <motion.div
            className="contact-info"
            initial="hidden" animate="show"
          >
            <motion.h2 variants={fadeUp} custom={0}>
              LET'S BUILD THE NEXT CHAPTER OF FOOD
            </motion.h2>
            <motion.p variants={fadeUp} custom={1}>
              Whether you are a corporate partner, distributor, international market partner,
              technology provider, machinery manufacturer, research institution, manufacturing
              partner or strategic investor, we would like to hear from you.
            </motion.p>
            <motion.h3 variants={fadeUp} custom={2} className="contact-info-heading">
              HOW CAN WE WORK TOGETHER?
            </motion.h3>
            <motion.ul variants={fadeUp} custom={3} className="contact-partnership-list">
              <li>Corporate Partnership</li>
              <li>Distribution Partnership</li>
              <li>International Partnership</li>
              <li>Machinery &amp; Processing Technology</li>
              <li>R&amp;D / Technology Collaboration</li>
              <li>Manufacturing / Co-Manufacturing</li>
              <li>Strategic Investment</li>
              <li>Product Development</li>
              <li>General Enquiry</li>
            </motion.ul>

            <motion.div className="contact-details" variants={fadeUp} custom={4}>
              <h3 className="contact-info-heading">CONTACT INFORMATION</h3>
              <div className="contact-detail">
                <strong>KELIR</strong>
              </div>
              <div className="contact-detail">
                <span>Hosur Region</span>
              </div>
              <div className="contact-detail">
                <span>Krishnagiri District, Tamil Nadu, India</span>
              </div>
              <div className="contact-detail">
                <span>Website: <a href="https://www.kelirgroups.com" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>www.kelirgroups.com</a></span>
              </div>
              <div className="contact-detail">
                <span>Email: contact@kelirgroup.com</span>
              </div>
              <div className="contact-detail">
                <span>Phone: [Official phone number to be added]</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial="hidden" animate="show"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div className="form-group" variants={fadeUp} custom={0}>
              <label>Name*</label>
              <input type="text" placeholder="Your name" required />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={1}>
              <label>Company Name*</label>
              <input type="text" placeholder="Company name" required />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={2}>
              <label>Designation</label>
              <input type="text" placeholder="Your designation" />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={3}>
              <label>Country*</label>
              <input type="text" placeholder="Country" required />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={4}>
              <label>Phone Number</label>
              <input type="tel" placeholder="Phone number" />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={5}>
              <label>Email Address*</label>
              <input type="email" placeholder="your@email.com" required />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={6}>
              <label>Partnership Type*</label>
              <select required value={partnershipType} onChange={(e) => setPartnershipType(e.target.value)}>
                <option value="" disabled>Select partnership type</option>
                {partnershipTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={7}>
              <label>Product / Business Category</label>
              <input type="text" placeholder="Product or business category" />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={8}>
              <label>Message*</label>
              <textarea placeholder="Tell us about your inquiry..." required />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp} custom={9}>
              <label>Upload Company Profile / Proposal / Product Catalogue</label>
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
            </motion.div>
            <motion.div variants={fadeUp} custom={10}>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                SUBMIT ENQUIRY
              </button>
            </motion.div>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
